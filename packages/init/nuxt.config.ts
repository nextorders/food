import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

function resolvePath(path: string) {
  const currentDir = dirname(fileURLToPath(import.meta.url))

  return join(currentDir, path)
}

export default defineNuxtConfig({
  extends: ['@next-orders/core', '@next-orders/ui'],
  css: [resolvePath('./app/assets/css/styles.css')],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
    ],
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-02-10',
})
