const { API_KEY, API_URL } = process.env

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'noting',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', type: 'image/png', href: '/favicons/apple-touch-icon.png' },
    { rel: 'apple-touch-icon', type: 'image/png', href: '/favicons/android-touch-icon.png' },
    //bootstrap
    { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" },
    { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" },
    //google fonts
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Agdasima&display=swap" },
    { hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'サイトのURL' },
    { hid: 'og:title', property: 'og:title', content: 'サイトタイトル' },
    { hid: 'og:description', property: 'og:description', content: '共通ディスクリプション' },
    { hid: 'og:image', property: 'og:image', content: '画像のURL' },
    { name: 'twitter:card', content: 'summary_large_image' }//　twitterの画像サイズ
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/filter.js', '~/plugins/prism.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },

  publicRuntimeConfig: {
    apiUrl: API_URL
  },

  privateRuntimeConfig: {
    apiKey: API_KEY
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/blog/page/:p',
        component: resolve(__dirname, 'pages/blog/index.vue'),
        name: 'blog-page-p',
      })
    },
  },
}
