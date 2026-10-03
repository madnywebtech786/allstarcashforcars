import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { WhatMakesUsDifferent } from "@/components/sections/about/WhatMakesUsDifferent";
import { HowWeWork } from "@/components/sections/about/HowWeWork";
import { WhyCalgaryTrusts } from "@/components/sections/about/WhyCalgaryTrusts";
import { ClosingCta } from "@/components/sections/ClosingCta";

const SITE_URL = "https://junk4carcalgary.ca";

const PAGE_TITLE = "About Us";
const FULL_TITLE = "About Us | Junk4Car Calgary";
const DESCRIPTION =
  "Junk4Car Calgary buys junk, damaged, and non-running vehicles across Alberta. Cash offers from $300 to $10,000, towing included with an accepted sale.";

export const metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
  openGraph: {
    title: FULL_TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about-us`,
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
  name: "About Junk4Car Calgary",
  url: `${SITE_URL}/about-us`,
  description:
    "Junk4Car Calgary buys junk, damaged, and non-running vehicles across Calgary and Alberta with vehicle-specific cash offers and towing included with an accepted sale.",
  mainEntity: {
    "@type": "AutomotiveBusiness",
    name: "Junk4Car Calgary",
    url: SITE_URL,
    telephone: "+1-403-402-0423",
    email: "hello@junk4carcalgary.ca",
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
