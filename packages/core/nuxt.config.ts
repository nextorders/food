export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    'nuxt-auth-utils',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    apiUrl: '',
    apiToken: '',
  },
  i18n: {
    strategy: 'no_prefix',
  },
  compatibilityDate: '2025-11-28',
})
