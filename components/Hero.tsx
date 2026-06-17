"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const FlowFieldCanvas = dynamic(() => import("./FlowFieldCanvas"), {
  ssr: false,
});

const words = ["What", "survives", "the", "next", "aeon?"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"]
  );

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky hero container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <FlowFieldCanvas />

        {/* Hero content */}
        <motion.div
          style={{ opacity, y, clipPath }}
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 mix-blend-multiply"
        >
          {/* Micro-label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="font-mono-label text-ash mb-12 text-center"
          >
            ÆON / a protocol for the long now
          </motion.p>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-center leading-[1.1] max-w-5xl">
            {words.map((word, i) => (
              <Word key={i} word={word} index={i} />
            ))}
          </h1>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-3"
          >
            <span className="font-mono-label text-ash text-[0.55rem]">Descend</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-px h-8 bg-ash"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Word({ word, index }: { word: string; index: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <span className="inline-block overflow-hidden mr-[0.3em]">
      <motion.span
        ref={ref}
        initial={{ y: "120%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "120%", opacity: 0 }}
        transition={{
          duration: 1,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        {word}
      </motion.span>
    </span>
  );
}
