import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Banknote, Truck, Clock, Wallet } from "lucide-react";

const REASONS = [
  {
    icon: Banknote,
    title: "Instant cash offer",
    copy: "A $300–$10,000 offer, priced against your specific vehicle.",
  },
  {
    icon: Truck,
    title: "Towing scheduled with you",
    copy: "Included the moment an offer is accepted, no separate cost.",
  },
  {
    icon: Clock,
    title: "Same-day removal",
    copy: "When our Calgary route has room, pickup can happen the same day.",
  },
  {
    icon: Wallet,
    title: "Cash on the spot",
    copy: "Paid the moment the vehicle is confirmed and loaded, not mailed later.",
  },
];

export function WhyContactUs() {
  return (
    <section className="bg-navy-950 py-24 text-paper md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
            Why Contact Us?
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem]">
            One Call Confirms the Whole Sale
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} variant="up" delay={i * 0.06} duration={0.6}>
              <div className="h-full rounded-2xl border border-line-onDark bg-white/2 p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-accent">
                  <reason.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-paper">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{reason.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
