// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
        modules: [
          '@nuxtjs/tailwindcss'
        ],
        
        app: {
          head: {
            title: "Nuxt3",
            meta: [
              {name: 'description', content: 'Nuxt 3'}
            ],
            link: [
              {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
          }
        },
        runtimeConfig: {
          currencyKey: process.env.API_KEY,
          public: {

          }
        }

})
