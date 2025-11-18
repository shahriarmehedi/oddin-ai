import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        night: "#0A0E18",
        azure: "#1E88E5",
        electric: "#00E676",
        accent: "#FFA726",
        graphite: "#1C2433",
        mist: "#8CA3C8",
        "night-muted": "#0F1726",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        halo:
          "radial-gradient(circle at 20% 20%, rgba(30,136,229,0.35), transparent 50%), radial-gradient(circle at 80% 0%, rgba(0,230,118,0.3), transparent 45%)",
      },
      boxShadow: {
        halo: "0 0 40px rgba(0, 230, 118, 0.4)",
        card: "0 20px 60px 0 rgba(5, 10, 20, 0.45)",
      },
      borderRadius: {
        glass: "32px",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0, 230, 118, 0.0)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 230, 118, 0.35)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        dash: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.8s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
        dash: "dash 1.2s ease forwards",
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
