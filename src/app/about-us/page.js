import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { WhatMakesUsDifferent } from "@/components/sections/about/WhatMakesUsDifferent";
import { HowWeWork } from "@/components/sections/about/HowWeWork";
import { WhyCalgaryTrusts } from "@/components/sections/about/WhyCalgaryTrusts";
import { ClosingCta } from "@/components/sections/ClosingCta";

const SITE_URL = "https://allstarcashforcars.ca";

export const metadata = {
  title: "About Us | AllStar Cash For Cars – Calgary Junk Car Buyers",
  description:
    "AllStar Cash For Cars buys junk, damaged, and non-running vehicles across Calgary and Alberta. Vehicle-specific cash offers from $300–$10,000, towing included with an accepted sale.",
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: "About Us | AllStar Cash For Cars",
    description:
      "The team behind Calgary's junk car pickups: how we price offers, run towing, and pay cash on the spot.",
    url: `${SITE_URL}/about-us`,
    siteName: "AllStar Cash For Cars",
    type: "website",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: `${SITE_URL}/about-us`,
    },
  ],
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AllStar Cash For Cars",
  url: `${SITE_URL}/about-us`,
  description:
    "AllStar Cash For Cars buys junk, damaged, and non-running vehicles across Calgary and Alberta with vehicle-specific cash offers and towing included with an accepted sale.",
  mainEntity: {
    "@type": "AutomotiveBusiness",
    name: "AllStar Cash For Cars",
    url: SITE_URL,
    telephone: "+1-403-402-0423",
    email: "hello@allstarcashforcars.ca",
    areaServed: {
      "@type": "State",
      name: "Alberta",
    },
    priceRange: "$300-$10,000",
  },
};

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <AboutHero />
      <OurStory />
      <WhatMakesUsDifferent />
      <HowWeWork />
      <ClosingCta />
      <WhyCalgaryTrusts />
    </main>
  );
}
