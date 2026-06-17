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
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-5 md:py-6">
        {/* Logo - incomplete ouroboros */}
        <Link href="/" className="relative group">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="80 8"
              className="text-oxide group-hover:text-ink transition-colors duration-700"
            />
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
            >
              <Link
                href={link.href}
                className={`font-mono-label transition-colors duration-500 relative ${
                  pathname === link.href
                    ? "text-oxide"
                    : "text-ash hover:text-ink"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-oxide"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 group" aria-label="Menu">
          <span className="w-5 h-px bg-ink group-hover:w-4 transition-all duration-300" />
          <span className="w-3 h-px bg-ink group-hover:w-5 transition-all duration-300" />
        </button>
      </div>
    </motion.header>
  );
}
