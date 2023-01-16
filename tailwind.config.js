/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IRANYekan: "IRANYekanWeb",
      },
      backgroundImage: {
        freshPattern: "url('/images/freshPattern.svg')",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%"  },
        },
      },
      animation: {
        appear: "appear  1s ",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
};
