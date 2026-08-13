import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, to) => {
    e.preventDefault();
    if (to === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetId = to.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const scrollOffset = 15;
      const y = el.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-[#060911] text-zinc-600 dark:text-zinc-400 pt-14 pb-7 border-t border-zinc-200/90 dark:border-zinc-800/80 transition-colors relative text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
            <div id="footer-brand" className="flex items-center gap-2.5 font-bold text-base text-zinc-900 dark:text-white transition-opacity duration-500 opacity-0">
              <div className="relative flex items-center justify-center p-1.5 shrink-0">
                {/* Hexagon Loading Outline (Matching Logo Shape) */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  viewBox="0 0 48 48"
                >
                  <path 
                    d="M 24 3 L 42 13.5 L 42 34.5 L 24 45 L 6 34.5 L 6 13.5 Z" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinejoin="round" 
                    className="text-zinc-300 dark:text-zinc-700 opacity-30" 
                  />
                  <path 
                    d="M 24 3 L 42 13.5 L 42 34.5 L 24 45 L 6 34.5 L 6 13.5 Z" 
                    fill="none" 
                    stroke="url(#footer-hex-gradient)" 
                    strokeWidth="2.5" 
                    strokeLinejoin="round" 
                    strokeLinecap="round" 
                    strokeDasharray="35 91"
                    className="animate-hex-dash"
                  />
                  <defs>
                    <linearGradient id="footer-hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                <div 
                  className="absolute inset-1 bg-indigo-500/15 dark:bg-indigo-400/15 blur-sm animate-pulse" 
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} 
                />

                <img 
                  src="/logo.png" 
                  alt="Chamara Perera Logo" 
                  className="w-10 h-10 object-contain relative z-10 drop-shadow-[0_2px_8px_rgba(99,102,241,0.25)]" 
                />
              </div>
              <span className="font-mono tracking-tight text-sm font-semibold">Chamara Perera</span>
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
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a></li>
              <li><a href="#education" onClick={(e) => handleNavClick(e, '#education')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Education</a></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
              <li><a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Certifications</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
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
