import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { MapPin } from "lucide-react";
import { LOCATION_GROUPS } from "@/lib/locations";

export function RegionRoster() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal variant="up" className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
            Find Your Alberta Service Area
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
            Every City Below Is a Current Service Area
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Confirm your city when you request an offer, and dispatch
            handles the local vehicle-removal process from there.
          </p>
        </Reveal>

        <div className="mt-16 space-y-14">
          {LOCATION_GROUPS.map((group, gi) => (
            <RegionBlock key={group.label} group={group} index={gi} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function RegionBlock({ group, index }) {
  const id = group.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div id={id} className="scroll-mt-28">
      <Reveal variant="up" className="flex items-center gap-4">
        <span className="font-mono text-xs tabular-nums text-accent-hover">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-xl font-semibold text-navy-950 sm:text-2xl">
          {group.label}
        </h3>
        <span className="h-px flex-1 bg-navy-950/8" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
          {group.locations.length} areas
        </span>
      </Reveal>

      <div className="mt-6 flex flex-wrap gap-3">
        {group.locations.map((location, i) => (
          <Reveal
            key={location.slug}
            variant="up"
            delay={i * 0.03}
            duration={0.5}
            className="min-w-[calc(50%-0.375rem)] flex-1 sm:min-w-[calc(33.333%-0.5rem)] lg:min-w-[calc(25%-0.5625rem)]"
          >
            <CityCard location={location} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function CityCard({ location }) {
  return (
    <div className="flex h-full items-center gap-3 rounded-2xl border border-navy-950/8 bg-white px-6 py-5">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-950/4 text-navy-500">
        <MapPin className="size-4" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <p className="font-display text-[15px] font-semibold text-navy-950">
          Cash for Cars {location.name}
        </p>
        <p className="mt-1 text-xs leading-snug text-slate-500">
          Offers, towing and pickup details
        </p>
      </div>
    </div>
  );
}
