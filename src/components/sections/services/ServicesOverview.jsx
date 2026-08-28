import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function ServicesOverview() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal variant="up" className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
              In Detail
            </p>
            <h2 className="mt-5 max-w-sm font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
              Complete Junk Car Services in Calgary
            </h2>
          </Reveal>

          <div className="space-y-8 text-[17px] leading-relaxed text-slate-600">
            <Reveal variant="up" delay={0.05}>
              <p>
                AllStar Cash For Cars offers comprehensive junk car buying
                and removal throughout Calgary and the surrounding Alberta
                communities. Our full-service approach means you don&rsquo;t
                have to worry about any part of selling an unwanted vehicle
                &mdash; we handle everything from the initial quote to final
                pickup and payment.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.1}>
              <p>
                We accept vehicles in absolutely any condition. Running or
                not running, damaged or totaled, old or relatively new
                &mdash; we buy them all, including cars, trucks, SUVs, vans,
                and commercial vehicles. There&rsquo;s no vehicle too old,
                too damaged, or too far gone for us to make an offer. Many
                customers are surprised to learn their &ldquo;worthless&rdquo;
                junk car is actually worth hundreds, sometimes thousands, of
                dollars.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.15}>
              <p>
                Towing included with an accepted sale covers all of Calgary
                and extends to surrounding communities including Airdrie,
                Cochrane, Okotoks, Chestermere, Strathmore, High River, and
                beyond. Our tow operators are experienced with vehicles in
                any condition, including ones that haven&rsquo;t moved in
                years, and can extract them from tight spaces, garages,
                backyards, and other difficult locations.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.2}>
              <p>
                After an accepted sale, we arrange pickup and responsible
                vehicle processing through Alberta recycling facilities.
                Reusable materials are recovered while fluids and
                components are directed to appropriate handling channels.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.25}>
              <p>
                Payment stays simple: cash on the spot, no cheques, no bank
                transfers, no waiting periods. The amount quoted over the
                phone is the amount paid at pickup, with no hidden fees,
                towing deductions, or surprise charges. That transparent
                pricing is what&rsquo;s earned us the trust of Calgary
                residents over time.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
