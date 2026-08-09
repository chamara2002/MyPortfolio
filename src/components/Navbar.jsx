import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = 70;

      setScrolled(scrollPosition > 20);

      const sections = navLinks.map(link => {
        const id = link.to.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - navbarHeight - 120;
          const offsetBottom = offsetTop + element.offsetHeight;
          return { id, offsetTop, offsetBottom };
        }
        return null;
      }).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.offsetTop) {
          setActiveSection('#' + section.id);
          break;
        }
      }

      if (scrollPosition < 100) {
        setActiveSection('#home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setActiveSection(to);
    setMobileMenuOpen(false);

    setTimeout(() => {
      const targetId = to.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        const navbarHeight = 70;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 10);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2.5 bg-zinc-50/85 dark:bg-[#090d16]/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/70 shadow-sm' 
        : 'py-4 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Still CP Monogram Logo with Code Symbols */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="group flex items-center gap-2 font-bold text-base tracking-tight text-zinc-900 dark:text-white transition-opacity hover:opacity-90"
        >
          <div className="px-2 py-0.5 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white font-mono font-extrabold text-[11px] tracking-wider flex items-center gap-0.5 shadow-sm border border-indigo-400/30">
            <span className="text-indigo-200">&lt;</span>
            <span>CP</span>
            <span className="text-indigo-200">/&gt;</span>
          </div>
          <span className="font-mono tracking-tight text-sm font-semibold">
            Chamara Perera<span className="text-indigo-600 dark:text-indigo-400"></span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-0.5 bg-zinc-200/50 dark:bg-zinc-900/60 p-1 rounded-full border border-zinc-300/40 dark:border-zinc-800/80 backdrop-blur-md">
          {navLinks.map(link => {
            const isActive = activeSection === link.to;
            return (
              <a
                key={link.name}
                href={link.to}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(link.to);
                }}
                className={`relative px-3.5 py-1 text-[12px] font-medium rounded-full transition-colors ${
                  isActive 
                    ? 'text-zinc-900 dark:text-white font-semibold' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700/60 z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Theme Switcher & Mobile Trigger */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <button 
            className="md:hidden p-1.5 rounded-lg text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700/60 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-zinc-50/95 dark:bg-[#090d16]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 mt-2"
          >
            <div className="flex flex-col space-y-0.5">
              {navLinks.map(link => {
                const isActive = activeSection === link.to;
                return (
                  <a
                    key={link.name}
                    href={link.to}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(link.to);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-indigo-600/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400 font-bold' 
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;