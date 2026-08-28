"use client";

import { motion, useTransform } from "motion/react";
import { useRouteProgress } from "@/components/sections/RouteLine";

export function RouteStop({ icon, code, title, copy, index = 0, total = 4 }) {
  const progress = useRouteProgress();
  const side = index % 2 === 0 ? "left" : "right";

  // Each stop "lights up" once the shared route spine reaches its position.
  const reachedAt = (index + 0.4) / total;
  const nodeGlow = useTransform(progress, [reachedAt - 0.08, reachedAt], [0, 1]);
  const nodeScale = useTransform(nodeGlow, [0, 1], [1, 1.1]);
  const ringScale = useTransform(nodeGlow, [0, 1], [1, 1.35]);
  const ringOpacity = useTransform(nodeGlow, [0, 0.4, 1], [0, 0.25, 0]);
  const iconColor = useTransform(
    nodeGlow,
    [0, 1],
    ["var(--color-navy-800)", "var(--color-navy-950)"],
  );

  return (
    <li
      className={`relative flex gap-6 pb-20 last:pb-0 sm:gap-0 ${
        side === "left" ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      <div className="hidden sm:block sm:w-[calc(50%-3rem)]">
        <StopContent
          code={code}
          title={title}
          copy={copy}
          index={index}
          side={side}
          nodeGlow={nodeGlow}
        />
      </div>

      <div className="relative z-10 flex w-14 shrink-0 justify-center sm:w-24">
        <motion.div
          style={{ scale: nodeScale }}
          className="relative flex size-14 items-center justify-center rounded-full border border-navy-950/12 bg-paper shadow-[0_12px_32px_-14px_rgba(10,19,48,0.3)] sm:size-16"
        >
          <motion.span
            aria-hidden="true"
            style={{ scale: ringScale, opacity: ringOpacity }}
            className="absolute inset-0 rounded-full bg-accent"
          />
          <motion.span
            aria-hidden="true"
            style={{ opacity: nodeGlow }}
            className="absolute inset-0 rounded-full bg-accent"
          />
          <motion.span style={{ color: iconColor }} className="relative [&_svg]:size-6">
            {icon}
          </motion.span>
        </motion.div>
      </div>

      <div className="min-w-0 flex-1 sm:hidden">
        <StopContent
          code={code}
          title={title}
          copy={copy}
          index={index}
          side="left"
          nodeGlow={nodeGlow}
        />
      </div>

      <div className="hidden sm:block sm:w-[calc(50%-3rem)]" aria-hidden="true" />
    </li>
  );
}

function StopContent({ code, title, copy, index, side, nodeGlow }) {
  const edgeColor = useTransform(
    nodeGlow,
    [0, 1],
    ["var(--color-navy-950)", "var(--color-amber-500)"],
  );
  const edgeOpacity = useTransform(nodeGlow, [0, 1], [0.14, 1]);
  const glowOpacity = useTransform(nodeGlow, [0, 1], [0, 0.16]);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Connector notch — visually plugs the card into the shared route spine */}
      <span
        aria-hidden="true"
        className={`absolute top-9 hidden h-px w-6 bg-navy-950/12 sm:block ${
          side === "left" ? "-right-6" : "-left-6"
        }`}
      />

      <div
        className={`group relative overflow-hidden rounded-[22px] border border-navy-950/8 bg-white p-8 shadow-[0_1px_0_0_rgba(10,19,48,0.04)] transition-shadow duration-500 ease-out hover:shadow-[0_28px_56px_-28px_rgba(10,19,48,0.22)] sm:p-9 ${
          side === "right" ? "sm:text-right" : ""
        }`}
      >
        {/* Single accent edge, facing the spine — lights up once the route reaches this stop */}
        <motion.span
          aria-hidden="true"
          style={{ backgroundColor: edgeColor, opacity: edgeOpacity }}
          className={`absolute inset-y-0 w-0.75 ${
            side === "right" ? "left-0" : "right-0"
          }`}
        />

        {/* Ambient glow, activates once the route reaches this stop */}
        <motion.div
          aria-hidden="true"
          style={{ opacity: glowOpacity }}
          className={`pointer-events-none absolute -top-16 size-48 rounded-full bg-accent blur-3xl ${
            side === "right" ? "-right-16" : "-left-16"
          }`}
        />

        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-hover">
            Stop {code}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-[1.75rem]">
            {title}
          </h3>
          <p
            className={`mt-3 text-[15px] leading-relaxed text-slate-600 sm:max-w-[32ch] ${
              side === "right" ? "sm:ml-auto" : ""
            }`}
          >
            {copy}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
