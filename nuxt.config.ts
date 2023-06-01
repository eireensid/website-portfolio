// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {

     head: {
       title: 'My portfolio website',
       link: [
         {
           rel: 'icon',
           type: 'image/x-icon',
           href: '/favicon.ico'
         },
         {
           rel: 'stylesheet',
           href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Unbounded:wght@500&display=swap"'
         }
       ]
     }
  },
  css: [
    "~/assets/style/main.scss"
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/style/_mixins.scss" as *; @use "./assets/style/_vars.scss" as *; @use "./assets/style/_media.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['ru', 'en', 'fr'],
    defaultLocale: 'ru'
  }
})
