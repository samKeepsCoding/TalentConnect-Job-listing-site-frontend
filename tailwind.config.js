/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "PrimaryDark" : "#12232e",
        "PrimaryLight" : "#007cc7",
        "Secondary" : "#4da8da",
        "NeutralDark" : "#203647",
        "NeutralLight" : "#eefbfb",
        "BaseWhite" : "#fffff",
        "BaseBlack" : "#1c1b1a",
        "Grey" : "#6f6f6f"
      }
    },
  },
  plugins: [],
}
