export default defineNuxtConfig({
  extends: ['@nextorders/ui', '@nextorders/core'],
  runtimeConfig: {
    public: {
      channelId: 'web-app',
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  compatibilityDate: '2025-02-20',
})
