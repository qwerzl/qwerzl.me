import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxt/icon'
  ],
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.'
      }
    }
  }
})