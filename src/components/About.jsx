import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              {/* Replace with your profile image */}
              {/* Example placeholder image, replace src with your own image if available */}
              <img
                src="https://ui-avatars.com/api/?name=Chamara+Perera&background=4B5563&color=fff&size=160"
                alt="Chamara Perera profile"
                className="w-full h-full object-cover rounded-full"
              />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I am Chamara Perera, an undergraduate IT student with hands-on experience as an IT trainee. During my internship, I gained practical knowledge in troubleshooting, system support, and working with various IT tools. I am a quick learner with a strong interest in software development and emerging technologies, seeking opportunities to enhance my skills and contribute to innovative IT projects.
          </p>
          <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-400 text-sm mb-2">
            <span><strong>Full Name:</strong> Lathpandurage Chamara Charika Perera</span>
            <span><strong>Location:</strong> Kadawatha, Sri Lanka</span>
            <span><strong>Phone:</strong> <a href="tel:+94785347037" className="hover:text-blue-600">+94 78 5347 037</a></span>
            <span><strong>Email:</strong> <a href="mailto:lccperera2002@gmail.com" className="hover:text-blue-600">lccperera2002@gmail.com</a></span>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/chamara2002" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/chamara-perera-04b2b3285" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href="mailto:lccperera2002@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
