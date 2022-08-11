/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'blue': '#1c2430',
      'blue-dark': '#1c2430',
      'light-gray': '#eeeeee',
      'orange': '#fbaf19'
    },
    extend: {},
  },
  plugins: [],
}
