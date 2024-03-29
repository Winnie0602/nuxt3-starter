// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/eslint-module', '@nuxt/ui', '@pinia/nuxt'],

  eslint: {
    lintOnStart: false,
  },

  runtimeConfig: {
    public: {
      key: process.env.KEY,
    },
    secretKey: process.env.SECRET_KEY,
  },
})
