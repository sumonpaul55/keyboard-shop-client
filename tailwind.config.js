/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1677ff",
        "light-gray": 'rgb(230 234 250)',
        "secondary": "#000ff104",
        "secondary-black": "#606060"
      }
    },
  },
  plugins: [],
}

