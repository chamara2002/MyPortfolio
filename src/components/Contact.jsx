import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Let's Connect</h2>
  <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
          {/* Left side: Contact Info Cards */}
          <div className="w-full flex flex-col items-center">
            <p className="text-gray-900 dark:text-gray-200 mb-8 text-lg max-w-md text-center">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className="flex flex-col gap-6 w-full max-w-md">
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-3 shadow-md w-full">
                <span className="text-blue-400 text-3xl">
                  {/* Email icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <div>
                  <div className="font-semibold text-lg">Email</div>
                     <a href="mailto:lccperera2002@gmail.com" className="text-gray-600 dark:text-gray-300 text-base break-all hover:underline">lccperera2002@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-3 shadow-md w-full">
                <span className="text-blue-400 text-3xl">
                  {/* Phone icon (alternate style) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0122 16.92z" /></svg>
                </span>
                <div>
                  <div className="font-semibold text-lg">Phone</div>
                     <a href="tel:+94785347037" className="text-gray-600 dark:text-gray-300 text-base hover:underline">+94 78 5347 037</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl p-3 shadow-md w-full">
                <span className="text-blue-400 text-3xl">
                  {/* Location icon (alternate style) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" /></svg>
                </span>
                <div>
                  <div className="font-semibold text-lg">Location</div>
                     <a href="https://www.google.com/maps/place/Kadawatha,+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 text-base hover:underline">Kadawatha, Sri Lanka</a>
                </div>
              </div>
            </div>
          </div>
          {/* Right side: Contact Form and Links */}
          {/*
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-end">
            <motion.form
              className="flex flex-col gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-lg"
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
                className="px-4 py-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
              />
              <motion.input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
              />
              <motion.textarea
                placeholder="Message"
                rows="5"
                className="px-4 py-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-1"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L15 22L11 13L2 9L22 2Z" /></svg>
              </motion.button>
            </motion.form>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
