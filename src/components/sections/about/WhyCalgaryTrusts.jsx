import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Truck, Banknote, Recycle } from "lucide-react";

const SERVICE_PILLARS = [
  {
    icon: Truck,
    title: "Towing Service Calgary",
    copy: "We offer reliable towing service Calgary for junk, accident, and broken vehicles. Our 24/7 towing team reaches all areas of Calgary quickly, ensuring safe vehicle handling and hassle-free removal.",
  },
  {
    icon: Banknote,
    title: "Cash for Junk Cars Calgary",
    copy: "Get top value with our cash for junk cars Calgary service designed for fast payments and easy pickup. No paperwork stress, no waiting, just quick quotes, towing included with an accepted sale, and instant cash for your junk car.",
  },
  {
    icon: Recycle,
    title: "Free Junk Car Removal Calgary",
    copy: "Our free junk car removal Calgary service allows you to remove unwanted vehicles without paying towing fees. We manage pickup, documentation, and payment, making the entire process simple and cost-free.",
  },
];

export function WhyCalgaryTrusts() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
            Why Calgary Trusts Junk4Car Calgary
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Junk4Car Calgary is built around a simple philosophy: treat
            every customer with respect, offer fair prices, and deliver on
            our promises. This approach supports clear, straightforward
            vehicle sales throughout Calgary and Alberta.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SERVICE_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} variant="up" delay={i * 0.08} duration={0.6}>
              <ServicePillarCard pillar={pillar} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-navy-950/8 pt-14 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="up">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-500">
              Automotive expertise
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Our team consists of experienced automotive professionals who
              understand the true value of vehicles in any condition.
              Whether you have a late-model car with mechanical issues, an
              older vehicle that&rsquo;s no longer worth repairing, or a
              completely non-running junk car, we have the expertise to
              make you a fair offer. We stay current with scrap metal
              prices and salvage values to ensure our offers reflect true
              market conditions.
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.08}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-navy-500">
              Built around convenience
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              What sets us apart from other cash for cars services in
              Calgary is our commitment to convenience. We handle all the
              paperwork, provide towing included with an accepted sale
              from any location, and pay cash on the spot. There&rsquo;s no
              waiting for cheques to clear or dealing with complicated
              payment processes, since when our tow truck arrives,
              you&rsquo;ll receive your cash immediately.
            </p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.12}>
          <p className="mt-10 max-w-2xl border-t border-navy-950/8 pt-8 text-[15px] leading-relaxed text-slate-500">
            We serve Calgary and surrounding Alberta communities through an
            online request process. Use the secure contact form for
            questions, or submit the quote form for an offer.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function ServicePillarCard({ pillar }) {
  const { icon: Icon, title, copy } = pillar;
  return (
    <div className="h-full rounded-3xl border border-navy-950/8 bg-white p-7 sm:p-8">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950/4 text-navy-800">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{copy}</p>
    </div>
  );
}
