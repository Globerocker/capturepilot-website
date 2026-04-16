import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write a Capability Statement (Template + Guide)",
  description: "Step-by-step guide to writing a government capability statement. What to include, design tips, common mistakes, and free AI builder.",
  keywords: "capability statement template, how to write capability statement, government capability statement, capability statement example, capability statement guide, one-page capability statement",
  alternates: { canonical: "https://www.capturepilot.com/blog/capability-statement-guide" },
  openGraph: {
    title: "How to Write a Capability Statement (Template + Guide)",
    description: "Step-by-step guide to writing a government capability statement. What to include, design tips, common mistakes, and free AI builder.",
    url: "https://www.capturepilot.com/blog/capability-statement-guide",
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
      name: "How to Write a Capability Statement",
      item: "https://www.capturepilot.com/blog/capability-statement-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Write a Capability Statement (Template + Guide)",
  description:
    "Step-by-step guide to writing a government capability statement. What to include, design tips, common mistakes, and free AI builder.",
  image: "https://www.capturepilot.com/og/capability-statement-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/capability-statement-guide",
  articleSection: "Government Contracting",
  keywords: [
    "capability statement",
    "government capability statement",
    "capability statement template",
    "SDVOSB",
    "NAICS codes",
    "past performance",
  ],
  wordCount: 3600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a capability statement in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A capability statement is a one-page document that summarizes your company's core competencies, past performance, differentiators, NAICS codes, and contact information for federal buyers. It functions as a resume for your business — contracting officers and primes use it to shortlist vendors, include companies in solicitations, and evaluate teaming partners. Unlike a corporate brochure, it follows a specific structure that federal buyers expect, and is often explicitly required as an attachment in solicitations.",
      },
    },
    {
      "@type": "Question",
      name: "What are the 6 essential sections of a capability statement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every strong capability statement includes: (1) Company Overview — 2-3 sentences with legal name, UEI, CAGE code, and business structure; (2) Core Competencies — 4-6 specific capabilities using solicitation keywords; (3) Past Performance — 2-4 relevant contracts with agency, value, period, and outcome; (4) Differentiators — cleared workforce, certifications, geographic presence, agency relationships; (5) NAICS Codes & Certifications — primary NAICS, socioeconomic certs (SDVOSB, WOSB, 8(a), HUBZone), and contract vehicles; (6) Contact Information — POC name, title, phone, email, website, and address.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a capability statement be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One page, front only — no exceptions. Contracting officers review hundreds of vendors per opportunity and will not read multi-page documents. If your content doesn't fit, you're including too much. Tighten your language, cut generic claims, and keep only what is directly relevant to the opportunity or agency you're targeting. A well-designed one-pager with bullet points, a clear logo, and visible certifications outperforms a dense two-pager every time.",
      },
    },
    {
      "@type": "Question",
      name: "What are the most common capability statement mistakes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top mistakes we see: going over one page, using vague language like 'full-service provider' instead of specific scope, listing every NAICS code you've ever registered, omitting past performance when analogous commercial or subcontracted work could be used, outdated POC info, sending the same generic version to every opportunity, not listing socioeconomic certifications prominently, and poor visual design. Over 60% of SAM.gov-registered small businesses don't even have a capability statement, so a targeted, well-formatted one immediately puts you ahead.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a different capability statement for each opportunity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should maintain one master capability statement and customize the Core Competencies, Past Performance, and NAICS sections for each target opportunity or agency. The Company Overview, Differentiators, Certifications, and Contact sections stay constant. Tailoring shows the contracting officer you understand the specific requirement — use keywords from the PWS or Sources Sought notice, highlight past performance at the same agency, and list only NAICS codes relevant to the scope. Generic mass-blast statements get ignored.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I share my capability statement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload your PDF to SAM.gov (Entity Overview has a capability narrative field), your company website, and LinkedIn. Attach it to every cold outreach email to contracting officers, Small Business Specialists (OSDBUs), and potential primes. Bring printed copies to industry days, matchmaking events, and agency briefings. Include it as an attachment in every Sources Sought response and RFI submission. Many solicitations also explicitly require a capability statement as part of the proposal submission package.",
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
