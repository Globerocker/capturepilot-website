import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Target, Shield, Award } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { TOP_NAICS, US_STATES, TOP_STATES_FOR_SSG, findNaics, findState } from "@/lib/naics-seed";
import { breadcrumbJsonLd, articleJsonLd, faqJsonLd } from "@/lib/schema";

const APP_URL = "https://app.capturepilot.com";

export function generateStaticParams() {
  // Pre-render top NAICS × top states only. Remaining combinations are generated
  // on-demand at request time (Next.js 16 ISR default).
  const params: { naics: string; state: string }[] = [];
  for (const n of TOP_NAICS) {
    for (const slug of TOP_STATES_FOR_SSG) {
      params.push({ naics: n.slug, state: slug });
    }
  }
  return params;
}

export const dynamicParams = true;
export const revalidate = 86400; // 24h

export async function generateMetadata({
  params,
}: {
  params: Promise<{ naics: string; state: string }>;
}): Promise<Metadata> {
  const { naics: naicsSlug, state: stateSlug } = await params;
  const naics = findNaics(naicsSlug);
  const state = findState(stateSlug);
  if (!naics || !state) return { robots: { index: false, follow: false } };

  const title = `${naics.label} Contracts in ${state.name} (NAICS ${naics.code})`;
  const description = `Federal ${naics.pluralNoun} in ${state.name}. Top buying agencies, set-aside coverage, sole-source rules, and a free 30-second check on your matching contracts.`;
  const url = `https://www.capturepilot.com/contracts/${naics.slug}/${state.slug}`;

  return {
    title,
    description,
    keywords: `${naics.label.toLowerCase()} contracts ${state.name}, federal ${naics.pluralNoun} ${state.name}, ${state.name} government contracts, NAICS ${naics.code} ${state.code}, SAM.gov ${state.name}`,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function NaicsStatePage({
  params,
}: {
  params: Promise<{ naics: string; state: string }>;
}) {
  const { naics: naicsSlug, state: stateSlug } = await params;
  const naics = findNaics(naicsSlug);
  const state = findState(stateSlug);
  if (!naics || !state) notFound();

  const url = `https://www.capturepilot.com/contracts/${naics.slug}/${state.slug}`;

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Federal Contracts by NAICS", path: "/contracts" },
    { name: naics.label, path: `/contracts/${naics.slug}` },
    { name: state.name, path: `/contracts/${naics.slug}/${state.slug}` },
  ]);

  const article = articleJsonLd({
    title: `${naics.label} Federal Contracts in ${state.name}`,
    description: `Federal ${naics.pluralNoun} sourced in ${state.name} under NAICS ${naics.code}.`,
    url,
    datePublished: "2026-04-01",
    section: "Federal Contracts by State",
    keywords: [`${naics.label} ${state.name}`, `NAICS ${naics.code} ${state.code}`, `federal contracts ${state.name}`],
  });

  const faq = faqJsonLd([
    {
      q: `How many ${naics.label.toLowerCase()} contracts are available in ${state.name}?`,
      a: `Counts shift daily as new SAM.gov solicitations post. Federal demand for NAICS ${naics.code} in ${state.name} concentrates around the top buying agencies (${naics.agencies.slice(0, 3).join(", ")}). Use the free Quick Checker to see exactly how many ${naics.pluralNoun} are currently open and matched to your profile in ${state.name}.`,
    },
    {
      q: `Which federal agencies buy ${naics.label.toLowerCase()} in ${state.name}?`,
      a: `Top buyers nationally are ${naics.agencies.join(", ")}, and each maintains a footprint in ${state.name}. Federal procurement is highly distributed — major military installations, VA medical centers, GSA buildings, and DOE labs all source ${naics.pluralNoun} locally. CapturePilot maps every active opportunity to its place-of-performance state so you target the right ones.`,
    },
    {
      q: `Can ${state.name} small businesses qualify for set-aside contracts under NAICS ${naics.code}?`,
      a: `Yes. Set-asides for ${naics.label} commonly include ${naics.setAsides.join(", ")}. Eligibility depends on your SBA size standard for NAICS ${naics.code} and your active certifications (verified through SAM.gov). HUBZone status, in particular, depends on your business address being in a designated HUBZone tract — many areas in ${state.name} qualify.`,
    },
    {
      q: `What's the easiest way to find ${naics.label.toLowerCase()} contracts in ${state.name}?`,
      a: `Searching SAM.gov manually means paginating through hundreds of irrelevant notices. CapturePilot's matching engine filters by NAICS ${naics.code} + ${state.name} place-of-performance + your size and certifications automatically, and scores each opportunity 0-100 by fit. Free check at app.capturepilot.com/check.`,
    },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <SiteNav />
      <main className="pt-16">
        <section className="py-16 md:py-20 px-6 bg-stone-950 text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-3 inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" /> NAICS {naics.code} · {state.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              {naics.label} Contracts in {state.name}
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mb-8">
              Active federal {naics.pluralNoun} with place-of-performance in {state.name}, sourced from top buying agencies including {naics.agencies.slice(0, 3).join(", ")}.
            </p>
            <Link
              href={`${APP_URL}/check?naics=${naics.code}&state=${state.code}`}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105"
            >
              See {state.name} Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="border border-stone-200 rounded-2xl p-6">
              <Award className="w-7 h-7 text-emerald-600 mb-3" />
              <h2 className="text-xl font-black text-stone-900 mb-3">Top Federal Buyers in {state.name}</h2>
              <p className="text-sm text-stone-600 mb-4">Agencies that contract for {naics.label.toLowerCase()} in {state.name}:</p>
              <ul className="space-y-2">
                {naics.agencies.map((a) => (
                  <li key={a} className="text-sm font-bold text-stone-800 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-stone-200 rounded-2xl p-6">
              <Shield className="w-7 h-7 text-purple-600 mb-3" />
              <h2 className="text-xl font-black text-stone-900 mb-3">Set-Asides Available</h2>
              <p className="text-sm text-stone-600 mb-4">Programs that reserve {naics.label.toLowerCase()} contracts for certified small businesses:</p>
              <div className="flex flex-wrap gap-2">
                {naics.setAsides.map((s) => (
                  <span key={s} className="text-xs font-bold bg-purple-50 text-purple-800 border border-purple-200 rounded-full px-3 py-1">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4 text-center">
              Related Searches
            </h2>
            <p className="text-stone-600 mb-8 text-center">Explore other {naics.label} contract destinations or other industries in {state.name}.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href={`/contracts/${naics.slug}`} className="bg-white border border-stone-200 rounded-xl p-4 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">All States</p>
                <p className="font-bold text-stone-900">{naics.label} (NAICS {naics.code})</p>
              </Link>
              {TOP_NAICS.filter((n) => n.slug !== naics.slug).slice(0, 5).map((n) => (
                <Link key={n.slug} href={`/contracts/${n.slug}/${state.slug}`} className="bg-white border border-stone-200 rounded-xl p-4 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                  <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">{state.name}</p>
                  <p className="font-bold text-stone-900">{n.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-emerald-50 border-y border-emerald-200">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
              See Your {state.name} Contracts Matched to You
            </h2>
            <p className="text-stone-600 mb-8">
              Free 30-second check. Enter your website, get your matching {naics.label.toLowerCase()} contracts in {state.name}.
            </p>
            <Link
              href={`${APP_URL}/check?naics=${naics.code}&state=${state.code}`}
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
