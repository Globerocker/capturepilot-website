import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HUBZone Program: How Location Can Win You Government Contracts (2026) | CapturePilot",
  description:
    "Complete HUBZone program guide: $17.6B in contracts, 10% price preference, sole-source thresholds, January 2025 rule changes, and step-by-step certification.",
  keywords:
    "HUBZone program, HUBZone certification, HUBZone contracts, HUBZone eligibility, HUBZone set aside, HUBZone price preference, SBA HUBZone, historically underutilized business zone, HUBZone requirements 2025, HUBZone map",
  alternates: { canonical: "https://www.capturepilot.com/blog/hubzone-program-guide" },
  openGraph: {
    title: "HUBZone Program: How Location Can Win You Government Contracts (2026) | CapturePilot",
    description:
      "Complete HUBZone program guide: $17.6B in contracts, 10% price preference, sole-source thresholds, January 2025 rule changes, and step-by-step certification.",
    url: "https://www.capturepilot.com/blog/hubzone-program-guide",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.capturepilot.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "HUBZone Program: How Location Can Win You Government Contracts",
      item: "https://www.capturepilot.com/blog/hubzone-program-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "HUBZone Program: How Location Can Win You Government Contracts",
  description:
    "Complete HUBZone program guide covering the three contracting advantages, six zone types, four eligibility requirements, January 2025 rule changes, and step-by-step certification process.",
  image: "https://www.capturepilot.com/og/hubzone-program-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-04",
  dateModified: "2026-05-04",
  mainEntityOfPage: "https://www.capturepilot.com/blog/hubzone-program-guide",
  articleSection: "Set-Asides & Preferences",
  keywords: [
    "HUBZone program",
    "HUBZone certification",
    "HUBZone contracts",
    "HUBZone eligibility",
    "HUBZone set aside",
    "historically underutilized business zone",
    "SBA HUBZone",
    "government contracting small business",
  ],
  wordCount: 6800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the HUBZone program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HUBZone (Historically Underutilized Business Zone) program is an SBA certification that gives small businesses located in economically distressed areas access to federal contracting set-asides, sole-source awards up to $5.5 million, and a 10% price evaluation preference in full-and-open competitions. The federal government has a statutory goal of awarding at least 3% of all federal contract dollars to HUBZone-certified firms each year.",
      },
    },
    {
      "@type": "Question",
      name: "What are the HUBZone eligibility requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To qualify for HUBZone certification, your business must: (1) be a small business under SBA size standards; (2) be at least 51% owned and controlled by U.S. citizens or qualifying entities; (3) have its principal office physically located in a designated HUBZone; and (4) have at least 35% of its employees residing in a HUBZone. These requirements must be maintained continuously after certification.",
      },
    },
    {
      "@type": "Question",
      name: "What is the HUBZone sole source threshold in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR 19.1306, contracting officers can award contracts to a HUBZone firm on a sole-source basis — without competitive bidding — if the anticipated price does not exceed $5.5 million for non-manufacturing NAICS codes (services, IT, professional services) or $8.5 million for manufacturing NAICS codes. The officer must not expect two or more HUBZone firms to respond competitively.",
      },
    },
    {
      "@type": "Question",
      name: "How long does HUBZone certification last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under the January 2025 rule change, HUBZone certification lasts three years (down from the previous annual renewal requirement). You must maintain the four eligibility requirements continuously and recertify before the three-year expiration date. The SBA can conduct unannounced program examinations at any time during the certification period.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 10% HUBZone price preference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In full-and-open competitions (where large businesses can also compete), the contracting officer applies a 10% price evaluation adjustment to all non-HUBZone offers. If your HUBZone bid is not more than 10% higher than the lowest non-HUBZone bid, you win the price comparison. This preference applies in every full-and-open competition regardless of contract size, giving HUBZone firms a significant structural advantage over large businesses.",
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
