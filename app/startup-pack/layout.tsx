import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federal Launch Kit — $70 · CapturePilot",
  description:
    "Win your first federal contract. 40+ templates, playbooks, checklists and scripts for SAM.gov registration, capability statements, Sources Sought / RFI / RFP responses, pricing, and outreach. Instant access. Lifetime use. 7-day refund.",
  keywords:
    "federal launch kit, government contract templates, SAM.gov registration kit, capability statement template, sources sought template, RFP response template, government contracting starter kit, federal proposal templates, small business federal contracts",
  alternates: { canonical: "https://www.capturepilot.com/startup-pack" },
  openGraph: {
    title: "Federal Launch Kit — $70 · CapturePilot",
    description:
      "40+ templates, playbooks and checklists to land your first federal contract. Bundled for $70. Instant access. Lifetime use.",
    url: "https://www.capturepilot.com/startup-pack",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federal Launch Kit — $70",
    description:
      "Every template, playbook and script you need to land your first federal contract — bundled. Instant access. 7-day refund.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Federal Launch Kit", item: "https://www.capturepilot.com/startup-pack" },
  ],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CapturePilot Federal Launch Kit",
  description:
    "40+ templates, playbooks, checklists and scripts for small businesses going after their first federal contract. Covers SAM.gov registration, capability statements, Sources Sought / RFI / RFP / RFQ / IDIQ playbooks, bid/no-bid scoring, certification eligibility, past performance, contracting-officer outreach, federal pricing, and an internal consulting best-practice library.",
  brand: { "@type": "Brand", name: "CapturePilot" },
  category: "Business Templates",
  offers: {
    "@type": "Offer",
    price: "70.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.capturepilot.com/startup-pack",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "200",
    bestRating: "5",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {children}
    </>
  );
}
