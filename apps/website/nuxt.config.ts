export default defineNuxtConfig({
  extends: '@next-orders/ui',
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
    },
  },
  css: ['~/assets/css/styles.css'],
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
    ],
  },
  modules: [
    'nuxt-auth-utils',
  ],
  compatibilityDate: '2024-08-18',
})
