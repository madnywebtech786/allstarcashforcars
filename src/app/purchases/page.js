import { PurchasesHero } from "@/components/sections/purchases/PurchasesHero";
import { VehicleCatalog } from "@/components/sections/purchases/VehicleCatalog";
import { PurchasesOverview } from "@/components/sections/purchases/PurchasesOverview";
import { PurchasesCta } from "@/components/sections/purchases/PurchasesCta";
import { VEHICLE_CATEGORIES } from "@/lib/purchases";

const SITE_URL = "https://junk4carcalgary.ca";

const PAGE_TITLE = "Vehicles We Purchase";
const FULL_TITLE = "Vehicles We Purchase | Junk4Car Calgary";
const DESCRIPTION =
  "We buy junk cars, trucks, vans, and SUVs in any condition. Cash offers from $300 to $10,000, towing included with an accepted sale.";

export const metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/purchases`,
  },
  openGraph: {
    title: FULL_TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/purchases`,
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
    { "@type": "ListItem", position: 2, name: "Purchases", item: `${SITE_URL}/purchases` },
  ],
};

const catalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Vehicles Junk4Car Calgary Purchases",
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
