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
        body:    ["var(--font-body)",    "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
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
        /* New tokens matching the ARCHI design */
        navy: {
          950: "#0D1B2A",
          900: "#112236",
          800: "#1a3a5c",
          700: "#1e4a7a",
        },
        accent: {
          600: "#1457d4",
          500: "#1A6BFF",
          400: "#4d8eff",
          50:  "#eff5ff",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.07)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.12)",
        accent: "0 4px 24px rgba(26,107,255,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
