/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // theme-aware tokens (flip via .light / .dark on <html>)
        base: "rgb(var(--c-base) / <alpha-value>)",       // primary background
        surface: "rgb(var(--c-surface) / <alpha-value>)", // secondary surface
        card: "rgb(var(--c-card) / <alpha-value>)",       // card background
        fg: "rgb(var(--c-fg) / <alpha-value>)",           // foreground text
        muted: "rgb(var(--c-muted) / <alpha-value>)",     // secondary text
        ink: "#0A0A0B",         // always-dark (button text on yellow)
        gold: {
          DEFAULT: "rgb(var(--c-gold) / <alpha-value>)",
          soft: "rgb(var(--c-gold-soft) / <alpha-value>)",
          deep: "rgb(var(--c-gold-deep) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderColor: {
        hair: "rgb(var(--c-hair) / 0.14)",
      },
      boxShadow: {
        luxe: "0 24px 60px -20px rgba(0,0,0,0.75)",
        card: "0 18px 45px -24px rgba(0,0,0,0.8)",
        "gold-glow":
          "0 0 0 1px rgba(245,197,24,0.25), 0 18px 50px -18px rgba(245,197,24,0.45)",
        "gold-soft": "0 10px 40px -14px rgba(245,197,24,0.35)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, rgba(245,197,24,0) 0%, rgba(245,197,24,0.6) 50%, rgba(245,197,24,0) 100%)",
        "card-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 40%, rgba(255,255,255,0) 100%)",
      },
      borderRadius: { xl2: "1.5rem", xl3: "2rem" },
      maxWidth: { container: "100%" },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: { float: "float 4s ease-in-out infinite" },
    },
  },
  plugins: [],
};
