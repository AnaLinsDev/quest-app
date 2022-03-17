export default {

  target: 'static',

  router: {
    base: '/quest-app/'
  },

  ssr: false,

  components: true,
  
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