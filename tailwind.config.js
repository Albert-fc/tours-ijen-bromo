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
        "contrast-1-dark": "#FF6600",
        "contrast-2": "#407c9c",
        "contrast-3": "#FF6600",
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
