"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";

const manifestoLines = [
  "We do not build for the quarter.",
  "We build for the epoch.",
  "Every transaction is a deposit into a sediment layer.",
  "Every block is a permanent stratum.",
  "Value compounds across geological time,",
  "indifferent to the 24-hour candle.",
  "This is archaeology, not a casino.",
  "This is the long now.",
];

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
    </>
  );
}

function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative bg-ink text-bone py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background accent */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-0 right-0 w-1/2 h-full bg-oxide/5 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-mono-label text-ash mb-16"
        >
          Manifesto
        </motion.p>

        <div className="space-y-6 md:space-y-8">
          {manifestoLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 1,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 h-px bg-ash origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-12 font-mono-label text-ash text-center"
        >
          ÆON — since before time, until after
        </motion.p>
      </div>
    </section>
  );
}
