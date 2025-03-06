import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', media: '(prefers-color-scheme: light)', href: '/light/android-chrome-192x192.png', type: 'image/png' },
        { rel: 'icon', media: '(prefers-color-scheme: dark)', href: '/dark/android-chrome-192x192.png', type: 'image/png' },
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@unocss/nuxt', '@nuxt/icon', '@nuxt/content', '@vueuse/nuxt'],
  future: {
    compatibilityVersion: 4,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.'
      }
    }
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
          }
        }
      }
    }
  }
})