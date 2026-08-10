import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaTimes,
  FaCalendarAlt,
  FaExpand,
  FaCheckCircle,
  FaCopy,
  FaCheck,
  FaHashtag,
  FaAward
} from "react-icons/fa";
import { FaMicrosoft, FaBrain } from "react-icons/fa6";
import { SiFreecodecamp, SiPython, SiWordpress } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const renderBrandIcon = (type) => {
  switch (type) {
    case "microsoft":
      return (
        <div className="flex items-center gap-1 text-indigo-500">
          <TbBrandCSharp size={14} className="text-purple-600 dark:text-purple-400" />
        </div>
      );
    case "python":
      return <SiPython size={14} className="text-amber-500" />;
    case "wordpress":
      return <SiWordpress size={14} className="text-sky-500" />;
    case "ai":
      return <FaBrain size={14} className="text-purple-500" />;
    default:
      return <FaAward size={14} className="text-indigo-500" />;
  }
};

const CertificateModal = ({ cert, onClose, onExpandScreenshot }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleCopyId = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!cert) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1500] flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
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
            {/* Top Right Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-400 transition-colors border border-zinc-200 dark:border-zinc-700"
              aria-label="Close"
            >
              <FaTimes size={13} />
            </button>

            {/* Header Badges & Title */}
            <div className="mb-5 pr-8">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                  {renderBrandIcon(cert.brandIcon)}
                  <span>{cert.issuer}</span>
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
                  <FaCalendarAlt size={9} />
                  <span>Issued {cert.date}</span>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
                {cert.title}
              </h2>
            </div>

            {/* Certificate Image View Box */}
            <div
              className="mb-6 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 relative group/img cursor-zoom-in"
              onClick={() => onExpandScreenshot && onExpandScreenshot(cert.image, cert.title)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto max-h-[380px] object-contain mx-auto bg-zinc-950/60 p-2"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center pointer-events-none">
                <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/60 rounded-full p-2.5 backdrop-blur-sm text-white flex items-center gap-2 text-xs font-medium">
                  <FaExpand size={13} />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>

            {/* Credential Details Section */}
            <div className="mb-6">
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2.5">
                Credential Details
              </h3>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-2 overflow-hidden">
                  <FaHashtag size={12} className="text-indigo-500 shrink-0" />
                  <span className="truncate font-semibold">
                    ID: {cert.credentialId}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyId(cert.credentialId)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors shrink-0 flex items-center gap-1.5 text-xs font-sans font-medium"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-500 font-bold">
                      <FaCheck size={11} /> Copied!
                    </span>
                  ) : (
                    <>
                      <FaCopy size={11} /> Copy ID
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Skills Covered Section */}
            <div className="mb-7">
              <h3 className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2.5">
                Skills Covered
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3.5 border-t border-zinc-200 dark:border-zinc-800">
              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-500/20"
                >
                  <span>Verify Credential</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-500/20">
                  <FaCheckCircle size={12} /> Verified Credential
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertificateModal;
