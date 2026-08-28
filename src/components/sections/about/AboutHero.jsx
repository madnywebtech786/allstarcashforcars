import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Reveal } from "@/components/animations/Reveal";

const BREADCRUMB_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us" },
];

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-paper) 1px, transparent 1px), linear-gradient(to bottom, var(--color-paper) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -right-40 top-0 h-130 w-130 rounded-full bg-navy-700/30 blur-[140px]" />
      </div>

      <Container className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <Reveal variant="fade" duration={0.6}>
          <Breadcrumb items={BREADCRUMB_ITEMS} />
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <Reveal variant="up" delay={0.06} duration={0.8}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
              Est. Calgary, Alberta
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.12} duration={0.8}>
            <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-[3.25rem] lg:text-[3.75rem]">
              The Crew Behind Calgary&rsquo;s Junk Car Pickups
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2} duration={0.8}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              AllStar Cash For Cars buys and tows junk, damaged, and
              non-running vehicles across Calgary and Alberta. Here&rsquo;s
              how we price offers, run pickups, and keep the process honest
              from first call to final payout.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
