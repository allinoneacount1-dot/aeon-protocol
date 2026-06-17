"use client";

import { motion } from "framer-motion";

interface PageShellProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-bone pt-28 md:pt-36 pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono-label text-oxide mb-6"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]"
          >
            {title}
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
