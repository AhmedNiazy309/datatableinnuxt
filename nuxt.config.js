import colors from "vuetify/es5/util/colors";
import { resolve } from 'path'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href:
        "./css/bootstrap.css"
    }
  ]
  },
  /*
   ** Global CSS
   */
  css: [
    './assets/css/datatablefinal.css',
    './assets/css/buttons.dataTables.min.css',
    './assets/css/select.dataTables.min.css',
    './assets/css/editor.dataTables.min.css',
    './assets/css/bootstrap-rtl.min.css',
    './assets/css/bootstrap.css',
    './assets/css/all.min.css',
    './assets/css/style.css',
  ],
  script: [
    {
      src: "./assets/jquery.js",
      type: "text/javascript"
    },
    {
      src: "./assets/popper.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/bootstrap.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/dataTables.js",
      type: "text/javascript"
    },
    {
      src: "./assets/jquery.dataTables.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/dataTables.buttons.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/buttons.flash.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/jszip.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/pdfmake.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/vfs_fonts.js",
      type: "text/javascript"
    },
    {
      src: "./assets/buttons.html5.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/buttons.print.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/buttons.colVis.min.js",
      type: "text/javascript"
    },
    {
      src: "./assets/script.js",
      type: "text/javascript"
    },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  alias: {
    'style': resolve(__dirname, './assets/style')
  },

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["./assets/variables.scss"],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: { analyze: true,
    extractCSS: true,}
};
