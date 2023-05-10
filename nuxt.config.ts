// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {

     head: {
       title: 'Start',
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
    '~/assets/main.css'
  ]
})
