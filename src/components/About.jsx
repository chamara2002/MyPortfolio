import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto px-4">
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
              Hello! I’m Chamara Charika, an IT undergraduate and passionate software developer with a strong interest in building modern, user-friendly, and reliable applications. Over the past few years, I’ve gained experience working with technologies such as React.js, Node.js, Express.js, Python, and C#, while also exploring areas like Docker, cloud computing, and machine learning.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              I enjoy taking ideas and turning them into real-world solutions—whether it’s a full-stack web application, a research-based project, or a creative side experiment. My internship at AASL gave me valuable hands-on exposure, where I worked with WordPress and IT-related tasks, further strengthening my problem-solving and teamwork skills.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              Beyond coding, I’m someone who values leadership, collaboration, and continuous learning. I believe technology should not just work, but also create an impact—helping people and making everyday tasks easier.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              Currently, I’m focused on sharpening my skills, contributing to innovative projects, and growing into a reliable professional in the software industry.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">Full Name:</span>
                <span>Lathpandurage Chamara Charika Perera</span>
              </div>
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
