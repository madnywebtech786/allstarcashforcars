import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function ContactOverview() {
  return (
    <section className="bg-navy-950 py-24 text-paper md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal variant="up" className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
              In Detail
            </p>
            <h2 className="mt-5 max-w-sm font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem]">
              Get in Touch With Calgary&rsquo;s Top Cash For Cars Service
            </h2>
          </Reveal>

          <div className="space-y-8 text-[17px] leading-relaxed text-slate-300">
            <Reveal variant="up" delay={0.05}>
              <p>
                Reaching Junk4Car Calgary is the first step toward
                turning an unwanted vehicle into cash. Our team answers
                questions, gives accurate quotes, and finds a pickup time
                that actually fits your schedule, with clear
                communication the whole way through, not a runaround.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.1}>
              <p>
                Call (403) 402-0423 and you&rsquo;ll reach a person, not a
                menu of automated prompts. We&rsquo;ll ask about your
                vehicle&rsquo;s make, model, year, mileage, and condition,
                then work from those details to give you the most accurate
                offer we can, typically somewhere between $300 and
                $10,000.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.15}>
              <p>
                Prefer not to call? The form above reaches the same
                dispatch desk, and we aim to respond within two hours
                during business hours. Email works too, at
                hello@junk4carcalgary.ca, for quotes or general
                questions. If you&rsquo;re unsure about paperwork, timing,
                or how payment works, that&rsquo;s exactly what we&rsquo;re
                here to walk you through.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.2}>
              <p>
                Our office is at 41 Sage Bluff Close NW, Calgary, Alberta
                T3R 0X6, so call ahead before visiting so the team can
                confirm someone&rsquo;s available. However you reach us,
                phone, email, or the form, expect the same thing: clear
                answers and an offer priced to your actual vehicle.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
