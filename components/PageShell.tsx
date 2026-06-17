"use client";

import { motion } from "framer-motion";

interface PageShellProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export default function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <div className="bg-bone" style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ marginBottom: "80px" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-mono-label text-oxide"
            style={{ marginBottom: "24px" }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--ink)",
            }}
          >
            {title}
          </motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
