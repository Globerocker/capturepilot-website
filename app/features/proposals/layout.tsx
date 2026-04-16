import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Proposal Writer — Write Government Proposals in Minutes",
  description: "Generate tailored government proposals in 15 minutes with AI. Cover letters, technical approaches, past performance — all compliant and ready to submit.",
  keywords: "AI proposal writer, government proposal generator, federal proposal writing, RFP response AI, government bid writing, proposal automation, GovCon proposal tool",
  alternates: { canonical: "https://www.capturepilot.com/features/proposals" },
  openGraph: {
    title: "AI Proposal Writer — Write Government Proposals in Minutes",
    description: "Generate tailored government proposals in 15 minutes with AI. Cover letters, technical approaches, past performance — all compliant and ready to submit.",
    url: "https://www.capturepilot.com/features/proposals",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
    { "@type": "ListItem", position: 3, name: "AI Proposal Writer", item: "https://www.capturepilot.com/features/proposals" },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot AI Proposal Writer",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Background-job AI proposal drafting tool that turns a SAM.gov solicitation into a compliant, tailored proposal draft — cover letter, technical approach, management plan, past performance, and pricing narrative — mapped to Section L/M evaluation criteria.",
  featureList: [
    "GPT-4o-mini powered per-section proposal generation",
    "Section L/M compliance mapping against evaluation criteria",
    "Auto-pulls from your capability statement, past performance, and team qualifications",
    "Background job architecture — navigate away without losing progress",
    "Per-section progress polling with live word counts",
    "Export to Word and PDF for final review",
  ],
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "USD",
    url: "https://app.capturepilot.com/signup",
  },
  brand: { "@type": "Brand", name: "CapturePilot" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does the AI Proposal Writer take to generate a draft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full first-draft proposal — cover letter, technical approach, management plan, past performance narrative, and pricing justification — typically generates in 10 to 15 minutes. Because it runs as a background job, you can close the tab, navigate to another tool, or refresh the page without losing progress. A global Running Jobs indicator in the dashboard header shows status across navigation, and localStorage persists the active job across reloads.",
      },
    },
    {
      "@type": "Question",
      name: "Is the proposal actually compliant with the RFP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The generator reads the solicitation's Section L (instructions to offerors) and Section M (evaluation criteria) and maps each proposal section to the specific evaluation factors. It uses OpenAI's GPT-4o-mini in JSON mode with explicit schemas per section, so every output includes the required topic headings, word counts, and compliance references. You still review and finalize the draft — it's designed to eliminate the blank-page problem, not replace your proposal manager.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a capability statement to use the proposal writer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The API returns a 412 CAPABILITY_STATEMENT_REQUIRED error and redirects you to the capability statement builder if you don't have one on file. This is because the proposal writer pulls your core narrative, differentiators, NAICS certifications, past performance, and key personnel directly from your saved capability statement. Once you complete the capability statement (which takes about 10 minutes via voice recording), you can generate unlimited proposals.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the AI-generated draft after it's done?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every section is editable in a rich-text editor, and you can export to Word (.docx) or PDF for offline editing. You can also re-generate individual sections without re-running the whole proposal — useful when the win theme shifts or when a teaming partner's past performance needs to be added. Per-section error logging means you'll never silently get an empty proposal; any failed section surfaces an explicit retry prompt.",
      },
    },
    {
      "@type": "Question",
      name: "What proposal types does the AI support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The writer supports Sources Sought responses, RFI responses, full proposals (Solicitations), and white papers. It's optimized for FAR-compliant federal proposals including 8(a) sole-source, SDVOSB set-asides, WOSB set-asides, HUBZone set-asides, and full-and-open competitions. It handles LPTA (lowest-price technically acceptable), best-value trade-off, and IDIQ/GWAC task order responses with appropriate section structures for each.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see progress while the proposal is being written?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The proposal_jobs table (migration 026) tracks per-section status, and the /api/ai/write-proposal/status/[jobId] endpoint streams live progress — which section is currently writing, how many words have been generated, and which sections are complete. A global Running Jobs indicator in the dashboard layout shows status across any page, so you can monitor progress while continuing to use Quick Checker, matching, or pipeline.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
