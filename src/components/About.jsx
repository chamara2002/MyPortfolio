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
              Hello! I’m Chamara Perera (Lathpandurage Chamara Charika Perera), an undergraduate pursuing a B.Sc. (Hons) in Information Technology at the Sri Lanka Institute of Information Technology (SLIIT). I have hands-on experience as an IT trainee at Airport and Aviation Services (Sri Lanka) (Private) Limited, where I worked on software development, system support, server management, and application deployment.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              I’m passionate about software engineering and emerging technologies, with strong skills in Python, C, C++, C#, .NET, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL, along with experience using GitHub, Windows Server, Red Hat Linux, Docker, and WordPress. I also enjoy working on UI/UX design with Figma, ensuring that my solutions are both functional and user-friendly.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              Beyond technical expertise, I bring creativity, leadership, problem-solving, and teamwork abilities to everything I do. As a quick learner, I am always eager to explore new technologies, take on challenges, and grow as a professional.</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base">
              Currently, I am focused on enhancing my knowledge in cloud computing, AI/ML, and full-stack development, while working towards becoming a skilled and reliable software engineer who can contribute to impactful IT solutions.</p>
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
