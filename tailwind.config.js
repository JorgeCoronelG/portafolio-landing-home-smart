/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      maxWidth: {
        '16': '16rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

