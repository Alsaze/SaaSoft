// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
    ],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },
})
