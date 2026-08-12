import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Security Clearances for Government Contractors: What You Need, What It Costs, and How to Get Sponsored | CapturePilot",
  description:
    "Complete 2026 guide to security clearances for government contractors. FCL vs PCL, DCSA FY2026 rates ($455 Secret, $5,890 TS), processing times, sponsorship process, and small business strategy.",
  keywords:
    "security clearance government contracting, facility clearance FCL, how to get security clearance contractor, DCSA security clearance cost, security clearance processing time 2026, NISP small business, facility security officer FSO, NISPOM compliance, TS SCI government contractor, secret clearance cost, top secret clearance contractor, government contractor background investigation, FOCI security clearance, Trusted Workforce 2.0, cleared government contracts small business",
  alternates: {
    canonical: "https://capturepilot.com/blog/security-clearance-government-contracting",
  },
  openGraph: {
    title:
      "Security Clearances for Government Contractors: What You Need, What It Costs, and How to Get Sponsored",
    description:
      "Complete 2026 guide to security clearances for government contractors. FCL vs PCL, DCSA FY2026 rates ($455 Secret, $5,890 TS), processing times, and how small businesses get sponsored.",
    url: "https://capturepilot.com/blog/security-clearance-government-contracting",
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
      item: "https://capturepilot.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://capturepilot.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Security Clearances for Government Contractors",
      item: "https://capturepilot.com/blog/security-clearance-government-contracting",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Security Clearances for Government Contractors: What You Need, What It Costs, and How to Get Sponsored",
  description:
    "Complete guide covering security clearance levels (Confidential, Secret, Top Secret, TS/SCI), facility vs. personnel clearances, DCSA FY2026 investigation rates ($455 Tier 3, $5,890 Tier 5), current processing times (156 days Secret, 220+ days TS as of early 2026), the sponsorship and FCL process, which agencies require clearances, how small businesses navigate the cleared market, Trusted Workforce 2.0 changes, and a step-by-step clearance strategy.",
  image:
    "https://capturepilot.com/og/security-clearance-government-contracting.png",
  author: {
    "@type": "Organization",
    name: "CapturePilot",
    url: "https://capturepilot.com",
  },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: {
      "@type": "ImageObject",
      url: "https://capturepilot.com/logo.png",
    },
  },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  mainEntityOfPage:
    "https://capturepilot.com/blog/security-clearance-government-contracting",
  articleSection: "Strategy",
  keywords: [
    "security clearance government contracting",
    "facility clearance FCL",
    "DCSA investigation rates FY2026",
    "security clearance processing time 2026",
    "NISP small business",
    "NISPOM 32 CFR Part 117",
    "TS SCI contractor",
    "FOCI mitigation",
    "cleared government contracts",
    "Trusted Workforce 2.0",
  ],
  wordCount: 6200,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a security clearance cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DCSA's official FY2026 billing rates are $455 for a Tier 3 (Secret) investigation and $5,890 for a Tier 5 (Top Secret) investigation. These rates increased 10% from FY2025. The applicant is never directly charged — the cost is borne by the sponsoring government agency or prime contractor. Additional costs such as international coverage ($927) or enhanced subject interviews can be added. The real hidden cost is the salary premium for cleared personnel ($30,000–$45,000 more annually for TS/SCI professionals) and the FSO, physical security infrastructure, and IT accreditation required to maintain a cleared facility.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a security clearance for a contractor in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As of early 2026, Secret (Tier 3) clearances average approximately 156 days end-to-end. Top Secret (Tier 5) clearances average 220–230 days. These are averages — complex cases with foreign contacts, financial issues, or international exposure can take significantly longer (9–18 months for TS). The investigation backlog has dropped from a peak of 291,200 cases in September 2024 to approximately 100,000 by January 2026, a 65% reduction driven by Continuous Vetting coverage and dedicated investigative capacity. Facility Clearances for small businesses with no FOCI complications can complete in 45–90 days; FOCI mitigation can extend this to 12+ months.",
      },
    },
    {
      "@type": "Question",
      name: "How does a small business get sponsored for a facility clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A small business cannot self-initiate a facility clearance application. Sponsorship must come from a government agency (through a classified contract and DD Form 254) or a cleared prime contractor (as a subcontractor on a classified program). The most common path for small businesses is teaming with a cleared prime, performing subcontract work, and having the prime sponsor the FCL. Some solicitations explicitly allow FCL-pending companies to bid, with the FCL process beginning upon award. The company must also designate a Facility Security Officer (FSO), a U.S. citizen employee who manages NISPOM compliance.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an FCL and a PCL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Facility Clearance (FCL) is granted to the company — the legal entity. It authorizes the organization to receive, store, and safeguard classified material at the granted level. A Personnel Security Clearance (PCL) is granted to individual employees after a background investigation. Both must exist simultaneously for classified work to occur: a cleared company whose employees do not hold PCLs cannot perform classified work, and an employee with an active PCL cannot work on classified programs at an uncleared company. Employees at a cleared company do not automatically receive clearances — each individual must be separately investigated and adjudicated.",
      },
    },
    {
      "@type": "Question",
      name: "What is TS/SCI and how is it different from a Top Secret clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TS/SCI is not a separate clearance level — it is a Top Secret clearance combined with access to Sensitive Compartmented Information (SCI) programs. SCI access is granted compartment by compartment, program by program, through a separate read-in process. A person can hold an active Top Secret clearance and still be excluded from every SCI program if they have not been specifically read in. The read-in requires a need-to-know determination by the program office, not just a favorable investigation result. IC agencies typically also require polygraph examinations (counterintelligence or full-scope) as part of the TS/SCI access process.",
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
