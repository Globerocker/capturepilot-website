import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2, MapPin, Award,
  CheckCircle2, ExternalLink, ArrowLeft, ArrowRight, Briefcase, Globe, Sparkles, Trophy,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const dynamic = "force-dynamic";

interface ContractorProfile {
  slug: string;
  business_name: string;
  primary_naics: string | null;
  state: string | null;
  city: string | null;
  cage_code: string | null;
  sam_registered: boolean | null;
  sba_certifications: string[] | null;
  total_awarded_amount: number | null;
  total_awards_count: number | null;
  top_agency: string | null;
  top_agency_amount: number | null;
  awards_by_year: Array<{ year: number; value: number; count: number }> | null;
  top_naics_codes: string[] | null;
  ai_summary: string | null;
  company_website: string | null;
  company_linkedin: string | null;
  company_size_est: string | null;
  industry: string | null;
  founded_year: number | null;
  federal_score: number | null;
  score_breakdown: { awards?: number; certs?: number; diversification?: number; recency?: number; profile?: number } | null;
  badges: string[] | null;
  naics_rank: number | null;
  state_rank: number | null;
  naics_total: number | null;
  state_total: number | null;
  published_at: string | null;
}

async function fetchContractor(slug: string): Promise<ContractorProfile | null> {
  try {
    const res = await fetch(`https://app.capturepilot.com/api/public/contractor/${encodeURIComponent(slug)}`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const data = await res.json() as { contractor?: ContractorProfile };
    return data.contractor || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = await fetchContractor(slug);
  if (!c) return { title: "Contractor not found | CapturePilot" };

  const naics = c.primary_naics ? `NAICS ${c.primary_naics}` : "federal contractor";
  const state = c.state ? ` in ${c.state}` : "";
  return {
    title: `${c.business_name} — Federal Contractor Profile | CapturePilot`,
    description:
      `${c.business_name} is a verified ${naics}${state} on SAM.gov with ` +
      `${c.total_awards_count || 0} federal awards. ` +
      `${(c.sba_certifications || []).slice(0, 3).join(", ")}`.slice(0, 160),
    alternates: { canonical: `https://www.capturepilot.com/contractors/${slug}` },
    openGraph: {
      title: `${c.business_name} — Federal Contractor Profile`,
      description: `Verified federal contractor. ${c.total_awards_count || 0} awards · ${c.top_agency || ""}.`,
      url: `https://www.capturepilot.com/contractors/${slug}`,
      type: "profile",
    },
  };
}

function fmtMoney(n: number | null): string {
  if (!n) return "$0";
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

const BADGE_META: Record<string, { label: string; tone: string }> = {
  veteran_owned: { label: "Veteran Owned", tone: "bg-blue-50 text-blue-800 border-blue-200" },
  eight_a: { label: "8(a)", tone: "bg-purple-50 text-purple-800 border-purple-200" },
  hubzone: { label: "HUBZone", tone: "bg-amber-50 text-amber-800 border-amber-200" },
  woman_owned: { label: "Woman Owned", tone: "bg-pink-50 text-pink-800 border-pink-200" },
  multi_cert: { label: "Multi-Cert Stack", tone: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  ten_million_club: { label: "$10M+ Club", tone: "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold" },
  million_dollar_winner: { label: "$1M+ Winner", tone: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  active_bidder: { label: "Active Bidder", tone: "bg-stone-50 text-stone-700 border-stone-200" },
  federal_score_a: { label: "A-Grade", tone: "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold" },
  federal_score_b: { label: "B-Grade", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

export default async function ContractorDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = await fetchContractor(slug);
  if (!c) notFound();

  const totalAwards = Number(c.total_awarded_amount || 0);

  // JSON-LD structured data for rich snippets in Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: c.business_name,
    description: c.ai_summary || `Federal contractor in ${c.industry || c.primary_naics || "government services"}.`,
    url: c.company_website || `https://www.capturepilot.com/contractors/${c.slug}`,
    sameAs: [c.company_linkedin].filter(Boolean),
    address: c.city && c.state ? { "@type": "PostalAddress", addressLocality: c.city, addressRegion: c.state, addressCountry: "US" } : undefined,
    foundingDate: c.founded_year ? String(c.founded_year) : undefined,
    numberOfEmployees: c.company_size_est ? { "@type": "QuantitativeValue", value: c.company_size_est } : undefined,
    knowsAbout: c.top_naics_codes || [],
  };

  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-14">
        <Link href="/contractors" className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> All contractors
        </Link>

        {/* Header card */}
        <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-8 h-8" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <h1 className="font-black text-3xl sm:text-4xl text-stone-900 leading-tight">
                  {c.business_name}
                </h1>
                {c.sam_registered && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 rounded px-2 py-0.5 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> SAM verified
                  </span>
                )}
              </div>

              <p className="text-stone-500 mt-2 text-sm inline-flex items-center gap-2 flex-wrap">
                {c.city && c.state && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {c.city}, {c.state}
                  </span>
                )}
                {c.primary_naics && (
                  <>
                    <span className="text-stone-300">&middot;</span>
                    <span>NAICS {c.primary_naics}</span>
                  </>
                )}
                {c.industry && (
                  <>
                    <span className="text-stone-300">&middot;</span>
                    <span>{c.industry}</span>
                  </>
                )}
                {c.founded_year && (
                  <>
                    <span className="text-stone-300">&middot;</span>
                    <span>Founded {c.founded_year}</span>
                  </>
                )}
              </p>

              {/* Badges */}
              {c.badges && c.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.badges.map((b) => {
                    const meta = BADGE_META[b];
                    if (!meta) return null;
                    return (
                      <span key={b} className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${meta.tone}`}>
                        {meta.label}
                      </span>
                    );
                  })}
                </div>
              )}

              {/* Rank pills — only if computed */}
              {(c.naics_rank || c.state_rank) && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {c.naics_rank && c.primary_naics && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-xs">
                      <p className="text-emerald-700 font-bold inline-flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5" /> Rank #{c.naics_rank}{" "}
                        {c.naics_total ? `of ${c.naics_total.toLocaleString()}` : ""} in NAICS {c.primary_naics}
                      </p>
                    </div>
                  )}
                  {c.state_rank && c.state && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 text-xs">
                      <p className="text-blue-700 font-bold inline-flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5" /> Rank #{c.state_rank}{" "}
                        {c.state_total ? `of ${c.state_total.toLocaleString()}` : ""} in {c.state}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Score donut */}
            {c.federal_score !== null && (
              <div className="flex-shrink-0 text-center">
                <div className="w-24 h-24 rounded-2xl bg-emerald-500 text-white flex flex-col items-center justify-center">
                  <span className="text-3xl font-black">{c.federal_score}</span>
                  <span className="text-[9px] uppercase tracking-widest font-bold">/ 100</span>
                </div>
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-2">
                  Federal Score
                </p>
              </div>
            )}
          </div>
        </section>

        {/* AI summary */}
        {c.ai_summary && (
          <section className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 mb-6">
            <div className="flex items-baseline gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">About this contractor</h2>
            </div>
            <p className="text-stone-700 text-base leading-relaxed whitespace-pre-line">{c.ai_summary}</p>
          </section>
        )}

        {/* Awards + Certifications grid */}
        <section className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white border border-stone-200 rounded-3xl p-6">
            <h2 className="font-bold text-stone-900 inline-flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-emerald-600" /> Award history
            </h2>
            <div className="space-y-3">
              <div className="flex items-baseline justify-between border-b border-stone-100 pb-2">
                <span className="text-sm text-stone-500">Lifetime awarded</span>
                <span className="font-black text-stone-900 text-xl">{fmtMoney(totalAwards)}</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-stone-100 pb-2">
                <span className="text-sm text-stone-500">Total contracts</span>
                <span className="font-bold text-stone-900">{c.total_awards_count?.toLocaleString() || "—"}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-stone-500">Top agency</span>
                <span className="font-bold text-stone-900 text-right text-sm">{c.top_agency || "—"}</span>
              </div>
              {c.top_agency_amount && c.top_agency && (
                <div className="text-xs text-stone-400 text-right">
                  {fmtMoney(c.top_agency_amount)} from this agency
                </div>
              )}
            </div>

            {/* Year bars (simple inline visualization) */}
            {c.awards_by_year && c.awards_by_year.length > 0 && (
              <div className="mt-5 pt-5 border-t border-stone-100">
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-3">Awards by year</p>
                <div className="space-y-1.5">
                  {c.awards_by_year.map((y) => {
                    const max = Math.max(...c.awards_by_year!.map((a) => a.value));
                    const pct = max > 0 ? (y.value / max) * 100 : 0;
                    return (
                      <div key={y.year} className="flex items-center gap-3 text-xs">
                        <span className="w-12 text-stone-500 tabular-nums">{y.year}</span>
                        <div className="flex-1 bg-stone-100 rounded-full h-2 overflow-hidden">
                          <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="w-16 text-right font-bold text-stone-700 tabular-nums">{fmtMoney(y.value)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-6">
            <h2 className="font-bold text-stone-900 inline-flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Certifications &amp; data
            </h2>
            <div className="space-y-2">
              {c.cage_code && (
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-stone-500">CAGE code</span>
                  <span className="font-mono text-stone-900">{c.cage_code}</span>
                </div>
              )}
              {c.sam_registered !== null && (
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-stone-500">SAM.gov</span>
                  <span className={c.sam_registered ? "text-emerald-700 font-bold" : "text-stone-500"}>
                    {c.sam_registered ? "Active" : "Not registered"}
                  </span>
                </div>
              )}
              {c.company_size_est && (
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-stone-500">Employees (est.)</span>
                  <span className="font-bold text-stone-900">{c.company_size_est}</span>
                </div>
              )}
              {c.industry && (
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-stone-500">Industry</span>
                  <span className="font-bold text-stone-900">{c.industry}</span>
                </div>
              )}
            </div>

            {c.sba_certifications && c.sba_certifications.length > 0 && (
              <div className="mt-5 pt-5 border-t border-stone-100">
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-3">SBA certifications</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.sba_certifications.map((cert) => (
                    <span key={cert} className="text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-1 rounded">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            {(c.company_website || c.company_linkedin) && (
              <div className="mt-5 pt-5 border-t border-stone-100 space-y-2">
                {c.company_website && (
                  <a
                    href={c.company_website}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-xs text-emerald-700 hover:underline inline-flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5" /> Company website <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {c.company_linkedin && (
                  <a
                    href={c.company_linkedin}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-xs text-emerald-700 hover:underline inline-flex items-center gap-1.5"
                  >
                    <Globe className="w-3.5 h-3.5" /> LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Top NAICS */}
        {c.top_naics_codes && c.top_naics_codes.length > 0 && (
          <section className="bg-white border border-stone-200 rounded-3xl p-6 mb-6">
            <h2 className="font-bold text-stone-900 inline-flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-emerald-600" /> Top NAICS codes
            </h2>
            <div className="flex flex-wrap gap-2">
              {c.top_naics_codes.map((n) => (
                <Link
                  key={n}
                  href={`/contractors?naics=${n}`}
                  className="text-xs font-bold text-stone-700 bg-stone-100 hover:bg-emerald-100 hover:text-emerald-800 px-3 py-1.5 rounded-lg border border-stone-200 transition-colors"
                >
                  {n}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTAs */}
        <section className="grid sm:grid-cols-2 gap-4 mt-10">
          <Link
            href="/check"
            className="block bg-stone-900 text-white rounded-2xl p-6 hover:bg-stone-800 transition-colors group"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">Subcontracting</p>
            <h3 className="font-black text-xl mt-1">Team with {c.business_name}</h3>
            <p className="text-white/70 text-sm mt-2">
              Find which active solicitations {c.business_name} is positioned to win. Pitch yourself as their sub.
            </p>
            <p className="text-emerald-400 font-bold text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Run a free Quick Check <ArrowRight className="w-4 h-4" />
            </p>
          </Link>

          <Link
            href="/check"
            className="block bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-800 text-white rounded-2xl p-6 hover:opacity-95 transition-opacity group"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Are you {c.business_name}?</p>
            <h3 className="font-black text-xl mt-1">Claim this profile</h3>
            <p className="text-white/80 text-sm mt-2">
              Add your team, capture pipeline, and active solicitations. Free for verified contractors.
            </p>
            <p className="font-bold text-sm mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Claim now <ArrowRight className="w-4 h-4" />
            </p>
          </Link>
        </section>

        <p className="text-xs text-stone-400 mt-10 text-center">
          Profile published {c.published_at ? new Date(c.published_at).toLocaleDateString() : "today"}.
          Data sourced from SAM.gov, USAspending, and Apollo. Refreshed nightly.
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
