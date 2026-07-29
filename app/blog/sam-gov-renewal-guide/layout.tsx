import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SAM.gov Renewal Guide 2026: How to Avoid Registration Lapses",
  description:
    "SAM.gov registration expires every 365 days — no auto-renewal. Learn when to start, what delays renewal, the 2025 FAR rule change, and how to prevent lapses that stop contract awards and payments.",
  keywords:
    "SAM.gov renewal, SAM.gov registration renewal, SAM registration expired, renew SAM.gov, SAM.gov expiration, how to renew SAM registration, SAM.gov lapsed registration, government contractor SAM.gov, SAM.gov annual renewal, SAM registration government contracts",
  alternates: { canonical: "https://capturepilot.com/blog/sam-gov-renewal-guide" },
  openGraph: {
    title: "SAM.gov Renewal Guide 2026: How to Avoid Registration Lapses",
    description:
      "SAM.gov registration expires every 365 days with no auto-renewal. A lapse stops contract awards and freezes payments. Here's how to stay current.",
    url: "https://capturepilot.com/blog/sam-gov-renewal-guide",
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
      name: "SAM.gov Renewal Guide",
      item: "https://capturepilot.com/blog/sam-gov-renewal-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "SAM.gov Renewal: How to Avoid Registration Lapses That Can Kill Your Federal Contracts",
  description:
    "SAM.gov registration expires every 365 days — no auto-renewal. A lapse stops contract awards and freezes payments on active contracts. Learn the renewal process, common failure modes, and the 2025 FAR rule change.",
  image: "https://capturepilot.com/og/sam-gov-renewal-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-07-29",
  dateModified: "2026-07-29",
  mainEntityOfPage: "https://capturepilot.com/blog/sam-gov-renewal-guide",
  articleSection: "Government Contracting",
  keywords: [
    "SAM.gov renewal",
    "SAM registration",
    "government contractor registration",
    "SAM.gov lapse",
    "federal contractor compliance",
    "EBiz POC",
    "UEI",
    "CAGE code",
    "small business government contracting",
  ],
  wordCount: 3800,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often does SAM.gov registration need to be renewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SAM.gov registration expires exactly 365 days from the date your last renewal was approved by GSA. There is no auto-renewal — you must manually log in and complete the renewal each year. Begin the renewal process at least 60 days before expiration because IRS EIN validation and other processing steps can take 3–7 business days under normal conditions, and up to 3 weeks if issues arise.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my SAM.gov registration lapses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A lapsed SAM.gov registration prevents any federal contract award from being made to your company. It also stops payments on active contracts — the government routes electronic funds transfers through SAM.gov, and a lapsed registration breaks that connection. Under the August 2025 FAR final rule, a short lapse between proposal submission and contract award is no longer automatically disqualifying, but you must be registered at the time of proposal submission and at the time of award. Lapses during active contract performance remain fully problematic.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SAM.gov renewal take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under normal conditions, SAM.gov renewal takes 3–7 business days from submission to Active status. Processing time increases if IRS EIN validation fails (adds 3–5 days), your Electronic Business POC is slow to respond, you're updating banking information (adds 2–5 days), or you've made changes to your legal business name or address. In the worst case, multiple issues stacking can mean a renewal takes 3 weeks. Start the renewal process 60–90 days before your expiration date.",
      },
    },
    {
      "@type": "Question",
      name: "Is SAM.gov renewal free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GSA does not charge any fee for SAM.gov registration or renewal. Many private companies advertise SAM.gov registration services for fees ranging from $150 to $500 — these are optional third-party services that manage the process for you, not required government fees. You can complete the full renewal at sam.gov at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "What does the 2025 FAR rule change mean for SAM.gov registration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The FAR Council issued a final rule on August 7, 2025, adopting a 'two-point' SAM registration requirement. Contractors must be registered in SAM at the time of proposal submission and at the time of contract award, but are no longer required to maintain continuous registration in between those two points. This reversed years of GAO precedent that had held that any gap in registration between proposal submission and award could disqualify a contractor. However, the rule does not affect registration requirements during active contract performance — lapses during performance still stop payments.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Electronic Business POC in SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Electronic Business Point of Contact (EBiz POC) is the person at your organization who receives SAM.gov communications — renewal reminders at 60, 30, and 15 days before expiration, validation requests, and security alerts. If the EBiz POC email is no longer monitored (due to staff turnover, email changes, or the emails going to spam), you won't receive these critical notices. Update your EBiz POC in SAM.gov whenever the designated staff member changes, not just at annual renewal time.",
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
