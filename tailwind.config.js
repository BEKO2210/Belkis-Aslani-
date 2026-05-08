/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      fontFamily: {
        display: [
          '"Space Grotesk"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#05060a",
          900: "#0a0c14",
          800: "#11141d",
          700: "#1a1f2c",
          600: "#262d3d",
        },
        accent: {
          cyan: "#5cf2ff",
          violet: "#9d6bff",
          amber: "#ffb35c",
          rose: "#ff6e9c",
        },
        bone: "#f4f1ea",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(92,242,255,0.45)",
        "glow-violet": "0 0 80px -10px rgba(157,107,255,0.45)",
        soft: "0 30px 80px -20px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)",
        noise:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "stream-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        flicker: "flicker 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "stream-down": "stream-down 8s linear infinite",
      },
    },
  },
  plugins: [],
};
