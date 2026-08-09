import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaCheckCircle,
  FaLayerGroup,
  FaBuilding,
} from "react-icons/fa";

const normalize = (s) =>
  typeof s === "object" && s !== null ? s : { src: s, caption: "" };

const ScreenshotGallery = ({ screenshots, projectName, logo, onExpand }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const hasScreenshots = screenshots && screenshots.length > 0;
  const items = hasScreenshots ? screenshots.map(normalize) : [];

  const prev = (e) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrent((c) => (c - 1 + items.length) % items.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setDirection(1);
    setCurrent((c) => (c + 1) % items.length);
  };

  if (!hasScreenshots) {
    if (logo) {
      return (
        <div className="relative w-full h-52 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
          <img
            src={logo} alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 opacity-30 blur-xl"
          />
          <div className="relative z-10 p-3 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700 shadow-md backdrop-blur-md">
            <img src={logo} alt={`${projectName} logo`} className="h-20 w-20 object-contain rounded-xl" />
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-52 rounded-xl flex flex-col items-center justify-center border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 gap-2">
        <FaLayerGroup size={20} className="text-zinc-300 dark:text-zinc-600" />
        <span className="text-zinc-400 dark:text-zinc-500 text-[11px] font-mono">No screenshots available</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900">
      <div className="relative w-full h-60 sm:h-68 group/gal">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            custom={direction}
            variants={{
              enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
            }}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.32, ease: "easeInOut" }}
            src={items[current].src}
            alt={items[current].caption || `${projectName} screenshot ${current + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "top" }}
            draggable={false}
          />
        </AnimatePresence>

        <button
          onClick={(e) => { e.stopPropagation(); onExpand && onExpand(screenshots, current); }}
          className="absolute inset-0 z-[5] flex items-center justify-center bg-black/0 hover:bg-black/25 transition-colors cursor-zoom-in w-full"
          aria-label="Expand screenshot"
        >
          <div className="opacity-0 group-hover/gal:opacity-100 transition-opacity bg-black/60 rounded-full p-2.5 backdrop-blur-sm text-white">
            <FaExpand size={14} />
          </div>
        </button>

        {items.length > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-opacity backdrop-blur-sm">
              <FaChevronLeft size={11} />
            </button>
            <button onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-opacity backdrop-blur-sm">
              <FaChevronRight size={11} />
            </button>
            <div className="absolute top-2.5 right-2.5 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/10">
              {current + 1} / {items.length}
            </div>
          </>
        )}
      </div>

      <AnimatePresence mode="wait">
        {items[current].caption && (
          <motion.div
            key={current + "-caption"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="px-3.5 py-2.5 flex items-center gap-2.5 bg-zinc-900 border-t border-zinc-800"
          >
            <span className="text-indigo-400 font-mono text-[11px] font-bold shrink-0">{current + 1}.</span>
            <p className="text-zinc-300 text-xs leading-relaxed">{items[current].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {items.length > 1 && (
        <div className="flex justify-center gap-1 py-2 bg-zinc-950">
          {items.map((_, i) => (
            <button key={i}
              onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={"h-1 rounded-full transition-all " + (i === current ? "bg-indigo-400 w-4" : "bg-zinc-700 w-1")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectModal = ({ project, onClose, onExpandScreenshot }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1500] flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

        <motion.div
          className="relative z-10 w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl shadow-2xl bg-white dark:bg-[#0f172a] border border-zinc-200 dark:border-zinc-800"
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="p-6 sm:p-7 relative">
            <button onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400 transition-colors border border-zinc-200 dark:border-zinc-700"
              aria-label="Close">
              <FaTimes size={13} />
            </button>

            <div className="mb-5 pr-8">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                {project.association && (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                    <FaBuilding size={9} />
                    {project.association}
                  </span>
                )}
                {project.duration && (
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
                    <FaCalendarAlt size={9} />
                    {project.duration}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
                {project.name}
              </h2>
            </div>

            <div className="mb-6">
              <ScreenshotGallery
                screenshots={project.screenshots}
                projectName={project.name}
                logo={project.logo}
                onExpand={onExpandScreenshot}
              />
            </div>

            <div className="mb-6">
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1.5">Overview</h3>
              <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2.5">Key Features</h3>
                <ul className="grid sm:grid-cols-1 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <FaCheckCircle size={13} className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-7">
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2.5">Technologies Used</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span key={i}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-3.5 border-t border-zinc-200 dark:border-zinc-800">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-zinc-900 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-800">
                  <FaGithub size={15} />
                  View GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/20">
                  <FaExternalLinkAlt size={12} />
                  Live Demo
                </a>
              )}
              {!project.github && !project.demo && (
                <span className="text-zinc-400 dark:text-zinc-500 text-xs italic font-mono py-1.5">Internal / Proprietary Project</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
