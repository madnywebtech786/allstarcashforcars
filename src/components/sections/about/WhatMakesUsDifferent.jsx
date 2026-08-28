import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { PrincipleCard } from "@/components/sections/about/PrincipleCard";

const PRINCIPLES = [
  {
    code: "Vision",
    title: "A dependable name in Calgary junk car buying",
    copy: "We want AllStar to be the call people already know to make when a vehicle stops being worth keeping — backed by instant cash payment, consistent offers, and towing included with every accepted sale.",
  },
  {
    code: "Values",
    title: "A fair number the first time, every time",
    copy: "The offer we confirm on the phone is the offer paid at pickup. No last-minute discount once the tow truck arrives, and no hidden fees folded into the paperwork.",
  },
];

export function WhatMakesUsDifferent() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-line-onDark-strong to-transparent"
      />

      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal variant="up" className="max-w-lg">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
              What Makes Us Different
            </p>
            <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem]">
              Where We&rsquo;re Headed, and What We Won&rsquo;t Bend On
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="max-w-sm">
            <p className="text-lg leading-relaxed text-slate-300">
              One is a direction we&rsquo;re building toward. The other is
              a line we hold on every single call.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.code}
              variant="up"
              delay={i * 0.1}
              duration={0.6}
              className="h-full"
            >
              <PrincipleCard principle={principle} index={`0${i + 1}`} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
