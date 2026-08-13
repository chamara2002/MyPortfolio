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
                I’m <strong className="text-zinc-900 dark:text-white font-semibold">Chamara Perera</strong> (Lathpandurage Chamara Charika Perera) – currently pursuing a BSc (Hons) in Information Technology, Specializing in Information Technology, at the Sri Lanka Institute of Information Technology (SLIIT). My journey in IT has given me both academic knowledge and practical industry experience, shaping me into a passionate developer who enjoys solving problems through technology.
              </p>

              <p>
                During my internship at Airport and Aviation Services (Sri Lanka) (Private) Limited, I gained hands-on experience in software and web development, system support, server management, and application deployment — working across Windows Server and Linux (Red Hat) environments, and managing applications in production using tools like Docker, Git, and PM2.
              </p>

              <p>
                I am a quick learner with strong creativity, problem-solving, teamwork, and leadership abilities, and I am passionate about advancing my career in software and web development, exploring emerging technologies such as cloud computing, DevOps practices, and AI/ML.
              </p>

              <p>
                My long-term goal is to grow as a skilled software engineer who can contribute to impactful IT solutions and innovative projects, while continuously building expertise in automation, deployment, and scalable system design.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
