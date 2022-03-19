export default {

  target: 'static',

  router: {
    base: '/quest-app/',
    middleware: ['auth']
  },

  ssr: false,

  components: true,

  css:['@/assets/css/global.css'],
  
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  head: {
    titleTemplate: 'Quiz - Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]
  }

}