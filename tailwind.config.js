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
        "hero" : "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/src/assets/images/eight.jpg')"
      }
    },
  },
  plugins: [],
}

