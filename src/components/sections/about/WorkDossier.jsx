const ENTRIES = [
  {
    code: "01",
    title: "Offers priced by people who know vehicles",
    copy: "Our team prices offers against current scrap and salvage values, not a script. A late-model car with a blown transmission, an aging daily driver that's no longer worth repairing, and a vehicle that hasn't run in years are three different offers, because they're three different vehicles. Condition changes the number, never whether we'll buy.",
  },
  {
    code: "02",
    title: "Paperwork handled, not outsourced to you",
    copy: "Selling a car you don't want anymore shouldn't come with a stack of forms to figure out alone. We walk through ownership and registration requirements with you before pickup, so there are no surprises when the tow truck arrives.",
  },
  {
    code: "03",
    title: "Towing included, cash paid on the spot",
    copy: "Once an offer is accepted, towing from your driveway, lot, or roadside is included at no added cost. There's no waiting on a cheque to clear afterward, since you're paid in cash the moment the vehicle is confirmed and loaded.",
  },
  {
    code: "04",
    title: "A request process, not a walk-in counter",
    copy: "We serve Calgary and the surrounding Alberta communities through an online request process: share your vehicle and contact details through the quote form, or reach the dispatch desk directly with questions before you commit to anything.",
  },
];

export function WorkDossier() {
  return (
    <ol className="relative">
      <div
        aria-hidden="true"
        className="absolute left-[0.9rem] top-2 bottom-2 w-px bg-navy-950/10 sm:left-5"
      />
      {ENTRIES.map((entry, i) => (
        <li key={entry.code} className="relative flex gap-5 pb-11 last:pb-0 sm:gap-7">
          <span className="relative z-10 flex size-[1.9rem] shrink-0 items-center justify-center rounded-full border border-navy-950/12 bg-paper font-mono text-[11px] tabular-nums text-navy-800 sm:size-10 sm:text-xs">
            {entry.code}
          </span>

          <div className="min-w-0 pt-0.5 sm:pt-1.5">
            <h3 className="font-display text-xl font-semibold leading-snug text-navy-950 sm:text-2xl">
              {entry.title}
            </h3>
            <p className="mt-2.5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
              {entry.copy}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
