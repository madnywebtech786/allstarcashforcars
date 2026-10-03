import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://junk4carcalgary.ca";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Junk4Car Calgary",
    default: "Junk4Car Calgary | Junk Car Buyers & Towing",
  },
  description:
    "Get $300 to $10,000 cash for your junk car in Calgary and across Alberta. Towing included, same-day pickup when available.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Junk4Car Calgary | Junk Car Buyers & Towing",
    description:
      "Get $300 to $10,000 cash for your junk car in Calgary and across Alberta. Towing included, same-day pickup when available.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Junk4Car Calgary",
  url: SITE_URL,
  telephone: "+1-403-402-0423",
  email: "hello@junk4carcalgary.ca",
  address: {
    "@type": "PostalAddress",
    streetAddress: "41 Sage Bluff Close NW",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T3R 0X6",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "State",
    name: "Alberta",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$300-$10,000",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Junk4Car Calgary",
  url: SITE_URL,
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
