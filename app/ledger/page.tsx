"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

const digLayers = [
  { block: "1,024,000", time: "2,104 days", txns: "47,832", artifact: "First governance deposit. A single multisig, unbroken since block 1." },
  { block: "2,048,000", time: "4,209 days", txns: "312,047", artifact: "The Meridian Compact. 12 validators sign without external prompting." },
  { block: "3,072,000", time: "6,313 days", txns: "2,441,203", artifact: "Deep compaction event. Protocol fee structure becomes self-sustaining." },
  { block: "4,096,000", time: "8,418 days", txns: "19,847,391", artifact: "The Fossil Record. Earliest transactions now referenced in academic papers." },
  { block: "5,120,000", time: "10,522 days", txns: "156,304,218", artifact: "Protocol outlives its founding team's original wallets." },
  { block: "∞", time: "Aeon", txns: "—", artifact: "The layers continue. The record deepens. The archive persists." },
];

export default function LedgerPage() {
  return (
    <PageShell eyebrow="Ledger" title="Excavation Log">
      <div className="space-y-8 max-w-3xl">
        <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-ink/70 mb-16">
          The ledger is not a dashboard. It is an excavation site. Each layer
          reveals artifacts: transactions that compounded into permanent record.
        </p>

        {/* Dig table */}
        <div className="border-t border-ash/20">
          {digLayers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
              className="group border-b border-ash/20 py-8 md:py-10 hover:pl-4 transition-all duration-500 cursor-default"
            >
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <span className="font-mono-label text-oxide text-[0.5rem] block mb-1">Block</span>
                  <span className="font-display text-base md:text-lg font-medium">{layer.block}</span>
                </div>
                <div>
                  <span className="font-mono-label text-oxide text-[0.5rem] block mb-1">Elapsed</span>
                  <span className="font-display text-base md:text-lg font-medium">{layer.time}</span>
                </div>
                <div>
                  <span className="font-mono-label text-oxide text-[0.5rem] block mb-1">Transactions</span>
                  <span className="font-display text-base md:text-lg font-medium">{layer.txns}</span>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.06 }}
                className="text-ink/50 font-display text-sm md:text-base leading-relaxed pl-0 group-hover:pl-4 transition-all duration-500"
              >
                {layer.artifact}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Stats footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-16 border-t border-ash/20">
          {[
            { label: "Total Blocks", value: "5,120,000+" },
            { label: "Total Transactions", value: "156M+" },
            { label: "Protocol Uptime", value: "10,522 days" },
            { label: "Active Strata", value: "6 layers" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <span className="font-mono-label text-ash/40 text-[0.5rem] block mb-2">
                {stat.label}
              </span>
              <span className="font-display text-xl md:text-2xl font-medium">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
