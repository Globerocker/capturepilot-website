import type { Metadata } from "next";
import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GSA Labor Rates FY2026 — 40+ Federal Categories | CapturePilot",
  description:
    "Free PDF: GSA labor rates, SCA wage determinations, and indirect rate benchmarks for 40+ civilian + DoD categories. Set prices agencies will pay — and you can deliver on. Updated FY2026.",
  keywords:
    "gsa labor rates, gsa labor categories, sca wage determination, gsa rates 2026, federal wage determination, federal contractor labor rates, indirect rate guidance, wrap rate, cost realism",
  alternates: {
    canonical:
      "https://www.capturepilot.com/resources/federal-labor-rate-benchmarks-2026",
  },
  openGraph: {
    title: "GSA Labor Rates FY2026 — 40+ Federal Categories",
    description:
      "Free PDF: GSA labor rates, SCA wage determinations, and indirect rate benchmarks for 40+ civilian + DoD categories. Updated FY2026.",
    url: "https://www.capturepilot.com/resources/federal-labor-rate-benchmarks-2026",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    {
      name: "Federal Labor Rate Benchmarks FY2026",
      path: "/resources/federal-labor-rate-benchmarks-2026",
    },
  ]);

  const article = articleJsonLd({
    title:
      "Federal Labor Rate Benchmarks FY2026 — Civilian + DoD (Free PDF)",
    description:
      "GSA labor rates, SCA Wage Determination minimums, and indirect rate benchmarks for 40+ IT and professional services labor categories. Includes escalation guidance, regional adjustments, and cost-realism defense documentation.",
    url: "https://www.capturepilot.com/resources/federal-labor-rate-benchmarks-2026",
    datePublished: "2026-06-09",
    section: "Price-to-Win Toolkit",
    keywords: [
      "gsa labor rates",
      "gsa labor categories",
      "sca wage determination",
      "federal contractor labor rates",
      "indirect rate guidance",
      "wrap rate",
      "cost realism",
      "FAR 52.222-43",
    ],
  });

  const faq = faqJsonLd([
    {
      q: "What are GSA labor rates?",
      a: "GSA labor rates are the hourly and annual rates published through the General Services Administration's CALC tool (calc.gsa.gov) for professional and technical labor categories commonly proposed on federal contracts. They reflect what other contractors have actually invoiced the government for similar work and serve as a benchmark for cost-realism reviews.",
    },
    {
      q: "What is an SCA wage determination?",
      a: "A Service Contract Act (SCA) Wage Determination is a locality-specific document from the Department of Labor that sets minimum hourly wages and fringe benefits for service employees on federal contracts. If your direct labor rate falls below the SCA WD minimum for a covered position, the contract officer will flag it as unrealistically low during cost realism. You can pull the current WD for any county at sam.gov/wage-determinations.",
    },
    {
      q: "What indirect rates should I use for a federal proposal?",
      a: "Typical ranges for IT and professional services firms: fringe 28-38% of direct labor, overhead 15-35% of direct labor plus fringe, G&A 8-18% of total cost input, and profit 8-15% on FFP contracts (6-10% on cost-plus). The key is documentation — every rate needs a cited source (DCAA-reviewed actuals, GSA CALC, payroll records) or the cost-realism evaluator will adjust you upward.",
    },
    {
      q: "How do GSA labor categories work?",
      a: "GSA labor categories are standardized job titles (e.g., Software Developer III, Program Analyst II) used across GSA Schedule contracts and many GWAC vehicles. They map loosely to General Schedule (GS) grades and carry published price ceilings from the GSA CALC tool. Contracting officers use them to compare proposals, so aligning your labor categories and rates to the GSA structure makes your cost volume easier to evaluate favorably.",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      {children}
    </>
  );
}
