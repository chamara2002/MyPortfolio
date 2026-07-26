import React, { useState } from "react";
import * as SiIcons from "react-icons/si";
import { skills } from "../data/skills";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { label: "Programming Languages & Frameworks", key: "languages" },
  { label: "Databases",                          key: "databases" },
  { label: "DevOps & Tools",                     key: "devops"    },
  { label: "AI & Computer Vision",               key: "ai"        },
  { label: "UI/UX Design",                       key: "uiux"      },
  { label: "Other Technologies",                 key: "other"     },
  { label: "Soft Skills",                        key: "soft"      },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  const visibleSkills = skills.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Skills &amp; Expertise
        </h2>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full font-medium text-sm focus:outline-none transition-all border
                ${activeTab === tab.key
                  ? "bg-blue-700 text-white dark:bg-blue-500 border-blue-700 dark:border-blue-400 shadow"
                  : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                }`}
              style={{ boxShadow: activeTab === tab.key ? "0 0 0 2px #38bdf8" : undefined }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {visibleSkills.map((skill, idx) => {
              const Icon = SiIcons[skill.icon];
              return (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow group cursor-default"
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 20,
                    delay: idx * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/40 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/60 transition-colors">
                    {Icon ? (
                      <Icon className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    ) : (
                      <span className="text-xs font-bold text-blue-500 dark:text-blue-400 leading-none text-center">
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {skill.name}
                    </p>
                    {skill.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                        {skill.description}
                      </p>
                    )}
                  </div>
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
