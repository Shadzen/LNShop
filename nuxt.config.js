
export default {
  mode: 'universal',
  // mode: 'spa',
  generate: {
    dir: 'docs'
  },
  router: {
    base: '/LNShop/'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Lucky Nails Shop' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      '~/assets/sass/_variables.sass',
      '~/assets/sass/_mixins.sass'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    // publicPath: '/assets/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
