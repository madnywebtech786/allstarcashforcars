import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/animations/Reveal";
import { Phone } from "lucide-react";

export function NotSureCta() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-navy-950) 1px, transparent 1px), linear-gradient(to bottom, var(--color-navy-950) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy-500/8 blur-[140px]"
      />

      <Container className="relative flex flex-col items-center text-center">
        <Reveal variant="up" className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
            Not Sure Which Page?
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
            Use the quote form with your exact city, or call the business.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            A city listing does not guarantee an immediate time slot, since
            dispatch confirms the pickup window.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.12} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href="/#quote" variant="primary">
            Request an Offer
          </Button>
          <Button as="a" href="tel:+14034020423" variant="ghostLight" icon={false}>
            <Phone className="size-4" strokeWidth={2.25} />
            (403) 402-0423
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
