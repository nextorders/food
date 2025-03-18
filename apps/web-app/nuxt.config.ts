export default defineNuxtConfig({
  extends: ['@nextorders/core', '@nextorders/ui'],
  modules: ['@pinia/nuxt', 'nuxt-tiptap-editor'],
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    componentInspector: false,
  },
  css: ['~/assets/css/styles.css'],
  runtimeConfig: {
    channelId: 'web-app',
    public: {
      mediaUrl: '',
      projectUrl: 'https://github.com/nextorders/food',
    },
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
      // { code: 'ka', language: 'ka-GE', name: 'ქართული', file: 'ka-GE.json' },
    ],
    strategy: 'no_prefix',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  tiptap: {
    prefix: 'Tiptap',
  },
  compatibilityDate: '2025-02-20',
})
