import { LocationsHero } from "@/components/sections/locations/LocationsHero";
import { RegionRoster } from "@/components/sections/locations/RegionRoster";
import { AreaPickupProcess } from "@/components/sections/locations/AreaPickupProcess";
import { NotSureCta } from "@/components/sections/locations/NotSureCta";
import { LOCATION_GROUPS } from "@/lib/locations";

const SITE_URL = "https://allstarcashforcars.ca";

export const metadata = {
  title: "Cash for Cars Across Alberta | 22 Service Areas | AllStar Cash For Cars",
  description:
    "Cash offers, towing, and pickup details for 22 confirmed Alberta service areas, from Calgary and the Foothills to Central and Southern Alberta.",
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
  openGraph: {
    title: "Cash for Cars Across Alberta | AllStar Cash For Cars",
    description:
      "Choose your city for local cash-for-cars, junk vehicle removal, and pickup information across 22 Alberta service areas.",
    url: `${SITE_URL}/locations`,
    siteName: "AllStar Cash For Cars",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AllStar Cash For Cars Alberta Service Areas",
  itemListElement: LOCATION_GROUPS.flatMap((group) => group.locations).map((location, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Cash for Cars ${location.name}`,
    url: `${SITE_URL}/cash-for-cars-${location.slug}`,
  })),
};

export default function LocationsPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <LocationsHero />
      <RegionRoster />
      <AreaPickupProcess />
      <NotSureCta />
    </main>
  );
}
