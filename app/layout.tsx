import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: "CapturePilot — Win Government Contracts. Faster.",
    template: "%s | CapturePilot",
  },
  description: "CapturePilot matches your small business with federal government contracts you can actually win. Built for veteran-owned, women-owned, and small businesses. 40,000+ opportunities. AI-powered matching.",
  keywords: "CapturePilot, Capture Pilot, government contracts, SAM.gov, federal contracting, SDVOSB, WOSB, small business, veteran owned, capability statement, proposal writer, government contract search, federal contract matching",
  applicationName: "CapturePilot",
  metadataBase: new URL("https://www.capturepilot.com"),
  verification: {
    google: "d0DbhX6VNRMZVVyi9TrVAZ-mqsL9k_tBIOvGhqGC95o",
  },
  openGraph: {
    title: "CapturePilot — Win Government Contracts. Faster.",
    description: "Find and win federal contracts matched to your business. AI-powered matching for veteran-owned and small businesses.",
    type: "website",
    url: "https://www.capturepilot.com",
    siteName: "CapturePilot",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CapturePilot — Win Government Contracts. Faster.",
    description: "AI-powered federal contract matching for veteran-owned and small businesses.",
    site: "@capturepilot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.capturepilot.com",
  },
  icons: {
    icon: "/cp-icon-black.png",
    apple: "/cp-icon-black.png",
  },
};

// ── Global JSON-LD structured data ──────────────────────────────────
// Organization + SoftwareApplication — shown on every page
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CapturePilot",
  legalName: "Americurial LLC",
  url: "https://www.capturepilot.com",
  logo: "https://www.capturepilot.com/logo.png",
  description: "Federal government contract intelligence platform for veteran-owned and small businesses. AI-powered opportunity matching, readiness scoring, and proposal generation.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Andre Schuler",
  },
  sameAs: [
    "https://app.capturepilot.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://meetings-na2.hubspot.com/americurial/intro-call",
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://www.capturepilot.com",
  description: "Win government contracts faster. AI-powered matching against 40,000+ federal opportunities. Built for veteran-owned, women-owned, and small businesses.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    highPrice: "199",
    offerCount: "3",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        description: "Quick Company Check, 5 opportunity matches, NAICS identification",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "199",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        description: "Unlimited matches, AI proposals, market intelligence, full dashboard",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "12",
    bestRating: "5",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CapturePilot",
  alternateName: ["Capture Pilot", "CapturePilot.com"],
  url: "https://www.capturepilot.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://app.capturepilot.com/check?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
