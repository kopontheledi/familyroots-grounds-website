/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#173b2a",
        deepforest: "#10291e",
        leaf: "#c8ed75",
        sage: "#789e43",
        cream: "#fbfaf6"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        soft: "0 14px 38px rgba(16, 41, 30, 0.08)"
      }
    }
  },
  plugins: []
};
