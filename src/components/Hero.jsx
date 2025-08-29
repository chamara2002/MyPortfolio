import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Chamara</span> — IT Student & Developer
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
        Passionate about building modern web applications and exploring the latest in IT and software development.
      </p>
      <div className="flex gap-4 justify-center">
        <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">Download CV</a>
        <a href="#projects" className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">View Projects</a>
      </div>
    </section>
  );
};

export default Hero;
