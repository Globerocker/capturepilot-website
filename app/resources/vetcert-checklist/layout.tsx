import { breadcrumbJsonLd, howToJsonLd, faqJsonLd } from "@/lib/schema";

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "VetCert Checklist", path: "/resources/vetcert-checklist" },
  ]);

  const howTo = howToJsonLd({
    name: "VetCert 2026 SDVOSB / VOSB Certification Checklist",
    description:
      "Complete 14-point document and control checklist for filing your SDVOSB or VOSB application via SBA VetCert. Covers entity documents, ownership verification, control evidence, and post-filing readiness.",
    steps: [
      { name: "Gather entity documents", text: "SAM.gov active registration with UEI, articles of incorporation or LLC operating agreement, ownership documents showing 51%+ veteran ownership, DD-214 (Member-4 copy) for every veteran owner, and a VA disability rating letter for SDVOSB applicants." },
      { name: "Prepare control evidence", text: "Document day-to-day management by the veteran owner: board minutes, signed payroll authority, lease and bank account signature cards, and operating agreement provisions confirming veteran control." },
      { name: "Submit via SBA VetCert portal", text: "Upload all documents through the VetCert portal (the unified SDVOSB/VOSB verification system that replaced VA CVE in 2023). Initial review typically 60-90 days; expect document requests during review." },
      { name: "Sync verified status to SAM.gov", text: "Once VetCert approves you, the certification propagates to SAM.gov within 7-14 days. Verify your SAM.gov entity profile reflects the SDVOSB/VOSB designation before bidding on set-aside contracts." },
    ],
  });

  const faq = faqJsonLd([
    {
      q: "What's the difference between SDVOSB and VOSB certification?",
      a: "VOSB (Veteran-Owned Small Business) requires at least 51% ownership and day-to-day control by veterans. SDVOSB adds a service-connected disability rating for at least one of those owners. SDVOSBs qualify for government-wide set-asides and sole-source awards up to $4.5M; VOSBs are primarily eligible for VA-specific contracts under the Vets First Contracting Program.",
    },
    {
      q: "How long does VetCert verification take?",
      a: "60-90 days for first-time applications, faster for renewals. Expect at least one document request during review — having all 14 items ready before you start cuts the cycle time significantly. Self-declaration in SAM.gov is not the same as VetCert verification, and most set-aside contracts now require verified status.",
    },
    {
      q: "Can I bid on set-asides while my VetCert is pending?",
      a: "Generally no — most SDVOSB/VOSB set-asides require verified status at the time of bid submission. You can submit Sources Sought responses and RFI responses while pending (these don't require verification), and you can build teaming relationships, but actual bids must wait until VetCert approval propagates to SAM.gov.",
    },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
