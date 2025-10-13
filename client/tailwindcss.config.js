/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // corps
        display: ["Poppins", "Inter", "system-ui", "sans-serif"], // titres
      },
    },
    plugins: [],
  },
};
