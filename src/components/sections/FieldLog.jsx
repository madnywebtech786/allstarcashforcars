import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

const SHOWCASE = [
  {
    tag: "Pickup footage",
    caption: "Arrival to hookup, on location in Calgary.",
  },
  {
    tag: "Payout footage",
    caption: "Offer confirmed, cash paid on the spot.",
  },
];

const LOG_ENTRIES = [
  {
    time: "08:14",
    label: "Arrival",
    copy: "Tow operator arrives at the confirmed pickup address in Calgary.",
  },
  {
    time: "08:22",
    label: "Hookup",
    copy: "Vehicle is assessed against the submitted details and secured for towing.",
  },
  {
    time: "08:40",
    label: "Payout",
    copy: "Cash is paid on the spot once the offer and paperwork are confirmed.",
  },
];

export function FieldLog() {
  return (
    <section className="bg-navy-950 py-24 text-paper md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
            See Us In Action
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem]">
            How We Serve Calgary
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            A real look at pickup day, from arrival to payout: footage from
            the field, not a studio.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {SHOWCASE.map((item, i) => (
            <Reveal key={item.tag} variant="up" duration={0.8} delay={i * 0.1}>
              <ShowcasePanel item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={0.2}>
          <div className="mt-4 rounded-[22px] border border-line-onDark bg-white/2 p-8 sm:p-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
              Field log &middot; Calgary route
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-line-onDark pt-6 sm:grid-cols-3">
              {LOG_ENTRIES.map((entry) => (
                <li key={entry.time} className="flex gap-4">
                  <span className="shrink-0 pt-0.5 font-mono text-sm tabular-nums text-amber-400">
                    {entry.time}
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-paper">
                      {entry.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {entry.copy}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-line-onDark pt-6 font-mono text-[10.5px] uppercase leading-relaxed tracking-widest text-slate-500">
              Footage updated as new pickups are documented across our 22
              Alberta service areas.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ShowcasePanel({ item }) {
  return (
    <div className="group overflow-hidden rounded-[22px] border border-line-onDark bg-navy-900">
      <div className="relative aspect-4/3 sm:aspect-16/11">
        <Image
          src="/images/junk-cars.webp"
          alt={item.caption}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy-950/60 via-navy-950/0 to-navy-950/0" />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-6 py-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/70 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-200 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-amber-400" aria-hidden="true" />
            {item.tag}
          </span>
        </div>
      </div>

      <p className="border-t border-line-onDark px-6 py-4 text-sm leading-snug text-slate-300">
        {item.caption}
      </p>
    </div>
  );
}
