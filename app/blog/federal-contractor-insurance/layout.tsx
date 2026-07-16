import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Contractor Insurance Requirements: What Coverage You Actually Need (2026) | CapturePilot",
  description:
    "FAR Part 28 insurance requirements for federal contractors: minimum amounts, types required, bonding rules, and how to get covered without overpaying. Updated July 2026.",
  keywords:
    "government contractor insurance requirements, FAR Part 28 insurance, federal contractor general liability, workers compensation government contractor, professional liability federal contracts, cyber liability DoD contractors, performance bond federal construction, Miller Act bonding, surety bond small business, Defense Base Act insurance",
  alternates: { canonical: "https://www.capturepilot.com/blog/federal-contractor-insurance" },
  openGraph: {
    title: "Government Contractor Insurance: What Coverage You Actually Need to Win",
    description:
      "FAR Part 28 minimum amounts, agency-specific requirements, bonding rules, and cost data for small business federal contractors. Updated July 2026.",
    url: "https://www.capturepilot.com/blog/federal-contractor-insurance",
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
      name: "Government Contractor Insurance: What Coverage You Actually Need to Win",
      item: "https://www.capturepilot.com/blog/federal-contractor-insurance",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Government Contractor Insurance: What Coverage You Actually Need to Win",
  description:
    "FAR Part 28 insurance minimums, seven coverage types federal contractors need, Miller Act bonding requirements, CMMC cyber insurance developments, and real cost data for small business government contractors.",
  image: "https://www.capturepilot.com/og/federal-contractor-insurance.png",
  author: { "@type": "Organization", name: "CapturePilot", url: "https://www.capturepilot.com" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-07-16",
  dateModified: "2026-07-16",
  mainEntityOfPage: "https://www.capturepilot.com/blog/federal-contractor-insurance",
  articleSection: "Getting Started",
  keywords: [
    "government contractor insurance requirements",
    "FAR Part 28 insurance",
    "federal contractor general liability",
    "workers compensation government contract",
    "professional liability federal contracts",
    "cyber liability DoD contractors",
    "Miller Act bonding",
    "surety bond small business",
    "Defense Base Act",
    "CMMC cyber insurance",
  ],
  wordCount: 5600,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What insurance is required for government contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FAR Part 28 sets the federal baseline: workers' compensation per applicable state law, employer's liability at $100,000 minimum, general liability at $500,000 per occurrence minimum, and auto liability at $200,000/$500,000 per occurrence. Most agencies require higher limits — typically $1M–$2M for general liability. Professional services and IT contracts add professional liability (E&O) requirements. DoD contracts increasingly require cyber liability insurance. Construction contracts above $150,000 require performance and payment bonds under the Miller Act. Overseas contracts require Defense Base Act (DBA) workers' compensation coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What are the FAR minimum insurance amounts for contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FAR 28.307-2 sets these minimums: Employer's Liability — $100,000 per accident; General Liability (bodily injury) — $500,000 per occurrence; Auto Liability (bodily injury) — $200,000 per person / $500,000 per occurrence; Auto Liability (property damage) — $20,000 per occurrence. Workers' compensation must comply with applicable state law. These are floors — contracting officers routinely require higher limits through solicitation clauses, especially on DoD, VA, and DHS contracts.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a performance bond to bid on government construction contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Miller Act (40 U.S.C. §§ 3131-3134) requires both performance bonds and payment bonds at 100% of contract value for federal construction contracts above $150,000. These are non-negotiable. Between $150,000 and $350,000, contracting officers may accept alternatives such as letters of credit or certified checks. Above $350,000, standard surety bonds are required. The SBA's Surety Bond Guarantee Program can help small businesses obtain bonding on contracts up to $9 million, at a fee of 0.6% of contract value.",
      },
    },
    {
      "@type": "Question",
      name: "Is cyber liability insurance required for DoD contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FAR Part 28 does not mandate a specific cyber liability minimum. However, DFARS 252.204-7012 requires contractors handling Covered Defense Information to safeguard CUI and report cyber incidents to DIBNet within 72 hours — this clause is fully in effect regardless of CMMC status. Many DoD solicitations independently include cyber liability insurance requirements, particularly for contracts involving IT systems, networks, or CUI. CMMC Phase 1 took effect November 2025; Phase 2 was suspended July 13, 2026 pending a reform review. Cyber insurance carriers are now requiring NIST 800-171 controls documentation as a condition of coverage, linking CMMC compliance and insurability.",
      },
    },
    {
      "@type": "Question",
      name: "What does government contractor insurance cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a small service or IT business (under $2M revenue): General liability at $1M/$2M limits averages $800–$1,700/year (national average approximately $79–$142/month). Workers' compensation varies by industry — construction contractors average $254/month; office-based work is significantly lower. Professional liability for consulting or IT adds $900–$3,000/year. Cyber liability for a $1M policy runs $1,500–$5,000/year depending on revenue, data handled, and security posture. Construction firms also need bonding: SBA-guaranteed surety bonds cost 0.6% of contract value for performance and payment bonds.",
      },
    },
    {
      "@type": "Question",
      name: "What is Defense Base Act (DBA) insurance and when is it required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Defense Base Act (42 U.S.C. § 1651) is a federal statute requiring workers' compensation coverage for U.S. government contractor employees working outside the United States on military bases or government contracts. It is mandatory — not optional — and triggered by FAR 52.228-3 in covered solicitations. Failure to obtain DBA coverage results in fines, potential contract loss, and elimination of standard legal defenses in lawsuits. DBA insurance is required when performing overseas work for any federal agency, including DoD, DoS, USAID, and others.",
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
