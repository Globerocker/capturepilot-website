import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement Examples: What Good (and Bad) Ones Look Like | CapturePilot",
  description:
    "Side-by-side capability statement examples showing what wins federal contracts and what gets ignored. Real good vs. bad comparisons for each section.",
  keywords:
    "capability statement examples, government contracting capability statement, capability statement template, federal capability statement, capability statement sections, past performance capability statement, capability statement NAICS codes, capability statement certifications, capability statement mistakes, government contractor marketing",
  alternates: { canonical: "https://www.capturepilot.com/blog/capability-statement-examples" },
  openGraph: {
    title: "Capability Statement Examples: What Good (and Bad) Ones Look Like | CapturePilot",
    description:
      "Side-by-side capability statement examples showing what wins federal contracts and what gets ignored. Real good vs. bad comparisons for each section.",
    url: "https://www.capturepilot.com/blog/capability-statement-examples",
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
      name: "Capability Statement Examples: What Good (and Bad) Ones Look Like",
      item: "https://www.capturepilot.com/blog/capability-statement-examples",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Capability Statement Examples: What Good (and Bad) Ones Look Like",
  description:
    "Side-by-side capability statement examples showing what wins federal contracts and what gets ignored. Real good vs. bad comparisons for each section.",
  image: "https://www.capturepilot.com/og/capability-statement-examples.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  mainEntityOfPage: "https://www.capturepilot.com/blog/capability-statement-examples",
  articleSection: "Marketing",
  keywords: [
    "capability statement examples",
    "government contracting capability statement",
    "capability statement template",
    "past performance capability statement",
    "federal contractor marketing",
    "capability statement mistakes",
    "NAICS codes capability statement",
    "capability statement certifications",
    "government contract small business",
  ],
  wordCount: 5600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a capability statement include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A capability statement should include five core sections: core competencies (4–6 specific bullets tied to your target NAICS codes), past performance (2–4 entries with contract numbers, dollar values, agency names, and periods of performance), differentiators (specific competitive advantages like clearance levels, certifications, or proprietary processes), corporate data (UEI, CAGE code, NAICS codes, SAM registration status, socioeconomic designations), and contact information with a clear call to action. The entire document should fit on one page.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a capability statement be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One page. The current standard in federal contracting is one page only. Contracting officers scan capability statements in roughly six seconds before deciding whether to engage further. A two-page statement is borderline acceptable; anything longer is almost never fully read. Use bullet points instead of paragraphs, and prioritize the most relevant information at the top of the page.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a good and bad capability statement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good capability statement is specific, verifiable, and tailored to the reader. It includes real contract numbers in past performance, specific differentiators (clearance levels, proprietary tools, certifications), NAICS codes that match actual past performance, and a current UEI instead of the retired DUNS number. A bad capability statement uses generic language ('committed to quality,' 'customer-focused'), lists vague past performance without contract numbers, includes too many NAICS codes to look credible, and could apply to any company in your industry.",
      },
    },
    {
      "@type": "Question",
      name: "Should I tailor my capability statement for each agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A single generic capability statement sent to all agencies is significantly less effective than targeted versions customized for each major agency or opportunity type. Keep a master version with all your information, then create tailored one-pagers that lead with the certifications, NAICS codes, and past performance most relevant to that specific agency. For VA submissions, lead with SDVOSB/VOSB status. For DoD, lead with security clearance levels. The customization effort is about 20 minutes per version and meaningfully improves response rates.",
      },
    },
    {
      "@type": "Question",
      name: "What format should a capability statement be saved in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Save your capability statement as a text-searchable PDF. Agencies search their files by keyword, so a flat image PDF (scanned or built entirely from graphics) is invisible to keyword search. The document should also meet Section 508 accessibility standards: readable fonts at 10pt or larger, high contrast colors, and alternative text for any images. Print it in black and white to verify that color removal doesn't destroy critical information.",
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
