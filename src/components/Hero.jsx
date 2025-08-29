

import React from "react";
import profileImg from "../assets/profile.JPG";
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Subtle geometric background shapes */}
  {/* Remove background squares from page bg */}
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl px-6 py-12 z-10 animate-fade-in">
        {/* Text Side */}
        <div className="flex-1 flex flex-col items-start text-left">
          <span className="text-lg text-gray-600 dark:text-gray-300 mb-2">Hello, I'm</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 leading-tight">
            Chamara
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight flex flex-wrap">
            <span>
              <Typewriter
                words={["Software Developer", "UG IT Student", "Web Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl">
            I am Chamara Perera, an undergraduate IT student with hands-on experience as an IT trainee. I am a quick learner with a strong interest in software development and emerging technologies.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow transition-colors flex items-center gap-2 text-lg"
            >
              View My Work <span className="text-2xl">→</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3 bg-transparent border border-gray-400 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold shadow transition-colors text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* Photo Side with geometric squares */}
        <div className="flex-1 flex items-center justify-center relative">
          <img
            src={profileImg}
            alt="Chamara Profile"
            className="w-72 h-72 md:w-[26rem] md:h-[26rem] object-cover rounded-2xl shadow-2xl relative z-10"
            loading="lazy"
            style={{objectPosition:'top'}}
          />
          {/* Geometric squares near the photo, adapt to theme */}
          <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-500 dark:bg-blue-900 opacity-30 dark:opacity-15 rounded-2xl z-0" style={{filter:'blur(0.5px)'}}></div>
          <div className="absolute bottom-4 -left-8 w-16 h-16 bg-blue-400 dark:bg-blue-700 opacity-30 dark:opacity-15 rounded-xl z-0" style={{filter:'blur(0.5px)'}}></div>
          <div className="absolute top-1/2 right-0 w-12 h-12 bg-blue-300 dark:bg-blue-400 opacity-40 dark:opacity-15 rounded-lg z-0" style={{filter:'blur(0.3px)'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
