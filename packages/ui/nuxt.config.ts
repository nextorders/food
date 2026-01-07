import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

function resolvePath(path: string) {
  const currentDir = dirname(fileURLToPath(import.meta.url))

  return join(currentDir, path)
}

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  experimental: {
    typedPages: true,
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      { code: 'de', language: 'de-DE', name: 'Deutsch' },
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'ka', language: 'ka-GE', name: 'ქართული' },
      { code: 'ru', language: 'ru-RU', name: 'Русский' },
      { code: 'zh_cn', language: 'zh-CN', name: '中文' },
    ],
  },
  css: [resolvePath('./app/assets/css/main.css')],
  ui: {
    colorMode: true,
    fonts: true,
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Lora',
        provider: 'google',
      },
      {
        name: 'Noto Sans',
        provider: 'google',
      },
    ],
  },
  colorMode: {
    storageKey: 'nextorders-color-mode',
  },
  icon: {
    clientBundle: {
      scan: {
        globInclude: ['app/**/*.{vue,ts}'],
        globExclude: ['node_modules', 'dist', 'build', 'coverage', 'test', 'tests', '.*'],
      },
    },
  },
  compatibilityDate: '2024-11-01',
})
