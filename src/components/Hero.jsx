import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Chamara</span> &ndash; IT Student &amp; Developer
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Passionate about building modern web applications and exploring the latest in IT and software development.
      </motion.p>
      <motion.div
        className="flex gap-4 justify-center"
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
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
          }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
