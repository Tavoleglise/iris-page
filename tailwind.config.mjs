const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6D28D9",
          DEFAULT: "#00ce1b",
          dark: "#3B0764",
        },
        secondary: {
          light: "#FDE68A",
          DEFAULT: "#FBBF24",
          dark: "#B45309",
        },
        foreground: {
          light: "#FDE68A",
          DEFAULT: "#FFF",
          dark: "#B45309",
        },
        loadingBg: {
          100: "#616161",
        },
      },
      boxShadow: {
        custom1: "0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
