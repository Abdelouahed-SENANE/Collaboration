/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#2C1320',
        'secondary' : '#5F4B66',
        'third' : '#A7ADC6'
      }
    },
  },
  plugins: [],
}