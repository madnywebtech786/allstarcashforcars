import { PurchasesHero } from "@/components/sections/purchases/PurchasesHero";
import { VehicleCatalog } from "@/components/sections/purchases/VehicleCatalog";
import { PurchasesOverview } from "@/components/sections/purchases/PurchasesOverview";
import { PurchasesCta } from "@/components/sections/purchases/PurchasesCta";
import { VEHICLE_CATEGORIES } from "@/lib/purchases";

const SITE_URL = "https://allstarcashforcars.ca";

export const metadata = {
  title: "Vehicles We Purchase | AllStar Cash For Cars",
  description:
    "We buy all types of junk cars, trucks, vans, and SUVs in any condition. Cash offers from $300–$10,000 across nine vehicle categories, towing included with an accepted sale.",
  alternates: {
    canonical: `${SITE_URL}/purchases`,
  },
  openGraph: {
    title: "Vehicles We Purchase | AllStar Cash For Cars",
    description:
      "All makes, models, and conditions accepted — sedans, trucks, SUVs, vans, damaged, non-running, vintage, luxury, and commercial vehicles.",
    url: `${SITE_URL}/purchases`,
    siteName: "AllStar Cash For Cars",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Purchases", item: `${SITE_URL}/purchases` },
  ],
};

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Vehicles AllStar Cash For Cars Purchases",
  itemListElement: VEHICLE_CATEGORIES.map((category) => ({
    "@type": "Offer",
    name: category.title,
    description: category.summary,
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: category.priceMin,
      maxPrice: category.priceMax,
      priceCurrency: "CAD",
    },
  })),
};

export default function PurchasesPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />

      <PurchasesHero />
      <VehicleCatalog />
      <PurchasesOverview />
      <PurchasesCta />
    </main>
  );
}
