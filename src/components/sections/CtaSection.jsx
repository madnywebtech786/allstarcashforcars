import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
      {/* Schematic grid, matching the hero/field-log dispatch motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-paper) 1px, transparent 1px), linear-gradient(to bottom, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-700/30 blur-[140px]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal variant="up" className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
            Sell Your Junk Car Today
          </p>
          <h2 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.25rem]">
            Get $300&ndash;$10,000 cash, towing included with an accepted
            sale.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            Submit your vehicle details now and we&rsquo;ll confirm a cash
            offer for your Calgary pickup.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.12} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href="#quote" variant="primary">
            Get Your Quote Now
          </Button>
          <Button as="a" href="tel:+14034020423" variant="ghost" icon={false}>
            <Phone className="size-4" strokeWidth={2.25} />
            (403) 402-0423
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
