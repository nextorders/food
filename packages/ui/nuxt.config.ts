import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

function resolvePath(path: string) {
  const currentDir = dirname(fileURLToPath(import.meta.url))

  return join(currentDir, path)
}

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuxt-zod-i18n', // must be before i18n
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  experimental: {
    typedPages: true,
  },
  zodI18n: {
    localeCodesMapping: {
      'en-GB': 'en',
      'en-US': 'en',
      'ru-RU': 'ru',
      // 'ka-GE': 'ka',
    },
  },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'en',
    vueI18n: resolvePath('./i18n/vue-i18n.options.ts'),
    experimental: {
      autoImportTranslationFunctions: true,
    },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json', emoji: '🇺🇸' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json', emoji: '🇷🇺' },
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
    storageKey: 'next-orders-color-mode',
  },
  icon: {
    customCollections: [
      { prefix: 'next-orders', dir: resolvePath('./app/assets/icons') },
    ],
    clientBundle: {
      scan: {
        globInclude: ['app/**/*.{vue,ts}'],
        globExclude: ['node_modules', 'dist', 'build', 'coverage', 'test', 'tests', '.*'],
      },
    },
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
})
