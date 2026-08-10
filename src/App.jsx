import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
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
    <div className="bg-zinc-50 dark:bg-[#090d16] text-zinc-800 dark:text-zinc-100 transition-colors duration-500 min-h-screen relative font-sans">
      <Cursor />
      <Navbar />
      <main key="main">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
