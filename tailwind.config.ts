import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#f7f5f2",
        foreground: "#10121a",
        primary: {
          DEFAULT: "#1e6de0",
          dark: "#1552b0",
          light: "#e3efff"
        },
        secondary: {
          DEFAULT: "#6d62ff",
          light: "#efeaff"
        },
        accent: {
          DEFAULT: "#22c1a6",
          light: "#e2fbf7"
        },
        muted: "#6b7280"
      },
      boxShadow: {
        soft: "0 20px 40px -30px rgba(15, 23, 42, 0.35)",
        glow: "0 20px 45px -30px rgba(30, 109, 224, 0.6)",
        card: "0 12px 30px -20px rgba(15, 23, 42, 0.4)"
      },
      borderRadius: {
        xl: "1.25rem"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
