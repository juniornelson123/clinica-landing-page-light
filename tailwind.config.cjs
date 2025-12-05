/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        azulClinico: "#2B7BD4",
        amareloEnergia: "#F4C542",
        vermelhoAcao: "#E74C3C",
        verdeEquilibrio: "#58C27D",
        cinzaProfissional: "#2F3542"
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      }
    },
  },
  plugins: [],
};