/** @type {import('tailwindcss').Config} */
module.exports = {
  css: ["~/assets/css/main.css"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#ffffff",
        "primary-text": "#111727",
        "contrast-1": "#ffb414",
        "contrast-1-dark": "#f6970f",
        "contrast-2": "#3a7c9f",
        "contrast-2-dark": "#0a2a49",
      },
      fontFamily: {
        gloock: ['"Gloock"', "serif"],
        cinzel: ['"Cinzel Decorative"', "cursive"],
        aboreto: ['"Aboreto"', "cursive"],
        playfair: ['"Playfair Display"', "serif"],
        frank: ['"Frank Ruhl Libre"', "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
