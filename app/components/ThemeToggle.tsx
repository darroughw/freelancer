"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const VHS = "vhs";

// Schrödinger's toggle: until the effect runs, we don't know which theme
// localStorage picked, so render nothing rather than guess and flash.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === VHS ? VHS : "default");
  }, []);

  if (theme === null) return null;

  const isVhs = theme === VHS;

  function toggle() {
    const next = isVhs ? "default" : VHS;
    if (next === VHS) {
      document.documentElement.dataset.theme = VHS;
    } else {
      delete document.documentElement.dataset.theme;
    }
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={isVhs}
      aria-label={isVhs ? "Switch to default theme" : "Switch to VHS theme"}
    />
  );
}
