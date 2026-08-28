import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SERVICES_FAQ } from "@/lib/services";

export function ServicesFaq() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
            FAQ
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Everything you need to know about our junk car buying &amp;
            towing services.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.1} className="mt-14">
          <FaqAccordion items={SERVICES_FAQ} />
        </Reveal>
      </Container>
    </section>
  );
}
