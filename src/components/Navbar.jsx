import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Education", to: "#education" },
  { name: "Projects", to: "#projects" },
  { name: "Skills", to: "#skills" },
  { name: "Contact", to: "#contact" },
];

const Navbar = () => {
  // Mobile menu state and scroll logic will be added later
  return (
    <nav className="fixed w-full z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Chamara</a>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <a key={link.name} href={link.to} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
              {link.name}
            </a>
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
