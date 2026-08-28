import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Dispatch-style breadcrumb — rendered as a waypoint trail (mono labels + connecting
 * line + a lit "current stop" node) to match the route/dispatch visual language used
 * by RouteLine/RouteStop on the homepage, rather than a generic ">" trail.
 */
export function Breadcrumb({ items, className = "" }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href ?? item.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="size-3 shrink-0 text-line-onDark-strong"
                  strokeWidth={2}
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent"
                >
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-300 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
