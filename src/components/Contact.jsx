import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgbzjgv");
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">Let's Connect</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left side: Contact Info Cards */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-md w-full">
              <p className="text-gray-900 dark:text-gray-200 text-lg mb-8">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                  <span className="text-blue-400">
                    {/* Email icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:lccperera2002@gmail.com" className="text-gray-600 dark:text-gray-300 text-sm hover:underline">lccperera2002@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                  <span className="text-blue-400">
                    {/* Phone icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+94785347037" className="text-gray-600 dark:text-gray-300 text-sm hover:underline">+94 78 5347 037</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                  <span className="text-blue-400">
                    {/* Location icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold">Location</div>
                    <a href="https://www.google.com/maps/place/Kadawatha,+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 text-sm hover:underline">Kadawatha, Sri Lanka</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Contact Form */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {state.succeeded ? (
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
                <div className="text-green-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md w-full">
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 w-full"
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
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 70 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-3 py-3 rounded-md bg-gray-100 dark:bg-gray-900 border-0 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    required
                  />
                </motion.div>
                
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 70 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-3 rounded-md bg-gray-100 dark:bg-gray-900 border-0 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </motion.div>
                
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 70 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows="4"
                    className="w-full px-3 py-3 rounded-md bg-gray-100 dark:bg-gray-900 border-0 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-xs mt-1"
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full mt-2 px-4 py-2.5 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 70 }}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  {!state.submitting && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </motion.button>
              </motion.form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
