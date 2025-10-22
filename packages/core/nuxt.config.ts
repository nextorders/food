export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', 'nuxt-auth-utils', '@vueuse/nuxt'],
  runtimeConfig: {
    locale: 'en',
    productsDirectory: '/products',
    s3: {
      bucket: '',
      region: '',
      endpoint: '',
      accessKeyId: '',
      secretAccessKey: '',
    },
    redisUrl: '',
    externalApiToken: '',
    public: {
      mediaUrl: '',
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
  compatibilityDate: '2025-02-10',
})
