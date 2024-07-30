/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F855A',
        secondary: '#F4A261',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

