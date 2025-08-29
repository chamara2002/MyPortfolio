import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Let's Connect</h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left side: Contact Info Cards */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
            <p className="text-gray-300 dark:text-gray-200 mb-8 text-lg max-w-md text-center md:text-left">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="flex flex-col gap-6 w-full max-w-md">
              <div className="flex items-center gap-4 bg-[#232a36] dark:bg-gray-800 text-white rounded-xl p-3 shadow-md w-full">
                <span className="text-blue-400 text-3xl">
                  {/* Email icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <div>
                  <div className="font-semibold text-lg">Email</div>
                  <div className="text-gray-300 text-base break-all">gallagepasinduhansana@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#232a36] dark:bg-gray-800 text-white rounded-xl p-3 shadow-md w-full">
                <span className="text-blue-400 text-3xl">
                  {/* Phone icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V4a2 2 0 012-2h2z" /></svg>
                </span>
                <div>
                  <div className="font-semibold text-lg">Phone</div>
                  <div className="text-gray-300 text-base">+94 74 160 5140</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[#232a36] dark:bg-gray-800 text-white rounded-xl p-3 shadow-md w-full">
                <span className="text-blue-400 text-3xl">
                  {/* Location icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657A8 8 0 103.343 3.343a8 8 0 0014.314 13.314z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <div>
                  <div className="font-semibold text-lg">Location</div>
                  <div className="text-gray-300 text-base">Elpitiya, Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right side: Contact Form and Links */}
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-end">
            <motion.form
              className="flex flex-col gap-6 bg-[#232a36] dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-lg"
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
                className="px-4 py-3 rounded bg-[#1a1f29] dark:bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
              />
              <motion.input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded bg-[#1a1f29] dark:bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
              />
              <motion.textarea
                placeholder="Message"
                rows="5"
                className="px-4 py-3 rounded bg-[#1a1f29] dark:bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
