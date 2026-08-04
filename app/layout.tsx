import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — South India Tour Packages from Bengaluru`,
    template: `%s | ${site.name}`,
  },
  description:
    "Mathrushree Holidays (ಮಾತೃಶ್ರೀ ಹಾಲಿಡೇಸ್) plans Coorg, Chikmagalur, Kerala backwaters, Ooty, Wayanad, Hampi and Gokarna tour packages, weekend adventure treks, monthly pilgrimage tours and vehicle rental from Bengaluru.",
  keywords: [
    "tours and travels Bengaluru",
    "Coorg tour package from Bangalore",
    "Kerala backwaters package",
    "Chikmagalur trip package",
    "Hampi tour package",
    "Gokarna tour package",
    "Kudremukh trek booking",
    "Kumara Parvata trek",
    "weekend trek from Bangalore",
    "Amavasya pilgrimage tour Sigandur Kollur",
    "Tirupati Sarva Darshana package Bangalore",
    "outstation car rental Bangalore",
    "Mathrushree Holidays",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — South India Tour Packages from Bengaluru`,
    description:
      "Family, group and honeymoon holiday packages across Coorg, Kerala, Chikmagalur, Ooty, Wayanad, Hampi and Gokarna — planned door to door from Bengaluru.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — South India Tour Packages`,
    description:
      "Family, group and honeymoon holiday packages across South India, planned door to door from Bengaluru.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    image: `${site.url}/og-image.jpg`,
    telephone: site.phone,
    email: site.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.pin,
      addressCountry: site.address.country,
    },
    openingHours: "Mo-Sa 09:30-20:00",
    url: site.url,
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink antialiased">
        <Script
          id="ld-travel-agency"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
