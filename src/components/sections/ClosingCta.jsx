import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Call for an instant offer",
    value: "(403) 402-0423",
    href: "tel:+14034020423",
  },
  {
    icon: Mail,
    label: "Email us your details",
    value: "hello@junk4carcalgary.ca",
    href: "mailto:hello@junk4carcalgary.ca",
  },
  {
    icon: Clock,
    label: "Dispatch hours",
    value: "Mon–Sat, 8 AM–6 PM",
  },
  {
    icon: MapPin,
    label: "Coverage",
    value: "Calgary + 21 Alberta communities",
  },
];

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
      {/* Schematic grid, matching the hero/field-log dispatch motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-paper) 1px, transparent 1px), linear-gradient(to bottom, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-130 w-130 rounded-full bg-navy-700/30 blur-[140px]"
      />

      <Container className="relative">
        <Reveal variant="up" className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
            Talk to Dispatch
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem]">
            Reach Us Directly
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            Call the desk, send your details, or fill out the intake form
            below, and a real person confirms every offer before pickup.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.1} className="mt-14">
          <div className="overflow-hidden rounded-[28px] border border-line-onDark shadow-[0_40px_80px_-32px_rgba(10,19,48,0.5)] lg:grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-white/4 p-8 sm:p-10 lg:p-11">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-400">
                Dispatch Desk
              </p>
              <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-slate-300">
                Reach the desk directly: every offer is confirmed by a real
                person before pickup.
              </p>

              <ul className="mt-8 space-y-6 border-t border-line-onDark pt-7">
                {CONTACT_DETAILS.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent">
                      <item.icon className="size-4" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block truncate font-display text-base font-semibold text-paper transition-colors hover:text-accent-hover"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 truncate font-display text-base font-semibold text-paper">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line-onDark lg:border-t-0 lg:border-l">
              <QuoteForm ticketNumber="AB-04522" bare />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
