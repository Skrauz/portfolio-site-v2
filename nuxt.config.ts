import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxt/image", "@nuxtjs/seo"],

  runtimeConfig: {
    public: {
      contactEmail: "contact@skrauz.dev",
    },
  },

  site: {
      url: 'https://skrauz.dev',
      name: 'Sebastian Krauzowicz - Web Developer',
    },

});
