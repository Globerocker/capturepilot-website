import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources Sought Notices: How to Get In Early and Shape the RFP (2026) | CapturePilot",
  description:
    "Sources Sought notices are market research tools that let you influence government RFP requirements before they're locked in. Learn how to respond and trigger set-asides.",
  keywords:
    "sources sought notice, sources sought response, sources sought SAM.gov, how to respond to sources sought, RFI government contracting, rule of two set aside, pre-solicitation notice, market research FAR, government contract early engagement, influence government RFP",
  alternates: { canonical: "https://www.capturepilot.com/blog/sources-sought-notice" },
  openGraph: {
    title: "Sources Sought Notices: How to Get In Early and Shape the RFP (2026) | CapturePilot",
    description:
      "Sources Sought notices are market research tools that let you influence government RFP requirements before they're locked in. Learn how to respond and trigger set-asides.",
    url: "https://www.capturepilot.com/blog/sources-sought-notice",
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
      name: "Sources Sought Notices: How to Get In Early and Shape the RFP",
      item: "https://www.capturepilot.com/blog/sources-sought-notice",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Sources Sought Notices: How to Get In Early and Shape the RFP",
  description:
    "Sources Sought notices are market research tools that let you influence government RFP requirements before they're locked in. Learn how to respond and trigger set-asides.",
  image: "https://www.capturepilot.com/og/sources-sought-notice.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-05-18",
  dateModified: "2026-05-18",
  mainEntityOfPage: "https://www.capturepilot.com/blog/sources-sought-notice",
  articleSection: "Strategy",
  keywords: [
    "sources sought notice",
    "sources sought response",
    "rule of two set aside",
    "pre-solicitation notice",
    "market research FAR",
    "government RFP early engagement",
    "SAM.gov sources sought",
    "small business set-aside",
    "government contract strategy",
  ],
  wordCount: 5800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a sources sought notice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sources sought notice is a market research tool used by federal contracting officers under FAR Part 10 to gauge vendor availability and capability before issuing a formal solicitation. It is not a solicitation — your response is not a proposal and cannot form a contract. Agencies publish sources sought notices on SAM.gov to determine how a contract should be competed, including whether to designate it as a small business set-aside.",
      },
    },
    {
      "@type": "Question",
      name: "Should I respond to sources sought notices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Responding to sources sought notices is one of the highest-leverage activities in government contracting. Your response influences whether the final contract is set aside for small business, can shape the requirements language in the RFP, and introduces your company to the contracting officer before the formal competition begins. Most competitors don't respond, which means you're differentiating yourself with minimal effort.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Rule of Two in government contracting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Rule of Two (FAR 19.502-2) requires contracting officers to set aside an acquisition for small business if there is a reasonable expectation that offers will be received from at least two responsible small business concerns at a fair market price. Sources sought responses that demonstrate capability from two or more qualified small businesses provide the evidence a contracting officer needs to justify a small business set-aside designation.",
      },
    },
    {
      "@type": "Question",
      name: "What should I include in a sources sought response?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sources sought response should include: your company identification (name, UEI, CAGE code, point of contact), socioeconomic certifications and size standard compliance, technical capabilities tied to the specific requirement, 2 to 4 past performance examples with contract numbers and dollar values, an explicit statement of your set-aside interest, and direct answers to every question in the notice. Keep it 5 to 10 pages, do not include pricing unless specifically requested, and submit before the deadline.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find sources sought notices on SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On SAM.gov Contract Opportunities, filter by Notice Type: 'Sources Sought.' Then apply filters for your NAICS codes and, if relevant, place of performance. Sort by response deadline to see what's closing soonest. Save the search to receive email alerts for new matching notices. For automated monitoring that surfaces only relevant opportunities, tools like CapturePilot can alert you in real time when Sources Sought notices match your profile.",
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
