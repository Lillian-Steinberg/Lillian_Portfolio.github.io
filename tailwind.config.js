/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4d1d1d",
        secondary: "0a0a0a",
      },
      fontFamily: {
        serif: ['"Calisto MT"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
