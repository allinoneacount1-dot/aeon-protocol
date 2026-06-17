"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        className="fixed inset-0 z-[9998] bg-oxide pointer-events-none origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </AnimatePresence>
  );
}
