import LeadMagnetPage from "../_components/LeadMagnetPage";

export default function VosbSdvosbCertificationGuidePage() {
  return (
    <LeadMagnetPage
      slug="vosb-sdvosb-certification-guide"
      assetTitle="VOSB & SDVOSB Certification Guide — VA CVE Application Walkthrough"
      assetFileName="FLK_05_VOSB_SDVOSB_CVE_Guide.pdf"
      hubspotSource="lead-magnet-vosb-sdvosb-certification-guide"
      seo={{
        title: "VOSB & SDVOSB Certification Guide — VA CVE Walkthrough",
        description:
          "Free 14-page PDF: eligibility tests, document checklist, common rejection reasons, and the full VA CVE application path. Download and unlock veteran-owned federal contracting.",
        keyword: "vosb certification",
      }}
      hero={{
        headline: "Get VOSB or SDVOSB certified — the real way",
        subheadline:
          "A 14-page walkthrough of the VA CVE application: every eligibility test, every document the reviewer checks, and the four mistakes that keep getting veteran-owned firms rejected.",
        bullets: [
          "Eligibility rules for both VOSB and SDVOSB — side by side",
          "Complete document checklist the VA reviewer follows",
          "Top rejection reasons and how to avoid each one",
          "Realistic timeline: what happens between submit and approval",
        ],
        pageCount: 14,
        format: "PDF",
      }}
      whatsInside={[
        "Side-by-side VOSB vs. SDVOSB eligibility comparison — ownership percentage, control tests, and disability documentation requirements",
        "Full VA CVE portal walkthrough — how to create your account, upload documents, and submit through the Veteran Small Business Certification system",
        "14-point document checklist organized by category: entity docs, control docs, and disability evidence",
        "DD-214 and VA disability rating letter requirements — exactly which copy types the VA accepts and which get rejected",
        "Ownership and control section — how to prove 51% unconditional ownership, explain voting structures, and handle multi-owner LLCs",
        "Common rejection patterns with annotated examples: what reviewers flag and what language fixes it",
        "60–90 day processing timeline with milestones — what to expect at each stage and when to follow up",
        "Post-certification checklist: annual recertification triggers, SAM.gov update sequence, and how to get listed in the VA Vendor Information Pages (VIP)",
      ]}
      whyItExists={`We kept seeing veteran-owned businesses lose certifications — or never finish applying — for reasons that had nothing to do with their eligibility. A missing page in the operating agreement. A DD-214 that's the wrong member copy. An LLC structure the reviewer couldn't figure out without a cover letter explaining it. Clean businesses, disqualified on paperwork.\n\nI built this guide because the VA's own documentation is written for reviewers, not applicants. It tells you what they'll check — not how to prepare for it. So I walked through a dozen actual applications, talked to a few consultants who do this full-time, and wrote the thing that should have existed: a plain-English walkthrough from first login to approval letter.\n\nThis isn't legal advice and it's not a guarantee. But if you follow the checklist and understand why each document matters, you'll go in with a complete package — and that alone puts you ahead of most applications the VA sees.`}
      whoThisIsFor={[
        "Veteran-owned businesses that haven't applied yet and want to understand the full process before starting",
        "VOSB owners who applied, got rejected, and aren't sure what went wrong",
        "SDVOSB applicants who have their disability rating but aren't sure how to document control",
        "Multi-owner veteran businesses — LLCs with a spouse or partner on the agreement — where the ownership structure needs explanation",
        "Service-disabled veterans with $500K–$5M in revenue who want VA set-aside contracts but haven't unlocked the certification yet",
        "Business owners who started the CVE application and got stuck on the portal or the document list",
      ]}
      whoItIsnt={[
        "Firms already certified and current — you're past this stage, though the recertification section may still be useful",
        "8(a) applicants — SBA's 8(a) program has a separate application path and different ownership/control tests; this guide doesn't cover it",
        "Non-veteran-owned businesses looking to team with an SDVOSB — this is for the certified entity itself, not teaming strategy",
        "Attorneys or consultants filing on behalf of clients — this is written for the owner, not a filing professional",
      ]}
      exampleSnippet="For SDVOSB status, the service-connected disability doesn't have to be 100% — any rating qualifies. What disqualifies most applicants isn't the disability rating; it's the control test. The VA will look at your operating agreement, your bank signature cards, and your payroll records to confirm the veteran is actually running the company day-to-day — not just on paper."
      faqs={[
        {
          q: "Is this really free?",
          a: "Yes. You give us your email, we send you the PDF. That's it. No credit card, no trial activation, no catch.",
        },
        {
          q: "How long is the guide?",
          a: "14 pages. It's dense — not padded. Each section covers a specific part of the application, so you can skip straight to what you need.",
        },
        {
          q: "Will you spam me after I download it?",
          a: "No. You'll get the PDF and an occasional email from CapturePilot when we publish something relevant to federal contracting. You can unsubscribe from any email, instantly.",
        },
        {
          q: "Is this up to date for FY2026?",
          a: "Yes. The VA moved VOSB/SDVOSB certification from CVE to SBA VetCert in 2023, and SBA updated the portal and some document requirements again in 2025. This guide reflects the current Veteran Small Business Certification (VetCert) system.",
        },
        {
          q: "Can I share this with my team or attorney?",
          a: "Yes, share it freely. We ask that you don't repost it publicly as your own content, but forwarding it internally or to an advisor is completely fine.",
        },
        {
          q: "What if I'm not registered on SAM.gov yet?",
          a: "You'll need an active SAM.gov registration before you can apply for VOSB or SDVOSB. The guide covers the SAM.gov prerequisite in the first section — get that done first, then come back to the CVE application.",
        },
        {
          q: "What happens after I download?",
          a: "You get the PDF. If you want to take the next step — checking which VA opportunities match your NAICS codes right now — you can run a free search in CapturePilot. No obligation, just a fast way to see what's actually bidding.",
        },
      ]}
    />
  );
}
