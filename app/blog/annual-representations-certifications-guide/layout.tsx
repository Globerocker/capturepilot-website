import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Representations and Certifications in SAM.gov: Complete 2026 Guide | CapturePilot",
  description:
    "Learn what annual representations and certifications in SAM.gov are, what you certify, when to update, and how to avoid False Claims Act exposure. Updated for 2026.",
  keywords:
    "annual representations certifications SAM.gov, SAM.gov reps and certs, FAR 52.204-8, SAM.gov representations certifications update, government contractor certifications, small business SAM.gov certification, SAM.gov annual update, representations certifications false claims act, SAM.gov 2026 changes, DFARS representations certifications, government contractor compliance",
  alternates: { canonical: "https://capturepilot.com/blog/annual-representations-certifications-guide" },
  openGraph: {
    title: "Annual Representations and Certifications in SAM.gov: What They Are and How to Keep Them Current",
    description:
      "Every year your SAM.gov reps and certs expire with your registration. Get them wrong and you face False Claims Act liability. Here's the complete 2026 guide.",
    url: "https://capturepilot.com/blog/annual-representations-certifications-guide",
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
      name: "Annual Representations and Certifications Guide",
      item: "https://capturepilot.com/blog/annual-representations-certifications-guide",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Annual Representations and Certifications in SAM.gov: What They Are and How to Keep Them Current",
  description:
    "A complete guide to SAM.gov annual representations and certifications — what they cover, when to update them, what the March 2026 restructure changed, and how to avoid False Claims Act exposure from stale or inaccurate certifications.",
  image: "https://capturepilot.com/og/annual-representations-certifications-guide.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://capturepilot.com/logo.png" },
  },
  datePublished: "2026-09-15",
  dateModified: "2026-09-15",
  mainEntityOfPage: "https://capturepilot.com/blog/annual-representations-certifications-guide",
  articleSection: "Tools",
  keywords: [
    "annual representations certifications SAM.gov",
    "SAM.gov reps and certs",
    "FAR 52.204-8",
    "government contractor certifications",
    "SAM.gov annual update",
    "representations certifications false claims act",
    "SAM.gov 2026",
    "small business certifications",
  ],
  wordCount: 3500,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are annual representations and certifications in SAM.gov?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual representations and certifications (Reps & Certs) are legally binding declarations that every federal contractor must complete in SAM.gov under FAR 52.204-8. They cover your business size, socioeconomic status (8(a), WOSB, SDVOSB, HUBZone), debarment status, telecom equipment compliance (Section 889), labor law compliance, and other eligibility requirements. They must be reviewed and updated at least annually, and whenever the underlying facts change.",
      },
    },
    {
      "@type": "Question",
      name: "How often do I need to update my SAM.gov representations and certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At minimum, you must update your representations and certifications once per year as part of your annual SAM.gov registration renewal. However, the FAR also requires you to update them promptly whenever the facts underlying your certifications change — for example, when your business size changes, a set-aside certification lapses, your ownership changes, or you acquire equipment that affects your Section 889 telecom representation. Mid-year updates are both allowed and required in these situations.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if my SAM.gov representations and certifications are wrong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inaccurate representations and certifications can result in contract termination, suspension, debarment from federal contracting, civil penalties under the False Claims Act (up to three times the contract value), and in serious cases, criminal prosecution. The False Claims Act covers false certifications even when every invoice was accurate — the false certification itself is the false claim.",
      },
    },
    {
      "@type": "Question",
      name: "What changed in SAM.gov reps and certs in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On March 24, 2026, SAM.gov deployed a modernized Representations and Certifications structure. The major changes: the Reps & Certs section was split into a general FAR module and a separate Defense Response module (required only for DoD contractors). Types 2 and 3 certifications — previously collected at the entity level in SAM.gov — are now collected at the solicitation or contract level instead. Questions now use plain-language titles rather than FAR clause numbers.",
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
