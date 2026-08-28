"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";

/**
 * Cursor-reactive spotlight panel. The glow tracks the pointer via a Motion
 * template bound to spring-smoothed motion values (transform/opacity-driven
 * compositing, no layout thrash). Inert on touch — no persistent pointer to
 * react to, so it just renders as a static card there.
 */
export function PrincipleCard({ principle, index }) {
  const ref = useRef(null);
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(35);
  const x = useSpring(rawX, { stiffness: 200, damping: 26, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 200, damping: 26, mass: 0.4 });
  const background = useMotionTemplate`radial-gradient(320px circle at ${x}% ${y}%, rgba(245,158,11,0.16), transparent 72%)`;

  function handlePointerMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(((e.clientX - rect.left) / rect.width) * 100);
    rawY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-line-onDark bg-navy-900/60 p-9 transition-colors duration-500 hover:border-line-onDark-strong sm:p-10"
    >
      <motion.div
        aria-hidden="true"
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[7rem] font-semibold leading-none text-white/3"
      >
        {index}
      </span>

      <div className="relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-hover">
          {principle.code}
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-paper">
          {principle.title}
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-300">
          {principle.copy}
        </p>
      </div>
    </div>
  );
}
