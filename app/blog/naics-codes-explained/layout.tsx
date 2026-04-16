import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAICS Codes Explained: How to Find Your Business Codes",
  description: "What are NAICS codes and why do they matter for government contracting? Find your codes, understand size standards, and match to opportunities.",
  keywords: "NAICS codes explained, what are NAICS codes, find my NAICS code, NAICS code lookup, NAICS size standards, government contracting NAICS, SBA NAICS codes",
  alternates: { canonical: "https://www.capturepilot.com/blog/naics-codes-explained" },
  openGraph: {
    title: "NAICS Codes Explained: How to Find Your Business Codes",
    description: "What are NAICS codes and why do they matter for government contracting? Find your codes, understand size standards, and match to opportunities.",
    url: "https://www.capturepilot.com/blog/naics-codes-explained",
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
      name: "NAICS Codes Explained",
      item: "https://www.capturepilot.com/blog/naics-codes-explained",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "NAICS Codes Explained: How to Find Your Business Codes",
  description:
    "What are NAICS codes and why do they matter for government contracting? Find your codes, understand size standards, and match to opportunities.",
  image: "https://www.capturepilot.com/og/naics-codes-explained.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-01-25",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/naics-codes-explained",
  articleSection: "Government Contracting",
  keywords: [
    "NAICS codes",
    "NAICS lookup",
    "SBA size standards",
    "primary NAICS",
    "government contracting NAICS",
    "janitorial 561720",
    "computer systems design 541512",
  ],
  wordCount: 4100,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a NAICS code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NAICS (North American Industry Classification System) is a 6-digit code used by the US, Canada, and Mexico to classify businesses by industry. In federal contracting, every solicitation is assigned one primary NAICS code that determines size standard eligibility, set-aside applicability, and scope. The first two digits identify the sector (e.g., 54 = Professional, Scientific, and Technical Services), and each additional digit narrows the industry — 541512 is Computer Systems Design Services. Your SAM.gov registration can list multiple NAICS codes, but only one can be designated 'primary'.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find the right NAICS codes for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two methods: (1) Manual — browse the NAICS manual at naics.com or census.gov, find categories that describe your services, and read the official descriptions to confirm fit. Look at solicitations from opportunities you'd want to win and note which NAICS agencies assign to that work. (2) Automated — use a tool like CapturePilot's Quick Checker, which analyzes your website content and suggests the best-matching NAICS codes with SBA size standards. Most small businesses should register 5-10 NAICS codes: one primary, several secondary, and any that give access to set-aside-eligible industries.",
      },
    },
    {
      "@type": "Question",
      name: "What is a NAICS size standard and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every NAICS code has an SBA size standard — either a revenue ceiling (e.g., $19M average annual receipts for 541512) or an employee count ceiling (e.g., 1,500 employees for manufacturing codes). To qualify as a 'small business' for set-aside purposes on a specific contract, your size must be at or below the standard for that contract's assigned NAICS. The same company can be 'small' under one NAICS and 'other than small' under another. This is why some businesses strategically pursue opportunities under NAICS codes where they qualify as small.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best NAICS codes for small business government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High-volume small business NAICS include: 561720 Janitorial Services (federal footprint of 2.7B sq ft), 541512 Computer Systems Design Services (large IT modernization spend), 236220 Commercial/Institutional Building Construction, 541330 Engineering Services, 561612 Security Guards and Patrol Services, 541611 Administrative Management Consulting, and 238220 Plumbing/Heating/Air-Conditioning Contractors. The 'best' code is the one where your capabilities match the work, you qualify as small, and your target agencies actively buy. Don't register for codes you can't actually deliver — misrepresentation can disqualify you.",
      },
    },
    {
      "@type": "Question",
      name: "Can I have multiple NAICS codes in my SAM.gov registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — SAM.gov lets you register unlimited NAICS codes, but you can only designate one as 'primary'. The primary NAICS is used for some federal size determinations and should reflect your largest revenue source. Secondary codes expand your discoverability for set-aside searches and let you bid on opportunities under different scopes. Strategy: use your primary for your core revenue, add secondary codes for adjacent services you genuinely deliver, and remove codes you aren't actively pursuing so your profile looks focused to contracting officers doing market research.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common NAICS code mistakes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top mistakes: (1) Registering for too many codes — 30+ NAICS signals lack of focus and makes your capability statement generic. (2) Picking codes where your size exceeds the standard, making you ineligible for set-asides. (3) Using the wrong code on a proposal (must match the solicitation's primary NAICS). (4) Not reviewing size standard updates — SBA adjusts thresholds every five years. (5) Ignoring the 'primary' designation and picking a low-revenue code, which can hurt set-aside eligibility. Review your NAICS annually when you renew SAM.gov.",
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
