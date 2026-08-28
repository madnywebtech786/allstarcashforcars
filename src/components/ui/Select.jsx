"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

export function Select({ label, name, options, placeholder = "Select (optional)", value, onChange }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [rect, setRect] = useState(null);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const listId = useId();
  const selected = options.find((o) => o.value === value) ?? null;

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    if (!open) return;
    function updateRect() {
      const el = triggerRef.current;
      if (el) setRect(el.getBoundingClientRect());
    }
    updateRect();
    window.addEventListener("scroll", updateRect, true);
    window.addEventListener("resize", updateRect);
    return () => {
      window.removeEventListener("scroll", updateRect, true);
      window.removeEventListener("resize", updateRect);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(e) {
      if (
        rootRef.current &&
        !rootRef.current.contains(e.target) &&
        !e.target.closest(`[data-select-list="${listId}"]`)
      ) {
        setOpen(false);
      }
    }
    function handleKeydown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [open, listId]);

  function handleTriggerKeydown(e) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i < 0 ? 0 : i));
    }
  }

  function handleListKeydown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (activeIndex >= 0) {
        onChange(options[activeIndex].value);
        setOpen(false);
      }
    }
  }

  return (
    <div ref={rootRef} className="relative col-span-1">
      <span className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>

      <input type="hidden" name={name} value={value ?? ""} />

      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleTriggerKeydown}
        className={`mt-2 flex w-full items-center justify-between gap-2 rounded-xl border bg-navy-950/3 px-4 py-3 text-left font-body text-[14.5px] text-navy-950 transition-all duration-200 ${
          open
            ? "border-royal-500 bg-white shadow-[0_0_0_3px_rgba(59,92,240,0.14)]"
            : "border-transparent hover:bg-navy-950/5"
        }`}
      >
        <span className={`truncate ${selected ? "text-navy-950" : "text-slate-400"}`}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-slate-400 transition-transform duration-300 ease-out ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && rect && (
              <motion.ul
                id={listId}
                data-select-list={listId}
                role="listbox"
                tabIndex={-1}
                onKeyDown={handleListKeydown}
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "fixed",
                  top: rect.bottom + 8,
                  left: rect.left,
                  width: rect.width,
                }}
                className="z-100 origin-top overflow-hidden rounded-2xl border border-navy-950/10 bg-white py-1.5 shadow-[0_24px_48px_-16px_rgba(10,19,48,0.28)]"
              >
                {options.map((option, i) => {
                  const isSelected = option.value === value;
                  return (
                    <li
                      key={option.value || "empty"}
                      role="option"
                      aria-selected={isSelected}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => {
                        onChange(option.value);
                        setOpen(false);
                      }}
                      className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 text-[14px] transition-colors ${
                        i === activeIndex ? "bg-navy-950/4" : ""
                      } ${isSelected ? "text-navy-950 font-medium" : "text-slate-600"}`}
                    >
                      {option.label}
                      {isSelected && (
                        <Check className="size-3.5 shrink-0 text-accent-hover" strokeWidth={2.5} />
                      )}
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
