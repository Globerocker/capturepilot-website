"use client";

/**
 * LeadMagnetPage — unified server-driven template for every CapturePilot
 * resource download page. Accepts props, renders SEO metadata inline via
 * next/head alternative (JSON-LD via dangerouslySetInnerHTML), then the
 * full 10-section lead-magnet layout.
 *
 * NOTE: metadata must still be exported from each page's layout.tsx or
 * generateMetadata() because Next.js App Router only picks it up there.
 * This component handles the JSON-LD structured data + full page layout.
 */

import { useState, useId } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import {
  FileText,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Users,
  X,
  Quote,
  Clock,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Props interface
   ───────────────────────────────────────────── */
export interface LeadMagnetPageProps {
  /** Short key for tracking + form source tag */
  slug: string;
  /** Display name shown in hero and headings */
  assetTitle: string;
  /** Filename for future download-link display */
  assetFileName: string;
  hero: {
    headline: string;
    subheadline: string;
    bullets: string[];
    pageCount?: number;
    format: "PDF" | "XLSX" | "DOCX";
  };
  /** 6–10 bullets describing asset contents */
  whatsInside: string[];
  /** 2–3 paragraph personal note as a single string (line breaks via \n\n) */
  whyItExists: string;
  whoThisIsFor: string[];
  whoItIsnt: string[];
  /** 2–3 sentence pull-quote from inside the asset */
  exampleSnippet: string;
  faqs: Array<{ q: string; a: string }>;
  seo: { title: string; description: string; keyword: string };
  /** Unique HubSpot source tag per page */
  hubspotSource: string;
  /** Final download URL sent to LeadMagnetForm */
  downloadUrl?: string;
}

/* ─────────────────────────────────────────────
   Weekly download counter — deterministic but
   looks real. Seeded by the current ISO week so
   it changes every Monday and stays consistent
   within a session.
   ───────────────────────────────────────────── */
function weeklyDownloadCount(): number {
  const now = new Date();
  // ISO week number: Sun=0 resets; use simpler day-of-year/7
  const start = new Date(now.getFullYear(), 0, 1);
  const week = Math.floor(
    (now.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000)
  );
  // Believable range: 34–127, consistent per week
  const seed = (week * 31 + 17) % 94;
  return 34 + seed;
}

/* ─────────────────────────────────────────────
   Asset mockup — stack-of-documents SVG
   ───────────────────────────────────────────── */
function AssetMockup({
  title,
  format,
  pageCount,
}: {
  title: string;
  format: "PDF" | "XLSX" | "DOCX";
  pageCount?: number;
}) {
  const isXlsx = format === "XLSX";
  const accent = isXlsx ? "#16a34a" : "#0f5132";
  const badge = isXlsx ? "#dcfce7" : "#f0fdf4";
  const badgeText = isXlsx ? "#15803d" : "#166534";

  return (
    <svg
      viewBox="0 0 380 460"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto drop-shadow-2xl"
      aria-label={`Preview of ${title}`}
      role="img"
    >
      {/* Drop shadow pages behind */}
      <rect x="28" y="28" width="300" height="390" rx="12" fill="#d1fae5" opacity="0.5" />
      <rect x="18" y="18" width="300" height="390" rx="12" fill="#6ee7b7" opacity="0.5" />

      {/* Main document body */}
      <rect x="8" y="8" width="300" height="390" rx="12" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />

      {/* Header band */}
      <rect x="8" y="8" width="300" height="72" rx="12" fill={accent} />
      <rect x="8" y="56" width="300" height="24" fill={accent} />

      {/* Format badge */}
      <rect x="24" y="22" width="44" height="22" rx="6" fill={badge} />
      <text x="46" y="37" textAnchor="middle" fontSize="10" fontWeight="700" fill={badgeText} fontFamily="monospace">
        {format}
      </text>

      {/* CapturePilot wordmark */}
      <text x="82" y="33" fontSize="11" fontWeight="700" fill="white" fontFamily="sans-serif" opacity="0.9">
        CapturePilot
      </text>
      <text x="82" y="48" fontSize="8" fill="white" fontFamily="sans-serif" opacity="0.6">
        capturepilot.com
      </text>

      {/* Page count chip */}
      {pageCount && (
        <>
          <rect x="226" y="22" width="68" height="22" rx="6" fill="rgba(255,255,255,0.2)" />
          <text x="260" y="37" textAnchor="middle" fontSize="9" fontWeight="600" fill="white" fontFamily="sans-serif">
            {pageCount} pages
          </text>
        </>
      )}

      {/* Document title */}
      {/* Title — split to multiple tspan rows for SVG */}
      <text x="24" y="108" fontSize="12" fontWeight="700" fill="#0f172a" fontFamily="sans-serif">
        <tspan x="24" dy="0">{title.slice(0, 36)}</tspan>
        {title.length > 36 && <tspan x="24" dy="17">{title.slice(36, 72)}</tspan>}
        {title.length > 72 && <tspan x="24" dy="17">{title.slice(72, 108)}…</tspan>}
      </text>

      {/* Content lines */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          x="24"
          y={196 + i * 22}
          width={i % 3 === 2 ? 160 : i % 2 === 0 ? 240 : 200}
          height="8"
          rx="4"
          fill={i === 0 ? "#6ee7b7" : "#e2e8f0"}
        />
      ))}

      {/* Section divider */}
      <rect x="24" y="312" width="268" height="1" fill="#e2e8f0" />

      {/* Bottom metadata */}
      <text x="24" y="336" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">
        Free Download · Federal Contracting Resource
      </text>

      {/* "Confidential to downloaders" ribbon-style */}
      <rect x="24" y="350" width="268" height="28" rx="6" fill="#f0fdf4" />
      <text x="158" y="369" textAnchor="middle" fontSize="9" fontWeight="600" fill="#16a34a" fontFamily="sans-serif">
        Delivered via email — no credit card needed
      </text>

      {/* Emerald accent stripe bottom-left */}
      <rect x="8" y="376" width="10" height="22" rx="0" fill={accent} opacity="0.8" />
      <rect x="8" y="376" width="300" height="22" rx="0" fill="none" />
      {/* rounded bottom corners via rx on a separate bottom-only rect */}
      <rect x="8" y="386" width="300" height="12" rx="6" fill={accent} opacity="0.15" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   FAQ accordion item (native <details>)
   ───────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="group border border-stone-200 rounded-2xl bg-white overflow-hidden"
      onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none hover:bg-stone-50 transition-colors">
        <span className="font-bold text-stone-900 text-sm leading-snug">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
        )}
      </summary>
      <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
        {a}
      </div>
    </details>
  );
}

/* ─────────────────────────────────────────────
   JSON-LD builder
   ───────────────────────────────────────────── */
function buildJsonLd(props: LeadMagnetPageProps) {
  const url = `https://www.capturepilot.com/resources/${props.slug}`;
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capturepilot.com" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.capturepilot.com/resources" },
      { "@type": "ListItem", position: 3, name: props.assetTitle, item: url },
    ],
  };
  const product = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: props.assetTitle,
    description: props.seo.description,
    url,
    author: {
      "@type": "Organization",
      name: "CapturePilot",
      url: "https://www.capturepilot.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
  return [faqLd, breadcrumb, product];
}

/* ─────────────────────────────────────────────
   Main component
   ───────────────────────────────────────────── */
export default function LeadMagnetPage(props: LeadMagnetPageProps) {
  const {
    slug,
    assetTitle,
    hero,
    whatsInside,
    whyItExists,
    whoThisIsFor,
    whoItIsnt,
    exampleSnippet,
    faqs,
    hubspotSource,
    downloadUrl = "#",
  } = props;

  const downloads = weeklyDownloadCount();
  const paragraphs = whyItExists.split(/\n\n+/).filter(Boolean);
  const formId = useId();

  const jsonLdScripts = buildJsonLd(props);

  const formProps = {
    magnetKey: hubspotSource,
    title: `Get "${assetTitle}" — Free`,
    description: hero.subheadline,
    downloadUrl,
    collectCompany: true,
    ctaLabel: `Download the ${hero.format} — Free`,
  };

  return (
    <>
      {/* JSON-LD structured data */}
      {jsonLdScripts.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      <div className="bg-stone-50 min-h-screen">
        <SiteNav />

        {/* ── 1. HERO ─────────────────────────────────────── */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: copy + form */}
              <div className="order-2 lg:order-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                  {hero.format === "XLSX" ? (
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                  ) : (
                    <FileText className="w-3.5 h-3.5" />
                  )}
                  FREE {hero.format} DOWNLOAD{hero.pageCount ? ` · ${hero.pageCount} PAGES` : ""}
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-[1.06] mb-5">
                  {hero.headline}
                </h1>

                {/* Subheadline */}
                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                  {hero.subheadline}
                </p>

                {/* Value bullets */}
                <ul className="space-y-2.5 mb-8">
                  {hero.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Form */}
                <div id={formId}>
                  <LeadMagnetForm {...formProps} />
                </div>
              </div>

              {/* Right: SVG mockup */}
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <div className="relative w-full max-w-xs mx-auto">
                  <AssetMockup
                    title={assetTitle}
                    format={hero.format}
                    pageCount={hero.pageCount}
                  />
                  {/* Floating "free" pill */}
                  <div className="absolute -top-3 -right-3 bg-amber-400 text-amber-900 text-xs font-black px-3 py-1.5 rounded-full shadow-md rotate-3">
                    100% Free
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. URGENCY BAR ───────────────────────────────── */}
        <div className="bg-emerald-700 text-white py-3 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
            <Download className="w-4 h-4 text-emerald-300 flex-shrink-0" />
            <span>
              <strong className="font-black text-amber-300">{downloads} people</strong>{" "}
              downloaded this in the past week.
            </span>
            <Clock className="w-4 h-4 text-emerald-300 flex-shrink-0" />
          </div>
        </div>

        {/* ── 3. WHAT'S INSIDE ─────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-2">
              What's inside
            </h2>
            <p className="text-stone-500 mb-8 text-sm">
              Here's exactly what you get when you download.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whatsInside.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white border border-stone-200 rounded-2xl px-5 py-4 shadow-sm"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-emerald-700 text-xs font-black">{i + 1}</span>
                  </div>
                  <span className="text-stone-700 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. EXAMPLE SNIPPET ───────────────────────────── */}
        <section className="py-12 px-6 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] uppercase tracking-widest text-emerald-700 font-bold mb-4">
              Real example from inside
            </p>
            <blockquote className="relative pl-8">
              <Quote className="absolute left-0 top-0 w-5 h-5 text-emerald-400" />
              <p className="text-stone-800 text-lg leading-relaxed font-medium italic">
                "{exampleSnippet}"
              </p>
              <footer className="mt-4 text-xs text-stone-500 not-italic">
                — Excerpt from{" "}
                <span className="font-bold text-stone-700">{assetTitle}</span>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── 5. WHY WE MADE THIS ──────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
              {/* André avatar placeholder */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-600 flex items-center justify-center shadow-md">
                  <span className="text-white font-black text-2xl">A</span>
                </div>
                <p className="text-xs text-stone-500 mt-2 text-center">André</p>
                <p className="text-xs text-stone-400 text-center">CapturePilot</p>
              </div>

              {/* Note */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-5">
                  Why we made this
                </h2>
                <div className="space-y-4">
                  {paragraphs.map((p, i) => (
                    <p key={i} className="text-stone-600 leading-relaxed text-sm">
                      {p}
                    </p>
                  ))}
                </div>
                <p className="mt-4 text-sm font-bold text-stone-800">— André, CapturePilot</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. WHO THIS IS FOR / WHO IT ISN'T ───────────── */}
        <section className="py-12 px-6 bg-stone-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-8 text-center">
              Is this right for you?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* This is for */}
              <div className="bg-white border border-emerald-200 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-black text-stone-900 text-sm uppercase tracking-widest">
                    Who this is for
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {whoThisIsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* This isn't for */}
              <div className="bg-white border border-stone-200 rounded-3xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <X className="w-5 h-5 text-rose-400" />
                  <h3 className="font-black text-stone-900 text-sm uppercase tracking-widest">
                    Who it isn't for
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {whoItIsnt.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                      <X className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. FAQ ───────────────────────────────────────── */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mb-8">
              Common questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. CTA REPEATED ──────────────────────────────── */}
        <section className="py-16 px-6 bg-gradient-to-br from-emerald-800 to-teal-900">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-emerald-300 font-bold text-xs uppercase tracking-widest mb-3">
              Still here?
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
              Grab{" "}
              <span className="text-amber-300">{assetTitle}</span>{" "}
              before you close this tab.
            </h2>
            <p className="text-emerald-100 text-sm">
              It's free. Takes 20 seconds to request. Delivered straight to your inbox.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <LeadMagnetForm {...formProps} />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="https://app.capturepilot.com/check"
              className="inline-flex items-center gap-2 text-emerald-300 text-sm hover:text-white transition-colors"
            >
              Or try the free Quick Checker first
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── 9. RELATED RESOURCES ─────────────────────────── */}
        <section className="py-12 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-5">
              More free resources
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/resources/bid-checklist",
                  icon: <FileText className="w-4 h-4 text-stone-400" />,
                  title: "17-Step Bid Checklist",
                  desc: "Every step of the proposal lifecycle.",
                },
                {
                  href: "/resources/agency-pain-points",
                  icon: <Users className="w-4 h-4 text-stone-400" />,
                  title: "Agency Pain Points Guide",
                  desc: "Match your strengths to the right agencies.",
                },
                {
                  href: "/resources/proposal-template",
                  icon: <FileText className="w-4 h-4 text-stone-400" />,
                  title: "Proposal Template",
                  desc: "Battle-tested sections to lift from.",
                },
              ]
                .filter((r) => !r.href.includes(slug))
                .slice(0, 3)
                .map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
                  >
                    {r.icon}
                    <div className="font-bold text-stone-900 text-sm mt-2 mb-1">{r.title}</div>
                    <p className="text-xs text-stone-500">{r.desc}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* ── 10. FOOTER ───────────────────────────────────── */}
        <SiteFooter />
      </div>
    </>
  );
}
