import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { TransformationStrip } from "@/components/sections/about/TransformationStrip";

export function OurStory() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 md:py-32">
      {/* Oversized ghosted word — texture, not a legible headline; echoes the case-file conceit */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap font-display text-[13rem] font-semibold leading-none text-navy-950/[0.028] lg:block xl:text-[16rem]"
      >
        Origin File
      </span>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          {/* Case-file rail */}
          <Reveal variant="up" className="lg:w-40">
            <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500 lg:mt-4">
                Case File
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 lg:mt-1.5">
                Our Story
              </p>
            </div>
            <div className="mt-6 hidden h-32 w-px bg-linear-to-b from-navy-950/15 to-transparent lg:block" />
          </Reveal>

          <div>
            <Reveal variant="up" delay={0.08}>
              <h2 className="max-w-3xl font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-navy-950 sm:text-[3.25rem] lg:text-[3.5rem]">
                Junk cars are a{" "}
                <span className="relative inline-block">
                  Calgary problem
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 300 18"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1.5 left-0 h-3 w-full text-accent sm:-bottom-2 sm:h-4"
                  >
                    <path
                      d="M2 12C60 4 240 2 298 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h2>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
              <Reveal variant="up" delay={0.16}>
                <p className="text-[17px] leading-relaxed text-slate-600">
                  Most of what comes through dispatch has already stopped
                  being useful to its owner: seized, written off, or
                  simply not worth repairing anymore. Junk4Car Calgary
                  buys and tows it anyway: cars, trucks, vans, and SUVs
                  across Calgary and the surrounding Alberta communities.
                </p>
              </Reveal>

              <Reveal variant="up" delay={0.22}>
                <p className="text-[17px] leading-relaxed text-slate-600">
                  Every offer is priced against the vehicle you actually
                  have, meaning year, make, model, and condition, not
                  a flat rate quoted before we&rsquo;ve seen it. Towing is
                  included once a sale is accepted, and payment is made in
                  cash at pickup, not a cheque mailed out later.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <TransformationStrip />
        </div>
      </Container>
    </section>
  );
}
