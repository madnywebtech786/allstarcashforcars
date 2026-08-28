import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { ClipboardList, ShieldCheck, Truck } from "lucide-react";

const STEPS = [
  {
    code: "01",
    icon: ClipboardList,
    title: "Request an offer",
    copy: "Share the vehicle year, make, model, condition, and pickup city.",
  },
  {
    code: "02",
    icon: ShieldCheck,
    title: "Confirm details",
    copy: "The team confirms the offer, ownership requirements, and route availability.",
  },
  {
    code: "03",
    icon: Truck,
    title: "Schedule pickup",
    copy: "Towing is included with an accepted sale, with same-day timing when the route permits.",
  },
];

export function AreaPickupProcess() {
  return (
    <section className="bg-navy-950 py-24 text-paper md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
            How Area Pickup Works
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight sm:text-[2.75rem]">
            Same Process, Wherever You&rsquo;re Calling From
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-line-onDark bg-line-onDark sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.code} variant="up" delay={i * 0.1} duration={0.6} className="bg-navy-950">
              <div className="flex h-full flex-col p-8 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-accent">
                    <step.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs tabular-nums text-slate-500">
                    {step.code}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-paper">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-300">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
