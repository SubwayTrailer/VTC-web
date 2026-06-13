import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: "#4F772D",
        secondary: "#90A955",
        earth: {
          light: "#F5EBE0",
          DEFAULT: "#D5BDAF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
