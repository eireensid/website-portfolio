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
           href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet'
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
          additionalData: '@use "./assets/style/_mixins.scss" as *; @use "./assets/style/_vars.scss" as *;'
        }
      }
    }
  }
})
