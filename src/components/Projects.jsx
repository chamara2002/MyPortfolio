import React, { useState } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScreenshotCarousel = ({ screenshots, projectName }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const hasScreenshots = screenshots && screenshots.length > 0;

  const prev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrent((c) => (c + 1) % screenshots.length);
  };

  if (!hasScreenshots) {
    return (
      <div
        className="w-full h-44 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700/50"
        title="Add screenshots to projects.js"
      >
        <div className="text-center">
          <svg className="mx-auto mb-1 text-gray-400 dark:text-gray-500" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs text-gray-400 dark:text-gray-500">No screenshot</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-44 mb-4 rounded-lg overflow-hidden group/carousel border border-gray-200 dark:border-gray-700">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          custom={direction}
          variants={{
            enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          src={screenshots[current]}
          alt={`${projectName} screenshot ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "top" }}
          draggable={false}
        />
      </AnimatePresence>

      {/* Prev / Next arrows — only show when multiple images */}
      {screenshots.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Previous screenshot"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity"
            aria-label="Next screenshot"
          >
            <FaChevronRight size={12} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-3" : "bg-white/50"}`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter badge */}
          <div className="absolute top-2 right-2 z-10 bg-black/40 text-white text-xs px-1.5 py-0.5 rounded">
            {current + 1} / {screenshots.length}
          </div>
        </>
      )}
    </div>
  );
};

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
                <ScreenshotCarousel
                  screenshots={project.screenshots}
                  projectName={project.name}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                {project.association && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1 font-medium">
                    {project.association}
                  </p>
                )}
                {project.duration && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.duration}
                  </p>
                )}
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
