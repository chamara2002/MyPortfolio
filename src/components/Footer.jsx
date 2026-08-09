import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#060911] text-zinc-600 dark:text-zinc-400 pt-14 pb-7 border-t border-zinc-200/90 dark:border-zinc-800/80 transition-colors relative text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-2 font-bold text-base text-zinc-900 dark:text-white">
              <div className="px-2 py-0.5 rounded-lg bg-indigo-600 dark:bg-indigo-500 text-white font-mono font-extrabold text-[11px] tracking-wider flex items-center gap-0.5 shadow-sm border border-indigo-400/30 shrink-0">
                <span className="text-indigo-200">&lt;</span>
                <span>CP</span>
                <span className="text-indigo-200">/&gt;</span>
              </div>
              <span className="font-mono text-sm">Chamara Perera</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm text-zinc-500 dark:text-zinc-400">
              I’m an IT undergraduate passionate about building web and software solutions that are functional, user-friendly, and innovative.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2.5 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-xs font-medium flex flex-col items-center md:items-start">
              <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Education</a></li>
              <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
              <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Connections */}
          <div className="space-y-2.5 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Connect
            </h3>
            <ul className="space-y-2 text-xs font-medium flex flex-col items-center md:items-start">
              <li>
                <a href="https://github.com/chamara2002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaGithub size={14} /> <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/chamara-perera-04b2b3285/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaLinkedin size={14} /> <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/chamara.perera.2002/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaFacebook size={14} /> <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://x.com/chamara__2002" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaXTwitter size={14} /> <span>Twitter/X</span>
                </a>
              </li>
              <li>
                <a href="mailto:lccperera2002@gmail.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaEnvelope size={14} /> <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Chamara Perera. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-zinc-200 dark:border-zinc-700/60"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <FaChevronUp size={9} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
