import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    let saved = "dark";
    try {
      saved = localStorage.getItem("theme") === "light" ? "light" : "dark";
    } catch (e) {}
    setTheme(saved);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const el = document.documentElement;
    el.classList.remove("light", "dark");
    el.classList.add(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className={
        "grid h-10 w-10 place-items-center rounded-full border border-hair text-gold transition hover:border-gold/40 hover:bg-gold/10 " +
        className
      }
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
