import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "Projects", to: "#projects" },
  { name: "Experience", to: "#experience" },
  { name: "Education", to: "#education" },
  { name: "Skills", to: "#skills" },
  { name: "Certifications", to: "#certifications" },
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const hasAnimatedFooterRef = useRef(false);

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
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = 70;

      // Check if user scrolled into Footer area
      const footerEl = document.querySelector('footer');
      if (footerEl) {
        const footerRect = footerEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (footerRect.top <= windowHeight - 120) {
          if (!hasAnimatedFooterRef.current) {
            hasAnimatedFooterRef.current = true;
            setVisible(true);

            setTimeout(() => {
              const navBrand = document.getElementById('navbar-brand');
              const footerBrand = document.getElementById('footer-brand');
              if (navBrand && footerBrand) {
                const navRect = navBrand.getBoundingClientRect();

                const startTop = navRect.top + window.pageYOffset;
                const startLeft = navRect.left + window.pageXOffset;

                const clone = navBrand.cloneNode(true);
                clone.id = 'brand-glide-clone';
                clone.style.position = 'absolute';
                clone.style.zIndex = '99999';
                clone.style.top = `${startTop}px`;
                clone.style.left = `${startLeft}px`;
                clone.style.width = `${navRect.width}px`;
                clone.style.height = `${navRect.height}px`;
                clone.style.margin = '0';
                clone.style.pointerEvents = 'none';
                clone.style.transition = 'top 0.7s cubic-bezier(0.16, 1, 0.3, 1), left 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease';
                
                document.body.appendChild(clone);

                navBrand.style.opacity = '0';

                setTimeout(() => {
                  const currentFooterRect = footerBrand.getBoundingClientRect();
                  const finalTop = currentFooterRect.top + window.pageYOffset;
                  const finalLeft = currentFooterRect.left + window.pageXOffset;

                  clone.style.top = `${finalTop}px`;
                  clone.style.left = `${finalLeft}px`;
                }, 40);

                setTimeout(() => {
                  footerBrand.classList.remove('opacity-0');
                  footerBrand.style.opacity = '1';
                  clone.style.opacity = '0';

                  setTimeout(() => {
                    navBrand.style.opacity = '1';
                    if (clone.parentNode) clone.parentNode.removeChild(clone);
                    setVisible(false);
                  }, 250);
                }, 650);
              }
            }, 80);
          }
          setScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
          return;
        } else if (footerRect.top > windowHeight + 100) {
          hasAnimatedFooterRef.current = false;
          const footerBrand = document.getElementById('footer-brand');
          if (footerBrand) {
            footerBrand.classList.add('opacity-0');
            footerBrand.style.opacity = '0';
          }
        }
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 20);
      lastScrollY = currentScrollY;

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
        if (currentScrollY >= section.offsetTop) {
          setActiveSection('#' + section.id);
          break;
        }
      }

      if (currentScrollY < 100) {
        setActiveSection('#home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setActiveSection(to);
    setMobileMenuOpen(false);
    setVisible(true);

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

  useEffect(() => {
    // If splash loader is not present, ensure navbar brand is visible
    const checkLoader = () => {
      const loader = document.getElementById('global-loader');
      if (!loader) {
        const navBrand = document.getElementById('navbar-brand');
        if (navBrand) {
          navBrand.classList.remove('opacity-0');
          navBrand.style.opacity = '1';
        }
      }
    };
    checkLoader();
    const timer = setTimeout(checkLoader, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
      visible || mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
    } ${
      scrolled 
        ? 'py-2.5 bg-zinc-50/85 dark:bg-[#090d16]/85 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/70 shadow-sm' 
        : 'py-4 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          id="navbar-brand"
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="group flex items-center gap-2.5 font-bold text-base tracking-tight text-zinc-900 dark:text-white transition-opacity duration-500 hover:opacity-90 opacity-0"
        >
          <div className="relative flex items-center justify-center p-1.5 shrink-0">
            {/* Hexagon Loading Outline (Matching Logo Shape) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 48 48"
            >
              {/* Subtle Hexagon Base Track */}
              <path 
                d="M 24 3 L 42 13.5 L 42 34.5 L 24 45 L 6 34.5 L 6 13.5 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinejoin="round" 
                className="text-zinc-300 dark:text-zinc-700 opacity-30" 
              />
              {/* Animated Traveling Hexagon Loading Line */}
              <path 
                d="M 24 3 L 42 13.5 L 42 34.5 L 24 45 L 6 34.5 L 6 13.5 Z" 
                fill="none" 
                stroke="url(#navbar-hex-gradient)" 
                strokeWidth="2.5" 
                strokeLinejoin="round" 
                strokeLinecap="round" 
                strokeDasharray="35 91"
                className="animate-hex-dash"
              />
              <defs>
                <linearGradient id="navbar-hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Ambient Hexagon Glow */}
            <div 
              className="absolute inset-1 bg-indigo-500/15 dark:bg-indigo-400/15 blur-sm animate-pulse" 
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
            />

            <img 
              src="/logo.png" 
              alt="Chamara Perera Logo" 
              className="w-10 h-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(99,102,241,0.25)]" 
            />
          </div>
          <span className="font-mono tracking-tight text-sm font-semibold">
            Chamara Perera
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