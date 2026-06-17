"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageShell from "@/components/PageShell";

export default function GenesisPage() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <PageShell eyebrow="Genesis / Tokenomics" title="The First Stratum">
      <div className="space-y-16 max-w-3xl">
        {/* Tokenomics overview */}
        <p className="font-display text-xl md:text-2xl font-light leading-relaxed text-ink/80">
          The genesis block allocates no tokens to insiders. Every unit enters
          the protocol through participation — sediment, not speculation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { label: "Total Supply", value: "2,048,000 Æ", note: "Fixed. No inflation. No emission schedule beyond genesis." },
            { label: "Genesis Distribution", value: "100% participatory", note: "Every token earned through proof of patience." },
            { label: "Compounding Rate", value: "Geological", note: "Value accretes at the speed of sediment — measurable in decades, not days." },
            { label: "Protocol Fee", value: "0.1%", note: "Applied once per geological epoch. Fee accrues to the archive." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border border-ash/30 p-8 hover:border-oxide/30 transition-colors duration-700"
            >
              <span className="font-mono-label text-oxide text-[0.55rem] block mb-3">
                {item.label}
              </span>
              <span className="font-display text-2xl md:text-3xl font-light block mb-4">
                {item.value}
              </span>
              <span className="font-display text-sm text-ink/60 leading-relaxed">
                {item.note}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="py-24 text-center border-t border-ash/30"
        >
          <AnimatePresence mode="wait">
            {!entered ? (
              <motion.div
                key="cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-mono-label text-ash mb-8">
                  Ready to become part of the record?
                </p>
                <button
                  onClick={handleEnter}
                  className="group relative font-mono-label text-[0.7rem] text-oxide border border-oxide px-12 py-5 hover:bg-oxide hover:text-bone transition-all duration-700"
                >
                  <span className="relative z-10">Enter the Genesis</span>
                  <motion.div
                    className="absolute inset-0 bg-oxide origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="recorded"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-3xl md:text-4xl font-light tracking-tight mb-4">
                  You are recorded.
                </p>
                <p className="font-mono-label text-ash">
                  Your deposit has been entered into the sediment.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageShell>
  );
}
