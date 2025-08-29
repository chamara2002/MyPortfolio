import React from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Projects</h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col justify-between border border-transparent hover:border-blue-400 dark:hover:border-blue-500 group"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.10)' }}
              viewport={{ once: true }}
            >
              <div>
                {project.screenshot && (
                  <img
                    src={require(`../assets/${project.screenshot}`)}
                    alt={project.name + ' screenshot'}
                    className="w-full h-40 object-cover rounded mb-4 border border-gray-200 dark:border-gray-700"
                  />
                )}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl">
                    <FaGithub />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-xl">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
