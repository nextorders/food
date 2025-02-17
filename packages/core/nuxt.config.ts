import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', 'nuxt-auth-utils', '@vueuse/nuxt'],
  routeRules: {
    '/api/file/**': { prerender: false },
  },
  runtimeConfig: {
    channelId: 'burger',
    locale: 'en',
    productsDirectory: '/products',
    s3: {
      bucket: '',
      region: '',
      endpoint: '',
      accessKeyId: '',
      secretAccessKey: '',
    },
  },
  nitro: {
    preset: fileURLToPath(new URL('./server/preset.ts', import.meta.url)),
    experimental: {
      tasks: true,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['sharp'],
      },
    },
  },
  i18n: {
    strategy: 'no_prefix',
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
