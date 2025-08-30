

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
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-500">
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
