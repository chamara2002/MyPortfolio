import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    title: "BSc (Hons) in Information Technology Specializing in Information Technology",
    place: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2023 – 2026 (Expected)",
  },
  {
    title: "GCE Advanced Level (A/L) - Technology Stream",
    place: "",
    period: "2021(2022)",
  },
  {
    title: "GCE Ordinary Level (O/L)",
    place: "",
    period: "2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-zinc-50 dark:bg-[#090d16] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Education
          </h2>
          <div className="w-10 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5" />
        </div>

        {/* Vertical Timeline Container */}
        <div className="w-full">
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8 space-y-10">
            {educationData.map((item, idx) => {
              const isCurrent = idx === 0;
              return (
                <motion.div 
                  key={idx} 
                  className="relative pl-7 sm:pl-9 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Indicator Node with Subtle Big and Small pulse */}
                  {isCurrent ? (
                    <motion.div
                      className="absolute -left-[17px] top-1.5 w-7 h-7 rounded-full bg-indigo-600 text-white dark:bg-indigo-500 border-2 border-white dark:border-[#090d16] ring-4 ring-indigo-200 dark:ring-indigo-900/60 flex items-center justify-center shadow-md z-20"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    >
                      <motion.span
                        className="absolute -inset-1 rounded-full border border-indigo-500 dark:border-indigo-400 pointer-events-none"
                        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                      />
                      <FaGraduationCap size={12} />
                    </motion.div>
                  ) : (
                    <div className="absolute -left-[17px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-500 dark:text-zinc-400 shadow-md group-hover:scale-110 transition-transform">
                      <FaGraduationCap size={12} />
                    </div>
                  )}

                  {/* Education Card */}
                  <div className="bg-white dark:bg-zinc-900/70 p-5 sm:p-7 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all group-hover:border-indigo-500/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border w-fit whitespace-nowrap shrink-0 ${
                        isCurrent
                          ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/60 dark:border-indigo-500/20"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200/60 dark:border-zinc-700/60"
                      }`}>
                        <FaCalendarAlt size={9} />
                        {item.period}
                      </span>
                    </div>

                    {item.place && (
                      <p className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                        <FaUniversity className="text-indigo-600 dark:text-indigo-400 shrink-0" size={13} />
                        <span>{item.place}</span>
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
