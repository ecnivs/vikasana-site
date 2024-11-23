/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        altone: ["Altone Trial", "sans-serif"]
      }
    },
  },
  plugins: [],
}

