import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "Projects", to: "#projects" },
  { name: "Experience", to: "#experience" },
  { name: "Education", to: "#education" },
  { name: "Skills", to: "#skills" },
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  // Mobile menu state and scroll logic will be added later
  const handleNavClick = (to) => {
    setActiveSection(to);
    const el = document.getElementById(to.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="fixed w-full z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Chamara Perera</a>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <motion.a
              key={link.name}
              href={link.to}
              className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium ${activeSection === link.to ? 'font-bold underline underline-offset-4' : ''}`}
              onClick={e => {
                e.preventDefault();
                handleNavClick(link.to);
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <FaBars className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
