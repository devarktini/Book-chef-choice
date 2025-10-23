"use client";

import { useEffect } from "react";
import { useStore } from "../../app/stores/useStore";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useStore();

  useEffect(() => {
    // Ensure default theme is light if none is set, and apply it
    if (!theme) setTheme("light");
    document.documentElement.setAttribute("data-theme", theme || "light");
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const newTheme = (theme || "light") === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-switcher-btn"
      aria-label={`Switch to ${(theme || "light") === "light" ? "dark" : "light"} theme`}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "8px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        color: "#FC7000",
        marginTop: "25px",
      }}
    >
      {/* Icon removed as requested (button has no visual SVG) */}
    </button>
  );
};

export default ThemeSwitcher;
