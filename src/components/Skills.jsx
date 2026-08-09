import React, { useState } from "react";
import * as SiIcons from "react-icons/si";
import { skills } from "../data/skills";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { label: "Languages & Frameworks", key: "languages" },
  { label: "Databases",               key: "databases" },
  { label: "DevOps & Tools",          key: "devops"    },
  { label: "AI & Vision",             key: "ai"        },
  { label: "UI/UX Design",            key: "uiux"      },
  { label: "Other Tech",              key: "other"     },
  { label: "Soft Skills",             key: "soft"      },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);

  const visibleSkills = skills.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 relative bg-zinc-50 dark:bg-[#090d16] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
            Capabilities &amp; Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Skills &amp; Expertise
          </h2>
          <div className="w-10 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5" />
        </div>

        {/* Tab Buttons Strip */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-3.5 py-1.5 rounded-xl font-medium text-xs transition-all focus:outline-none ${
                  isActive 
                    ? "text-white font-semibold" 
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/90 dark:border-zinc-800/80"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-xl shadow-md z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid with Clean Small Spacing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {visibleSkills.map((skill, idx) => {
              const Icon = SiIcons[skill.icon];
              return (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  className="flex items-start gap-3 bg-white dark:bg-zinc-900/70 p-3.5 sm:p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: idx * 0.03,
                  }}
                >
                  {/* Icon Badge */}
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                    {Icon ? (
                      <Icon className="w-3.5 h-3.5" />
                    ) : (
                      <span className="text-[10px] font-mono font-bold">
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  {/* Skill Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </h3>
                    {skill.description && (
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed line-clamp-2">
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
