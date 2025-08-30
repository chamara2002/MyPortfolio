import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-2">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">About Me</h2>
        <motion.div
          className="flex flex-col items-center gap-10 p-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Info Section Only */}
          <div className="w-full mt-0">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              I’m Chamara Perera (Lathpandurage Chamara Charika Perera) – Software & Web Developer, and IT Undergraduate, currently pursuing a B.Sc. (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT). My journey in IT has given me both academic knowledge and practical industry experience, shaping me into a passionate developer who enjoys solving problems through technology.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              During my internship at Airport and Aviation Services (Sri Lanka) (Private) Limited, I gained hands-on experience in software and web development, system support, server management, and application deployment.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              I am a quick learner with strong creativity, problem-solving, teamwork, and leadership abilities, and I am passionate about advancing my career in software and web development, exploring emerging technologies such as cloud computing and AI/ML.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              My long-term goal is to grow as a skilled software engineer who can contribute to impactful IT solutions and innovative projects.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-sm">
            </div>
          </div>
          {/* Download CV Button */}
          <div className="flex justify-center mt-8">
            <a
              href="/Chamara_Perera_Resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Download CV
              <FaDownload className="ml-2 text-lg" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
