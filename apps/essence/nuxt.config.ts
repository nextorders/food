export default defineNuxtConfig({
  extends: ['@nextorders/ui'],
  modules: ['@pinia/nuxt', 'nuxt-auth-utils'],
  runtimeConfig: {
    s3: {
      bucket: '',
      region: '',
      endpoint: '',
      accessKeyId: '',
      secretAccessKey: '',
    },
    productsDirectory: '/products',
    public: {
      mediaUrl: '',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    componentInspector: false,
  },
  css: ['~/assets/css/styles.css'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
    ],
    strategy: 'no_prefix',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        erasableSyntaxOnly: true,
      },
    },
  },
  compatibilityDate: '2025-02-20',
})
