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

export const metadata = {
  title: "AllStar Cash For Cars | Calgary's Junk Car Buyers & Towing Service",
  description:
    "Get $300–$10,000 cash for your junk car in Calgary and across Alberta. Vehicle-specific offers, towing included with an accepted sale, same-day pickup when available.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
