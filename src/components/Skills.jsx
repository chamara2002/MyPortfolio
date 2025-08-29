import React from "react";
import * as SiIcons from "react-icons/si";
import { skills } from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  // Define core skills for highlight
  const coreSkills = ["React", "Node.js"];
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Skills</h2>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6"
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
          {skills.map((skill, idx) => {
            const Icon = SiIcons[skill.icon];
            const isCore = coreSkills.includes(skill.name);
            return (
              <motion.div
                key={idx}
                className={`flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition-shadow group ${isCore ? 'ring-2 ring-blue-400 dark:ring-blue-500' : ''}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                whileHover={isCore ? { scale: 1.12, boxShadow: '0 0 16px 2px #60a5fa' } : { scale: 1.08 }}
                viewport={{ once: true }}
              >
                {Icon && <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.1 * idx }}
                >
                  <Icon className="w-10 h-10 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                </motion.div>}
                <span className="text-gray-900 dark:text-white font-medium text-sm mt-1">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
