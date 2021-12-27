export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://auth.nuxtjs.org/guide/setup.html
    "@nuxtjs/auth"
  ],
  auth: {
    strategies: {
      oauth2: {
        _scheme: "oauth2",
        authorization_endpoint:
          "https://mickeymond-fusionauth.herokuapp.com/oauth2/authorize",
        userinfo_endpoint:
          "https://mickeymond-fusionauth.herokuapp.com/oauth2/userinfo",
        // scope: ["openid", "offline_access"],
        access_token_endpoint:
          "https://mickeymond-fusionauth.herokuapp.com/oauth2/token",
        logout: "https://mickeymond-fusionauth.herokuapp.com/oauth2/logout",
        client_id: "3c219e58-ed0e-4b18-ad48-f4f92793ae32",
        // client_secret: "AZIk87Qi6IWxFux-alaD1X_EFWJrIc1X8pjMJJU0t6o",
        response_type: "code",
        grant_type: "authorization_code"
      }
    }
  },
  router: {
    middleware: ["auth"]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
