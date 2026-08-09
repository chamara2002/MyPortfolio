import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="p-2 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-zinc-700/60 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 transition-colors text-zinc-800 dark:text-zinc-200"
    >
      {theme === "dark" ? (
        <FaSun size={16} className="text-amber-400" />
      ) : (
        <FaMoon size={16} className="text-indigo-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
