"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Phone } from "lucide-react";
import { PRIMARY_NAV, SERVICE_LINKS } from "@/components/navigation/navData";

const panelVariants = {
  hidden: { x: "100%" },
  show: { x: 0 },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export function MobileMenu({ isOpen, onClose }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-navy-950 text-paper lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line-onDark px-6 py-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Menu
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex size-9 items-center justify-center rounded-full border border-line-onDark-strong text-paper transition-colors hover:bg-white/5"
              >
                <span aria-hidden="true" className="relative block size-4">
                  <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-paper" />
                  <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-paper" />
                </span>
              </button>
            </div>

            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="flex-1 overflow-y-auto px-6 py-6"
            >
              <ul className="space-y-1">
                {PRIMARY_NAV.map((item) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    {item.dropdown ? (
                      <MobileExpandable
                        item={item}
                        isExpanded={expanded === item.dropdown}
                        onToggle={() =>
                          setExpanded((c) => (c === item.dropdown ? null : item.dropdown))
                        }
                        onNavigate={onClose}
                      />
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-3 font-display text-2xl font-semibold text-paper"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <div className="border-t border-line-onDark px-6 py-6">
              <a
                href="tel:+14034020423"
                className="flex items-center gap-3 text-sm text-slate-300"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent">
                  <Phone className="size-4" strokeWidth={1.75} />
                </span>
                (403) 402-0423
              </a>
              <Link
                href="/#quote"
                onClick={onClose}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-navy-950 transition-colors hover:bg-accent-hover"
              >
                Get Instant Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileExpandable({ item, isExpanded, onToggle, onNavigate }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <span className="font-display text-2xl font-semibold text-paper">{item.label}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-slate-400 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-0.5 pb-4 pl-1">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="block py-2 text-[15px] text-slate-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
