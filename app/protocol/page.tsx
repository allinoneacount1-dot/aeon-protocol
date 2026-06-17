"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

const strata = [
  { depth: "0-100", era: "Genesis Stratum", description: "The foundation layer. Protocol rules are immutable from this point forward. Validators anchor their stake into bedrock." },
  { depth: "100-500", era: "Growth Stratum", description: "Transaction volume compounds. Each deposit adds molecular weight. The sediment thickens; the protocol strengthens." },
  { depth: "500-2,000", era: "Maturation Stratum", description: "Network effects ossify into geology. Early participants fossilize into the record, permanent and unalterable." },
  { depth: "2,000-10,000", era: "Deep Time Stratum", description: "The protocol becomes archaeology. Future generations excavate these layers to understand the origins of decentralized value." },
  { depth: "10,000+", era: "Aeon Stratum", description: "Beyond measurement. The protocol persists not because it must, but because it was built to endure." },
];

export default function ProtocolPage() {
  const [activeStratum, setActiveStratum] = useState<number | null>(null);

  return (
    <PageShell eyebrow="Protocol" title="Sediment Layers of Value">
      <div className="space-y-16">
        <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-ink/70 max-w-2xl">
          The ÆON protocol is built in geological layers. Each stratum represents
          a phase of compaction. Value does not evaporate; it solidifies.
        </p>

        {/* Interactive sediment diagram */}
        <div className="relative mt-16 md:mt-24">
          <div className="flex flex-col">
            {strata.map((stratum, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                onMouseEnter={() => setActiveStratum(i)}
                onMouseLeave={() => setActiveStratum(null)}
                className={`relative border-b border-ash/20 py-8 md:py-10 px-4 md:px-8 cursor-default transition-all duration-700 ${
                  activeStratum === i ? "pl-8 md:pl-12 bg-oxide/[0.02]" : "pl-4 md:pl-8"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-3">
                  <span className="font-mono-label text-oxide text-[0.55rem] shrink-0">
                    {stratum.depth}
                  </span>
                  <span className="font-display text-xl md:text-2xl font-medium">
                    {stratum.era}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeStratum === i ? "auto" : 0,
                    opacity: activeStratum === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-ink/60 font-display text-base md:text-lg leading-relaxed max-w-xl pt-3">
                    {stratum.description}
                  </p>
                </motion.div>

                {/* Depth indicator bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-oxide"
                  animate={{ scaleY: activeStratum === i ? 1 : 0.2, opacity: activeStratum === i ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
