import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.1482475782004!2d-114.1395582!3d51.1794905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537167bf7df2b1d9%3A0x75f202371a8b3d48!2s41%20Sage%20Bluff%20Cl%20NW%2C%20Calgary%2C%20AB%20T3R%201J1%2C%20Canada!5e0!3m2!1sen!2sfr!4v1788334307547!5m2!1sen!2sfr";

export function ContactMap() {
  return (
    <section className="bg-paper pb-24 md:pb-32">
      <Container>
        <Reveal variant="up" className="max-w-lg">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-500">
            Location
          </p>
          <h2 className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-navy-950 sm:text-[2.75rem]">
            Find Us
          </h2>
        </Reveal>

        <Reveal variant="up" delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-[28px] border border-navy-950/8">
            <iframe
              src={MAP_EMBED_SRC}
              title="Junk4Car Calgary - 41 Sage Bluff Close NW, Calgary, AB"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
