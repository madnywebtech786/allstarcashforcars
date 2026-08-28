import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FieldLog } from "@/components/sections/FieldLog";
import { ProcessRoute } from "@/components/sections/ProcessRoute";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WhyChooseUs />
      <FieldLog />
      <ProcessRoute />
      <ClosingCta />
      <Testimonials />
      <CtaSection />
      <ServiceIndex />
    </main>
  );
}
