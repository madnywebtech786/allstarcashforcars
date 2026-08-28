"use client";

import { motion } from "motion/react";

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  clip: {
    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
    show: { clipPath: "inset(0 0 0% 0)", opacity: 1 },
  },
};

export function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.3,
}) {
  const chosen = VARIANTS[variant];
  const Tag = typeof as === "string" ? motion.create(as) : as;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={chosen}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
