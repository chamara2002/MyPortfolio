import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#17223b] overflow-hidden"
    >
      {/* Diagonal divider */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-2/3 z-10" style={{clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0% 100%)', background: 'linear-gradient(90deg, #f4f6fa 90%, #fff 100%)'}}></div>
      {/* Right: Photo */}
      <div className="hidden md:flex absolute right-0 top-0 h-full w-2/3 z-20 items-end justify-end">
        <img
          src={profileImg}
          alt="Chamara"
          className="h-full w-auto object-cover object-right-bottom"
          style={{maxWidth: '100%', maxHeight: '100vh'}}
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="relative z-30 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-0">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left py-24 md:py-0">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Hi, I'm <span className="text-blue-400">Chamara</span> <span className="text-white">–<br/>IT Student &amp; Developer</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Passionate about building modern web applications and exploring the latest in IT and software development.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.4
                }
              }
            }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
              }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold shadow hover:bg-gray-600 transition-colors"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
              }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
        {/* Spacer for right image on desktop */}
        <div className="hidden md:block flex-1"></div>
      </div>
    </section>
  );
};

export default Hero;
