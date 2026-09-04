import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: "#FAF6EE",
        "card-light": "#FFFFFF",
        obsidian: "#0A0A0A",
        "card-dark": "#161616",
        "hook-orange": "#FF5722",
        "electric-amber": "#FF9800",
        "neon-lime": "#CCFF00",
        "viral-pink": "#FF2E93",
        "text-dark": "#121212",
        "text-dark-secondary": "#5A5A55",
        "text-dark-muted": "#8E8E85",
        "text-light": "#F5F5F7",
        "text-light-secondary": "#A0A0A0",
        "text-light-muted": "#606060",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      borderRadius: {
        card: "16px",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-slower": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 87, 34, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 87, 34, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
