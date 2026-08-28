"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_LINKS } from "@/components/navigation/navData";

export function NavDropdown({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-full z-40 mt-3 w-screen max-w-md -translate-x-1/2 origin-top sm:left-0 sm:translate-x-0"
        >
          <div className="overflow-hidden rounded-3xl border border-line-onDark bg-navy-950 shadow-[0_32px_64px_-24px_rgba(10,19,48,0.5)]">
            <div className="p-3">
              <p className="px-4 pt-3 pb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500">
                What We Do
              </p>
              <ul>
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between gap-4 rounded-2xl px-4 py-3 text-[15px] text-slate-200 transition-colors hover:bg-white/5 hover:text-paper"
                    >
                      {link.label}
                      <ArrowUpRight
                        className="size-4 shrink-0 text-slate-500 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-hover group-hover:opacity-100"
                        strokeWidth={2}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-1 border-t border-line-onDark p-3 pt-4">
                <Link
                  href="/services"
                  className="flex items-center justify-between rounded-2xl bg-white/4 px-4 py-3 text-sm font-medium text-accent-hover transition-colors hover:bg-white/8"
                >
                  View all services
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
