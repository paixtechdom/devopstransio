/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary" : "#c9a750",
        "secondary": "#e7e8eb",
        "tertiary" : "rgb(150,100,0)"
      }
    },
  },
  plugins: [],
}

