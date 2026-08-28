import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { RouteLine } from "@/components/sections/RouteLine";
import { RouteStop } from "@/components/sections/RouteStop";
import { Phone, HandCoins, Truck, Wallet } from "lucide-react";

const STEPS = [
  {
    code: "01",
    icon: <Phone strokeWidth={1.75} />,
    title: "Call or Get Quote",
    copy: "Share your car's details. We provide an instant cash offer over the phone or through the online form.",
  },
  {
    code: "02",
    icon: <HandCoins strokeWidth={1.75} />,
    title: "Accept Your Offer",
    copy: "Review a fair, vehicle-specific offer between $300–$10,000 based on make, model and condition.",
  },
  {
    code: "03",
    icon: <Truck strokeWidth={1.75} />,
    title: "Schedule Towing",
    copy: "Towing is included with an accepted sale. We confirm a pickup window anywhere in Calgary.",
  },
  {
    code: "04",
    icon: <Wallet strokeWidth={1.75} />,
    title: "Get Paid Cash",
    copy: "Receive instant cash payment the moment we pick up your vehicle. Simple and fast.",
  },
];

export function ProcessRoute() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal variant="up" className="max-w-lg">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
              Simple Process
            </p>
            <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
              Sell Your Junk Car in 4 Easy Steps
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="max-w-sm">
            <p className="text-lg leading-relaxed text-slate-600">
              Get instant cash for your junk car today: fast, easy, and
              hassle-free from first call to final payout.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <RouteLine>
            <ol>
              {STEPS.map((step, i) => (
                <RouteStop
                  key={step.code}
                  {...step}
                  index={i}
                  total={STEPS.length}
                />
              ))}
            </ol>
          </RouteLine>
        </div>
      </Container>
    </section>
  );
}
