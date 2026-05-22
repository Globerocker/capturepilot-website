import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federal Contracting Certifications: Which Ones Actually Help You Win | CapturePilot",
  description:
    "8(a), SDVOSB, WOSB, HUBZone — the four SBA certifications unlocked $70B+ in FY2025 awards. Learn eligibility, sole source thresholds, processing times, and which to pursue first.",
  keywords:
    "federal contracting certifications, 8a certification, SDVOSB certification, WOSB certification, HUBZone certification, SBA certifications, small business set-aside, government contracting certifications, VetCert, EDWOSB, MySBA certifications",
  alternates: { canonical: "https://capturepilot.com/blog/federal-contracting-certifications" },
  openGraph: {
    title: "Federal Contracting Certifications: Which Ones Actually Help You Win | CapturePilot",
    description:
      "8(a), SDVOSB, WOSB, HUBZone — the four SBA certifications unlocked $70B+ in FY2025 awards. Learn eligibility, sole source thresholds, processing times, and which to pursue first.",
    url: "https://capturepilot.com/blog/federal-contracting-certifications",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://capturepilot.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Federal Contracting Certifications: Which Ones Actually Help You Win",
      item: "https://capturepilot.com/blog/federal-contracting-certifications",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Federal Contracting Certifications: Which Ones Actually Help You Win",
  description:
    "A complete guide to 8(a), SDVOSB, WOSB/EDWOSB, and HUBZone certifications — eligibility, sole source thresholds, processing times, and how to decide which to pursue first.",
  image: "https://capturepilot.com/og/federal-contracting-certifications.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-22",
  dateModified: "2026-05-22",
  mainEntityOfPage: "https://capturepilot.com/blog/federal-contracting-certifications",
  articleSection: "Certifications & Set-Asides",
  keywords: [
    "federal contracting certifications",
    "8a certification",
    "SDVOSB certification",
    "WOSB certification",
    "HUBZone certification",
    "SBA certifications",
    "small business set-aside",
    "VetCert",
    "EDWOSB",
  ],
  wordCount: 6800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the four main federal contracting certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The four main SBA certifications are: 8(a) Business Development (for socially and economically disadvantaged business owners), SDVOSB/VetCert (for service-disabled veterans), WOSB/EDWOSB (for women-owned businesses), and HUBZone (for businesses in Historically Underutilized Business Zones). All are free to apply for through the MySBA Certifications portal at certifications.sba.gov.",
      },
    },
    {
      "@type": "Question",
      name: "Which federal contracting certification is easiest to get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of 2025–2026, SDVOSB (VetCert) is the fastest to obtain, with SBA now processing applications in an average of 12 days after clearing its backlog. WOSB/EDWOSB typically takes 30–60 days. HUBZone takes 60–90 days. The 8(a) program takes 90+ days and requires significantly more documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can a small business hold multiple SBA certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SBA certifications are not mutually exclusive. A business can hold 8(a), SDVOSB, WOSB, and HUBZone status simultaneously. Each certification opens a separate lane of set-aside contracts, and holding multiple certifications maximizes your eligibility across different solicitation types.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 8(a) sole source threshold in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 8(a) sole source threshold is $4.5 million for service and other contracts, and $22.5 million for manufacturing contracts. These are the highest sole source thresholds of any SBA certification program, making 8(a) particularly powerful for firms in service industries.",
      },
    },
    {
      "@type": "Question",
      name: "What changed with the 8(a) program in 2025–2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Significant changes occurred. In January 2026, the SBA mandated race-neutral administration of the 8(a) program while it finalizes new regulations. Only 65 firms were approved for entry in 2025, compared to 250–300 historically. In December 2025, SBA ordered all 4,300 active participants to submit three years of financial records, resulting in 1,091 suspensions. The program remains valuable for qualifying firms but requires rigorous documentation.",
      },
    },
    {
      "@type": "Question",
      name: "What is the HUBZone price evaluation preference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under FAR 19.1307, HUBZone-certified businesses receive a 10% price evaluation preference in full-and-open competitions. If a HUBZone firm bids $110,000 against a large business bid of $100,000, the evaluator treats the HUBZone bid as $99,000, making the HUBZone firm the apparent low bidder. This preference is unique to HUBZone and does not apply to other SBA certifications.",
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
