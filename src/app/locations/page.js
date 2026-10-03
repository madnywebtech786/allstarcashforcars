import { LocationsHero } from "@/components/sections/locations/LocationsHero";
import { RegionRoster } from "@/components/sections/locations/RegionRoster";
import { AreaPickupProcess } from "@/components/sections/locations/AreaPickupProcess";
import { NotSureCta } from "@/components/sections/locations/NotSureCta";
import { LOCATION_GROUPS } from "@/lib/locations";

const SITE_URL = "https://junk4carcalgary.ca";

const PAGE_TITLE = "Cash for Cars Across Alberta";
const FULL_TITLE = "Cash for Cars Across Alberta | Junk4Car Calgary";
const DESCRIPTION =
  "Cash offers, towing, and pickup details for 22 Alberta service areas, from Calgary and the Foothills to Central and Southern Alberta.";

export const metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
  openGraph: {
    title: FULL_TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/locations`,
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
    { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Junk4Car Calgary Alberta Service Areas",
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
