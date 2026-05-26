import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Building2, ArrowLeft, ArrowRight, MapPin, Trophy, Award, TrendingUp, Briefcase,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { NAICS_BY_SLUG, type NaicsEntry } from "@/lib/naics-labels";

export const dynamic = "force-dynamic";

interface ContractorSummary {
  slug: string;
  business_name: string;
  state: string | null;
  city: string | null;
  federal_score: number | null;
  total_awarded_amount: number | null;
  top_agency: string | null;
  badges: string[] | null;
  industry: string | null;
}

async function fetchContractors(naicsCode: string): Promise<{ contractors: ContractorSummary[]; meta: { total: number; avg_score: number; total_awarded: number } }> {
  try {
    const res = await fetch(`https://app.capturepilot.com/api/public/contractors?naics=${naicsCode}&limit=200&sort=score`, {
      next: { revalidate: 1200 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return { contractors: [], meta: { total: 0, avg_score: 0, total_awarded: 0 } };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ naics: string }> }): Promise<Metadata> {
  const { naics } = await params;
  const entry: NaicsEntry | undefined = NAICS_BY_SLUG[naics];
  if (!entry) return { title: "Not found | CapturePilot" };
  return {
    title: `Top Federal ${entry.label} Contractors (NAICS ${entry.code}) | CapturePilot`,
    description:
      `Verified US federal contractors in NAICS ${entry.code} ${entry.label}. Public award histories, set-aside certifications, NAICS rankings, and active solicitations.`.slice(0, 160),
    alternates: { canonical: `https://www.capturepilot.com/contractors/in/${entry.slug}` },
    openGraph: {
      title: `Top Federal ${entry.label} Contractors`,
      description: entry.blurb,
      url: `https://www.capturepilot.com/contractors/in/${entry.slug}`,
      type: "website",
    },
  };
}

function fmtMoney(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

const BADGE_META: Record<string, { label: string; tone: string }> = {
  veteran_owned: { label: "Veteran Owned", tone: "bg-blue-50 text-blue-800 border-blue-200" },
  eight_a: { label: "8(a)", tone: "bg-purple-50 text-purple-800 border-purple-200" },
  hubzone: { label: "HUBZone", tone: "bg-amber-50 text-amber-800 border-amber-200" },
  woman_owned: { label: "Woman Owned", tone: "bg-pink-50 text-pink-800 border-pink-200" },
  multi_cert: { label: "Multi-Cert", tone: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  naics_top_3: { label: "Top 3 in NAICS", tone: "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold" },
  naics_top_10: { label: "Top 10 in NAICS", tone: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  state_top_10: { label: "Top 10 in State", tone: "bg-blue-50 text-blue-800 border-blue-200" },
  ten_million_club: { label: "$10M+ Club", tone: "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold" },
  million_dollar_winner: { label: "$1M+ Winner", tone: "bg-emerald-50 text-emerald-800 border-emerald-200" },
};

export default async function NaicsAggregator({ params }: { params: Promise<{ naics: string }> }) {
  const { naics } = await params;
  const entry: NaicsEntry | undefined = NAICS_BY_SLUG[naics];
  if (!entry) notFound();

  const { contractors, meta } = await fetchContractors(entry.code);

  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />

      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-14">
        <Link href="/contractors" className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-900 mb-6">
          <ArrowLeft className="w-3.5 h-3.5" /> All contractors
        </Link>

        <header className="mb-10 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
            NAICS {entry.code}
          </p>
          <h1 className="font-black text-4xl sm:text-5xl text-stone-900 mt-2 leading-tight">
            Top Federal {entry.label} Contractors
          </h1>
          <p className="text-stone-600 mt-4 text-base leading-relaxed">{entry.blurb}</p>
        </header>

        {/* KPI strip */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-stone-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-4 h-4" /> Contractors profiled
            </div>
            <p className="text-3xl font-black text-stone-900 mt-2">{meta.total}</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" /> Average Federal Score
            </div>
            <p className="text-3xl font-black text-stone-900 mt-2">{meta.avg_score} / 100</p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" /> Lifetime federal awards
            </div>
            <p className="text-3xl font-black text-stone-900 mt-2">{fmtMoney(meta.total_awarded)}</p>
          </div>
        </section>

        {/* Contractor leaderboard */}
        {contractors.length === 0 ? (
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 text-center">
            <Briefcase className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-600 text-sm">
              We&rsquo;re still indexing contractors in this NAICS. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {contractors.map((c, idx) => (
              <Link
                key={c.slug}
                href={`/contractors/${c.slug}`}
                className="group block bg-white border border-stone-200 hover:border-emerald-300 hover:shadow-sm rounded-2xl p-5 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-sm font-black text-stone-700">
                    #{idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-black text-stone-900 group-hover:text-emerald-700 transition-colors">
                        {c.business_name}
                      </h3>
                      {c.federal_score !== null && (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded">
                          {c.federal_score}/100
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5 inline-flex items-center gap-1.5 flex-wrap">
                      {c.city && c.state && (
                        <>
                          <MapPin className="w-3 h-3" /> {c.city}, {c.state}
                          <span className="mx-1 text-stone-300">&middot;</span>
                        </>
                      )}
                      {c.top_agency && (
                        <>
                          <Trophy className="w-3 h-3" /> {c.top_agency}
                        </>
                      )}
                    </p>
                    {c.badges && c.badges.length > 0 && (
                      <div className="flex gap-1.5 flex-wrap mt-2">
                        {c.badges.slice(0, 4).map((b) => {
                          const m = BADGE_META[b];
                          if (!m) return null;
                          return (
                            <span key={b} className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${m.tone}`}>
                              {m.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Lifetime</p>
                    <p className="text-xl font-black text-stone-900 mt-0.5">
                      {fmtMoney(Number(c.total_awarded_amount || 0))}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Quick Check CTA */}
        <section className="mt-16 bg-stone-900 text-white rounded-3xl p-8 sm:p-10 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">For NAICS {entry.code} bidders</p>
          <h2 className="font-black text-2xl sm:text-3xl mt-2">See if you can win in {entry.label}.</h2>
          <p className="text-white/70 text-sm mt-3 max-w-xl mx-auto">
            CapturePilot scans 30,000+ live federal solicitations and matches your firm to open opportunities in this NAICS. Free.
          </p>
          <Link
            href="/check"
            className="mt-5 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-5 py-3 rounded-xl transition-colors"
          >
            Run a free Quick Check <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
