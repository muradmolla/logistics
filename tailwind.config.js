/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'blue': '#1c2430',
      'blue-dark': '#121821',
      'light-gray': '#eeeeee',
      'orange': '#fbaf19',
      'white': "#ffffff",
      'translucent': 'rgba(255,255,255,0.4)',
      'transparent': 'transparent'
    },
    extend: {},
  },
  plugins: [],
}
