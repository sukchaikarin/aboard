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
        sans: ["var(--font-ibm-plex-sans-thai)", "sans-serif"], // ใช้ variable ฟอนต์
        castoro: ["var(--font-castoro)", "serif"],
      },
      screens: {
        ss: "320px",
        sm: "640px",
        md: "768px",
        lg: "1160px",
        xl: "1300px",
        "2xl": "1536px",
      },
      colors: {
        green: {
          500: "#243831",
          300: "#2B5F44",
          100: "#D8E9E4",
        },
        golden: "#C5A365",
        success: "#49A569",
        black: "#000",
        white: "#FFF",
        text: "#191919",
        gray: {
          300: "#939494",
          100: "#BBC2C0",
        },

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
