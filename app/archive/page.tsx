"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";

const dispatches = [
  {
    date: "Epoch 12, Year 3",
    title: "On the Nature of Persistence",
    excerpt: "The first sediments have begun to compact. We observe no urgency in the protocol, and that is precisely the point. Urgency is the enemy of permanence. What we are building is not meant to be fast; it is meant to be permanent.",
  },
  {
    date: "Epoch 24, Year 5",
    title: "Excavation Notes: Block 2,048,000",
    excerpt: "The Meridian Compact has been fully fossilized. Twelve validators acted without coordination, without prompting, and without speculation. This is what organic consensus looks like when you remove the noise.",
  },
  {
    date: "Epoch 36, Year 7",
    title: "Field Note: The Speed of Dust",
    excerpt: "A researcher asked why the protocol does not optimize for speed. We told her: a cathedral does not optimize for speed. A mountain does not optimize for speed. The ÆON protocol optimizes for permanence.",
  },
  {
    date: "Epoch 48, Year 9",
    title: "The Deep Compaction Event",
    excerpt: "The fee structure has become self-sustaining. The protocol no longer requires external subsidy. Like a reef that builds its own limestone foundation, ÆON now supports its own weight across geological time.",
  },
  {
    date: "Epoch 60, Year 11",
    title: "Dispatch from the Archive",
    excerpt: "Our earliest transactions are now cited in academic papers about decentralized permanence. The record we built is being read by people who were not alive when it was written. This is the goal.",
  },
];

export default function ArchivePage() {
  return (
    <PageShell eyebrow="Archive" title="Dispatches from Deep Time">
      <div className="space-y-0 max-w-3xl">
        <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-ink/70 mb-16 md:mb-24">
          Infrequent. Deliberate. Written at the speed of dust.
          These are field notes from a protocol that does not rush.
        </p>

        {dispatches.map((dispatch, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 1,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group border-b border-ash/20 py-12 md:py-16 hover:pl-4 transition-all duration-700 cursor-default"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-mono-label text-oxide text-[0.5rem]">
                {dispatch.date}
              </span>
            </div>
            <h2 className="font-display text-xl md:text-2xl font-medium tracking-tight mb-4">
              {dispatch.title}
            </h2>
            <p className="font-display text-sm md:text-base leading-relaxed text-ink/50 max-w-2xl group-hover:text-ink/70 transition-colors duration-700">
              {dispatch.excerpt}
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
          <p className="font-mono-label text-ash/40">
            The archive continues. New dispatches arrive at the speed of dust.
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}
