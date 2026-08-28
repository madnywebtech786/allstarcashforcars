import { SERVICES } from "@/lib/services";

export const SERVICE_LINKS = SERVICES.map((service) => ({
  label: service.title,
  href: `/services#${service.id}`,
}));

export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Locations", href: "/locations" },
  { label: "Purchases", href: "/purchases" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];
