import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapturePilot vs GovWin — Better Alternative for Small Business",
  description: "Compare CapturePilot vs GovWin (Deltek). AI proposal writer, smart matching, and capability statement builder at a fraction of the cost. Built for small businesses, not enterprises.",
  keywords: "CapturePilot vs GovWin, GovWin alternative, Deltek GovWin comparison, GovWin pricing, GovCon tools for small business, GovWin competitor",
  alternates: { canonical: "https://www.capturepilot.com/vs/govwin" },
  openGraph: {
    title: "CapturePilot vs GovWin — Better Alternative for Small Business",
    description: "Compare CapturePilot vs GovWin (Deltek). AI proposal writer, smart matching, and capability statement builder at a fraction of the cost. Built for small businesses, not enterprises.",
    url: "https://www.capturepilot.com/vs/govwin",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
    { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://www.capturepilot.com/vs" },
    { "@type": "ListItem", position: 3, name: "CapturePilot vs GovWin", item: "https://www.capturepilot.com/vs/govwin" },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CapturePilot vs GovWin (Deltek): Enterprise Intelligence at Small Business Pricing",
  description:
    "Compare CapturePilot vs GovWin (Deltek). AI proposal writer, smart matching, and capability statement builder at a fraction of the cost. Built for small businesses, not enterprises.",
  author: { "@type": "Organization", name: "CapturePilot" },
  publisher: {
    "@type": "Organization",
    name: "CapturePilot",
    logo: { "@type": "ImageObject", url: "https://www.capturepilot.com/logo.png" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-04-16",
  mainEntityOfPage: "https://www.capturepilot.com/vs/govwin",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does CapturePilot compare to GovWin by Deltek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovWin (Deltek IQ) is the legacy enterprise leader for federal, state, and local procurement intelligence — large database, analyst reports, teaming network, and IDIQ tracking, priced at $8,000–$15,000+ per seat per year. CapturePilot covers federal contracting specifically with AI tools GovWin does not include: proprietary multi-factor smart matching, AI proposal drafting (gpt-4o-mini), a voice-powered capability statement builder, and Quick Checker eligibility. At $199/month flat with a free tier, CapturePilot costs roughly 80–90% less while adding the capture tools GovWin skips.",
      },
    },
    {
      "@type": "Question",
      name: "Is GovWin or CapturePilot better for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot. GovWin is priced and built for large enterprises with 100+ employees, $10M+ revenue, and dedicated capture teams. Its feature set assumes you already have analysts, proposal writers, and compliance staff — GovWin is the research layer on top. Small businesses under $10M typically need the opposite: AI that replaces the missing analyst and proposal writer. CapturePilot was built specifically for SMB GovCon — SDVOSB, WOSB, 8(a), HUBZone — at $199/mo flat with automatic set-aside matching.",
      },
    },
    {
      "@type": "Question",
      name: "What is the pricing difference between GovWin and CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GovWin uses per-seat annual licensing at roughly $8,000–$15,000 per seat per year with a mandatory enterprise sales process and no free tier. For a 5-person team that is $40,000–$75,000/year. CapturePilot is $199/month flat ($2,388/year) regardless of team size, with a 30-day Pro trial and a free tier. A 5-person team saves up to $72,600/year by switching, while gaining AI tools GovWin does not include.",
      },
    },
    {
      "@type": "Question",
      name: "Does GovWin have AI proposal generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GovWin is research and intelligence — opportunity database, analyst reports, market trends, teaming network, and IDIQ vehicle tracking. AI proposal drafting and capability statement generation are not part of the platform. CapturePilot includes both: proposal sections are drafted with gpt-4o-mini in JSON mode with per-section progress streaming, and the capability statement builder generates a branded PDF with colors auto-extracted from your website (via a Playwright-based brand-token pipeline).",
      },
    },
    {
      "@type": "Question",
      name: "Can I migrate from GovWin to CapturePilot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CapturePilot ingests SAM.gov opportunities daily and supplements with USASpending.gov award data and SBIR.gov R&D opportunities — the federal contract data that matters most. The one trade-off: you lose state and local procurement coverage, and analyst-written reports. For most small businesses focused on federal, that is not a constraint. Onboarding is under 10 minutes, and the free tier lets you verify match quality before canceling GovWin seats.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for SAM.gov monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapturePilot, on a cost-per-alert basis. GovWin indexes SAM.gov alongside state/local sources and presents analyst-curated views — powerful but slow for a small team that needs to react daily. CapturePilot ingests SAM.gov at 02:00 UTC each day, scores 37K+ opportunities with a proprietary multi-factor engine at 03:00 UTC, and delivers scored email alerts (HOT / WARM / COLD). For a small business optimizing daily action rather than strategic reports, CapturePilot is a better fit.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
