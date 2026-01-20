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
      reporter: ['text', 'lcov', 'html'],
      include: ['**/packages/**/*.ts'],
      exclude: [
        '**/{nitro,release,nuxt,app,i18n,drizzle}.config.*',
        '**/.nuxt/**',
        '**/*.{get,post,patch}.ts',
        ...coverageConfigDefaults.exclude,
      ],
      thresholds: {
        statements: 50,
        branches: 50,
        functions: 50,
        lines: 50,
      },
    },
    testTimeout: 10000,
  },
})
