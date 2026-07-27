import React, { useState, useEffect, useCallback } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaExpand, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
        className="fixed inset-0 z-[1000] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Image container */}
        <motion.div
          className="relative z-10 flex flex-col items-center max-w-[90vw] max-h-[90vh]"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors z-20"
            aria-label="Close lightbox"
          >
            <FaTimes size={22} />
          </button>

          {/* Caption */}
          <p className="absolute -top-10 left-0 text-white/70 text-sm font-medium">
            {projectName} &mdash; {current + 1} / {screenshots.length}
          </p>

          {/* Image with slide animation */}
          <div className="relative overflow-hidden rounded-xl shadow-2xl" style={{ maxWidth: "90vw", maxHeight: "80vh" }}>
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
                src={screenshots[current]}
                alt={`${projectName} screenshot ${current + 1}`}
                className="block max-w-[90vw] max-h-[80vh] object-contain rounded-xl"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Previous screenshot"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Next screenshot"
              >
                <FaChevronRight size={16} />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-4">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-5" : "bg-white/40"}`}
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
    // Show logo with blurred-logo background if provided, otherwise generic placeholder
    if (logo) {
      return (
        <div className="relative w-full h-44 rounded-lg mb-4 overflow-hidden border border-white/10 dark:border-white/5 group/logo">
          {/* Blurred logo background — fills the whole area with logo colors */}
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ filter: "blur(18px) saturate(1.6) brightness(0.72)" }}
          />
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Glowing ring + crisp logo on top */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div
              className="rounded-2xl p-1 transition-transform duration-300 group-hover/logo:scale-105"
              style={{
                background: "rgba(255,255,255,0.08)",
                boxShadow: "0 0 0 2px rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.35)",
                backdropFilter: "blur(6px)",
              }}
            >
              <img
                src={logo}
                alt={`${projectName} logo`}
                className="h-24 w-24 object-contain rounded-xl"
                style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.4))" }}
                onError={(e) => {
                  e.currentTarget.closest('.group\\/logo').innerHTML =
                    '<div class="flex flex-col items-center justify-center w-full h-full"><span class="text-xs text-white/60">No logo</span></div>';
                }}
              />
            </div>
          </div>
        </div>
      );
    }
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

      {/* Clickable expand overlay */}
      <div
        onClick={(e) => { e.stopPropagation(); onImageClick && onImageClick(current); }}
        className="absolute inset-0 z-[5] flex items-center justify-center cursor-zoom-in bg-black/0 hover:bg-black/20 transition-colors group/expand"
      >
        <div className="opacity-0 group-hover/expand:opacity-100 transition-opacity bg-black/50 rounded-full p-2">
          <FaExpand size={16} className="text-white" />
        </div>
      </div>

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
  const [lightbox, setLightbox] = useState(null); // { screenshots, projectName, startIndex }

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
                    logo={project.logo}
                    onImageClick={(idx) => openLightbox(project.screenshots, project.name, idx)}
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
    </>
  );
};

export default Projects;
