import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";


const Footer = () => {
  return (
  <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-4 border-t border-gray-200 dark:border-gray-800 transition-colors">
  <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 pb-10">
          {/* About */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Chamara Perera</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              I am an undergraduate IT student with hands-on experience<br />
              as an IT trainee. I am a quick learner with a strong passion for<br />
              software development and emerging technologies.
            </p>
          </div>
          {/* Quick Links */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          {/* Connect */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Connect</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaGithub className="text-xl" />
                <a href="https://github.com/chamara2002" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin className="text-xl" />
                <a href="https://www.linkedin.com/in/chamara-perera-04b2b3285/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="text-xl" />
                <a href="https://web.facebook.com/chamara.perera.228517/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="text-xl" />
                <a href="https://x.com/chamara__2002" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-xl" />
                <a href="mailto:lccperera2002@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email</a>
              </li>
            </ul>
          </div>
        </div>
  <hr className="border-gray-200 dark:border-gray-800 my-6" />
  <div className="text-center text-gray-400 dark:text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Chamara Perera. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
