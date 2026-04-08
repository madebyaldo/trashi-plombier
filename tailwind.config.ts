import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          950: "#0a0a0b",
          900: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          600: "#52525b",
          100: "#f4f4f5",
          50:  "#fafafa",
        },
        copper: {
          700: "#92400e",
          600: "#b45309",
          500: "#d97706",
          400: "#f59e0b",
          100: "#fef3c7",
          50:  "#fffbeb",
        },
        sand: {
          50:  "#faf9f7",
          100: "#f5f3ef",
          200: "#ebe7e0",
          300: "#d6d0c6",
        },
        ink: {
          900: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
