import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '@next-orders/ui',
  future: {
    compatibilityVersion: 4,
  },
  vite: {
    optimizeDeps: {
      exclude: ['vee-validate'],
    },
    build: {
      rollupOptions: {
        external: ['sharp'],
      },
    },
  },
  devtools: {
    enabled: true,
    componentInspector: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: 4200,
  },
  shadcn: {
    prefix: 'Ui',
    componentDir: './app/components/ui',
  },
  css: ['~/assets/css/styles.css'],
  runtimeConfig: {
    nitro: {
      envPrefix: 'APP_',
    },
    channelId: 'burger',
    storageProductsDirectory: 'products',
    public: {
      projectUrl: 'https://github.com/next-orders/food',
      locale: 'en',
    },
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
      { code: 'ka', language: 'ka-GE', name: 'ქართული', file: 'ka-GE.json' },
    ],
    strategy: 'no_prefix',
  },
  routeRules: {
    '/': { swr: true },
    '/catalog/**': { swr: true },
    '/api/file/**': { prerender: false },
  },
  nitro: {
    storage: {
      fileSystem: {
        driver: 'fs',
        base: './../../.storage',
      },
    },
    preset: fileURLToPath(new URL('./server/preset.ts', import.meta.url)),
    experimental: {
      tasks: true,
    },
  },
  modules: [
    '@nuxtjs/device',
    'nuxt-auth-utils',
    'shadcn-nuxt',
  ],
  compatibilityDate: '2024-08-18',
})
