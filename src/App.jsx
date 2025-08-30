import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Cursor from "./components/Cursor";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Disable print screen and other screenshot methods
    const handleKeyDown = (e) => {
      // Print Screen key (keyCode 44)
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+P (print dialog)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        return false;
      }
    };
    
    // Add event listener
    window.addEventListener('keydown', handleKeyDown, true);
    
    // Clean up on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-500">
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key="main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <Hero />
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <About />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
