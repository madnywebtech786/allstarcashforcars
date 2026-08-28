import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Phone } from "lucide-react";

const TRUST_STRIP = [
  { value: "22", label: "Alberta service areas" },
  { value: "Mon–Sat", label: "8 AM – 6 PM" },
  { value: "Same-day", label: "Pickup when available" },
];

export function Hero() {
  return (
    <section className="relative bg-navy-950 text-paper">
      {/* Faint schematic grid — reinforces the intake/dispatch motif without being decorative noise */}
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
        <div className="absolute -left-40 top-1/4 h-130 w-130 rounded-full bg-navy-700/30 blur-[140px]" />
      </div>

      <Container className="relative pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)] lg:items-start lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            <Reveal variant="fade" duration={0.6}>
              <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
                <span aria-hidden="true">🚗</span>
                Calgary&rsquo;s Junk Car Buyers &amp; Towing Service
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.08} duration={0.8}>
              <h1 className="mt-6 font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.5rem] lg:text-[4rem]">
                Get{" "}
                <span className="text-accent">$300&ndash;$10,000</span>{" "}
                Cash for Your Junk Car
              </h1>
            </Reveal>

            <Reveal variant="up" delay={0.16} duration={0.8}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-200">
                Vehicle-specific offers. Towing included with an accepted
                sale. Instant cash payment. Serving Calgary and 21 more
                Alberta communities.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.24} duration={0.8}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button as="a" href="#quote" variant="primary">
                  Get Instant Quote
                </Button>
                <Button as="a" href="tel:+14034020423" variant="ghost" icon={false}>
                  <Phone className="size-4" strokeWidth={2.25} />
                  (403) 402-0423
                </Button>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.32} duration={0.8}>
              <dl className="mt-12 grid grid-cols-3 gap-3">
                {TRUST_STRIP.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-line-onDark-strong bg-white/3 px-4 py-3.5 sm:px-5"
                  >
                    <dt className="font-display text-xl font-semibold text-accent sm:text-[1.75rem]">
                      {item.value}
                    </dt>
                    <dd className="mt-0.5 font-mono text-[10px] uppercase leading-snug tracking-[0.06em] text-slate-300 sm:text-[11px] sm:tracking-[0.08em]">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal
            variant="up"
            delay={0.2}
            duration={0.8}
            className="justify-self-center lg:justify-self-end"
          >
            <div id="quote">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
