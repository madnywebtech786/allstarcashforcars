import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { WorkDossier } from "@/components/sections/about/WorkDossier";

export function HowWeWork() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal variant="up" className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
              How We Work
            </p>
            <h2 className="mt-5 max-w-sm font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
              Why Calgary Keeps Calling Us Back
            </h2>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-slate-500">
              Four things that hold true on every sale, from the first
              call to the final payout.
            </p>
            <div className="mt-8">
              <Button as="a" href="/#quote" variant="ghostLight">
                Get Your Cash Offer
              </Button>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <WorkDossier />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
