import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Win Your First Government Contract — Free Field Manual | CapturePilot",
  description:
    "The 24-page field manual for small businesses going after their first federal contract. Bid/No-Bid Matrix, PWin Calculator, RFP Framework, Pricing-to-Win Worksheet. Free PDF sent to your inbox.",
  keywords:
    "free government contracting guide, win first federal contract, bid no bid template, PWin calculator, RFP response template, small business federal contracts PDF, government contracting field manual",
  alternates: { canonical: "https://www.capturepilot.com/downloads/win-your-first-government-contract" },
  openGraph: {
    title: "Win Your First Government Contract — Free Field Manual",
    description:
      "24-page PDF: Bid/No-Bid Matrix, PWin Calculator, RFP Framework, Pricing-to-Win Worksheet. Free.",
    url: "https://www.capturepilot.com/downloads/win-your-first-government-contract",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Win Your First Government Contract — Field Manual",
  description:
    "24-page field manual for small businesses pursuing their first federal contract. Bid/No-Bid Matrix, PWin Calculator, RFP Framework, Pricing-to-Win Worksheet.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: { "@type": "Organization", name: "CapturePilot" },
  url: "https://www.capturepilot.com/downloads/win-your-first-government-contract",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Downloads", item: "https://www.capturepilot.com/downloads" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Win Your First Government Contract",
      item: "https://www.capturepilot.com/downloads/win-your-first-government-contract",
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
