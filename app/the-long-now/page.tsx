"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

const principles = [
  {
    number: "01",
    title: "Immutability Is Not a Feature",
    body: "It is the entire point. A cathedral is not a feature of a city — it is the reason the city exists. Immutability is the architecture of permanence. Every write is a chisel stroke in granite.",
  },
  {
    number: "02",
    title: "Patience Is a Consensus Mechanism",
    body: "Proof-of-work demands energy. Proof-of-stake demands capital. Proof-of-patience demands something harder: the willingness to wait for compounding across centuries, not quarters.",
  },
  {
    number: "03",
    title: "Value Settles, It Does Not Moon",
    body: "Sediment does not speculate. It accumulates, compresses, and becomes rock. The protocols that survive are the ones that outlive their founders' grandchildren.",
  },
  {
    number: "04",
    title: "The Archive Is the Product",
    body: "What we leave behind is more important than what we build now. Every dispatch, every transaction, every block is a letter to the future. Write accordingly.",
  },
];

export default function TheLongNowPage() {
  return (
    <PageShell eyebrow="The Long Now / Philosophy" title="Patience as Protocol">
      <div className="space-y-8 max-w-3xl">
        <p className="font-display text-xl md:text-2xl font-light leading-relaxed text-ink/80 mb-16">
          The Long Now Foundation asks: how do we think in 10,000-year timescales?
          ÆON answers: by building protocols that compound across geological time,
          not quarterly earnings calls.
        </p>

        {principles.map((principle, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-ash/30 py-12"
          >
            <div className="flex items-baseline gap-6 mb-6">
              <span className="font-mono-label text-oxide text-[0.6rem]">
                {principle.number}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-light tracking-tight">
                {principle.title}
              </h2>
            </div>
            <p className="font-display text-lg leading-relaxed text-ink/70 max-w-2xl pl-12">
              {principle.body}
            </p>
          </motion.article>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="py-24 text-center"
        >
          <p className="font-display text-lg text-ash italic">
            "The best time to plant a tree was a hundred years ago.
            <br />
            The second best time is at the speed of dust."
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}
