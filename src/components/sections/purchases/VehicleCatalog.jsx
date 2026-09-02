import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { VEHICLE_CATEGORIES, formatPriceRange } from "@/lib/purchases";

export function VehicleCatalog() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
            All Types of Vehicles Accepted
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
            Nine Categories, One Fair Offer
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            At AllStar Cash For Cars, we purchase all types of vehicles
            regardless of make, model, year, or condition &mdash; running or
            not, damaged, old, or totaled &mdash; with towing included on
            every accepted sale.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {VEHICLE_CATEGORIES.map((category, i) => (
            <Reveal key={category.slug} variant="up" delay={(i % 3) * 0.06} duration={0.6} className="h-full">
              <CategoryCard category={category} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({ category }) {
  const { icon: Icon, title, tagline, summary, makes, priceNote, listLabel } = category;

  return (
    <div
      id={category.slug}
      className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[24px] border border-navy-950/8 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-navy-950/12 hover:shadow-[0_24px_48px_-24px_rgba(10,19,48,0.18)]"
    >
      <div className="flex items-start justify-between gap-4 p-7 pb-0">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950/4 text-navy-800 transition-colors duration-500 group-hover:bg-accent group-hover:text-navy-950">
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <span className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-400">
          {tagline}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 pt-5">
        <h3 className="font-display text-xl font-semibold text-navy-950">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{summary}</p>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400">
          {listLabel ?? "Popular Makes We Buy"}
        </p>
        <ul className="mt-2.5 space-y-1.5">
          {makes.map((make) => (
            <li key={make} className="flex items-start gap-2 text-[13px] leading-snug text-slate-600">
              <Check className="mt-0.5 size-3 shrink-0 text-accent-hover" strokeWidth={3} />
              {make}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-baseline gap-2 border-t border-navy-950/8 pt-5">
          <span className="font-display text-2xl font-semibold text-navy-950">
            {formatPriceRange(category)}
          </span>
        </div>
        <p className="mt-1 text-xs leading-snug text-slate-500">{priceNote}</p>

        <div className="mt-6">
          <Button as="a" href="/#quote" variant="ghostLight" className="w-full justify-center">
            Get Quote Now
          </Button>
        </div>
      </div>
    </div>
  );
}
