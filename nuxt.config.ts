export default defineNuxtConfig({
  site: {
    url: 'https://intraq.simokai.com',
    name: 'Intraq',
    description: 'Reliable Data Solutions for Africa\'s Leading Organizations'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content'
  ],

  content: {
    // Use filesystem driver instead of SQLite
    driver: 'fs',
    
    // OR disable database completely
    experimental: {
      clientDB: false
    },
    
    // Enable document-driven mode (reads files directly)
    documentDriven: true
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['a17aacae164b.ngrok-free.app']
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  app: {
    baseURL: '/'
  }
})