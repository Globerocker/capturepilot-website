import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capability Statement Builder — AI + Voice Powered",
  description: "Record yourself talking about your business. AI generates a professional capability statement with your brand colors. Ready in minutes.",
  keywords: "capability statement builder, AI capability statement, government capability statement, voice capability statement, federal capability statement template, GovCon capability statement",
  alternates: { canonical: "https://www.capturepilot.com/features/capability-statement" },
  openGraph: {
    title: "Capability Statement Builder — AI + Voice Powered",
    description: "Record yourself talking about your business. AI generates a professional capability statement with your brand colors. Ready in minutes.",
    url: "https://www.capturepilot.com/features/capability-statement",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.capturepilot.com/features" },
    { "@type": "ListItem", position: 3, name: "Capability Statement Builder", item: "https://www.capturepilot.com/features/capability-statement" },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CapturePilot Capability Statement Builder",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Voice-to-document AI capability statement builder that records your business story, extracts brand colors from your website, and generates a federal-ready capability statement with a branded PDF export — all in under 10 minutes.",
  featureList: [
    "Voice recording via Web Speech API or MP3 upload with Whisper transcription",
    "Quick Checker crawler prefill — pulls NAICS, UEI, certifications, and company description",
    "Automatic brand color extraction via HSL-based filtering and weighted scoring",
    "TipTap rich-text editor with bubble-menu AI editing (improve / shorten / expand / tighten)",
    "Branded PDF export with color bands, structured sections, and contact block via jsPDF",
    "Google Drive save via Supabase provider_token, plus PDF/DOCX upload to client-docs bucket",
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
      name: "How does the Capability Statement Builder work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have three input options: record your voice via the Web Speech API, upload an MP3 (transcribed with Whisper), or paste a transcript. The AI then structures your story into the standard federal capability statement sections — company overview, core competencies, past performance, differentiators, certifications, NAICS/PSC codes, and contact block. The Quick Checker crawler also prefills your company description and brand colors from your website so you don't start from a blank page.",
      },
    },
    {
      "@type": "Question",
      name: "Can the builder extract my brand colors automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The /api/brand route extracts logo, colors, and description from any website URL. It uses HSL-based filtering to reject near-white, near-black, and desaturated grays, then applies weighted scoring — theme-color tags score +5, CSS --primary variables +4, msapplication-TileColor +4, and occurrence frequency +1 per instance. The result is a brand palette that actually matches your real marketing identity, not just the first color the crawler finds.",
      },
    },
    {
      "@type": "Question",
      name: "What does the final PDF look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The PDF is generated via jsPDF with a branded header, color bands using your extracted brand colors, and structured sections — company overview, NAICS/PSC codes, core competencies, differentiators, past performance, key personnel, set-aside certifications, and a contact block. Standard government format: single page, federal-ready, printable at letter size. You can also save it directly to Google Drive if you've linked your Google account via Supabase, or download as a branded .docx.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the AI-generated content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The builder uses a TipTap rich-text editor with bold/italic/underline, headings, lists, and link support. Select any passage and a bubble menu appears with four AI editing actions — Improve, Shorten, Expand, and Tighten — powered by GPT-4o-mini. This lets you refine specific sentences or paragraphs without re-running the whole generation. Save progress streams section-by-section via SSE, and the draft autosaves to your profile as both HTML and plain text.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a capability statement to use other features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for the AI Proposal Writer. The proposal writer returns a 412 CAPABILITY_STATEMENT_REQUIRED error if you don't have one on file, because it pulls your core narrative, differentiators, NAICS certifications, and past performance directly from the saved capability statement. Matching, pipeline, partner search, and intelligence features all work independently. Setting up the capability statement typically takes 8–12 minutes end-to-end.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upload my own existing capability statement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you already have a PDF or DOCX capability statement, you can upload it directly to Supabase Storage under the capability-statements/{user_id}/ prefix in the client-docs bucket. We'll parse the text, fill in your profile fields (core competencies, differentiators, past performance), and then let you regenerate a branded PDF version or continue using your original. The upload is RLS-protected so only you and your admin can access it.",
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
