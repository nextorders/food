import { playwright } from '@vitest/browser-playwright'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        test: {
          include: [
            '**/test/unit/**/*.{test,spec}.ts',
            '**/test/**/*.unit.{test,spec}.ts',
          ],
          name: 'unit',
          environment: 'node',
        },
      },
      {
        extends: true,
        test: {
          include: [
            '**/test/browser/**/*.{test,spec}.ts',
            '**/test/**/*.browser.{test,spec}.ts',
          ],
          name: 'browser',
          browser: {
            provider: playwright(),
            enabled: true,
            headless: true,
            instances: [
              { browser: 'chromium' },
            ],
          },
        },
      },
    ],
    coverage: {
      exclude: [
        '**/{nitro,release,nuxt,app,drizzle}.config.*',
        '**/{vue-i18n}.options.*',
        ...coverageConfigDefaults.exclude,
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    testTimeout: 10000,
  },
})
