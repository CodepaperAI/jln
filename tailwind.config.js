/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0E13",        // primary background
        surface: "#161B22",     // secondary surface
        card: "#111827",        // card background
        ink: "#0B0E13",         // deepest dark (dark bands / button text on gold)
        gold: {
          DEFAULT: "#D4AF37",   // primary gold
          soft: "#F4E3B2",      // secondary gold / highlight
          deep: "#B4922A",      // darker gold for pressed states
        },
        muted: "#A9B1BC",       // text gray
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderColor: {
        hair: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        luxe: "0 24px 60px -20px rgba(0,0,0,0.75)",
        card: "0 18px 45px -24px rgba(0,0,0,0.8)",
        "gold-glow":
          "0 0 0 1px rgba(212,175,55,0.25), 0 18px 50px -18px rgba(212,175,55,0.45)",
        "gold-soft": "0 10px 40px -14px rgba(212,175,55,0.35)",
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.6) 50%, rgba(212,175,55,0) 100%)",
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
