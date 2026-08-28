import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { TestimonialsColumn } from "@/components/sections/TestimonialsColumn";

const REVIEWS = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    location: "Calgary, Alberta",
    rating: 5,
    quote:
      "Absolutely brilliant service! Got $450 for my old car and they collected it the same day. The team was professional and handled everything smoothly.",
  },
  {
    initials: "MT",
    name: "Michael Thompson",
    location: "Calgary, Alberta",
    rating: 5,
    quote:
      "Quick and hassle-free! They handled all the paperwork and I received payment instantly. Would definitely recommend to anyone.",
  },
  {
    initials: "DW",
    name: "David Williams",
    location: "Calgary, Alberta",
    rating: 5,
    quote:
      "Best offer I found after comparing with 4 other companies. The whole process took less than 2 days from quote to collection. Excellent!",
  },
  {
    initials: "RP",
    name: "Rachel Patel",
    location: "Airdrie, Alberta",
    rating: 5,
    quote:
      "My old truck wouldn't even start and they still gave me a fair offer. Towing was included once I accepted, so I didn't pay a cent extra.",
  },
  {
    initials: "KN",
    name: "Kevin Ng",
    location: "Cochrane, Alberta",
    rating: 5,
    quote:
      "Called in the morning and had cash in hand by early afternoon. No pressure, no runaround, exactly what they said it would be.",
  },
  {
    initials: "AL",
    name: "Amanda Lewis",
    location: "Okotoks, Alberta",
    rating: 5,
    quote:
      "They walked me through the paperwork step by step since it was my first time selling a car this way. Genuinely appreciated the patience.",
  },
  {
    initials: "TB",
    name: "Trevor Bishop",
    location: "Chestermere, Alberta",
    rating: 5,
    quote:
      "Had a written-off vehicle sitting in my driveway for months. One call and it was gone within the week, cash paid at pickup.",
  },
  {
    initials: "JM",
    name: "Jasmine Morrow",
    location: "Strathmore, Alberta",
    rating: 5,
    quote:
      "The offer matched what they quoted over the phone: no last-minute discount once the tow truck showed up. That mattered a lot to me.",
  },
  {
    initials: "CD",
    name: "Carlos Diaz",
    location: "Calgary, Alberta",
    rating: 5,
    quote:
      "Sold a car that hadn't run in years. They handled the tow, the paperwork, and the payout without a single complication.",
  },
];

const firstColumn = REVIEWS.slice(0, 3);
const secondColumn = REVIEWS.slice(3, 6);
const thirdColumn = REVIEWS.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal variant="up" className="max-w-lg">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
              Customer Reviews
            </p>
            <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
              What Our Customers Say
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1} className="max-w-sm">
            <p className="text-lg leading-relaxed text-slate-600">
              Real offers, real pickups, serving motorists across Calgary
              and Alberta.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 flex max-h-185 justify-center gap-4 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn reviews={firstColumn} duration={22} className="flex-1 sm:flex-none" />
          <TestimonialsColumn reviews={secondColumn} duration={27} className="flex-1 sm:flex-none" />
          <TestimonialsColumn reviews={thirdColumn} duration={24} className="hidden lg:block" />
        </div>
      </Container>
    </section>
  );
}
