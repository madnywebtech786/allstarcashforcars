"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

/**
 * Reusable FAQ accordion. `items` is [{ question, answer }]. Single-open by
 * default (accordion behavior); pass allowMultiple to let rows open independently.
 */
export function FaqAccordion({ items, defaultOpenIndex = 0, allowMultiple = false, className = "" }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const [openSet, setOpenSet] = useState(() => new Set([defaultOpenIndex]));

  function toggle(i) {
    if (allowMultiple) {
      setOpenSet((prev) => {
        const next = new Set(prev);
        next.has(i) ? next.delete(i) : next.add(i);
        return next;
      });
    } else {
      setOpenIndex((c) => (c === i ? null : i));
    }
  }

  return (
    <div className={`divide-y divide-navy-950/8 border-y border-navy-950/8 ${className}`}>
      {items.map((item, i) => (
        <FaqRow
          key={item.question}
          item={item}
          isOpen={allowMultiple ? openSet.has(i) : openIndex === i}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}

function FaqRow({ item, isOpen, onToggle }) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-navy-950 sm:text-xl">
          {item.question}
        </span>
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-45 border-accent bg-accent text-navy-950"
              : "border-navy-950/12 text-navy-950"
          }`}
        >
          <Plus className="size-4" strokeWidth={2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-slate-600">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
