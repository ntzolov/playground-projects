/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/index.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        moveInCircle: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(0, 150px)" },
          "50%": { transform: "translate(150px, 150px)" },
          "75%": { transform: "translate(150px, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        moveInCircle: "moveInCircle 4s linear infinite",
      },
    },
  },
  plugins: [],
};
