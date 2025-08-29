import React from "react";
import * as SiIcons from "react-icons/si";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, idx) => {
            const Icon = SiIcons[skill.icon];
            return (
              <div
                key={idx}
                className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition-shadow group"
              >
                {Icon && <Icon className="w-10 h-10 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />}
                <span className="text-gray-900 dark:text-white font-medium text-sm mt-1">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
