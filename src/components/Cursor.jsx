import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px), (pointer: coarse)").matches);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, [role=button], input[type=button], input[type=submit], [data-hover]")
      ) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    if (!isMobile) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseover", onMouseOver);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [hidden, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-indigo-500/60 dark:border-indigo-400/60 bg-indigo-500/5 mix-blend-difference"
        animate={{
          x: position.x - (linkHovered ? 24 : 16),
          y: position.y - (linkHovered ? 24 : 16),
          width: linkHovered ? 48 : 32,
          height: linkHovered ? 48 : 32,
          scale: clicked ? 0.8 : 1,
          opacity: hidden ? 0 : 0.85,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.2,
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 pointer-events-none z-50"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 1.5 : linkHovered ? 0 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
        }}
      />
    </>
  );
};

export default Cursor;
