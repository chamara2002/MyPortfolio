import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Contact</h2>
        <motion.form
          className="flex flex-col gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.13,
                delayChildren: 0.2
              }
            }
          }}
          viewport={{ once: true }}
        >
          <motion.input
            type="text"
            placeholder="Name"
            className="px-4 py-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          />
          <motion.textarea
            placeholder="Message"
            rows="5"
            className="px-4 py-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.07 }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          >
            Send Message
          </motion.button>
        </motion.form>
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
              }
            }
          }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="mailto:your@email.com"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          >
            Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
