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
  plugins: [function ({ addUtilities }) {
    addUtilities(
      {
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '8px',
          height: '6px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#5f5f5f',
          borderRadius: '10px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#d9d9d9',
          borderRadius: '10px',
          transition: 'all 0.3s ease',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#d9d9d9ab'
        },
      },
      ['responsive', 'hover'] // Add responsive and hover variants
    );
  },
],
}

