"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";

const CONDITIONS = ["Seized", "Written Off", "Not Running", "Flooded", "Just Old"];

export function TransformationStrip() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 30%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  const resultOpacity = useTransform(progress, [0.7, 1], [0, 1]);
  const resultX = useTransform(progress, [0.7, 1], [-16, 0]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[28px] border border-navy-950/8 bg-white px-7 py-10 sm:px-10 sm:py-12 lg:px-14"
    >
      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-400">
        Manifest &middot; What we take, and what it becomes
      </p>

      <div className="mt-8 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-12">
        <ul className="flex flex-1 flex-wrap gap-x-4 gap-y-3 sm:gap-x-5">
          {CONDITIONS.map((condition, i) => (
            <ConditionItem
              key={condition}
              condition={condition}
              index={i}
              total={CONDITIONS.length}
              progress={progress}
            />
          ))}
        </ul>

        <div className="hidden shrink-0 text-slate-300 lg:block">
          <ArrowRight className="size-7" strokeWidth={1.5} />
        </div>

        <motion.div
          style={{ opacity: resultOpacity, x: resultX }}
          className="shrink-0"
        >
          <p className="font-display text-3xl font-semibold leading-none tracking-tight text-accent-hover sm:text-4xl lg:text-[2.75rem]">
            $300&ndash;$10,000
          </p>
          <p className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500">
            Cash at pickup, towing included
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ConditionItem({ condition, index, total, progress }) {
  const start = index / total;
  const end = (index + 0.6) / total;
  const strikeScale = useTransform(progress, [start, end], [0, 1]);
  const fade = useTransform(progress, [start, end], [1, 0.4]);

  return (
    <li className="relative font-display text-2xl font-semibold leading-none text-navy-950 sm:text-3xl lg:text-[2.25rem]">
      <motion.span style={{ opacity: fade }}>{condition}</motion.span>
      <motion.span
        aria-hidden="true"
        style={{ scaleX: strikeScale }}
        className="absolute left-0 top-1/2 h-[2.5px] w-full origin-left -translate-y-1/2 bg-accent-hover"
      />
    </li>
  );
}
