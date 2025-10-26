import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // AMMOcoin Design System Colors
      colors: {
        // Primary AMMOcoin colors
        ammocoin: {
          primary: "#32cd32",      // Lime green
          hover: "#5bd75b",        // Lighter green for hover
          dark: "#28a428",         // Darker green for accents
          black: "#000000",        // Pure black background
          white: "#ffffff",        // Pure white text
          gray: {
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
          },
          surface: "rgba(255, 255, 255, 0.05)",  // Glass surface
          border: "rgba(50, 205, 50, 0.3)",      // Green border
        },
        // Semantic colors
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },

      // AMMOcoin Typography
      fontFamily: {
        sans: ["Play", "sans-serif"],           // Primary font
        secondary: ["Jura", "sans-serif"],      // Secondary font
        mono: ["Inconsolata", "monospace"],     // Monospace for addresses/hashes
      },

      // AMMOcoin Spacing & Sizing
      borderRadius: {
        ammocoin: "10px",
        "ammocoin-button": "40px",
      },

      // Glassmorphism effects
      backdropBlur: {
        ammocoin: "10px",
      },

      // Animation & Transitions
      transitionDuration: {
        ammocoin: "200ms",
      },

      // Custom gradients
      backgroundImage: {
        "ammocoin-gradient": "linear-gradient(135deg, #32cd32 0%, #28a428 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },

      // Box shadows for glass effect
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "ammocoin": "0 4px 20px 0 rgba(50, 205, 50, 0.3)",
        "ammocoin-lg": "0 8px 40px 0 rgba(50, 205, 50, 0.4)",
      },

      // Custom animations
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-green": "pulseGreen 2s infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGreen: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(50, 205, 50, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(50, 205, 50, 0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;