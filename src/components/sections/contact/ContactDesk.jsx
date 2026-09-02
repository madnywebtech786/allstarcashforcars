import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.1482475782004!2d-114.1395582!3d51.1794905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537167bf7df2b1d9%3A0x75f202371a8b3d48!2s41%20Sage%20Bluff%20Cl%20NW%2C%20Calgary%2C%20AB%20T3R%201J1%2C%20Canada!5e0!3m2!1sen!2sfr!4v1788334307547!5m2!1sen!2sfr";

const CONTACT_CHANNELS = [
  {
    icon: Phone,
    label: "Call Us",
    tag: "Get instant support",
    value: "(403) 402-0423",
    href: "tel:+14034020423",
    note: "Mon–Sat, 8 AM – 6 PM MST",
  },
  {
    icon: Mail,
    label: "Email Us",
    tag: "24/7 email support",
    value: "hello@allstarcashforcars.ca",
    href: "mailto:hello@allstarcashforcars.ca",
    note: "Response within 2 hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    tag: "Headquarters",
    value: "41 Sage Bluff Close NW",
    note: "Calgary, AB T3R 0X6",
  },
];

export function ContactDesk() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal variant="up">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
                Dispatch Desk
              </p>
              <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
                Reach Us Directly
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
                Every channel below reaches the same desk, and a real
                person confirms every offer before pickup.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.1} className="mt-10 space-y-3">
              {CONTACT_CHANNELS.map((channel) => (
                <ChannelRow key={channel.label} channel={channel} />
              ))}
            </Reveal>

            <Reveal variant="up" delay={0.16} className="mt-3">
              <div className="flex items-center gap-4 rounded-2xl border border-navy-950/8 bg-white px-6 py-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950/4 text-navy-800">
                  <Clock className="size-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                    Dispatch hours
                  </p>
                  <p className="mt-0.5 truncate font-display text-base font-semibold text-navy-950">
                    Monday – Saturday, 8 AM – 6 PM
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.2} className="mt-3">
              <div className="overflow-hidden rounded-2xl border border-navy-950/8">
                <iframe
                  src={MAP_EMBED_SRC}
                  title="AllStar Cash For Cars — 41 Sage Bluff Close NW, Calgary, AB"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={0.14} className="lg:justify-self-end">
            <QuoteForm ticketNumber="AB-04523" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ChannelRow({ channel }) {
  const { icon: Icon, label, tag, value, href, note } = channel;

  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-navy-950/8 bg-white px-6 py-5 transition-colors duration-300 hover:border-navy-950/16">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950/4 text-navy-800 transition-colors duration-300 group-hover:bg-accent group-hover:text-navy-950">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
          {label} &middot; {tag}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-0.5 block truncate font-display text-base font-semibold text-navy-950 transition-colors hover:text-accent-hover"
          >
            {value}
          </a>
        ) : (
          <p className="mt-0.5 truncate font-display text-base font-semibold text-navy-950">
            {value}
          </p>
        )}
      </div>
      <p className="hidden shrink-0 text-xs text-slate-500 sm:block">{note}</p>
    </div>
  );
}
