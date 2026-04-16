import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deal Pipeline — Track Contracts From Discovery to Award",
  description: "Kanban-style pipeline management for government contracts. Track every opportunity from discovery through bidding to award.",
  keywords: "government contract pipeline, deal tracking GovCon, opportunity management, contract pipeline tracker, kanban government contracts, bid tracking, capture management",
  alternates: { canonical: "https://www.capturepilot.com/features/pipeline" },
  openGraph: {
    title: "Deal Pipeline — Track Contracts From Discovery to Award",
    description: "Kanban-style pipeline management for government contracts. Track every opportunity from discovery through bidding to award.",
    url: "https://www.capturepilot.com/features/pipeline",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
    { "@type": "ListItem", position: 3, name: "Deal Pipeline", item: "https://www.capturepilot.com/features/pipeline" },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot Deal Pipeline",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Kanban-style capture pipeline with drag-and-drop stages, deal detail pages, activity timelines, notes, and custom stage configuration — designed for federal contract capture lifecycles from Sources Sought discovery through award.",
  featureList: [
    "Drag-and-drop Kanban board powered by @dnd-kit/core",
    "Default stages: Discovered, Researching, Preparing, Submitted, Awarded, Lost, No-Bid",
    "Custom stage renaming and reordering (config stored in user_profiles.notes.pipeline_stages)",
    "Notice-type tabs — separate boards for Sources Sought, Pre-Solicitation, and Solicitation",
    "Deal detail pages with activity timeline, notes, and action items",
    "pipeline_activity table logs every stage, priority, and note change",
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
      name: "What pipeline stages does CapturePilot support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Default stages are Discovered, Researching, Preparing, Submitted, Awarded, Lost, and No-Bid — mapped to a typical federal capture lifecycle. You can rename, reorder, or add custom stages to match your internal process; stage configuration is stored per-user in user_profiles.notes.pipeline_stages. Both Kanban (drag-and-drop) and List views are available, and your view preference persists across sessions. The pipeline is responsive and uses a max-w-7xl layout for wide screens.",
      },
    },
    {
      "@type": "Question",
      name: "Can I split the pipeline by notice type?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Notice-type tabs at the top of the pipeline let you view separate boards for All, Sources Sought, Pre-Solicitation, and Solicitation. This is critical because Sources Sought responses (6–18 months early) have a completely different capture cadence than a two-week Solicitation turnaround — splitting them lets your team apply the right playbook at the right stage. Each tab preserves its own column filters and sort order.",
      },
    },
    {
      "@type": "Question",
      name: "How does drag-and-drop work on the pipeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Kanban board is built on @dnd-kit/core with @dnd-kit/sortable for smooth drag-and-drop between stages. When you drop a card on a new column, we update user_pursuits.stage in Supabase immediately and log the change to the pipeline_activity table with timestamp and user context. This means every stage transition is auditable — useful for retrospectives, win/loss reporting, and team accountability. You can also drag to reorder cards within a column.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a detail page for each deal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every pipeline card is clickable and opens a dedicated /pipeline/[pursuitId] detail page with a full activity timeline, notes, contact log, and action items. The activity timeline logs every change — stage transition, priority update, note added, document uploaded — with timestamps and user attribution. Stage-specific service CTAs (capture call, proposal help, debrief coaching) appear contextually based on which stage the deal is in.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add custom notes and action items to each opportunity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each pursuit supports free-form notes that append to the activity timeline, plus structured action items stored in the user_action_items table. When you move an opportunity into the Preparing stage, we automatically generate a default action-item checklist — things like 'Confirm capability statement', 'Identify teaming partners', 'Draft executive summary'. You can check items off, add custom ones, and assign them to teammates on the consulting tier.",
      },
    },
    {
      "@type": "Question",
      name: "How does the pipeline integrate with the matching engine?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From any matched opportunity — HOT, WARM, or COLD — you can click the Pursue button to push the opportunity directly into your pipeline with one click. It lands in the Discovered stage by default, with all the matching context (score, classification, set-aside, agency, deadline) pre-populated. You can also manually create custom deals that aren't tied to a SAM.gov listing, useful for state/local contracts or commercial pursuits that live outside the federal ingestion pipeline.",
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
