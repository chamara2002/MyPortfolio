import React, { useState } from "react";
import * as SiIcons from "react-icons/si";
import { skills } from "../data/skills";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  // Define skill categories
  const [activeTab, setActiveTab] = useState("General Skills");
  const coreSkills = ["React", "Node.js"];
  // You may want to update your skills.js to include a 'category' property for each skill
  const categorizedSkills = {
    "Coding Skills": skills.filter(skill => skill.category === "coding"),
    "Professional Skills": skills.filter(skill => skill.category === "professional"),
    "General Skills": skills.filter(skill => skill.category === "general"),
  };

  const tabList = ["Coding Skills", "Professional Skills", "General Skills"];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Skills & Expertise</h2>
  {/* Tabs */}
  <div className="flex justify-center space-x-2 mb-8">
          {tabList.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium focus:outline-none transition-all relative
                ${activeTab === tab
                  ? 'bg-blue-500 text-white shadow border border-white dark:border-gray-900'
                  : 'bg-gray-900/80 dark:bg-gray-800/80 text-gray-300 dark:text-gray-300 hover:bg-gray-800/90'}
              `}
              style={{
                boxShadow: activeTab === tab ? '0 0 0 2px #38bdf8' : undefined,
                border: activeTab === tab ? '2px solid #fff' : undefined
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Skills Grid with tab switch animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {categorizedSkills[activeTab].map((skill, idx) => {
              const Icon = SiIcons[skill.icon];
              return (
                <motion.div
                  key={idx}
                  className={"flex flex-col items-start bg-white dark:bg-gray-800 rounded-lg shadow p-5 hover:shadow-lg transition-shadow group"}
                  style={{ minHeight: '120px', minWidth: '260px', width: '100%', border: 'none', boxShadow: 'none' }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  whileHover={{ scale: 1.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    {Icon && <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.1 * idx }}
                    >
                      <Icon className="w-6 h-6 text-blue-500 mr-2 group-hover:scale-110 transition-transform" />
                    </motion.div>}
                    <span className="text-gray-900 dark:text-white font-semibold text-base">{skill.name}</span>
                  </div>
                  {skill.description && <span className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</span>}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
