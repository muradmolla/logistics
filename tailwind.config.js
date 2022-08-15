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
      'black': '#000000',
      'gray': "#e4e5e7",
      'translucent': 'rgba(255,255,255,0.4)',
      'transparent': 'transparent',
      'translucent-black': 'rgba(0,0,0,0.4)',
    },
    extend: {},
  },
  plugins: [],
}
