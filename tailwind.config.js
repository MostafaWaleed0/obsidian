/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        animation: {
          wiggle: "wiggle 1s ease-in-out infinite",
        },
      },
      colors: {
        slate: {
          500: "#a9adc1",
        },
        gray: {
          100: "#f7f7f7",
          200: "#e6e9ee",
          300: "#dde0e4",
          400: "#818890",
          500: "#535661",
          600: "#4b4c53",
          700: "#3a3d4a",
          800: "#2e3039",
          900: "#1f2028",
        },
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "min(100% - 2rem,87.5rem)",
        },
      });
    },
  ],
};
