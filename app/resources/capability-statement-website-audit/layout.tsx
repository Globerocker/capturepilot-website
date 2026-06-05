import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement + Website Audit for Federal Contractors — Free Template + 10-Point Checklist",
  description: "The #1 gap we see in small-business federal applications: weak capability statements and websites contracting officers can't trust. Free template, 10-point self-audit, and the option to send yours for a 5-line expert teardown.",
  keywords: "capability statement template, federal contracting capability statement, contracting officer skim test, federal contractor website audit, small business federal proposal, capability statement examples, federal vendor website checklist",
  alternates: { canonical: "https://www.capturepilot.com/resources/capability-statement-website-audit" },
  openGraph: {
    title: "Capability Statement + Website Audit — Free Template + Checklist",
    description: "The #1 gap we see in small-biz federal calls. Free template + 10-point self-audit + free expert teardown.",
    url: "https://www.capturepilot.com/resources/capability-statement-website-audit",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.capturepilot.com/resources" },
    { "@type": "ListItem", position: 3, name: "Capability Statement + Website Audit", item: "https://www.capturepilot.com/resources/capability-statement-website-audit" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between a capability statement and a regular company website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capability statements are one-page PDF documents formatted specifically for federal contracting officers. They contain mandatory fields a commercial website doesn't (UEI, CAGE code, NAICS codes, set-aside certifications, past performance with dollar amounts). Contracting officers skim them in 8 seconds — your commercial website is for prospects, your capability statement is for buyers who need to verify you can deliver.",
      },
    },
    {
      "@type": "Question",
      name: "Is a website even required to win federal contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — implicitly. Contracting officers do background research on every shortlisted vendor. If your website looks abandoned (broken links, no SSL, no team page, no past performance) you lose credibility points that get baked into the technical-fit score even when not formally evaluated. We've seen well-priced bids lose to slightly-higher-priced competitors solely because the website failed the smell test.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a capability statement be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One page. Two maximum. Contracting officers receive dozens per RFP and skim — anything beyond two pages signals you don't understand the format. Quality > quantity: 5 high-value past performance bullets beat 30 vague ones every time.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a graphic designer to make a good capability statement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The template inside our Capture Kit ($70) uses Word + InDesign source files that any business owner can edit in 30 minutes. The structure, not the graphic design, is what passes the skim test. We've seen plain Word-table capability statements outperform expensive designer-made ones because the structure was correct.",
      },
    },
    {
      "@type": "Question",
      name: "What's the most common capability statement mistake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leading with a mission statement instead of NAICS codes + core competencies. The contracting officer needs to know in 8 seconds: (1) which NAICS you cover, (2) which set-asides apply, (3) what you've actually delivered. Mission statements live in commercial pitch decks — they belong nowhere on a capability statement.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
