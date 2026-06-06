import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contracting for Startups: Is Federal Revenue Right for You? (2026 Guide)",
  description:
    "Small businesses won $183B in federal contracts in FY2024. Learn SBIR/STTR, set-aside programs, registration steps, and the 4 fastest entry paths for startups.",
  keywords:
    "government contracting for startups, startup federal contracts, SBIR for startups, government contracting small business, federal contracting beginners, SAM registration startup, set aside programs startup, SBIR STTR 2026, government contract first contract, federal revenue startup",
  alternates: {
    canonical: "https://capturepilot.com/blog/government-contracting-for-startups",
  },
  openGraph: {
    title: "Government Contracting for Startups: Is Federal Revenue Right for You?",
    description:
      "Small businesses captured $183B — 28.8% of all federal contracting — in FY2024. Learn SBIR, set-asides, registration, and your fastest path to a first federal contract.",
    url: "https://capturepilot.com/blog/government-contracting-for-startups",
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
      name: "Government Contracting for Startups",
      item: "https://capturepilot.com/blog/government-contracting-for-startups",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Government Contracting for Startups: Is Federal Revenue Right for You?",
  description:
    "A practical guide for startups evaluating federal contracting as a revenue channel. Covers market size ($183B in FY2024 small business awards), SBIR/STTR reauthorization in 2026, set-aside certifications, the SAM.gov registration stack, four entry-point paths, past performance solutions, and common proposal mistakes.",
  image:
    "https://capturepilot.com/og/government-contracting-for-startups.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-06-06",
  dateModified: "2026-06-06",
  mainEntityOfPage:
    "https://capturepilot.com/blog/government-contracting-for-startups",
  articleSection: "Government Contracting",
  keywords: [
    "government contracting for startups",
    "SBIR for startups",
    "federal contracting small business",
    "set aside programs",
    "SAM.gov registration",
    "SBIR STTR 2026 reauthorization",
    "past performance government contracts",
    "startup federal revenue",
    "government contracting beginner guide",
  ],
  wordCount: 4200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a startup with no federal experience win government contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Several paths require no prior federal contracts: SBIR/STTR Phase I awards are explicitly designed for innovative small businesses with no federal history. Micro-purchases (under $15,000) require no SAM registration and no past performance. Subcontracting under a prime contractor builds federal experience without needing to win a prime contract first. Federal evaluators are required by FAR guidance to rate 'no past performance' as neutral — not negative — so the absence of federal history does not automatically disqualify you from set-aside competitions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the SBIR program and who qualifies in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Small Business Innovation Research (SBIR) program funds R&D and technology development by small businesses. It was reauthorized on April 13, 2026 through the Small Business Innovation and Economic Security Act of 2026, extending the program through September 30, 2031 after a six-month lapse. Phase I awards (feasibility) carry a statutory cap of $323,090. Phase II awards (prototype development) cap at $2,153,927. A new Strategic Breakthrough Award category allows post-Phase II awards up to $30 million at qualifying agencies. To qualify, a company must be a U.S. small business with 500 or fewer employees, at least 51% owned and controlled by U.S. citizens or permanent resident aliens, and have its primary employment located in the U.S.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a first government contract as a startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most startups see their first federal award 6–18 months after beginning the process. The registration stack — EIN, SAM.gov, CAGE code, Reps & Certs — takes 3–6 weeks. Socioeconomic certifications (SDVOSB, WOSB, 8(a), HUBZone) add weeks to months depending on the program. From SAM activation to first contract award in a competitive set-aside, plan for at least 6 months. SBIR Phase I has its own solicitation cycles that can add additional wait time. The fastest entry is via micro-purchases (under $15,000 via government purchase card), which can happen within days of getting your SAM registration.",
      },
    },
    {
      "@type": "Question",
      name: "What is the government's small business contracting goal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal government-wide small business contracting goal is 23% of all federal prime contract dollars. In FY2024, agencies exceeded this goal significantly, awarding $183.4 billion — 28.8% of total federal contracting — to small businesses. This was the fourth consecutive year of growth, up from approximately $154 billion in FY2021. Each agency sets individual small business goals for total small business, small disadvantaged business (SDB), service-disabled veteran-owned (SDVOSB), women-owned (WOSB), and HUBZone categories.",
      },
    },
    {
      "@type": "Question",
      name: "What do I need to register to bid on federal contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To bid on federal contracts above the $15,000 micro-purchase threshold, you need: (1) an EIN from the IRS; (2) active SAM.gov entity registration — free, takes 3–10 business days; (3) a CAGE code, assigned automatically with SAM activation; (4) completed Representations and Certifications in SAM.gov; and (5) any applicable socioeconomic certifications (SDVOSB via VA VetCert, WOSB via SBA repository, 8(a) via SBA application, HUBZone via SBA application). All official registrations are free — never pay a third party for SAM.gov registration.",
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
