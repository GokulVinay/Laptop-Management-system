module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinns: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
