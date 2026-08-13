import React, { useState, useEffect } from "react";
import profileImg from "../assets/profile.JPG";
import { Typewriter } from 'react-simple-typewriter';
import Antigravity from './Antigravity';
import { FaArrowRight, FaCodeBranch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const particleColors = isDark ? ["#ffffff", "#6366f1"] : ["#18181b", "#4f46e5"];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const scrollOffset = 15;
      const y = el.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 sm:pt-22 lg:pt-22 pb-16 sm:pb-20 lg:pb-16 flex items-start sm:items-center justify-center relative overflow-hidden bg-grid-pattern"
    >
      {/* Background Interactive Particle Canvas */}
      <div className="hidden md:block absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <Antigravity
          count={700}
          magnetRadius={16}
          ringRadius={12}
          waveSpeed={0.15}
          waveAmplitude={0.8}
          particleSize={0.75}
          color={particleColors}
          autoAnimate={true}
          pulseSpeed={2}
          fieldStrength={8}
        />
      </div>

      {/* Ambient Radial Gradient Background Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

          {/* Main Hero Copy */}
          <motion.div
            className="flex-1 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300/60 dark:border-zinc-700/60 mb-4 text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Developing Roles</span>
            </div>

            <span className="text-zinc-500 dark:text-zinc-400 font-mono text-xs sm:text-sm tracking-wide mb-1">
              Hello, I'm
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-2.5 leading-tight sm:whitespace-nowrap">
              Chamara <span className="text-indigo-600 dark:text-indigo-400">Perera</span>
            </h1>

            <h2 className="text-lg sm:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mb-4 leading-tight flex items-center min-h-[2.25rem]">
              <span className="font-mono text-indigo-600 dark:text-indigo-400 mr-2 text-base sm:text-xl">&gt;</span>
              <span className="font-mono text-base sm:text-2xl">
                <Typewriter
                  words={["Software Developer", "IT Undergraduate", "Software Engineer Intern", "Tech Enthusiast"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-7 max-w-xl leading-relaxed">
              I’m an IT undergraduate passionate about building web and software solutions that are functional, user-friendly, and innovative.
            </p>

            {/* Mobile Profile Image View */}
            <div className="lg:hidden w-full flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
                <img
                  src={profileImg}
                  alt="Chamara Perera"
                  className="relative w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 shadow-xl"
                  style={{ objectPosition: 'top' }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl text-sm font-semibold shadow-sm transition-all text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Desktop Profile Card Container */}
          <motion.div
            className="hidden lg:flex flex-1 justify-center relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition duration-700" />

              <div className="relative p-2 rounded-3xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-xl shadow-xl">
                <img
                  src={profileImg}
                  alt="Chamara Perera"
                  className="w-[19rem] h-[23rem] object-cover rounded-2xl shadow-inner"
                  style={{ objectPosition: 'top' }}
                />

                {/* Micro tech card floating badge */}
                <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-700/80 shadow-lg backdrop-blur-md flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                    <FaCodeBranch size={14} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-white">Full-Stack &amp; AI</div>
                    <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Software Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group cursor-pointer z-20"
        onClick={() => scrollToSection('projects')}
        aria-label="Scroll to Projects"
        type="button"
      >
        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-indigo-500 transition-colors flex items-start justify-center p-1">
          <div className="w-1 h-1 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-scroll-dot" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
