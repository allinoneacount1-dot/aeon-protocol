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

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const clipPath = useTransform(
    scrollYProgress,
    [0.05, 0.4],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]
  );

  return (
    <div ref={containerRef} className="relative min-h-[250vh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Shader background */}
        <FlowFieldCanvas />

        {/* Hero content - asymmetric layout */}
        <motion.div
          style={{ opacity, y, clipPath }}
          className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-16 md:pb-24 mix-blend-multiply"
        >
          {/* Top-left: minimal identifier */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute top-24 md:top-28 left-6 md:left-10 lg:left-16"
          >
            <p className="font-mono-label text-ash">
              Est. before time
            </p>
          </motion.div>

          {/* Headline - left-aligned, massive, asymmetric */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[2.8rem] md:text-6xl lg:text-[5rem] xl:text-[5.8rem] font-medium tracking-tight leading-[0.95] text-left"
            >
              What survives
              <br />
              <span className="text-oxide">the next</span>
              <br />
              aeon?
            </motion.h1>

            {/* Sub-label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-8 md:mt-12 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-oxide" />
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
            className="absolute bottom-16 md:bottom-24 right-6 md:right-10 lg:right-16 hidden md:block"
            style={{ writingMode: "vertical-lr" }}
          >
            <p className="font-mono-label text-ash text-[0.5rem]">
              ÆON Protocol - Block 5,120,000+
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
