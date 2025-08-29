import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Scroll spy effect to highlight active section in the navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 64; // h-16 = 64px
      
      // Get all sections
      const sections = navLinks.map(link => {
        const id = link.to.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - navbarHeight - 100; // Adding some buffer
          const offsetBottom = offsetTop + element.offsetHeight;
          return { id, offsetTop, offsetBottom };
        }
        return null;
      }).filter(Boolean);
      
      // Find the current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveSection('#' + section.id);
          break;
        }
      }
      
      // If we're at the top of the page, set Home as active
      if (scrollPosition < 100) {
        setActiveSection('#home');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = (to) => {
    setActiveSection(to);
    setMobileMenuOpen(false);
    
    // Add a small delay to ensure the mobile menu has time to close
    setTimeout(() => {
      const targetId = to.replace('#', '');
      const el = document.getElementById(targetId);
      
      if (el) {
        // Scroll with offset to account for fixed navbar
        const navbarHeight = 64; // 16 * 4 = 64px (h-16)
        const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({top: y, behavior: 'smooth'});
      } else {
        console.warn(`Element with id "${targetId}" not found`);
      }
    }, 10);
  };
  return (
    <nav className="fixed w-full z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between h-16">
        <a 
          href="#home" 
          className="font-bold text-xl tracking-tight text-gray-900 dark:text-white"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          Chamara Perera
        </a>
        
        {/* Desktop Menu */}
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
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.to}
                  className={`block py-2 px-4 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${activeSection === link.to ? 'font-bold bg-gray-100 dark:bg-gray-800' : ''}`}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(link.to);
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
