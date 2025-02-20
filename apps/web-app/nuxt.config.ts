export default defineNuxtConfig({
  extends: ['@next-orders/core', '@next-orders/ui'],
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    componentInspector: false,
  },
  css: ['~/assets/css/styles.css'],
  runtimeConfig: {
    channelId: 'burger',
    public: {
      mediaUrl: '',
      projectUrl: 'https://github.com/next-orders/food',
      locale: 'en',
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
  routeRules: {
    // '/': { swr: true },
    // '/catalog/**': { swr: true },
  },
  compatibilityDate: '2025-02-20',
})
