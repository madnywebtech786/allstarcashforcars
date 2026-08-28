import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import {
  Banknote,
  Truck,
  ShieldCheck,
  Clock,
  Wrench,
  MapPin,
} from "lucide-react";

const BENEFITS = [
  {
    index: "01",
    icon: Banknote,
    title: "Instant Cash Payment",
    copy: "Every cash for cars Calgary offer is priced from your vehicle's year, make, model and today's scrap market, then paid out on the spot. $300 to $10,000, no checks, no waiting on approvals.",
    featured: true,
  },
  {
    index: "02",
    icon: Truck,
    title: "Towing Included With an Accepted Sale",
    copy: "Once your offer is accepted, our junk cars for cash Calgary crew tows it from wherever it sits (driveway, lot or roadside) at no added cost to you.",
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Any Condition Accepted",
    copy: "Running, seized, flooded or written off: our scrap car removal Calgary team prices and takes it as-is. Condition changes the offer, never whether we'll buy.",
  },
  {
    index: "04",
    icon: Clock,
    title: "Same-Day Pickup When Available",
    copy: "Call in the morning, hand over the keys by afternoon. Same-day pickup runs whenever our Calgary route has room.",
  },
  {
    index: "05",
    icon: Wrench,
    title: "Professional Towing",
    copy: "Flatbeds and trained operators handle the load, so a dead battery or missing tire never holds up pickup.",
  },
  {
    index: "06",
    icon: MapPin,
    title: "Local Calgary Service",
    copy: "Based in Calgary and dispatching across the surrounding Alberta communities we serve.",
    wide: true,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal variant="up" className="max-w-lg">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
              Why Choose Us
            </p>
            <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
              Calgary&rsquo;s Junk Car Buyers
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="max-w-sm">
            <p className="text-lg leading-relaxed text-slate-600">
              Instant cash, towing included with an accepted sale, and a
              process built around your specific vehicle, not a flat rate.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              key={benefit.index}
              variant="up"
              delay={i * 0.07}
              duration={0.6}
              amount={0.3}
              className={
                benefit.featured
                  ? "sm:col-span-2 lg:col-span-1 lg:row-span-2"
                  : benefit.wide
                    ? "sm:col-span-2 lg:col-span-3"
                    : ""
              }
            >
              <BenefitCard benefit={benefit} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function BenefitCard({ benefit }) {
  const { icon: Icon, title, copy, index, featured, wide } = benefit;

  return (
    <div
      className={`group relative h-full overflow-hidden rounded-[22px] border p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(10,19,48,0.18)] ${
        featured
          ? "flex flex-col justify-between border-navy-900 bg-navy-950 hover:border-navy-800"
          : "border-navy-950/8 bg-white hover:border-navy-950/12"
      } ${wide ? "sm:flex sm:items-center sm:gap-8" : ""}`}
    >
      {/* Oversized index watermark — encodes "itemized term" without leading with a numbered label */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-2 -top-4 select-none font-display text-[6rem] font-semibold leading-none text-accent/15 transition-colors duration-500 group-hover:text-accent/30 ${
          wide ? "sm:right-6 sm:top-1/2 sm:-translate-y-1/2" : ""
        }`}
      >
        {index}
      </span>

      <div className={`relative ${wide ? "sm:flex sm:flex-1 sm:items-center sm:gap-6" : ""}`}>
        <span
          className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500 ${
            featured
              ? "bg-accent text-navy-950"
              : "bg-navy-950/4 text-navy-800 group-hover:bg-accent group-hover:text-navy-950"
          }`}
        >
          <Icon className="size-5" strokeWidth={1.75} />
        </span>

        <div>
          <h3
            className={`font-display text-xl font-semibold ${
              wide ? "mt-0" : "mt-6"
            } ${featured ? "text-accent" : "text-accent-hover"}`}
          >
            {title}
          </h3>
          <p
            className={`mt-3 text-[15px] leading-relaxed ${
              featured ? "text-slate-300 max-w-xs" : "text-slate-600"
            } ${wide ? "mt-1.5" : ""}`}
          >
            {copy}
          </p>
        </div>
      </div>

      {featured && (
        <div className="relative mt-8 flex items-baseline gap-2 border-t border-line-onDark pt-6">
          <span className="font-display text-3xl font-semibold text-paper">
            $300&ndash;$10K
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-widest text-slate-400">
            per vehicle
          </span>
        </div>
      )}
    </div>
  );
}
