"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(coarse);
    if (coarse) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [x, y, visible]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-multiply"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="w-8 h-8 -ml-4 -mt-4 rounded-full border border-oxide"
        style={{ borderWidth: "1px" }}
      />
    </motion.div>
  );
}
