/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['Fira Code VF', ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
