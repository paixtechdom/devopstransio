/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary" : "#c9a750",
        "secondary": "#e7e8eb",
        "tertiary" : "rgb(150,100,0)"
      },
      backgroundImage: {
        "hero" : "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/src/assets/images/hero.jpg')",
        "heroSm" : "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/src/assets/images/hero.jpg')",
      }
    },
  },
  plugins: [],
}

