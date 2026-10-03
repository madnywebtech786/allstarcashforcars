import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { Check } from "lucide-react";

export function ServiceDetail({ service, index, total }) {
  const num = String(index + 1).padStart(2, "0");
  const imageOnRight = index % 2 === 1;

  return (
    <section id={service.id} className="scroll-mt-28 bg-paper py-16 md:py-20">
      <Container>
        {/* Manifest rule — files each service into the same ledger, echoes the About page's TransformationStrip */}
        <Reveal variant="fade" duration={0.6} className="flex items-center gap-4">
          <span className="font-mono text-[11px] tabular-nums text-slate-400">
            {num} / {String(total).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-navy-950/8" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
            {service.code}
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <Reveal
            variant="up"
            duration={0.8}
            className={`relative ${imageOnRight ? "lg:order-2" : ""}`}
          >
            {/* Offset frame behind the photo — depth via layering, not shadow */}
            <div
              aria-hidden="true"
              className={`absolute -z-10 hidden aspect-4/3 w-[92%] rounded-[28px] border border-navy-950/10 bg-navy-950/2 sm:aspect-16/11 lg:block ${
                imageOnRight ? "-right-4 -top-4" : "-left-4 -top-4"
              }`}
            />

            <div className="group relative aspect-4/3 overflow-hidden rounded-[28px] border border-navy-950/8 sm:aspect-16/11">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy-950/60 via-navy-950/0 to-navy-950/0" />

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/70 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-paper backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Service {num}
              </span>
            </div>

            {/* Code bleeding outside the frame — an architectural label, not a small tag */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-6 hidden select-none font-display text-7xl font-semibold leading-none text-navy-950/6 lg:block xl:text-8xl ${
                imageOnRight ? "-right-4" : "-left-4"
              }`}
            >
              {service.code}
            </span>
          </Reveal>

          <div className={imageOnRight ? "lg:order-1" : ""}>
            <Reveal variant="up" delay={0.08}>
              <h2 className="max-w-lg font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-navy-950 sm:text-[2.5rem]">
                {service.title}
              </h2>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-slate-600">
                {service.summary}
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.16}>
              <ul className="mt-8 space-y-0 divide-y divide-navy-950/6 border-t border-navy-950/6">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 py-3.5 text-[15px] text-slate-700"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-hover">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
