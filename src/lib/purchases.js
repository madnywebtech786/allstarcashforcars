import {
  Car,
  Truck,
  Warehouse,
  Bus,
  ShieldAlert,
  BatteryWarning,
  Clock3,
  Gem,
  Building2,
} from "lucide-react";

export const VEHICLE_CATEGORIES = [
  {
    slug: "sedans-cars",
    icon: Car,
    title: "Sedans & Cars",
    tagline: "All makes & models",
    summary:
      "From a daily driver that still runs fine to a sedan with a list of mechanical problems, condition doesn't rule a car out here — it just shapes the number we offer.",
    makes: ["Honda Civic, Accord, Camry", "Toyota Corolla, Camry", "Ford Focus, Fusion, Taurus", "Chevrolet Malibu, Cruze", "Nissan Altima, Sentra", "Hyundai, Mazda, Kia & more"],
    priceMin: 300,
    priceMax: 10000,
    priceNote: "Based on make, model, year, and condition",
  },
  {
    slug: "trucks-pickups",
    icon: Truck,
    title: "Trucks & Pickups",
    tagline: "All sizes accepted",
    summary:
      "Compact haulers up through heavy-duty work trucks all get evaluated the same way, with towing included the moment an offer is accepted.",
    makes: ["Ford F-150, F-250, F-350", "Chevrolet Silverado", "RAM 1500, 2500, 3500", "GMC Sierra", "Toyota Tacoma, Tundra", "Nissan Titan, Frontier"],
    priceMin: 500,
    priceMax: 10000,
    priceNote: "Trucks often fetch higher prices due to parts value",
  },
  {
    slug: "suvs-crossovers",
    icon: Warehouse,
    title: "SUVs & Crossovers",
    tagline: "Any condition",
    summary:
      "Compact crossover or full-size family SUV, we price it against the vehicle in front of us and pay cash the same day dispatch confirms pickup.",
    makes: ["Honda CR-V, Pilot", "Toyota RAV4, Highlander", "Ford Explorer, Escape", "Chevrolet Tahoe, Equinox", "Jeep Grand Cherokee", "Nissan Rogue, Pathfinder"],
    priceMin: 400,
    priceMax: 8000,
    priceNote: "Higher offers for newer models and premium brands",
  },
  {
    slug: "vans-minivans",
    icon: Bus,
    title: "Vans & Minivans",
    tagline: "Commercial & personal",
    summary:
      "Cargo van sitting idle at a job site or a family minivan that's done its job, either way we price it on its own merits, not a flat category rate.",
    makes: ["Honda Odyssey, Dodge Caravan", "Toyota Sienna, Chrysler Pacifica", "Ford Transit, Econoline", "Chevrolet Express, GMC Savana"],
    priceMin: 350,
    priceMax: 7000,
    priceNote: "Cargo vans may fetch higher prices",
  },
  {
    slug: "damaged-vehicles",
    icon: ShieldAlert,
    title: "Damaged Vehicles",
    tagline: "Accident or totaled",
    summary:
      "A write-off from an insurer isn't a write-off to us. We assess what's salvageable and make an offer, however severe the damage looks.",
    makes: ["Front-end collision damage", "Rear-end accident vehicles", "Side impact and T-bone damage", "Rollover and total loss vehicles", "Fire, flood, or hail damaged"],
    priceMin: 300,
    priceMax: 5000,
    priceNote: "Depending on extent of damage and salvageable parts",
    listLabel: "Damage Types We Accept",
  },
  {
    slug: "non-running-cars",
    icon: BatteryWarning,
    title: "Non-Running Cars",
    tagline: "Dead or broken",
    summary:
      "A seized engine, a dead transmission, or a car that's simply refused to turn over for years, none of it stops us from making an offer and towing it out.",
    makes: ["Dead engine or seized motor", "Transmission failure or slipping", "Won't start or turn over", "Electrical system problems", "Been sitting for years"],
    priceMin: 300,
    priceMax: 4000,
    priceNote: "Plus towing included with an accepted sale",
    listLabel: "Common Issues We Handle",
  },
  {
    slug: "old-vintage-cars",
    icon: Clock3,
    title: "Old & Vintage Cars",
    tagline: "Any age or year",
    summary:
      "A barn find that's waited decades for a restoration or a daily driver that's simply gotten old, age on its own is never a reason we'd turn a car away.",
    makes: ["Classic cars from 1960s–1990s", "Vintage vehicles needing restoration", "Project cars and barn finds", "Older model vehicles (20+ years)", "Collector cars not running"],
    priceMin: 300,
    priceMax: 10000,
    priceNote: "Classic and vintage cars may command premium prices",
    listLabel: "What We Purchase",
  },
  {
    slug: "luxury-vehicles",
    icon: Gem,
    title: "Luxury Vehicles",
    tagline: "Premium brands",
    summary:
      "High-end parts and materials hold real value even when the car itself has mechanical problems, so luxury vehicles typically see stronger offers than the average.",
    makes: ["BMW & Mercedes-Benz", "Audi & Volkswagen", "Lexus & Infiniti", "Acura & Lincoln", "Cadillac & Jaguar", "Land Rover & Porsche"],
    priceMin: 1000,
    priceMax: 10000,
    priceNote: "Premium prices for luxury brands with valuable parts",
    listLabel: "Luxury Brands We Buy",
  },
  {
    slug: "commercial-vehicles",
    icon: Building2,
    title: "Commercial Vehicles",
    tagline: "Fleet & business",
    summary:
      "Retiring a fleet or clearing out work trucks doesn't mean vehicle-by-vehicle paperwork, dispatch can price and pick up the whole lot in one transaction.",
    makes: ["Fleet vehicles and company cars", "Work trucks and utility vehicles", "Box trucks and delivery vans", "Contractor trucks with equipment", "Multiple vehicle bulk purchases"],
    priceMin: 400,
    priceMax: 8000,
    priceNote: "Bulk discounts available for multiple vehicles",
    listLabel: "Commercial Vehicles We Buy",
    priceSuffix: "each",
  },
];

export function formatPriceRange(category) {
  const min = category.priceMin.toLocaleString();
  const max = category.priceMax.toLocaleString();
  return `$${min}–$${max}${category.priceSuffix ? ` ${category.priceSuffix}` : ""}`;
}
