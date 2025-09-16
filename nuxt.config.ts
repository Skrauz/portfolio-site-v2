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
      description: 'Strona internetowa i portfolio Sebastiana Krauzowicza',
      keywords: ['web developer', 'frontend developer', 'portfolio', 'poland'],
      author: 'Sebastian Krauzowicz',
      publisher: 'Sebastian Krauzowicz',
      generator: 'Nuxt',
      robots: 'index, follow',
      canonical: 'https://skrauz.dev',
      og: {
        type: 'website',
        title: 'Sebastian Krauzowicz - Web Developer',
        description: 'Strona internetowa i portfolio Sebastiana Krauzowicza',
        url: 'https://skrauz.dev',
        image: '/img/og-image.png',
      },
    },

});
