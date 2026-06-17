"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const FlowFieldCanvas = dynamic(() => import("./FlowFieldCanvas"), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.35], [0, -50]);
  const clipPath = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]
  );

  return (
    <div ref={containerRef} style={{ position: "relative", height: "250vh" }}>
      {/* Sticky container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Shader background - must fill entire viewport */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <FlowFieldCanvas />
        </div>

        {/* Hero content */}
        <motion.div
          style={{ opacity, y, clipPath }}
          className="mix-blend-multiply"
        >
          <div
            style={{
              position: "relative",
              zIndex: 10,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "24px",
              paddingBottom: "64px",
            }}
          >
            {/* Top-left identifier */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="font-mono-label text-ash"
              style={{ position: "absolute", top: "100px", left: "24px" }}
            >
              Est. before time
            </motion.p>

            {/* Headline */}
            <div style={{ maxWidth: "800px" }}>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 0.95,
                  textAlign: "left",
                  color: "var(--ink)",
                }}
              >
                What survives
                <br />
                <span style={{ color: "var(--oxide)" }}>the next</span>
                <br />
                aeon?
              </motion.h1>

              {/* Sub-label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{
                  marginTop: "32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div style={{ width: "48px", height: "1px", background: "var(--oxide)" }} />
                <p className="font-mono-label text-ash">
                  A protocol for the long now
                </p>
              </motion.div>
            </div>

            {/* Right-side vertical text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.5 }}
              className="font-mono-label text-ash"
              style={{
                position: "absolute",
                bottom: "64px",
                right: "24px",
                writingMode: "vertical-lr",
                fontSize: "0.5rem",
                opacity: 0.5,
              }}
            >
              Block 5,120,000+
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
