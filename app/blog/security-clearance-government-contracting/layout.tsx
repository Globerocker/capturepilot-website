import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Security Clearances for Government Contractors: What You Need, What It Costs, and How to Get Sponsored | CapturePilot",
  description:
    "How government contractors get security clearances: FCL vs PCL, sponsorship process, DCSA timelines (243-day average), costs, NISP compliance, and building a cleared workforce.",
  keywords:
    "security clearance government contracting, facility security clearance FCL, how to get security clearance contractor, DCSA clearance process, personnel clearance PCL, NISPOM compliance, cleared contractor small business, Top Secret clearance contractor, Secret clearance processing time, NISP contractor, FSO facility security officer, DD Form 254, defense contractor clearance, classified contract sponsorship, cleared workforce government contractor",
  alternates: {
    canonical: "https://capturepilot.com/blog/security-clearance-government-contracting",
  },
  openGraph: {
    title:
      "Security Clearances for Government Contractors: What You Need, What It Costs, and How to Get Sponsored",
    description:
      "How government contractors get security clearances: FCL vs PCL, sponsorship process, DCSA timelines (243-day average), costs, NISP compliance, and building a cleared workforce.",
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
    "Complete guide to security clearances for government contractors: clearance levels (Confidential, Secret, TS/SCI), FCL vs PCL, how to get sponsored, DCSA processing timelines (243-day average in FY2025), program costs, NISPOM compliance, cleared workforce strategy, and a six-step path from unclassified DoD work to cleared prime contracting.",
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
  datePublished: "2026-08-11",
  dateModified: "2026-08-11",
  mainEntityOfPage:
    "https://capturepilot.com/blog/security-clearance-government-contracting",
  articleSection: "Strategy",
  keywords: [
    "security clearance government contracting",
    "facility security clearance",
    "FCL sponsorship",
    "DCSA processing times",
    "NISPOM compliance",
    "cleared contractor",
    "Top Secret clearance",
    "Secret clearance",
    "FSO facility security officer",
    "defense contractor clearance",
  ],
  wordCount: 6100,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does a small business get a security clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A small business cannot apply for a security clearance independently. Your company must be sponsored by a government agency or a cleared prime contractor that has a legitimate classified need. The sequence is: win or be awarded a classified contract (or subcontract), receive a DD Form 254 from the government customer, have the agency or prime submit a sponsorship request to DCSA, designate a Facility Security Officer (FSO), and submit documentation through the National Industrial Security System (NISS). DCSA then investigates and grants or denies the Facility Security Clearance (FCL).",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get a security clearance for a contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In FY2025, the average end-to-end processing time for all clearance investigations was 243 days — approximately 8 months. For Secret (Tier 3) clearances, the typical range is 4–8 months, with a 90th percentile of about 4 months. For Top Secret (Tier 5) clearances, the typical range is 6–12+ months, with a 90th percentile of about 9 months. The backlog has improved significantly — falling to approximately 100,000 pending cases in January 2026, down 65% from early 2025. Individual processing times depend heavily on the completeness and accuracy of the initial SF-86 submission.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an FCL and a PCL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Facility Security Clearance (FCL) is a company-level clearance granted to an organization, authorizing the facility to access, store, and process classified information. A Personnel Security Clearance (PCL) is an individual-level clearance granted to a specific employee. The FCL is the prerequisite — you must have an FCL before your employees can be processed for individual clearances. The FCL level also caps what your personnel can access: a facility cleared at Secret cannot handle Top Secret information.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to get and maintain a security clearance as a contractor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Background investigation fees for DoD contractor clearances are generally government-funded. However, the indirect costs of running a cleared program are substantial: FSO compensation ($60,000–$120,000+ annually), physical security requirements ($5,000–$1 million+ depending on what classified material must be stored), classified IT systems and ISSO/ISSE staffing ($1,500–$3,000/month for basic systems plus $80,000–$150,000+ for security staff), and annual compliance and training ($5,000–$25,000). A small business with a minimal Secret-level program can expect $50,000–$150,000 in annual overhead, excluding the cost of cleared personnel salary premiums.",
      },
    },
    {
      "@type": "Question",
      name: "Can a company win defense contracts without a security clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A significant portion of DoD contract work is unclassified — including IT services, base operations support, professional services, construction, facility management, SBIR/STTR research, and many subcontract roles on classified programs. For small businesses entering the defense market, unclassified DoD work is often the best first step: it builds past performance, establishes agency relationships, and positions you for FCL sponsorship once a classified need materializes.",
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
