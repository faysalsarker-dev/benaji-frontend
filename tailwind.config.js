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
        extra: '#E3FF00',
        extraColor: '#C32EC4',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

