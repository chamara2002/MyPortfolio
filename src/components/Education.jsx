import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "B.Sc. (Hons) in IT",
    place: "Sri Lanka Institute of Information Technology",
    period: "2022–Present",
  },
  {
    title: "GCE A/L Technology Stream",
    place: "",
    period: "2021/2022",
  },
  {
    title: "GCE O/L",
    place: "",
    period: "2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Education</h2>
        <motion.div
          className="relative border-l-2 border-blue-400 dark:border-blue-600 ml-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
                delayChildren: 0.2
              }
            }
          }}
          viewport={{ once: true }}
        >
          {educationData.map((item, idx) => {
            const isCurrent = idx === 0;
            return (
              <motion.div
                key={idx}
                className={`mb-10 ml-6 relative ${isCurrent ? 'z-10' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: 'spring', stiffness: 70 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`absolute w-4 h-4 bg-blue-400 dark:bg-blue-600 rounded-full -left-2 border-4 border-white dark:border-gray-950 ${isCurrent ? 'ring-4 ring-blue-300 dark:ring-blue-700' : ''}`}
                  animate={isCurrent ? { scale: [1, 1.15, 1], boxShadow: [
                    '0 0 0 0 rgba(59,130,246,0.5)',
                    '0 0 0 8px rgba(59,130,246,0.2)',
                    '0 0 0 0 rgba(59,130,246,0.5)'] } : {}}
                  transition={isCurrent ? { repeat: Infinity, duration: 2, ease: 'easeInOut' } : {}}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                {item.place && <p className="text-gray-700 dark:text-gray-300">{item.place}</p>}
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
