"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Manifesto" },
  { href: "/protocol", label: "Protocol" },
  { href: "/the-long-now", label: "The Long Now" },
  { href: "/ledger", label: "Ledger" },
  { href: "/genesis", label: "Genesis" },
  { href: "/archive", label: "Archive" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-multiply"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ position: "relative", flexShrink: 0 }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="#A6431F"
              strokeWidth="0.75"
              strokeDasharray="80 8"
            />
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "nowrap",
          }}
        >
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
              style={{ flexShrink: 0 }}
            >
              <Link
                href={link.href}
                className="font-mono-label"
                style={{
                  color: pathname === link.href ? "#A6431F" : "#928A7A",
                  transition: "color 0.5s",
                  position: "relative",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
