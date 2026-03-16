import process from 'node:process'
import { defineConfig, devices } from '@playwright/test'

const CI = !!process.env.CI
const ESSENCE_PORT = 3703
const SELECTOR_PORT = 3702

export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  workers: CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: `http://localhost:${SELECTOR_PORT}`,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: [
    {
      command: `pnpm nuxt dev --port ${ESSENCE_PORT} --cwd apps/essence`,
      port: ESSENCE_PORT,
      timeout: 120_000,
      reuseExistingServer: !CI,
      cwd: '../..',
    },
    {
      command: `pnpm nuxt dev --port ${SELECTOR_PORT} --cwd apps/web-app-selector`,
      port: SELECTOR_PORT,
      timeout: 120_000,
      reuseExistingServer: !CI,
      cwd: '../..',
      env: {
        NUXT_API_URL: `http://localhost:${ESSENCE_PORT}/api/storefront/gateway`,
        NUXT_API_TOKEN: 'test-token',
      },
    },
  ],
})
