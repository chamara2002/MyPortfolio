import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvgbzjgv");
  
  return (
    <section id="contact" className="py-20 relative bg-zinc-50 dark:bg-[#090d16] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <div className="w-10 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Contact Details & Social Links */}
          <div className="flex flex-col space-y-7">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Start a Conversation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            {/* Direct Contact Info Cards */}
            <div className="space-y-3.5">
              <a 
                href="mailto:lccperera2002@gmail.com" 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/80 shadow-sm hover:border-indigo-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-medium text-zinc-400 uppercase">Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    lccperera2002@gmail.com
                  </div>
                </div>
              </a>

              <a 
                href="tel:+94785347037" 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/80 shadow-sm hover:border-indigo-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                  <FaPhoneAlt size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-medium text-zinc-400 uppercase">Phone</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    +94 78 5347 037
                  </div>
                </div>
              </a>

              <a 
                href="https://www.google.com/maps/place/Kadawatha,+Sri+Lanka" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/80 shadow-sm hover:border-indigo-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-medium text-zinc-400 uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Kadawatha, Sri Lanka
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media Grid */}
            <div className="pt-1">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
                Social Profiles
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                <a href="https://github.com/chamara2002" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group">
                  <FaGithub size={16} className="text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/chamara-perera-04b2b3285/" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-indigo-500 transition-all group">
                  <FaLinkedin size={16} className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">LinkedIn</span>
                </a>

                <a href="https://web.facebook.com/chamara.perera.2002/" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-blue-500 transition-all group">
                  <FaFacebook size={16} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Facebook</span>
                </a>

                <a href="https://x.com/chamara__2002" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/90 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all group">
                  <FaXTwitter size={16} className="text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Twitter/X</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-zinc-900/70 p-6 sm:p-8 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-md">
            {state.succeeded ? (
              <div className="py-10 flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <FaCheckCircle size={28} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Message Sent!</h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-sm max-w-xs">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-mono font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-mono font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm transition-all"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-rose-500 text-xs mt-1 font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono font-semibold text-zinc-700 dark:text-zinc-300 uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows="4"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs sm:text-sm transition-all resize-none"
                    required
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-rose-500 text-xs mt-1 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                  {!state.submitting && (
                    <FaPaperPlane size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
