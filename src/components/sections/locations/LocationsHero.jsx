import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Reveal } from "@/components/animations/Reveal";
import { LOCATION_GROUPS } from "@/lib/locations";

const BREADCRUMB_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Locations" },
];

export function LocationsHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-paper) 1px, transparent 1px), linear-gradient(to bottom, var(--color-paper) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -right-40 top-10 h-130 w-130 rounded-full bg-navy-700/30 blur-[140px]" />
        <CoverageConstellation />
      </div>

      <Container className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <Reveal variant="fade" duration={0.6}>
          <Breadcrumb items={BREADCRUMB_ITEMS} />
        </Reveal>

        <div className="mt-10 max-w-2xl">
          <Reveal variant="up" delay={0.06} duration={0.8}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-400">
              22 Confirmed Service Areas
            </p>
          </Reveal>

          <Reveal variant="up" delay={0.12} duration={0.8}>
            <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight sm:text-[3.25rem] lg:text-[3.75rem]">
              Cash for Cars Across Alberta
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.2} duration={0.8}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Choose your city for local cash-for-cars, junk vehicle
              removal, and pickup information. Route timing is confirmed
              with each accepted offer.
            </p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.28} duration={0.7}>
          <nav aria-label="Jump to region" className="mt-10 flex flex-wrap gap-2">
            {LOCATION_GROUPS.map((group) => (
              <a
                key={group.label}
                href={`#${slugify(group.label)}`}
                className="inline-flex items-center gap-2 rounded-full border border-line-onDark-strong px-4 py-2 text-[13px] font-medium text-slate-200 transition-colors hover:border-accent/50 hover:text-accent-hover"
              >
                {group.label}
                <span className="font-mono text-[10px] text-slate-500">
                  {String(group.locations.length).padStart(2, "0")}
                </span>
              </a>
            ))}
          </nav>
        </Reveal>
      </Container>
    </section>
  );
}

function slugify(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/** Abstract route-network motif — schematic, not a literal map, to match the site's existing dispatch/grid visual language */
function CoverageConstellation() {
  const nodes = [
    [72, 18], [58, 32], [84, 28], [66, 48], [90, 52],
    [50, 58], [78, 66], [62, 78], [40, 68], [30, 44],
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 5],
    [3, 6], [4, 6], [5, 8], [6, 7], [8, 9], [1, 9],
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full opacity-[0.14]"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="var(--color-paper)"
          strokeWidth="0.15"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 0.9 : 0.5} fill="var(--color-accent)" />
      ))}
    </svg>
  );
}
