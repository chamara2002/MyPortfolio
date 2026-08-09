import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-zinc-50 dark:bg-[#090d16] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
            Biography
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-10 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5" />
        </div>

        <div className="w-full">
          <motion.div
            className="bg-white dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-9 border border-zinc-200/90 dark:border-zinc-800/80 shadow-sm"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                I’m <strong className="text-zinc-900 dark:text-white font-semibold">Chamara Perera</strong> (Lathpandurage Chamara Charika Perera) – Currently pursuing a BSc (Hons) in Information Technology Specializing in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT). My journey in IT has given me both academic knowledge and practical industry experience, shaping me into a passionate developer who enjoys solving problems through technology.
              </p>

              <p>
                During my internship at Airport and Aviation Services (Sri Lanka) (Private) Limited, I gained hands-on experience in software and web development, system support, server management, and application deployment.
              </p>

              <p>
                I am a quick learner with strong creativity, problem-solving, teamwork, and leadership abilities, and I am passionate about advancing my career in software and web development, exploring emerging technologies such as cloud computing and AI/ML.
              </p>

              <p>
                My long-term goal is to grow as a skilled software engineer who can contribute to impactful IT solutions and innovative projects.
              </p>
            </div>

            {/* Download CV Action */}
            <div className="flex justify-center pt-7 mt-5 border-t border-zinc-100 dark:border-zinc-800/80">
              <a
                href="/Chamara_Perera_Resume.pdf"
                download
                className="px-7 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all flex items-center gap-2.5 group"
              >
                <span>Download Resume / CV</span>
                <FaDownload className="group-hover:translate-y-0.5 transition-transform text-xs" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
