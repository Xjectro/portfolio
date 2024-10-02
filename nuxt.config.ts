// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  tailwindcss: {
    cssPath: ["~/assets/css/main.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
  },

  runtimeConfig: {
    app: {
      title: process.env.APP_TITLE,
    },
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      Prompt: [400, 500, 700],
      "Chakra Petch": [400, 500, 700],
      "Ubuntu Mono": [400, 500, 700],
    },
  },

  components: {
    loader: true,
    global: true,
    dirs: ["~/components"],
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
});
