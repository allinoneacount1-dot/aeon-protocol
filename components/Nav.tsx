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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-multiply"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link href="/" className="relative">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="#A6431F"
              strokeWidth="1"
              strokeDasharray="90 10"
              className="animate-[ouroboros_60s_linear_infinite]"
            />
          </svg>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono-label text-[0.65rem] transition-colors duration-500 ${
                pathname === link.href
                  ? "text-oxide"
                  : "text-ash hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex flex-col gap-1.5">
          <span className="w-5 h-px bg-ink" />
          <span className="w-3 h-px bg-ink" />
        </div>
      </div>
    </motion.nav>
  );
}
