import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Banknote, Recycle, Wrench } from "lucide-react";

const ENTRIES = [
  {
    code: "CFC",
    icon: Banknote,
    term: "Cash for Cars Calgary",
    copy: "Payment is made at confirmed pickup, with towing included once a sale is accepted. Whether your car is old, damaged, or not running, dispatch confirms the pickup window and the offer is based on your submitted vehicle details.",
  },
  {
    code: "JFC",
    icon: Wrench,
    term: "Junk Cars for Cash Calgary",
    copy: "Turn an unwanted vehicle into quick money. We accept all makes and conditions, arrange towing, and pay on the spot, with no delays and no hidden charges.",
  },
  {
    code: "SCR",
    icon: Recycle,
    term: "Scrap Car Removal Calgary",
    copy: "Scrap vehicles are removed safely from your location and directed to eco-friendly recycling. The service includes towing with an accepted sale, quick scheduling, and instant cash payment at pickup.",
  },
];

export function ServiceIndex() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal variant="up" className="max-w-lg">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
              Service Log
            </p>
            <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
              Three Names, One Call to Us
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="max-w-sm">
            <p className="text-lg leading-relaxed text-slate-600">
              However you search for it, dispatch handles the request the
              same way: confirm the vehicle, confirm the offer, tow it
              out.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 overflow-hidden rounded-[22px] border border-navy-950/10 bg-white">
          {ENTRIES.map((entry, i) => (
            <Reveal key={entry.code} variant="up" delay={i * 0.08} duration={0.6}>
              <EntryRow entry={entry} last={i === ENTRIES.length - 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function EntryRow({ entry, last }) {
  const { icon: Icon, code, term, copy } = entry;

  return (
    <div
      className={`group grid grid-cols-1 gap-6 px-8 py-9 transition-colors duration-500 hover:bg-navy-950/2 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-10 sm:px-10 ${
        last ? "" : "border-b border-navy-950/8"
      }`}
    >
      <div className="flex items-center gap-5">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950/4 text-navy-800 transition-colors duration-500 group-hover:bg-accent group-hover:text-navy-950">
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-hover sm:hidden">
          {code}
        </span>
      </div>

      <div>
        <h3 className="font-display text-xl font-semibold leading-snug text-navy-950">
          {term}
        </h3>
        <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          {copy}
        </p>
      </div>

      <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:block">
        {code}
      </span>
    </div>
  );
}
