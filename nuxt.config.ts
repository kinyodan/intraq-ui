export default defineNuxtConfig({
  site: {
    url: 'https://intraq-ui.vercel.app',
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
  
  runtimeConfig: {
    // Private keys (server-side only)
    apiSecret: process.env.API_SECRET,
    
    // Public keys (exposed to client)
    public: {
      // apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
      // landingUrl: process.env.NUXT_PUBLIC_LANDING_URL || 'https://intraq.simokai.com',
      // dashboardUrl: process.env.NUXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001/dashboard',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://intraq-backend.onrender.com',
      landingUrl: process.env.NUXT_PUBLIC_LANDING_URL || 'https://www.intraq.pro',
      dashboardUrl: process.env.NUXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.intraq.pro/dashboard',
    }
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