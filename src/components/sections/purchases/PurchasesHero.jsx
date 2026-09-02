import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Reveal } from "@/components/animations/Reveal";
import { VEHICLE_CATEGORIES } from "@/lib/purchases";

const BREADCRUMB_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Purchases" },
];

export function PurchasesHero() {
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

        <div className="mt-10 max-w-2xl">
          <Reveal variant="up" delay={0.06} duration={0.8}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
              What We Buy
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.12} duration={0.8}>
            <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-[3.25rem] lg:text-[3.75rem]">
              Vehicles We Purchase
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2} duration={0.8}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              We buy all types of junk cars, trucks, vans, and SUVs in any
              condition, regardless of make, model, year, or condition.
            </p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.28} duration={0.7}>
          <nav aria-label="Jump to category" className="mt-10 flex flex-wrap gap-2">
            {VEHICLE_CATEGORIES.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-line-onDark-strong px-4 py-2 text-[13px] font-medium text-slate-200 transition-colors hover:border-accent/50 hover:text-accent-hover"
              >
                <category.icon className="size-3.5 text-accent-hover" strokeWidth={1.75} />
                {category.title}
              </a>
            ))}
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}
