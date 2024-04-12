// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    public: {
      key: process.env.KEY,
    },
    secretKey: process.env.SECRET_KEY,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s - Nuxt3 Starter',
    },
  },
})
