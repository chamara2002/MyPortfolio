import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile based on screen width
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is common breakpoint for mobile
    };

    // Run on initial load
    checkIfMobile();

    // Add resize listener
    window.addEventListener("resize", checkIfMobile);

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button], input[type=button], input[type=submit]").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setLinkHovered(true);
        });
        
        el.addEventListener("mouseleave", () => {
          setLinkHovered(false);
        });
      });
    };

    handleLinkHoverEvents();

    // Only add mouse event listeners if not on mobile
    if (!isMobile) {
      addEventListeners();
    }

    return () => {
      removeEventListeners();
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]); // Add isMobile as dependency

  // Create a delayed effect for the trailing element
  useEffect(() => {
    const trailingDelay = setTimeout(() => {
      setTrailingPosition(position);
    }, 100); // 100ms delay for trailing effect

    return () => clearTimeout(trailingDelay);
  }, [position]);

  const cursorOuterVariants = {
    default: {
      opacity: hidden ? 0 : 1,
      height: 32,
      width: 32,
      x: position.x - 16,
      y: position.y - 16,
      border: "2px solid rgba(255, 255, 255, 0.5)",
      backgroundColor: "transparent",
    },
    hover: {
      opacity: 1,
      height: 64,
      width: 64,
      x: position.x - 32,
      y: position.y - 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference",
    },
    click: {
      opacity: 1,
      height: 24,
      width: 24,
      x: position.x - 12,
      y: position.y - 12,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
  };

  const cursorInnerVariants = {
    default: {
      opacity: hidden ? 0 : 1,
      height: 8,
      width: 8,
      x: position.x - 4,
      y: position.y - 4,
      backgroundColor: "white",
    },
    hover: {
      opacity: 1,
      height: 10,
      width: 10,
      x: position.x - 5,
      y: position.y - 5,
    },
    click: {
      opacity: 1,
      height: 6,
      width: 6,
      x: position.x - 3,
      y: position.y - 3,
    },
  };

  const cursorTrailingVariants = {
    default: {
      opacity: hidden ? 0 : 0.3,
      height: 40,
      width: 40,
      x: trailingPosition.x - 20,
      y: trailingPosition.y - 20,
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backgroundColor: "transparent",
    },
    hover: {
      opacity: 0.5,
      height: 80,
      width: 80,
      x: trailingPosition.x - 40,
      y: trailingPosition.y - 40,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    click: {
      opacity: 0.3,
      height: 30,
      width: 30,
      x: trailingPosition.x - 15,
      y: trailingPosition.y - 15,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  const springTransition = {
    type: "spring",
    mass: 0.3,
    stiffness: 800,
    damping: 25,
  };

  const trailingTransition = {
    type: "spring",
    mass: 0.1,
    stiffness: 100,
    damping: 10,
  };

  return (
    <>
      {!isMobile && (
        <>
          {/* Trailing effect cursor (outermost) */}
          <motion.div
            className="cursor-trailing z-40 fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
            variants={cursorTrailingVariants}
            animate={clicked ? "click" : linkHovered ? "hover" : "default"}
            transition={trailingTransition}
          />
          
          {/* Main cursor ring */}
          <motion.div
            className="cursor-outer z-50 fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
            variants={cursorOuterVariants}
            animate={clicked ? "click" : linkHovered ? "hover" : "default"}
            transition={springTransition}
          />
          
          {/* Inner cursor dot */}
          <motion.div
            className="cursor-inner z-50 fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
            variants={cursorInnerVariants}
            animate={clicked ? "click" : linkHovered ? "hover" : "default"}
            transition={springTransition}
          />
        </>
      )}
    </>
  );
};

export default Cursor;
