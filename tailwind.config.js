/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Hepta slab", "serif"],
      },
      transformOrigin: {
        "custom-1px": "1px",
      },
    },
  },
  plugins: [],
};
