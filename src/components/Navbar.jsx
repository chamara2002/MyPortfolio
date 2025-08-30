import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCode, FaTerminal, FaReact, FaJs, FaHtml5, FaCss3, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

// Add CSS for the floating animation
const floatingIconsCSS = `
@keyframes float {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  25% { opacity: 0.7; }
  75% { opacity: 0.7; }
  100% { transform: translate(0, 0) rotate(360deg); opacity: 0; }
}

.floating-icon {
  position: absolute;
  pointer-events: none;
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0;
}
`;

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "Projects", to: "#projects" },
  { name: "Experience", to: "#experience" },
  { name: "Education", to: "#education" },
  { name: "Skills", to: "#skills" },
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" }
];

// Programming symbols for animation
const programmingSymbols = [
  { Icon: FaCode, color: "text-blue-500", initialPosition: { x: -50, y: -50 } },
  { Icon: FaTerminal, color: "text-green-500", initialPosition: { x: 10, y: -50 } },
  { Icon: FaReact, color: "text-cyan-500", initialPosition: { x: -30, y: -50 } },
  { Icon: FaJs, color: "text-yellow-500", initialPosition: { x: 30, y: -50 } },
  { Icon: FaHtml5, color: "text-orange-500", initialPosition: { x: 0, y: -50 } },
  { Icon: FaCss3, color: "text-purple-500", initialPosition: { x: -70, y: -50 } },
  { Icon: FaPython, color: "text-blue-600", initialPosition: { x: 50, y: -50 } },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Setup individual animation controls for each icon
  const iconControls = programmingSymbols.map(() => useAnimation());
  
  // Setup animation sequence that continuously loops
  useEffect(() => {
    const startAnimations = async () => {
      for (let i = 0; i < iconControls.length; i++) {
        const control = iconControls[i];
        const initialPosition = programmingSymbols[i].initialPosition;
        const delay = i * 0.5; // Increase delay between icons starting
        
        // Create a random horizontal position for this drop
        const randomX = initialPosition.x + (Math.random() * 8 - 4);
        
        // Create an infinite animation loop for each icon
        const animate = async () => {
          // Slower speed for more gentle rain effect (4-6 seconds per drop)
          const duration = 4 + Math.random() * 2;
          
          // Smaller horizontal wiggle, slightly biased to the left
          const wiggleX = randomX + (Math.random() * 6 - 4); // More likely to wiggle left
          
          // Rain drop animation
          await control.start({
            opacity: [0, 0.7, 0.7, 0],
            scale: [0, 0.9, 0.9, 0.6],
            x: [randomX, wiggleX, wiggleX, wiggleX],
            y: [-50, 0, 30, 50],
            rotate: [0, 3, -3, 0],
            transition: {
              duration: duration,
              ease: "linear", // More constant speed
              times: [0, 0.1, 0.8, 1]
            }
          });
          
          // Longer delay before next drop
          await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
          
          // Reset to a slightly different position for variety, favoring the left side
          const newX = initialPosition.x + (Math.random() * 12 - 8); // More likely to shift left
          await control.set({ 
            x: newX, 
            y: -50,
            opacity: 0,
            scale: 0
          });
          
          // Continue animation in a loop
          animate();
        };
        
        // Start with a staggered delay
        setTimeout(() => {
          animate();
        }, delay * 1000);
      }
    };
    
    startAnimations();
  }, []);
  
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
      
      // Check if the page is scrolled to update the navbar background
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
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
    <nav className={`fixed w-full z-30 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80' : 'bg-transparent'} backdrop-blur transition-all duration-300 border-b ${scrolled ? 'border-gray-200 dark:border-gray-800' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between h-16">
        <div className="relative flex items-center">
          {/* Animated programming symbols */}
          <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none overflow-hidden" style={{ width: '220px', height: '110px', top: '-20px', left: '-10px' }}>
            {programmingSymbols.map(({ Icon, color, initialPosition }, index) => (
              <motion.div
                key={index}
                animate={iconControls[index]}
                initial={{ opacity: 0, scale: 0, x: initialPosition.x, y: initialPosition.y }}
                className="absolute"
                style={{
                  left: '40%', /* Shifted left from 50% */
                  top: '10px',
                  zIndex: -1
                }}
              >
                <Icon className={`${color} dark:opacity-80 filter drop-shadow-md`} size={14} />
              </motion.div>
            ))}
          </div>
          <a 
            href="#home" 
            className="font-bold text-xl tracking-tight text-gray-900 dark:text-white relative z-10 py-2 px-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <span className="relative">Chamara Perera</span>
          </a>
        </div>
        
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
            className={`md:hidden ${scrolled ? 'bg-white dark:bg-gray-900' : 'bg-white/80 dark:bg-gray-900/80'} border-b border-gray-200 dark:border-gray-800`}
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