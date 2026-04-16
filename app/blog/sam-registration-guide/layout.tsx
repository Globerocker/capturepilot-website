import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAM.gov Registration Guide: Step-by-Step (2026)",
  description: "Complete guide to registering on SAM.gov. Prerequisites, step-by-step process, common issues, timeline, and renewal requirements.",
  keywords: "SAM.gov registration, how to register on SAM.gov, SAM registration guide, SAM.gov account setup, SAM.gov UEI, SAM.gov renewal, government contractor registration",
  alternates: { canonical: "https://www.capturepilot.com/blog/sam-registration-guide" },
  openGraph: {
    title: "SAM.gov Registration Guide: Step-by-Step (2026)",
    description: "Complete guide to registering on SAM.gov. Prerequisites, step-by-step process, common issues, timeline, and renewal requirements.",
    url: "https://www.capturepilot.com/blog/sam-registration-guide",
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
      name: "SAM.gov Registration Guide",
      item: "https://www.capturepilot.com/blog/sam-registration-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SAM.gov Registration Guide: Step-by-Step (2026)",
  description:
    "Complete walkthrough of SAM.gov registration. Prerequisites, 8-step process, common issues, timeline, and renewal requirements.",
  image: "https://www.capturepilot.com/og/sam-registration-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-01-20",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/sam-registration-guide",
  articleSection: "Government Contracting",
  keywords: [
    "SAM.gov registration",
    "UEI",
    "CAGE code",
    "Entity Registration",
    "Login.gov",
    "SAM renewal",
    "federal contractor registration",
  ],
  wordCount: 4300,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SAM.gov and why do I need to register?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov (System for Award Management) is the official US government registry for contractors, grantees, and entities doing business with federal agencies. Registration is mandatory before you can receive any federal contract, grant, or payment over $25,000. SAM.gov hosts three core systems: Entity Registration (your official contractor profile), Contract Opportunities (where solicitations and Sources Sought notices are posted, formerly FBO.gov), and Exclusion Records (the federal 'do not do business with' list). Registration is completely free — the government never charges fees for SAM.gov.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need before starting SAM.gov registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gather these before starting: (1) Legal business name exactly as registered with your state and IRS, (2) EIN from the IRS, (3) Physical business address (not a PO Box for the primary location), (4) Banking information for electronic funds transfer (routing and account numbers), (5) NAICS codes for the industries you operate in, (6) Business formation documents (Articles of Incorporation, LLC operating agreement), and (7) A designated Entity Administrator with a personal Login.gov account. UEI and CAGE codes are assigned during registration — you don't need them beforehand.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SAM.gov registration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Realistic timeline: 1-2 days of your time to complete the online forms, plus 7-10 business days of government processing for IRS validation and CAGE code assignment. Registration is considered 'Active' only after the IRS confirms your EIN and DLA assigns your CAGE code. Complex entities (joint ventures, foreign entities, businesses with recent name changes) can take 4-6 weeks. Do not schedule proposal submissions until your SAM profile shows 'Active' — you cannot receive a federal award with a pending or inactive registration.",
      },
    },
    {
      "@type": "Question",
      name: "What is a UEI and how is it different from a DUNS number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UEI (Unique Entity Identifier) is the 12-character alphanumeric ID the federal government now uses to identify contractors. It replaced the D-U-N-S Number on April 4, 2022. UEIs are issued and managed directly by SAM.gov at no cost, whereas D-U-N-S Numbers were issued by Dun & Bradstreet. If you registered before April 2022, your UEI was automatically generated and is visible in your SAM profile. All new registrations receive a UEI during the Entity Registration process — you no longer request one separately from D&B.",
      },
    },
    {
      "@type": "Question",
      name: "How often do I need to renew my SAM.gov registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov registration expires exactly 365 days after activation (or last renewal). You'll receive email reminders at 60, 30, and 15 days before expiration. Start the renewal at least 30 days early — processing can take 5-7 business days, and if your registration lapses you cannot receive awards, submit proposals requiring active registration, or get paid on existing contracts until reactivation. Treat renewal as a good time to update NAICS codes, certifications, points of contact, and banking information — don't just click 'renew' without reviewing everything.",
      },
    },
    {
      "@type": "Question",
      name: "What are common SAM.gov registration problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Frequent issues: (1) IRS EIN mismatch — your legal business name on SAM must match IRS records exactly, including capitalization and punctuation. (2) Address inconsistencies between IRS, state, and SAM records block validation. (3) Notarized letter delays — entities registering as administrators for the first time may need to submit a notarized letter, though this requirement has been relaxed in many cases. (4) Banking info errors trigger rejection of federal payments. (5) Expired CAGE code if the entity registered and lapsed long ago. Call the Federal Service Desk at 866-606-8220 for stuck validations.",
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
