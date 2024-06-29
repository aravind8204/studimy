/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'body': "url('/studimy/frontend/src/files/background.jpg')",
      },
    },
  },
  plugins: [],
}

