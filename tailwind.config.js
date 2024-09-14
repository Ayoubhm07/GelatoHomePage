/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      gelato: ["gelato", "sans-serif"],
      gelatoregular: ["gelatoregular", "sans-serif"],
      gelatobold: ["gelatoblod", "sans-serif"],
      gelatosemibold: ["gelatosemibold", "sans-serif"],
      gelatomedium: ["gelatomedium", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}