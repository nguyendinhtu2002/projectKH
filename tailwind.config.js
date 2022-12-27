/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#app',
  content: ["./src/**/*.{html,js}",'./node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')

  ]
  
}
