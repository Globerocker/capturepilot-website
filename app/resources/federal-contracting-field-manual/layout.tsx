import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Bid on Federal Contracts: Field Manual",
  description:
    "Free 34-page PDF covers SAM.gov registration, finding opps, writing bids, and delivering — every stage with real templates. Download free.",
  keywords:
    "how to bid on federal contracts, how to win federal contracts, federal contracting process, government contracts for small business, federal government contracting, federal contracting 101",
  alternates: {
    canonical:
      "https://www.capturepilot.com/resources/federal-contracting-field-manual",
  },
  openGraph: {
    title: "How to Bid on Federal Contracts: Field Manual",
    description:
      "Free 34-page PDF covers SAM.gov registration, finding opps, writing bids, and delivering — every stage with real templates.",
    url: "https://www.capturepilot.com/resources/federal-contracting-field-manual",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.capturepilot.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Resources",
      item: "https://www.capturepilot.com/resources",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Federal Contracting Field Manual",
      item: "https://www.capturepilot.com/resources/federal-contracting-field-manual",
    },
  ],
};

const digitalDocumentJsonLd = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Federal Contracting Field Manual",
  description:
    "A 34-page PDF playbook covering every stage of federal contracting for small businesses: SAM.gov registration, finding solicitations, writing compliant bids, and post-award delivery. Includes real templates.",
  url: "https://www.capturepilot.com/resources/federal-contracting-field-manual",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  author: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capturepilot.com/logo.png",
    },
  },
  about: [
    { "@type": "Thing", name: "SAM.gov registration for small businesses" },
    { "@type": "Thing", name: "Federal contracting process" },
    { "@type": "Thing", name: "How to bid on federal contracts" },
    { "@type": "Thing", name: "Government contracts for small business" },
    { "@type": "Thing", name: "Set-aside certifications: SDVOSB, WOSB, HUBZone, 8(a)" },
  ],
  numberOfPages: 34,
  fileFormat: "application/pdf",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you bid on federal government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To bid on federal contracts you need an active SAM.gov registration with a UEI and CAGE code, a capability statement that matches the solicitation's NAICS code and set-aside type, and a compliant proposal following Section L instructions and scored against Section M evaluation criteria. Most small businesses start with set-aside opportunities (SDVOSB, WOSB, HUBZone, 8(a), or small business) where competition is limited to businesses in their category. The full process — from SAM registration through post-award delivery — is covered in CapturePilot's Federal Contracting Field Manual, a free 34-page PDF.",
      },
    },
    {
      "@type": "Question",
      name: "What is required to win federal contracts as a small business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum requirements are: (1) an active SAM.gov registration with current UEI and CAGE code; (2) NAICS codes that match the solicitation; (3) a capability statement with your core competencies, past performance, and contact info; and (4) a proposal that addresses every shall/must/will requirement in the solicitation's Section L and is scored against Section M evaluation criteria. Beyond compliance, win probability increases with relevant past performance, set-aside certifications, and early positioning via Sources Sought responses.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SAM.gov registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plan for 7–10 business days from submission to activation. The process involves getting your UEI (assigned by SAM, not chosen), waiting 24–48 hours for it to activate, completing the full entity registration, and passing SAM's validation checks. SAM registration must be renewed every 12 months — if it lapses you can't receive contract awards. The Federal Contracting Field Manual covers the full registration flow including the CAGE assignment step that most first-timers get stuck on.",
      },
    },
    {
      "@type": "Question",
      name: "Is this field manual really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enter your name, company, and email and we send you the 34-page PDF. No credit card, no free trial, no conversion. You'll receive a few follow-up emails with related resources and occasional updates from CapturePilot. There's an unsubscribe link in every email.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a Sources Sought and an RFP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Sources Sought (or RFI) is an early-stage market research notice — the government isn't buying yet, they're checking whether enough qualified small businesses exist to justify a set-aside. Responding positions you 6–18 months ahead of the competition and sometimes influences how the solicitation is structured. An RFP (or Solicitation) is a formal request for proposals where the government is ready to award. Responding to Sources Sought is covered in the Federal Contracting Field Manual as one of the highest-leverage actions for small businesses early in the pipeline.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(digitalDocumentJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
