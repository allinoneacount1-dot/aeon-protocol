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
    <PageShell eyebrow="Genesis" title="The First Stratum">
      <div className="space-y-16 max-w-3xl">
        <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-ink/70">
          The genesis block allocates no tokens to insiders. Every unit enters
          the protocol through participation: sediment, not speculation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Total Supply", value: "2,048,000 Æ", note: "Fixed. No inflation. No emission schedule beyond genesis." },
            { label: "Genesis Distribution", value: "100% participatory", note: "Every token earned through proof of patience." },
            { label: "Compounding Rate", value: "Geological", note: "Value accretes at the speed of sediment. Measurable in decades, not days." },
            { label: "Protocol Fee", value: "0.1%", note: "Applied once per geological epoch. Fee accrues to the archive." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="border border-ash/20 p-6 md:p-8 hover:border-oxide/30 transition-colors duration-700"
            >
              <span className="font-mono-label text-oxide text-[0.5rem] block mb-3">
                {item.label}
              </span>
              <span className="font-display text-xl md:text-2xl font-medium block mb-3">
                {item.value}
              </span>
              <span className="font-display text-sm text-ink/50 leading-relaxed">
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
          transition={{ duration: 1.5, delay: 0.4 }}
          className="py-24 md:py-32 border-t border-ash/20"
        >
          <AnimatePresence mode="wait">
            {!entered ? (
              <motion.div
                key="cta"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-mono-label text-ash/60 mb-8">
                  Ready to become part of the record?
                </p>
                <button
                  onClick={handleEnter}
                  className="group relative font-mono-label text-[0.65rem] text-oxide border border-oxide px-10 py-4 hover:bg-oxide hover:text-bone transition-all duration-700 overflow-hidden"
                >
                  <span className="relative z-10">Enter the Genesis</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="recorded"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-3">
                  You are recorded.
                </p>
                <p className="font-mono-label text-ash/50">
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
