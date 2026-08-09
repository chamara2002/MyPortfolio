import React, { useState, useEffect, useCallback } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaExpand, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

/* ─── Lightbox Modal ─────────────────────────────────────── */
const Lightbox = ({ screenshots, projectName, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState(1);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % screenshots.length);
  }, [screenshots.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center max-w-[92vw] max-h-[92vh]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="w-full flex items-center justify-between mb-3 text-white/80">
            <p className="text-xs font-medium">
              {projectName} <span className="text-white/40 ml-2 font-mono">{current + 1} / {screenshots.length}</span>
            </p>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <FaTimes size={16} />
            </button>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black/40 border border-white/10" style={{ maxWidth: "90vw", maxHeight: "80vh" }}>
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                src={typeof screenshots[current] === 'object' ? screenshots[current].src : screenshots[current]}
                alt={typeof screenshots[current] === 'object' && screenshots[current].caption ? screenshots[current].caption : `${projectName} screenshot ${current + 1}`}
                className="block max-w-[90vw] max-h-[80vh] object-contain rounded-2xl"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {screenshots.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-[-3.5rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-colors"
                aria-label="Previous screenshot"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                onClick={next}
                className="absolute right-[-3.5rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-md transition-colors"
                aria-label="Next screenshot"
              >
                <FaChevronRight size={14} />
              </button>

              <div className="flex gap-2 mt-4">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`h-1.5 rounded-full transition-all ${i === current ? "bg-indigo-400 w-5" : "bg-white/30 w-1.5"}`}
                    aria-label={`Go to screenshot ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ScreenshotCarousel = ({ screenshots, projectName, logo, onImageClick }) => {
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
    if (logo) {
      return (
        <div className="relative w-full h-48 rounded-xl mb-3.5 overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 group/logo flex items-center justify-center">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 opacity-30 blur-xl"
          />
          <div className="relative z-10 p-2.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-700/80 shadow-md backdrop-blur-md transition-transform duration-300 group-hover/logo:scale-105">
            <img
              src={logo}
              alt={`${projectName} logo`}
              className="h-16 w-16 object-contain rounded-lg"
              onError={(e) => {
                e.currentTarget.parentElement.innerHTML =
                  '<span class="text-xs text-zinc-400 font-mono">Project</span>';
              }}
            />
          </div>
        </div>
      );
    }
    return (
      <div
        className="w-full h-48 rounded-xl mb-3.5 flex items-center justify-center border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/40"
      >
        <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">No screenshot preview</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-48 mb-3.5 rounded-xl overflow-hidden group/carousel border border-zinc-200 dark:border-zinc-800 bg-zinc-900">
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
          src={typeof screenshots[current] === 'object' ? screenshots[current].src : screenshots[current]}
          alt={typeof screenshots[current] === 'object' && screenshots[current].caption ? screenshots[current].caption : `${projectName} screenshot ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "top" }}
          draggable={false}
        />
      </AnimatePresence>

      <div
        onClick={(e) => { e.stopPropagation(); onImageClick && onImageClick(current); }}
        className="absolute inset-0 z-[5] flex items-center justify-center cursor-zoom-in bg-black/0 hover:bg-black/25 transition-colors group/expand"
      >
        <div className="opacity-0 group-hover/expand:opacity-100 transition-opacity bg-black/60 rounded-full p-2 backdrop-blur-sm text-white">
          <FaExpand size={12} />
        </div>
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm"
            aria-label="Previous screenshot"
          >
            <FaChevronLeft size={10} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity backdrop-blur-sm"
            aria-label="Next screenshot"
          >
            <FaChevronRight size={10} />
          </button>

          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1 z-10">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-1 rounded-full transition-all ${i === current ? "bg-white w-3.5" : "bg-white/40 w-1"}`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur-md text-white text-[9px] font-mono px-1.5 py-0.5 rounded border border-white/10">
            {current + 1}/{screenshots.length}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [lightbox, setLightbox] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openLightbox = (screenshots, projectName, startIndex) => {
    if (screenshots && screenshots.length > 0) {
      setLightbox({ screenshots, projectName, startIndex });
    }
  };

  return (
    <>
      {lightbox && (
        <Lightbox
          screenshots={lightbox.screenshots}
          projectName={lightbox.projectName}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onExpandScreenshot={(screenshots, startIndex) =>
            openLightbox(screenshots, selectedProject.name, startIndex)
          }
        />
      )}

      <section id="projects" className="py-20 relative bg-zinc-50 dark:bg-[#090d16] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col items-center mb-14 text-center">
            <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
              Portfolio Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-10 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5" />
          </div>

          {/* Cards Grid: 2 projects per line */}
          <motion.div
            className="grid gap-7 grid-cols-1 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-zinc-900/70 rounded-2xl p-5 border border-zinc-200/90 dark:border-zinc-800/80 shadow-sm hover:shadow-lg hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <div>
                  <ScreenshotCarousel
                    screenshots={project.screenshots}
                    projectName={project.name}
                    logo={project.logo}
                    onImageClick={(imgIdx) => {
                      openLightbox(project.screenshots, project.name, imgIdx);
                    }}
                  />

                  <div
                    className="cursor-pointer flex flex-col"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      {project.association && (
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-500/20">
                          {project.association}
                        </span>
                      )}
                      {project.duration && (
                        <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                          {project.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-zinc-600 dark:text-zinc-300 text-xs sm:text-xs mb-3.5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 5).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-[11px] font-mono font-medium border border-zinc-200/60 dark:border-zinc-700/60">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded text-[11px] font-mono">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-zinc-100 dark:border-zinc-800/80 mt-auto">
                  <div className="flex items-center gap-2.5">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-0.5"
                        aria-label="GitHub Repo">
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-0.5"
                        aria-label="Live Demo">
                        <FaExternalLinkAlt size={13} />
                      </a>
                    )}
                  </div>
                  <button
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors flex items-center gap-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details <FaArrowRight size={9} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Projects;
