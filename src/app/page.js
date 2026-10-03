import { Hero } from "@/components/sections/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FieldLog } from "@/components/sections/FieldLog";
import { ProcessRoute } from "@/components/sections/ProcessRoute";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { ClosingCta } from "@/components/sections/ClosingCta";

const SITE_URL = "https://junk4carcalgary.ca";

const TITLE = "Junk4Car Calgary | Cash for Junk Cars & Towing";
const DESCRIPTION =
  "Get $300 to $10,000 cash for your junk car in Calgary and across Alberta. Towing included with an accepted sale, same-day pickup when available.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Junk4Car Calgary",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

export default function Home() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
