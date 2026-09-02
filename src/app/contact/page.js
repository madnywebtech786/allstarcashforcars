import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactDesk } from "@/components/sections/contact/ContactDesk";
import { WhyContactUs } from "@/components/sections/contact/WhyContactUs";
import { ContactServiceIndex } from "@/components/sections/contact/ContactServiceIndex";
import { ContactOverview } from "@/components/sections/contact/ContactOverview";

const SITE_URL = "https://allstarcashforcars.ca";

export const metadata = {
  title: "Contact Us | AllStar Cash For Cars",
  description:
    "Call (403) 402-0423 for an instant cash offer on your junk car in Calgary. Towing included with an accepted sale, response within 2 hours by email.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | AllStar Cash For Cars",
    description:
      "Speak with a real person about your cash offer — phone, email, or the quote form, all confirmed by the same dispatch desk.",
    url: `${SITE_URL}/contact`,
    siteName: "AllStar Cash For Cars",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "AllStar Cash For Cars",
  url: SITE_URL,
  telephone: "+1-403-402-0423",
  email: "hello@allstarcashforcars.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "41 Sage Bluff Close NW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T3R 0X6",
    addressCountry: "CA",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$300-$10,000",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <ContactHero />
      <ContactDesk />
      <WhyContactUs />
      <ContactServiceIndex />
      <ContactOverview />
    </main>
  );
}
