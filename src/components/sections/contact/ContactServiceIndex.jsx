import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Users, Repeat, CircleDollarSign } from "lucide-react";

const ENTRIES = [
  {
    code: "JCB",
    icon: Users,
    term: "Junk Car Buyers Calgary",
    copy: "We evaluate vehicles in any condition and price them honestly, which is why local owners keep coming back to us instead of shopping the offer around.",
  },
  {
    code: "SMC",
    icon: Repeat,
    term: "Sell My Car for Cash Calgary",
    copy: "Get a quote, accept it, and hand over the keys, we handle the towing, the paperwork, and the payment so selling doesn't turn into a project.",
  },
  {
    code: "CUC",
    icon: CircleDollarSign,
    term: "Cash for Used Cars Calgary",
    copy: "Running or not, we price used vehicles at a fair market rate and schedule pickup quickly, with payment made the moment the sale is confirmed.",
  },
];

export function ContactServiceIndex() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
            How Calgary Finds Us
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
            Different Search, Same Dispatch Desk
          </h2>
        </Reveal>

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
        <h3 className="font-display text-xl font-semibold leading-snug text-navy-950">{term}</h3>
        <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-slate-600">{copy}</p>
      </div>

      <span className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:block">
        {code}
      </span>
    </div>
  );
}
