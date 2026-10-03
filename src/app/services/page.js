import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceDetail } from "@/components/sections/services/ServiceDetail";
import { ServicesOverview } from "@/components/sections/services/ServicesOverview";
import { ServicesFaq } from "@/components/sections/services/ServicesFaq";
import { ServicesCta } from "@/components/sections/services/ServicesCta";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { SERVICES, SERVICES_FAQ } from "@/lib/services";

const SITE_URL = "https://junk4carcalgary.ca";

const PAGE_TITLE = "Junk Car Buying & Towing Services";
const FULL_TITLE = "Junk Car Buying & Towing Services | Junk4Car Calgary";
const DESCRIPTION =
  "Cash offers from $300 to $10,000 for junk cars in any condition. Towing included, same-day pickup when available, serving Calgary and Alberta.";

export const metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: FULL_TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/services`,
    siteName: "Junk4Car Calgary",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: FULL_TITLE,
    description: DESCRIPTION,
    images: ["/twitter-image"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Junk car buying and towing",
  provider: {
    "@type": "AutomotiveBusiness",
    name: "Junk4Car Calgary",
    url: SITE_URL,
    telephone: "+1-403-402-0423",
  },
  areaServed: {
    "@type": "State",
    name: "Alberta",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Junk Car Buying & Towing Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.summary,
      },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICES_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <ServicesHero />

      {SERVICES.map((service, i) => (
        <ServiceDetail key={service.id} service={service} index={i} total={SERVICES.length} />
      ))}

      <ServicesOverview />
      <ServicesFaq />
      <ClosingCta />
      <ServicesCta />
    </main>
  );
}
