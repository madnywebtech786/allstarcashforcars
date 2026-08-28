import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LOCATIONS } from "@/lib/locations";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  Wrench,
  ShoppingCart,
  Info,
  MessageSquare,
  Target,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Wrench },
  { label: "Purchases", href: "/purchases", icon: ShoppingCart },
  { label: "About Us", href: "/about-us", icon: Info },
  { label: "Contact", href: "/contact", icon: MessageSquare },
  { label: "Get Quote", href: "/#quote", icon: Target },
];

const SERVICES = [
  "Cash for Junk Cars",
  "Towing Included With an Accepted Sale",
  "Same-Day Pickup When Available",
  "All Cars Accepted",
  "Instant Cash Payment",
];

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Call for an instant offer",
    value: "(403) 402-0423",
    href: "tel:+14034020423",
  },
  {
    icon: Mail,
    label: "Email us your details",
    value: "hello@allstarcashforcars.ca",
    href: "mailto:hello@allstarcashforcars.ca",
  },
  {
    icon: MapPin,
    label: "Service coverage",
    value: "22 Alberta service areas",
  },
  {
    icon: Clock,
    label: "Dispatch hours",
    value: "Mon–Sat, 8 AM–6 PM",
  },
];

const LEGAL_LINKS = [
  { label: "Lead Sharing Disclaimer", href: "/lead-sharing-disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const STATS = [
  { value: "22", label: "Alberta Service Areas" },
  { value: "Free", label: "Towing With Accepted Sale" },
  { value: "Same-day", label: "Pickup When Available" },
  { value: "Mon–Sat", label: "8 AM – 6 PM" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.7fr_0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-navy-950">
                <Car className="size-5" strokeWidth={2} />
              </span>
              <p className="font-display text-lg font-semibold tracking-tight text-paper">
                ALLSTAR
                <span className="ml-1.5 text-accent">CASH FOR CARS</span>
              </p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Independent Alberta vehicle-offer request platform. Selected
              buyers review vehicle details and confirm any offer, towing
              and pickup terms.
            </p>
          </div>

          <FooterColumn title="Quick Links">
            {QUICK_LINKS.map((link) => (
              <FooterLink key={link.label} href={link.href} icon={link.icon}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Our Services">
            {SERVICES.map((service) => (
              <li key={service} className="text-sm leading-relaxed text-slate-400">
                {service}
              </li>
            ))}
          </FooterColumn>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
              Contact Us
            </p>
            <ul className="mt-5 space-y-4">
              {CONTACT_DETAILS.map((item) => (
                <li key={item.label} className="flex items-center gap-3.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent">
                    <item.icon className="size-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block truncate text-sm font-semibold text-paper transition-colors hover:text-accent-hover"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 truncate text-sm font-semibold text-paper">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 border-t border-line-onDark pt-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line-onDark-strong bg-white/3 px-5 py-4"
            >
              <p className="font-display text-2xl font-semibold text-accent sm:text-[1.75rem]">
                {stat.value}
              </p>
              <p className="mt-0.5 font-mono text-[10.5px] uppercase leading-snug tracking-[0.08em] text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-line-onDark">
        <Container className="py-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
            Alberta Service Areas
          </p>
          <p className="mt-1.5 text-sm text-slate-400">
            Browse the complete 22-city service-area hub
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {LOCATIONS.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/cash-for-cars-${location.slug}`}
                  className="text-sm text-slate-400 transition-colors hover:text-accent-hover"
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <div className="border-t border-line-onDark">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-xs leading-relaxed text-slate-500 sm:text-left">
            &copy; 2026 AllStar Cash For Cars. All rights reserved. |
            allstarcashforcars.ca | Developed by Webomedia Technology
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-500 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
        {title}
      </p>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, icon: Icon, children }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-accent-hover"
      >
        {Icon && (
          <Icon
            className="size-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-accent-hover"
            strokeWidth={1.75}
          />
        )}
        {children}
      </Link>
    </li>
  );
}
