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
    url: "https://skrauz.dev",
    name: "Sebastian Krauzowicz - Web Developer",
    description: "Strona portfolio",
    keywords: ["web developer", "frontend developer", "portfolio", "poland"],
    author: "Sebastian Krauzowicz",
    publisher: "Sebastian Krauzowicz",
    generator: "Nuxt",
    robots: "index, follow",
    canonical: "https://skrauz.dev",
    og: {
      type: "website",
      title: "Sebastian Krauzowicz - Web Developer",
      description: "Strona portfolio",
      url: "https://skrauz.dev",
      image: "/img/og-image.png",
    },
  },

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },

        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },

        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
});
