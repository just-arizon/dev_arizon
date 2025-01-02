/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    './src/**/*.jsx',
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-darken': '#231e23',
        'custom-dark': '#252525',
        'custom-teal': '#00d8c9'
      },
    },
  },
  plugins: [nextui()],
}

