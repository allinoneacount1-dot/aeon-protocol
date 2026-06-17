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

  return (
    <section ref={ref} className="bg-ink text-bone overflow-hidden">
      {/* Diagonal accent lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: 0, right: "15%", width: "1px", height: "100%", background: "rgba(166,67,31,0.1)", transformOrigin: "top", transform: "rotate(12deg)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, padding: "128px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Manifesto label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{ marginBottom: "80px" }}
          >
            <span className="font-mono-label text-oxide">Manifesto</span>
          </motion.div>

          {/* Main manifesto lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                initial={{ opacity: 0, x: line.indent ? 30 : -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 1,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display"
                style={{
                  fontSize: line.indent ? "clamp(1.1rem, 2.5vw, 1.6rem)" : "clamp(1.3rem, 3vw, 2.2rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: line.indent ? "rgba(237,230,216,0.5)" : "var(--bone)",
                  paddingLeft: line.indent ? "0" : "0",
                }}
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
            style={{
              marginTop: "96px",
              height: "1px",
              background: "rgba(146,138,122,0.3)",
              transformOrigin: "left",
              maxWidth: "280px",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="font-mono-label"
            style={{ marginTop: "32px", color: "rgba(146,138,122,0.4)" }}
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
    <section className="bg-bone overflow-hidden" style={{ padding: "128px 24px" }}>
      {/* Background horizontal lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              background: "var(--ink)",
              top: `${i * 5}%`,
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <span className="font-mono-label text-oxide" style={{ display: "block", marginBottom: "24px" }}>
                The Principle
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "32px",
                  color: "var(--ink)",
                }}
              >
                Sediment
                <br />
                <span style={{ color: "var(--oxide)" }}>does not</span>
                <br />
                speculate.
              </h2>
              <p
                className="font-display"
                style={{
                  fontSize: "1rem",
                  color: "rgba(22,19,14,0.55)",
                  lineHeight: 1.7,
                  maxWidth: "400px",
                }}
              >
                It accumulates, compresses, and becomes rock. The protocols that
                survive are the ones that outlive their founders&apos; grandchildren.
              </p>
            </motion.div>
          </div>

          {/* Right column - visual block + data */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {/* Decorative block */}
              <div
                style={{
                  aspectRatio: "4/3",
                  background: "linear-gradient(135deg, rgba(166,67,31,0.08), rgba(63,94,78,0.04), transparent)",
                  border: "1px solid rgba(146,138,122,0.2)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at 30% 40%, var(--ochre) 0%, transparent 50%)",
                    opacity: 0.08,
                  }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px" }}>
                  <p className="font-mono-label" style={{ color: "rgba(146,138,122,0.5)", marginBottom: "8px" }}>
                    Current Stratum
                  </p>
                  <p className="font-display" style={{ fontSize: "2.5rem", fontWeight: 500, color: "var(--oxide)" }}>
                    5,120,000
                  </p>
                  <p className="font-mono-label" style={{ color: "rgba(146,138,122,0.35)", marginTop: "4px" }}>
                    blocks deep
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "16px" }}>
                {[
                  { value: "10,522", label: "days" },
                  { value: "156M+", label: "transactions" },
                  { value: "6", label: "strata" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                    style={{ borderTop: "1px solid rgba(146,138,122,0.3)", paddingTop: "16px" }}
                  >
                    <p className="font-display" style={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--ink)" }}>
                      {stat.value}
                    </p>
                    <p className="font-mono-label" style={{ color: "rgba(146,138,122,0.4)", marginTop: "4px" }}>
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
    <footer className="bg-ink text-bone" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
          <div>
            <p className="font-display" style={{ fontSize: "1.5rem", fontWeight: 500, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              ÆON
            </p>
            <p className="font-display" style={{ color: "rgba(237,230,216,0.4)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "400px" }}>
              A protocol for the long now. Built to endure beyond the quarters,
              the candles, and the noise.
            </p>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 64px" }}>
              {["Protocol", "The Long Now", "Ledger", "Genesis", "Archive"].map(
                (link) => (
                  <a
                    key={link}
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="font-mono-label"
                    style={{ color: "rgba(146,138,122,0.4)", transition: "color 0.5s", fontSize: "0.55rem" }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(237,230,216,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p className="font-mono-label" style={{ color: "rgba(146,138,122,0.25)", fontSize: "0.45rem" }}>
            Block 5,120,000+ and counting
          </p>
          <p className="font-mono-label" style={{ color: "rgba(146,138,122,0.25)", fontSize: "0.45rem" }}>
            The record persists
          </p>
        </div>
      </div>
    </footer>
  );
}
