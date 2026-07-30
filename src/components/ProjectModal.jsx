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

/* ─── Helper: normalize screenshot to {src, caption} ─────── */
const normalize = (s) =>
  typeof s === "object" && s !== null ? s : { src: s, caption: "" };

/* ─── Screenshot Gallery (no internal lightbox) ─────────── */
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
        <div className="relative w-full h-52 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
          <img
            src={logo} alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ filter: "blur(20px) saturate(1.8) brightness(0.5)" }}
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="rounded-2xl p-2"
              style={{ background: "rgba(255,255,255,0.08)", boxShadow: "0 0 0 2px rgba(255,255,255,0.18), 0 8px 48px rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
              <img src={logo} alt={`${projectName} logo`} className="h-28 w-28 object-contain rounded-xl"
                style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.5))" }} />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-52 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 gap-2">
        <FaLayerGroup size={28} className="text-gray-300 dark:text-white/20" />
        <span className="text-gray-400 dark:text-white/30 text-sm">No screenshots available</span>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10">
      {/* Image area */}
      <div className="relative w-full h-52 group/gal">
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

        {/* Expand button — fires onExpand callback (top-level fullscreen lightbox) */}
        <button
          onClick={(e) => { e.stopPropagation(); onExpand && onExpand(screenshots, current); }}
          className="absolute inset-0 z-[5] flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors cursor-zoom-in w-full"
          aria-label="Expand screenshot"
        >
          <div className="opacity-0 group-hover/gal:opacity-100 transition-opacity bg-black/50 rounded-full p-3">
            <FaExpand size={18} className="text-white" />
          </div>
        </button>

        {/* Arrows */}
        {items.length > 1 && (
          <>
            <button onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-opacity">
              <FaChevronLeft size={12} />
            </button>
            <button onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-opacity">
              <FaChevronRight size={12} />
            </button>
            <div className="absolute top-3 right-3 z-10 bg-black/50 text-white text-xs px-2 py-0.5 rounded-md">
              {current + 1} / {items.length}
            </div>
          </>
        )}
      </div>

      {/* Caption bar */}
      <AnimatePresence mode="wait">
        {items[current].caption && (
          <motion.div
            key={current + "-caption"}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2.5 flex items-center gap-3 bg-gray-50 dark:bg-[rgba(10,14,26,0.9)] border-t border-indigo-500/15"
          >
            <span className="text-indigo-600 dark:text-indigo-400/70 text-xs font-bold shrink-0">{current + 1}</span>
            <p className="text-gray-600 dark:text-white/65 text-xs leading-snug">{items[current].caption}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dot strip */}
      {items.length > 1 && (
        <div className="flex justify-center gap-1.5 py-2 bg-gray-50 dark:bg-[rgba(10,14,26,0.85)]">
          {items.map((_, i) => (
            <button key={i}
              onClick={(e) => { e.stopPropagation(); setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={"w-1.5 h-1.5 rounded-full transition-all " + (i === current ? "bg-indigo-500 dark:bg-indigo-400 w-4" : "bg-gray-300 dark:bg-white/30")}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Main Modal ─────────────────────────────────────────── */
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

  /* Detect current theme from documentElement */
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1500] flex items-center justify-center p-4 md:p-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

        {/* Panel */}
        <motion.div
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl
            bg-white dark:bg-transparent
            border border-gray-200 dark:border-indigo-500/22"
          style={{
            ...(isDark ? {
              background: "linear-gradient(145deg, rgba(15,23,42,0.98) 0%, rgba(25,35,55,0.98) 100%)",
            } : {}),
            boxShadow: isDark
              ? "0 0 0 1px rgba(99,102,241,0.10), 0 32px 80px rgba(0,0,0,0.65), 0 0 100px rgba(99,102,241,0.07)"
              : "0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(99,102,241,0.08)",
          }}
          initial={{ scale: 0.88, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Accent bar */}
          <div className="h-1 w-full rounded-t-2xl"
            style={{ background: "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #3b82f6 100%)" }} />

          <div className="p-6 md:p-8">
            {/* Close button */}
            <button onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full
                bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800
                dark:bg-white/5 dark:hover:bg-white/15 dark:text-white/60 dark:hover:text-white
                transition-all border border-gray-200 dark:border-white/10"
              aria-label="Close">
              <FaTimes size={14} />
            </button>

            {/* ── Header ── */}
            <div className="mb-5">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {project.association && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold
                    bg-indigo-100 text-indigo-700 border border-indigo-200
                    dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/20">
                    <FaBuilding size={9} />
                    {project.association}
                  </span>
                )}
                {project.duration && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                    bg-gray-100 text-gray-500 border border-gray-200
                    dark:bg-white/5 dark:text-white/50 dark:border-white/10">
                    <FaCalendarAlt size={9} />
                    {project.duration}
                  </span>
                )}
              </div>
              <h2 className="text-2xl md:text-[1.7rem] font-bold text-gray-900 dark:text-white leading-tight pr-10">
                {project.name}
              </h2>
            </div>

            {/* ── Screenshots + captions ── */}
            <div className="mb-6">
              <ScreenshotGallery
                screenshots={project.screenshots}
                projectName={project.name}
                logo={project.logo}
                onExpand={onExpandScreenshot}
              />
            </div>

            {/* ── About ── */}
            <div className="mb-6">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400/70 mb-3">About</h3>
              <p className="text-gray-700 dark:text-white/75 text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* ── Key Features ── */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400/70 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <motion.li key={i}
                      className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-white/70"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}>
                      <FaCheckCircle size={13} className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── Tech Stack ── */}
            <div className="mb-8">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400/70 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <motion.span key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold border
                      bg-indigo-50 border-indigo-200 text-indigo-700
                      dark:bg-indigo-500/12 dark:border-indigo-500/28 dark:text-indigo-300"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}>
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ── Action Buttons ── */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100 dark:border-white/8">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95
                    bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300
                    dark:bg-transparent dark:text-white dark:border-white/12 dark:hover:bg-white/5"
                  style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
                  <FaGithub size={16} />
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
                  style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", boxShadow: "0 4px 16px rgba(99,102,241,0.35)" }}>
                  <FaExternalLinkAlt size={13} />
                  Live Demo
                </a>
              )}
              {!project.github && !project.demo && (
                <span className="text-gray-400 dark:text-white/30 text-sm italic py-2">No public links available for this project</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
