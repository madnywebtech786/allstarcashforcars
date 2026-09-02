import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

export function PurchasesOverview() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal variant="up" className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
              In Detail
            </p>
            <h2 className="mt-5 max-w-sm font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
              We Buy All Types of Vehicles in Calgary
            </h2>
          </Reveal>

          <div className="space-y-8 text-[17px] leading-relaxed text-slate-600">
            <Reveal variant="up" delay={0.05}>
              <p>
                Nine categories on this page are really a shorthand for one
                policy: make, model, year, and condition don&rsquo;t
                disqualify a vehicle here. A compact sedan gets the same
                consideration as a full-size work truck, a luxury SUV, or a
                commercial van &mdash; we&rsquo;ve priced and picked up
                thousands of vehicles across Calgary, and the process
                doesn&rsquo;t change based on what&rsquo;s parked in your
                driveway.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.1}>
              <p>
                Badge doesn&rsquo;t matter either. Reliable Japanese
                imports&mdash;Toyota, Honda, Nissan, Mazda&mdash;get the
                same fair offer as American mainstays like Ford, Chevrolet,
                GMC, Dodge, and Jeep, or European makes such as BMW,
                Mercedes-Benz, Volkswagen, and Audi. Whatever&rsquo;s on the
                grille, we&rsquo;ll price the vehicle behind it.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.15}>
              <p>
                Condition changes the number, not the answer. A vehicle
                that runs well naturally commands more, but we specifically
                look for the ones other buyers pass on: accident damage,
                flood or fire exposure, a seized engine, or a car that
                simply hasn&rsquo;t run in years. Where someone else sees a
                problem, we see a vehicle with parts and material still
                worth paying for.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.2}>
              <p>
                Once an offer is accepted, the rest is handled for you. A
                tow operator comes to wherever the vehicle actually sits
                &mdash; home, work, or anywhere else in Calgary and the
                surrounding area &mdash; completes the paperwork on-site,
                and pays cash before leaving. Most pickups run under an
                hour, start to finish.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
