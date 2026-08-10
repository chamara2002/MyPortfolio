import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCertificate, 
  FaAward, 
  FaExternalLinkAlt, 
  FaSearchPlus, 
  FaTimes, 
  FaCheckCircle, 
  FaCopy, 
  FaCheck,
  FaCalendarAlt,
  FaHashtag,
  FaBuilding
} from "react-icons/fa";
import { FaMicrosoft, FaBrain } from "react-icons/fa6";
import { SiFreecodecamp, SiPython, SiWordpress } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import CertificateModal from "./CertificateModal";

const certificationsData = [
  {
    id: "fc-csharp",
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp & Microsoft",
    date: "Nov 2024",
    credentialId: "fcce7f94354-4565-4bd5-bf9c-dcad742f23f4-fcswm",
    skills: ["C#", ".NET Framework"],
    image: "/certificates/Screenshot 2024-11-13 201439.png",
    verifyUrl: "https://freecodecamp.org/certification/fcce7f94354-4565-4bd5-bf9c-dcad742f23f4/foundational-c-sharp-with-microsoft",
    badgeColor: "from-blue-600 to-indigo-600",
    brandIcon: "microsoft"
  },
  {
    id: "uom-python",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "Sep 2024",
    credentialId: "pAiXQQlv7N",
    skills: ["Python (Programming Language)"],
    image: "/certificates/Python_for_Beginners_E-Certificate.png",
    verifyUrl: "https://open.uom.lk/verify",
    badgeColor: "from-emerald-600 to-teal-600",
    brandIcon: "python"
  },
  {
    id: "sliit-aiml",
    title: "AI/ML Engineer - Stage 1",
    issuer: "SLIIT (Faculty of Computing)",
    date: "Sep 2024",
    credentialId: "zlzzxbobqj",
    skills: ["Artificial Intelligence (AI)", "Machine Learning"],
    image: "/certificates/Chamara Perera - 2024-09-24.png",
    verifyUrl: "https://code.sliit.org/certificates/zlzzxbobqj",
    badgeColor: "from-purple-600 to-indigo-600",
    brandIcon: "ai"
  },
  {
    id: "alison-wordpress",
    title: "WordPress Fundamentals - Content Management System (CMS)",
    issuer: "Alison",
    date: "Sep 2024",
    credentialId: "AC-4478-42944508",
    skills: ["WordPress"],
    image: "/certificates/Alison_Certificate-4478-42944508.png",
    verifyUrl: "https://alison.com/certification/check/e362962cc8",
    badgeColor: "from-sky-600 to-blue-600",
    brandIcon: "wordpress"
  }
];

const renderBrandIcon = (type) => {
  switch (type) {
    case "microsoft":
      return (
        <div className="flex items-center gap-1.5">
          <TbBrandCSharp size={16} className="text-purple-600 dark:text-purple-400" />
        </div>
      );
    case "python":
      return <SiPython size={16} className="text-amber-500" />;
    case "wordpress":
      return <SiWordpress size={16} className="text-sky-500" />;
    case "ai":
      return <FaBrain size={16} className="text-purple-500" />;
    default:
      return <FaAward size={16} className="text-indigo-500" />;
  }
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyId = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certifications" className="py-20 relative bg-zinc-50 dark:bg-[#090d16] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
            Verified Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <FaCertificate className="text-indigo-600 dark:text-indigo-400" size={24} />
            <span>Licenses &amp; Certifications</span>
          </h2>
          <div className="w-10 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2.5" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-zinc-900/70 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/80 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Issuer Icon & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800/80 px-3 py-1 rounded-full text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60">
                    {renderBrandIcon(cert.brandIcon)}
                    <span className="truncate max-w-[180px] sm:max-w-none">{cert.issuer}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60 shrink-0">
                    <FaCalendarAlt size={10} />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Certificate Image Thumbnail Preview Container */}
                <div 
                  className="relative rounded-xl overflow-hidden mb-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 aspect-[16/10] cursor-pointer group/img"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover sm:object-contain bg-zinc-900/5 dark:bg-zinc-950/40 transition-transform duration-500 group-hover/img:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs">
                    <div className="px-3.5 py-1.5 rounded-lg bg-indigo-600/90 backdrop-blur-md flex items-center gap-2 shadow-lg">
                      <FaSearchPlus size={13} />
                      <span>View Certificate</span>
                    </div>
                  </div>
                </div>

                {/* Credential ID */}
                <div className="flex items-center justify-between gap-2 mb-3 bg-zinc-50 dark:bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <FaHashtag size={11} className="text-indigo-500 shrink-0" />
                    <span className="truncate font-semibold text-zinc-700 dark:text-zinc-300">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyId(cert.id, cert.credentialId);
                    }}
                    className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 flex items-center gap-1"
                    title="Copy Credential ID"
                  >
                    {copiedId === cert.id ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-500 font-sans font-bold">
                        <FaCheck size={11} /> Copied!
                      </span>
                    ) : (
                      <FaCopy size={12} />
                    )}
                  </button>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                >
                  <FaSearchPlus size={12} />
                  <span>Preview</span>
                </button>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white transition-all shadow-sm shadow-indigo-500/20"
                  >
                    <span>Verify</span>
                    <FaExternalLinkAlt size={10} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-200/60 dark:border-emerald-500/20">
                    <FaCheckCircle size={11} /> Verified
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Details Modal (Matching ProjectModal Design) */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
          onExpandScreenshot={(img, title) => setFullscreenImage({ img, title })}
        />
      )}

      {/* Full Screen Image Lightbox */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-[2000] p-4 bg-black/90 backdrop-blur-md flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[92vw] max-h-[92vh] flex flex-col items-center"
            >
              <div className="w-full flex items-center justify-between mb-3 text-white/80">
                <p className="text-xs font-medium">{fullscreenImage.title}</p>
                <button
                  onClick={() => setFullscreenImage(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close image"
                >
                  <FaTimes size={16} />
                </button>
              </div>
              <img
                src={fullscreenImage.img}
                alt={fullscreenImage.title}
                className="max-w-full max-h-[82vh] object-contain rounded-xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
