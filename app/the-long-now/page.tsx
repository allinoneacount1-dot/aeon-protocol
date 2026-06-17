"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

const principles = [
  {
    number: "01",
    title: "Immutability Is Not a Feature",
    body: "It is the entire point. A cathedral is not a feature of a city; it is the reason the city exists. Immutability is the architecture of permanence. Every write is a chisel stroke in granite.",
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
    <PageShell eyebrow="The Long Now" title="Patience as Protocol">
      <div className="space-y-0 max-w-3xl">
        <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-ink/70 mb-16 md:mb-24">
          The Long Now Foundation asks: how do we think in 10,000-year timescales?
          ÆON answers by building protocols that compound across geological time,
          not quarterly earnings calls.
        </p>

        {principles.map((principle, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-ash/20 py-12 md:py-16"
          >
            <div className="flex items-baseline gap-6 mb-5">
              <span className="font-mono-label text-oxide text-[0.55rem]">
                {principle.number}
              </span>
              <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-tight">
                {principle.title}
              </h2>
            </div>
            <p className="font-display text-base md:text-lg leading-relaxed text-ink/60 max-w-2xl pl-0 md:pl-12">
              {principle.body}
            </p>
          </motion.article>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="py-24 md:py-32"
        >
          <p className="font-display text-lg md:text-xl text-ash italic leading-relaxed">
            "The best time to plant a tree was a hundred years ago.
            The second best time is at the speed of dust."
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}
