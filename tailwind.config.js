/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx'
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
  plugins: [],
}

