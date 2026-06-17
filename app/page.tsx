"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SedimentSection />
      <Footer />
    </>
  );
}

function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="relative bg-ink text-bone overflow-hidden">
      {/* Diagonal accent line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-[15%] w-px h-full bg-oxide/10 origin-top rotate-12" />
        <div className="absolute top-0 right-[25%] w-px h-full bg-oxide/5 origin-top -rotate-6" />
      </div>

      <div className="relative z-10 px-6 md:px-10 lg:px-16 py-32 md:py-48 lg:py-56">
        <div className="max-w-6xl mx-auto">
          {/* Manifesto label - NOT centered, left-aligned with offset */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-20 md:mb-28"
          >
            <span className="font-mono-label text-oxide">Manifesto</span>
          </motion.div>

          {/* Main manifesto lines - asymmetric stagger */}
          <div className="space-y-4 md:space-y-6">
            {[
              { text: "We do not build for the quarter.", indent: false },
              { text: "We build for the epoch.", indent: false },
              { text: "Every transaction is a deposit", indent: true },
              { text: "into a sediment layer.", indent: true },
              { text: "Every block is a permanent stratum.", indent: false },
              { text: "Value compounds across geological time,", indent: false },
              { text: "indifferent to the 24-hour candle.", indent: true },
              { text: "This is archaeology, not a casino.", indent: false },
              { text: "This is the long now.", indent: false },
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: line.indent ? 40 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 1,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-display font-medium leading-[1.15] tracking-tight ${
                  line.indent
                    ? "text-xl md:text-2xl lg:text-3xl text-bone/60 pl-0 md:pl-24"
                    : "text-2xl md:text-3xl lg:text-[2.5rem]"
                }`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 md:mt-32 h-px bg-ash/30 origin-left max-w-md"
          />

          {/* Bottom attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="mt-8 font-mono-label text-ash/50"
          >
            ÆON - since before time, until after
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function SedimentSection() {
  return (
    <section className="relative bg-bone py-32 md:py-48 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Background texture lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-ink"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left column - large display */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <span className="font-mono-label text-oxide block mb-6">
                The Principle
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
                Sediment
                <br />
                <span className="text-oxide">does not</span>
                <br />
                speculate.
              </h2>
              <p className="font-display text-lg text-ink/60 leading-relaxed max-w-sm">
                It accumulates, compresses, and becomes rock. The protocols that
                survive are the ones that outlive their founders&apos; grandchildren.
              </p>
            </motion.div>
          </div>

          {/* Right column - visual block + data */}
          <div className="md:col-span-7 md:col-start-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative block */}
              <div className="aspect-[4/3] bg-gradient-to-br from-oxide/10 via-verdigris/5 to-transparent border border-ash/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,var(--ochre)_0%,transparent_50%)] opacity-10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-mono-label text-ash/60 mb-2">
                    Current Stratum
                  </p>
                  <p className="font-display text-4xl md:text-5xl font-medium text-oxide">
                    5,120,000
                  </p>
                  <p className="font-mono-label text-ash/40 mt-1">
                    blocks deep
                  </p>
                </div>
              </div>

              {/* Stats row beneath */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { value: "10,522", label: "days" },
                  { value: "156M+", label: "transactions" },
                  { value: "6", label: "strata" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                    className="border-t border-ash/30 pt-4"
                  >
                    <p className="font-display text-xl md:text-2xl font-medium">
                      {stat.value}
                    </p>
                    <p className="font-mono-label text-ash/50 mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-bone py-20 md:py-28 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4">
              ÆON
            </p>
            <p className="font-display text-bone/50 text-sm leading-relaxed max-w-sm">
              A protocol for the long now. Built to endure beyond the quarters,
              the candles, and the noise.
            </p>
          </div>
          <div className="md:col-span-6 md:flex md:justify-end">
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              {["Protocol", "The Long Now", "Ledger", "Genesis", "Archive"].map(
                (link) => (
                  <a
                    key={link}
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="font-mono-label text-ash/50 hover:text-bone transition-colors duration-500"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono-label text-ash/30 text-[0.5rem]">
            Block 5,120,000+ and counting
          </p>
          <p className="font-mono-label text-ash/30 text-[0.5rem]">
            The record persists
          </p>
        </div>
      </div>
    </footer>
  );
}
