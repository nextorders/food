export default defineNuxtConfig({
  extends: ['@nextorders/core'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        erasableSyntaxOnly: true,
      },
    },
  },
  compatibilityDate: '2025-11-20',
})
