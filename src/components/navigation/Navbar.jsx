"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Car, Phone } from "lucide-react";
import { PRIMARY_NAV } from "@/components/navigation/navData";
import { NavDropdown } from "@/components/navigation/NavDropdown";
import { MobileMenu } from "@/components/navigation/MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!openDropdown) return;
    function handleKeydown(e) {
      if (e.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [openDropdown]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10 xl:px-16">
          <motion.div
            animate={{
              backgroundColor: isScrolled ? "var(--color-navy-950)" : "rgba(10,19,48,0)",
              borderColor: isScrolled ? "var(--color-line-onDark)" : "rgba(251,250,247,0)",
              boxShadow: isScrolled
                ? "0 16px 40px -16px rgba(10,19,48,0.35)"
                : "0 0px 0px 0px rgba(10,19,48,0)",
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border px-4 py-2.5 sm:px-5"
          >
            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-navy-950">
                <Car className="size-5" strokeWidth={2} />
              </span>
              <span className="hidden font-display text-[15px] font-semibold tracking-tight text-paper sm:inline">
                JUNK4CAR
                <span className="ml-1.5 text-accent">CALGARY</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              {PRIMARY_NAV.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.dropdown)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                  onFocus={() => item.dropdown && setOpenDropdown(item.dropdown)}
                  onBlur={(e) => {
                    if (item.dropdown && !e.currentTarget.contains(e.relatedTarget)) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium text-slate-200 transition-colors hover:text-paper"
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 10 6"
                        className={`size-2.5 transition-transform duration-300 ${
                          openDropdown === item.dropdown ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                  {item.dropdown && (
                    <NavDropdown isOpen={openDropdown === item.dropdown} />
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="tel:+14034020423"
                className="hidden items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-slate-300 transition-colors hover:text-paper xl:flex"
              >
                <Phone className="size-3.5" strokeWidth={2} />
                (403) 402-0423
              </a>

              <Link
                href="/#quote"
                className="hidden items-center rounded-full bg-accent px-5 py-2.5 text-[13.5px] font-semibold text-navy-950 transition-colors hover:bg-accent-hover sm:inline-flex"
              >
                Get Quote
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
                className="flex size-10 items-center justify-center rounded-full border border-line-onDark-strong text-paper transition-colors hover:bg-white/5 lg:hidden"
              >
                <span aria-hidden="true" className="flex flex-col items-center gap-[5px]">
                  <span className="h-px w-4 bg-paper" />
                  <span className="h-px w-4 bg-paper" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
