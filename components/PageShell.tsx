"use client";

import { motion } from "framer-motion";

interface PageShellProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-bone pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono-label text-ash mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-16"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
