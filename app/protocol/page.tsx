"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

const strata = [
  { depth: "0–100", era: "Genesis Stratum", color: "bg-oxide/20", description: "The foundation layer. Protocol rules are immutable from this point forward. Validators anchor their stake into bedrock." },
  { depth: "100–500", era: "Growth Stratum", color: "bg-ochre/20", description: "Transaction volume compounds. Each deposit adds molecular weight. The sediment thickens; the protocol strengthens." },
  { depth: "500–2,000", era: "Maturation Stratum", color: "bg-verdigris/20", description: "Network effects ossify into geology. Early participants fossilize into the record — permanent, unalterable." },
  { depth: "2,000–10,000", era: "Deep Time Stratum", color: "bg-ash/20", description: "The protocol becomes archaeology. Future generations excavate these layers to understand the origins of decentralized value." },
  { depth: "10,000+", era: "Aeon Stratum", color: "bg-ink/10", description: "Beyond measurement. The protocol persists not because it must, but because it was built to endure." },
];

export default function ProtocolPage() {
  const [activeStratum, setActiveStratum] = useState<number | null>(null);

  return (
    <PageShell eyebrow="Protocol / How It Endures" title="Sediment Layers of Value">
      <div className="space-y-16">
        <p className="font-display text-xl md:text-2xl font-light leading-relaxed text-ink/80 max-w-2xl">
          The ÆON protocol is built in geological layers. Each stratum represents
          a phase of compaction — value does not evaporate, it solidifies.
        </p>

        {/* Interactive sediment diagram */}
        <div className="relative mt-24">
          <p className="font-mono-label text-ash mb-8">Hover to explore strata</p>

          <div className="flex flex-col">
            {strata.map((stratum, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                onMouseEnter={() => setActiveStratum(i)}
                onMouseLeave={() => setActiveStratum(null)}
                className={`relative border-b border-ash/30 py-8 px-6 cursor-pointer transition-all duration-700 ${
                  activeStratum === i ? "pl-10" : "pl-6"
                }`}
              >
                <div className="flex items-baseline gap-6 mb-3">
                  <span className="font-mono-label text-oxide text-[0.6rem]">
                    {stratum.depth}
                  </span>
                  <span className="font-display text-xl md:text-2xl font-light">
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
                  <p className="text-ink/70 font-display text-lg leading-relaxed max-w-xl pt-2">
                    {stratum.description}
                  </p>
                </motion.div>

                {/* Depth indicator bar */}
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 ${stratum.color}`}
                  animate={{ scaleY: activeStratum === i ? 1 : 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Visual depth marker */}
          <div className="absolute -left-16 top-0 bottom-0 w-px bg-ash/20 hidden lg:block" />
          <div className="absolute -left-20 top-0 font-mono-label text-ash text-[0.5rem] hidden lg:block" style={{ writingMode: "vertical-lr" }}>
            DEPTH IN BLOCKS
          </div>
        </div>
      </div>
    </PageShell>
  );
}
