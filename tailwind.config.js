/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl' : '9rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
