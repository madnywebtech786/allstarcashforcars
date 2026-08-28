export const LOCATIONS = [
  { name: "Calgary", slug: "calgary" },
  { name: "Airdrie", slug: "airdrie" },
  { name: "Red Deer", slug: "red-deer" },
  { name: "Strathmore", slug: "strathmore" },
  { name: "Canmore", slug: "canmore" },
  { name: "Banff", slug: "banff" },
  { name: "High River", slug: "high-river" },
  { name: "Cochrane", slug: "cochrane" },
  { name: "Lethbridge", slug: "lethbridge" },
  { name: "Medicine Hat", slug: "medicine-hat" },
  { name: "Okotoks", slug: "okotoks" },
  { name: "Chestermere", slug: "chestermere" },
  { name: "Drumheller", slug: "drumheller" },
  { name: "Sylvan Lake", slug: "sylvan-lake" },
  { name: "Brooks", slug: "brooks" },
  { name: "Camrose", slug: "camrose" },
  { name: "Fort Macleod", slug: "fort-macleod" },
  { name: "Ponoka", slug: "ponoka" },
  { name: "Taber", slug: "taber" },
  { name: "Didsbury", slug: "didsbury" },
  { name: "Innisfail", slug: "innisfail" },
  { name: "Olds", slug: "olds" },
];

/**
 * Confirmed grouping + city order from the live Locations hub page
 * (Calgary & Foothills / Mountain & Southern Alberta / Central Alberta).
 * Do not re-derive or re-sort — this is the source of truth for both the
 * nav Locations dropdown and the /locations page.
 */
const REGIONS = [
  {
    label: "Calgary & Foothills",
    slugs: [
      "calgary",
      "airdrie",
      "cochrane",
      "chestermere",
      "okotoks",
      "strathmore",
      "high-river",
      "didsbury",
    ],
  },
  {
    label: "Mountain & Southern Alberta",
    slugs: ["banff", "canmore", "lethbridge", "medicine-hat", "brooks", "fort-macleod", "taber"],
  },
  {
    label: "Central Alberta",
    slugs: ["red-deer", "camrose", "drumheller", "sylvan-lake", "ponoka", "innisfail", "olds"],
  },
];

export const LOCATION_GROUPS = REGIONS.map((region) => ({
  label: region.label,
  locations: region.slugs
    .map((slug) => LOCATIONS.find((l) => l.slug === slug))
    .filter(Boolean),
}));
