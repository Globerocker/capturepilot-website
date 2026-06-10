import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement Template for Federal Contracts (Free PDF)",
  description:
    "Free capability statement template used by federal contractors. See the exact 1-page format contracting officers expect — with 4 real worked examples. Download now.",
  keywords:
    "capability statement template, federal capability statement, capability statement examples, how to write a capability statement, federal capability statement template, what is a capability statement",
  alternates: {
    canonical:
      "https://www.capturepilot.com/resources/capability-statement-template",
  },
  openGraph: {
    title: "Capability Statement Template for Federal Contracts (Free PDF)",
    description:
      "Free capability statement template used by federal contractors. See the exact 1-page format contracting officers expect — with 4 real worked examples. Download now.",
    url: "https://www.capturepilot.com/resources/capability-statement-template",
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
      name: "Capability Statement Template",
      item: "https://www.capturepilot.com/resources/capability-statement-template",
    },
  ],
};

const digitalDocumentJsonLd = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "How to Write a Federal Capability Statement (with examples)",
  description:
    "A 12-page PDF covering the exact format federal contracting officers look for in a capability statement, with 4 worked examples across different NAICS sectors.",
  url: "https://www.capturepilot.com/resources/capability-statement-template",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  author: {
    "@type": "Person",
    name: "André",
    worksFor: {
      "@type": "Organization",
      name: "CapturePilot",
      url: "https://www.capturepilot.com",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://www.capturepilot.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capturepilot.com/logo.png",
    },
  },
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
      name: "What is a federal capability statement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A capability statement is a one-page (two max) PDF that introduces your company to federal contracting officers. It covers your NAICS codes, set-aside certifications, core competencies, past performance with dollar amounts, and contact information. It's different from a commercial company profile — contracting officers skim dozens of them and look for specific fields in a specific order.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a capability statement be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One page. Two maximum. Contracting officers don't read past two pages, and anything longer signals you don't understand the format. The goal is a quick skim that answers: which NAICS, which set-asides, what have you delivered, and how do I reach you.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a designer to make a good capability statement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Structure matters far more than design. A clean Word or Google Doc that has the right sections in the right order will outperform a polished-looking PDF that buries your NAICS codes. The PDF in this kit shows exactly what to put where.",
      },
    },
    {
      "@type": "Question",
      name: "Is this really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You enter your email and the PDF arrives in your inbox, usually within 60 seconds. No credit card, no free trial, no upsell to unlock the actual content.",
      },
    },
    {
      "@type": "Question",
      name: "Will you spam me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You'll get the PDF, an occasional short email if we publish something relevant to federal contracting, and that's it. We don't sell lists. You can unsubscribe from the footer of any email.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not registered on SAM.gov yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The PDF is still useful — it explains what fields your capability statement needs and why, which helps even before you've registered. That said, SAM.gov registration is a prerequisite for getting paid on federal contracts, so register at sam.gov as soon as you finish reading.",
      },
    },
    {
      "@type": "Question",
      name: "Is this up to date for FY2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The format requirements and the fields contracting officers look for haven't changed in years. What gets updated is the compliance environment around set-asides (SBA rules, thresholds), but the capability statement structure itself is stable.",
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
