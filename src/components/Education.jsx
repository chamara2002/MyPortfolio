import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

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
        <div className="relative border-l-2 border-blue-400 dark:border-blue-600 ml-4">
          {educationData.map((item, idx) => {
            const isCurrent = idx === 0;
            const controls = useAnimation();
            useEffect(() => {
              if (isCurrent) {
                controls.start({ scale: [1, 0.7, 1] });
              }
            }, [controls, isCurrent]);
            return (
              <div key={idx} className="mb-12 ml-8 relative group">
                {isCurrent ? (
                  <motion.div
                    className="absolute w-6 h-6 bg-gradient-to-tr from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-400 rounded-full -left-8 top-2 border-4 border-white dark:border-gray-950 ring-4 ring-blue-200 dark:ring-blue-800 z-20 shadow-lg"
                    animate={controls}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  />
                ) : (
                  <div className="absolute w-5 h-5 bg-blue-300 dark:bg-blue-700 rounded-full -left-7 top-2 border-4 border-white dark:border-gray-950 z-10 shadow"></div>
                )}
                <div className="pl-2 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-blue-100 dark:border-blue-900 hover:scale-[1.025] transition-transform">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  {item.place && <p className="text-gray-700 dark:text-gray-300 mb-1">{item.place}</p>}
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
