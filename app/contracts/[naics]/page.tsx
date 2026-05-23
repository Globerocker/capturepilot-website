import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Award, Building2, Shield, Target } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { TOP_NAICS, US_STATES, findNaics } from "@/lib/naics-seed";
import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/schema";

const APP_URL = "https://app.capturepilot.com";

export function generateStaticParams() {
  return TOP_NAICS.map((n) => ({ naics: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ naics: string }>;
}): Promise<Metadata> {
  const { naics: slug } = await params;
  const naics = findNaics(slug);
  if (!naics) return { robots: { index: false, follow: false } };

  const title = `${naics.label} Federal Contracts (NAICS ${naics.code})`;
  const description = `Find active federal ${naics.pluralNoun} matched to NAICS ${naics.code}. Top agencies, set-aside eligibility, sole-source thresholds, and live opportunities — free check in 30 seconds.`;
  const url = `https://www.capturepilot.com/contracts/${naics.slug}`;

  return {
    title,
    description,
    keywords: `${naics.label.toLowerCase()} government contracts, NAICS ${naics.code}, federal ${naics.pluralNoun}, ${naics.label} federal opportunities, SAM.gov ${naics.code}`,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function NaicsPage({
  params,
}: {
  params: Promise<{ naics: string }>;
}) {
  const { naics: slug } = await params;
  const naics = findNaics(slug);
  if (!naics) notFound();

  const url = `https://www.capturepilot.com/contracts/${naics.slug}`;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Federal Contracts by NAICS", path: "/contracts" },
    { name: naics.label, path: `/contracts/${naics.slug}` },
  ]);

  const article = articleJsonLd({
    title: `${naics.label} Federal Contracts (NAICS ${naics.code})`,
    description: `Where ${naics.pluralNoun} are bought across the federal government, by agency and set-aside.`,
    url,
    datePublished: "2026-04-01",
    section: "Federal Contracts by Industry",
    keywords: [naics.label.toLowerCase(), `NAICS ${naics.code}`, `federal ${naics.pluralNoun}`],
  });

  const faq = faqJsonLd([
    {
      q: `What federal agencies buy ${naics.label.toLowerCase()} under NAICS ${naics.code}?`,
      a: `The biggest buyers are ${naics.agencies.slice(0, 4).join(", ")}. Each agency has different procurement vehicles — GSA Schedules, MAS contracts, IDIQs, BPAs — but all of them post NAICS ${naics.code} opportunities to SAM.gov. Use the free Quick Checker to see live contracts matched to your business in this NAICS code.`,
    },
    {
      q: `What set-aside programs apply to NAICS ${naics.code}?`,
      a: `${naics.label} contracts are routinely set aside for ${naics.setAsides.join(", ")} firms. Set-aside designation depends on the specific solicitation and your SBA size standard for this NAICS. SDVOSB and 8(a) firms can also receive sole-source awards up to $4.5M.`,
    },
    {
      q: `What is the SBA size standard for NAICS ${naics.code}?`,
      a: `Size standards are set by the SBA per NAICS code, expressed either as an average annual receipts threshold (for service industries) or an employee count (for manufacturing). For NAICS ${naics.code}, check the current SBA size standards table at sba.gov for the exact threshold — it gets revised periodically. CapturePilot's Quick Checker confirms your size standard automatically based on your SAM.gov registration.`,
    },
    {
      q: `How many active federal ${naics.pluralNoun} are there right now?`,
      a: `CapturePilot tracks 40,000+ active federal opportunities across all NAICS codes, refreshed daily from SAM.gov. The count for NAICS ${naics.code} shifts every day as new solicitations post and old ones close. Run the free check to see the exact current count matched to your business profile.`,
    },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 md:py-20 px-6 bg-stone-950 text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-3">
              NAICS {naics.code} · Federal Contracts by Industry
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              {naics.label} Federal Contracts
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mb-8">
              {naics.description} Below: top buying agencies, set-aside coverage, sole-source thresholds, and a free live-opportunity check.
            </p>
            <Link
              href={`${APP_URL}/check?naics=${naics.code}`}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105"
            >
              See Live {naics.label} Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Top agencies */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
              Top Federal Buyers of NAICS {naics.code}
            </h2>
            <p className="text-stone-600 mb-8">These agencies post the most {naics.label.toLowerCase()} opportunities per year.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {naics.agencies.map((a) => (
                <div key={a} className="bg-stone-50 border border-stone-200 rounded-xl p-5 flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Building2 className="w-4 h-4 text-stone-700" />
                  </div>
                  <span className="font-bold text-stone-900 text-sm">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Set-asides */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
              Set-Aside Programs for {naics.label}
            </h2>
            <p className="text-stone-600 mb-8">{naics.label} contracts are routinely reserved for these certified small-business categories.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {naics.setAsides.map((s) => (
                <div key={s} className="bg-white border border-stone-200 rounded-xl p-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="font-bold text-stone-900 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* State breakdown links */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
              {naics.label} Contracts by State
            </h2>
            <p className="text-stone-600 mb-8">Drill into state-level federal opportunities matched to NAICS {naics.code}.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {US_STATES.map((s) => (
                <Link
                  key={s.code}
                  href={`/contracts/${naics.slug}/${s.slug}`}
                  className="text-sm py-2 px-3 rounded-lg border border-stone-200 hover:border-emerald-400 hover:bg-emerald-50 text-stone-700 hover:text-emerald-700 transition-colors text-center"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-emerald-50 border-y border-emerald-200">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
              See Your Matching {naics.label} Contracts
            </h2>
            <p className="text-stone-600 mb-8">
              Enter your website. Get your NAICS codes confirmed, SAM.gov status, set-aside eligibility, and live contracts in NAICS {naics.code} — free, 30 seconds.
            </p>
            <Link
              href={`${APP_URL}/check?naics=${naics.code}`}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105"
            >
              Run Free Check <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
