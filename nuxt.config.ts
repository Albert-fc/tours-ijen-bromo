const meta = {
  title: "Ijen Bromo Tours",
  description: "Authentic Indonesia Journeys: Explore, Engage, Empower",
  url: "https://ijen-bromo-indonesia-tours.netlify.app/",
  ogImage: "https://ijen-bromo-indonesia-tours.netlify.app/og_image.png",
};

export default defineNuxtConfig({
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: { transpile: ['@fortawesome/vue-fontawesome'], },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      title: meta.title,
      meta: [
        { hid: "description", name: "description", content: meta.description },

        // Open graph
        { hid: "description", name: "description", content: meta.description },

        // Facebook meta tags
        { property: "og:url", content: meta.url },
        { property: "og:type", content: "website" },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:image", content: meta.ogImage },

        // Twitter meta tags
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: meta.url },
        { name: "twitter:title", content: meta.title },
        { name: "twitter:description", content: meta.description },
        { property: "og:image", content: meta.ogImage },
      ],
    },
  }
});
