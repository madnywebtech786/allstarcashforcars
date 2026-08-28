import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Reveal } from "@/components/animations/Reveal";
import { SERVICES } from "@/lib/services";

const BREADCRUMB_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

export function ServicesHero() {
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
        <div className="absolute -left-40 top-10 h-130 w-130 rounded-full bg-navy-700/30 blur-[140px]" />
      </div>

      <Container className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <Reveal variant="fade" duration={0.6}>
          <Breadcrumb items={BREADCRUMB_ITEMS} />
        </Reveal>

        <div className="mt-10 max-w-3xl">
          <Reveal variant="up" delay={0.06} duration={0.8}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
              What We Offer
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.12} duration={0.8}>
            <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-[3.25rem] lg:text-[3.75rem]">
              Junk Car Buying &amp; Towing Services
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2} duration={0.8}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Professional junk car removal with instant cash payment in
              Calgary, Alberta. We buy all junk cars and include towing with
              every accepted sale, anywhere in Calgary.
            </p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.28} duration={0.7}>
          <nav aria-label="Jump to service" className="mt-10 flex flex-wrap gap-2">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-line-onDark-strong px-4 py-2 text-[13px] font-medium text-slate-200 transition-colors hover:border-accent/50 hover:text-accent-hover"
              >
                <span className="font-mono text-[10px] text-accent-hover">
                  {service.code}
                </span>
                {service.title}
              </a>
            ))}
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}
