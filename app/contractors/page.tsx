import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Award, TrendingUp, Briefcase, ArrowRight, MapPin, Trophy } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const dynamic = "force-dynamic"; // public landing pages refresh daily via cron — no point caching forever

export const metadata: Metadata = {
  title: "Federal Contractor Directory — Verified Bidders, Award Histories, Set-Asides | CapturePilot",
  description:
    "Browse verified US federal contractors with public award histories, set-aside certifications, and NAICS rankings. Find primes for teaming, subcontracting opportunities for smaller firms, and contracting partners for your next bid.",
  alternates: { canonical: "https://www.capturepilot.com/contractors" },
};

type ContractorSummary = {
  slug: string;
  business_name: string;
  primary_naics: string | null;
  state: string | null;
  city: string | null;
  federal_score: number | null;
  total_awarded_amount: number | null;
  top_agency: string | null;
  badges: string[] | null;
  industry: string | null;
};

type ApiResponse = {
  contractors: ContractorSummary[];
  meta: { total: number; avg_score: number; total_awarded: number };
};

async function fetchContractors(): Promise<ApiResponse> {
  try {
    const res = await fetch("https://app.capturepilot.com/api/public/contractors?limit=60", {
      next: { revalidate: 600 }, // 10-min cache — pages drip daily, no need for live
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json() as ApiResponse;
  } catch {
    return { contractors: [], meta: { total: 0, avg_score: 0, total_awarded: 0 } };
  }
}

function fmtMoney(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
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
  ten_million_club: { label: "$10M+ Club", tone: "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold" },
  million_dollar_winner: { label: "$1M+ Winner", tone: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  active_bidder: { label: "Active Bidder", tone: "bg-stone-50 text-stone-700 border-stone-200" },
  federal_score_a: { label: "A-Grade", tone: "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold" },
  federal_score_b: { label: "B-Grade", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

export default async function ContractorsHub() {
  const { contractors, meta } = await fetchContractors();

  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />

      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
            Federal Contractor Directory
          </p>
          <h1 className="font-black text-4xl sm:text-5xl text-stone-900 mt-2 leading-tight">
            Verified US federal contractors,
            <br />
            ranked by award history.
          </h1>
          <p className="text-stone-600 mt-5 text-lg leading-relaxed">
            Browse companies with public federal contract wins, set-aside certifications, and NAICS-by-NAICS
            performance benchmarks. Find <strong>primes</strong> for teaming partnerships,{" "}
            <strong>subcontracting opportunities</strong> if you&rsquo;re a smaller firm, and the data you need
            to position your next bid.
          </p>
        </header>

        {/* KPIs */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-4 h-4" /> Contractors profiled
            </div>
            <p className="text-3xl font-black text-stone-900 mt-2">{meta.total.toLocaleString()}</p>
            <p className="text-xs text-stone-500 mt-1">
              Growing daily &mdash; new profiles published every morning.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" /> Average federal score
            </div>
            <p className="text-3xl font-black text-stone-900 mt-2">{meta.avg_score} / 100</p>
            <p className="text-xs text-stone-500 mt-1">
              Composite of awards, certifications, diversification &amp; recency.
            </p>
          </div>
          <div className="bg-white border border-stone-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" /> Total federal awards
            </div>
            <p className="text-3xl font-black text-stone-900 mt-2">{fmtMoney(meta.total_awarded)}</p>
            <p className="text-xs text-stone-500 mt-1">
              Combined lifetime federal contract value across profiled firms.
            </p>
          </div>
        </section>

        {/* Subcontracting strip — why this directory matters for smaller firms */}
        <section className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 mb-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-full bg-gradient-to-l from-emerald-500/10 to-transparent" />
          <div className="relative grid sm:grid-cols-3 gap-6 items-center">
            <div className="sm:col-span-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                For smaller contractors
              </p>
              <h2 className="font-black text-2xl sm:text-3xl mt-2 leading-tight">
                Don&rsquo;t bid against these primes &mdash; <span className="text-emerald-400">team with them</span>.
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
                Every contractor listed here is a potential teaming partner or prime that needs subcontractors.
                Smaller firms with niche capabilities win more federal work as <strong>second-tier subs</strong> to
                established primes than as solo bidders. Pick a contractor whose NAICS &amp; agencies match your
                capabilities &mdash; their SBLO (Small Business Liaison Officer) is your warm intro into agencies
                you couldn&rsquo;t reach cold.
              </p>
            </div>
            <Link
              href="/check"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-5 py-3 rounded-xl transition-colors"
            >
              Run a free Quick Check <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Category teaser — top 4 NAICS aggregators (links inactive in pilot, will route post-scale) */}
        <section className="mb-14">
          <h2 className="font-black text-2xl text-stone-900 mb-2">Browse by industry</h2>
          <p className="text-stone-500 text-sm mb-5">
            Top-performing contractors in the most common federal-bid NAICS codes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { naics: "336411", slug: "aircraft-manufacturing", label: "Aircraft Manufacturing" },
              { naics: "541512", slug: "computer-systems-design-services", label: "Computer Systems Design" },
              { naics: "541330", slug: "engineering-services", label: "Engineering Services" },
              { naics: "541715", slug: "research-and-development", label: "R&D Services" },
              { naics: "236220", slug: "commercial-construction", label: "Construction" },
              { naics: "541611", slug: "management-consulting", label: "Management Consulting" },
              { naics: "561720", slug: "janitorial-services", label: "Janitorial Services" },
              { naics: "611310", slug: "universities", label: "Universities" },
            ].map((c) => (
              <Link
                key={c.naics}
                href={`/contractors/in/${c.slug}`}
                className="group bg-white border border-stone-200 hover:border-emerald-300 hover:shadow-sm rounded-xl p-4 transition-all"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">NAICS {c.naics}</p>
                <p className="font-bold text-stone-900 mt-1 group-hover:text-emerald-700 transition-colors">
                  {c.label}
                </p>
                <p className="text-xs text-stone-500 mt-2 inline-flex items-center gap-1">
                  Top contractors <ArrowRight className="w-3 h-3" />
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contractor list */}
        <section>
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-black text-2xl text-stone-900">Top-ranked contractors</h2>
            <p className="text-xs text-stone-500">Sorted by Federal Contracting Score</p>
          </div>

          {contractors.length === 0 ? (
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 text-center">
              <Briefcase className="w-10 h-10 text-stone-300 mx-auto mb-3" />
              <p className="text-stone-600 text-sm">
                Profiles are publishing now. Check back in a few minutes &mdash; new contractors land daily.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {contractors.map((c, idx) => (
                <Link
                  key={c.slug}
                  href={`/contractors/${c.slug}`}
                  className="group block bg-white border border-stone-200 hover:border-emerald-300 hover:shadow-md rounded-2xl p-5 sm:p-6 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Rank */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center font-black text-stone-700">
                      #{idx + 1}
                    </div>

                    {/* Identity */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <h3 className="font-black text-stone-900 text-lg group-hover:text-emerald-700 transition-colors">
                          {c.business_name}
                        </h3>
                        {c.federal_score !== null && (
                          <span className="text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded">
                            {c.federal_score}/100
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-stone-500 mt-0.5 inline-flex items-center gap-1.5">
                        {c.city && c.state && (
                          <>
                            <MapPin className="w-3 h-3" /> {c.city}, {c.state}
                          </>
                        )}
                        {c.industry && <span className="mx-1 text-stone-300">&middot;</span>}
                        {c.industry && <span>{c.industry}</span>}
                      </p>
                      {c.badges && c.badges.length > 0 && (
                        <div className="flex gap-1.5 flex-wrap mt-3">
                          {c.badges.slice(0, 5).map((b) => {
                            const meta = BADGE_META[b];
                            if (!meta) return null;
                            return (
                              <span key={b} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${meta.tone}`}>
                                {meta.label}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Right column — awards */}
                    <div className="flex-shrink-0 text-right">
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                        Lifetime awards
                      </p>
                      <p className="text-2xl font-black text-stone-900 mt-1">
                        {fmtMoney(Number(c.total_awarded_amount || 0))}
                      </p>
                      {c.top_agency && (
                        <p className="text-xs text-stone-500 mt-1 inline-flex items-center gap-1">
                          <Trophy className="w-3 h-3" /> {c.top_agency}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA — claim profile */}
        <section className="mt-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-800 rounded-[28px] p-8 sm:p-12 text-white text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Are you on this list?</p>
          <h2 className="font-black text-3xl sm:text-4xl mt-2">Claim your contractor profile.</h2>
          <p className="text-white/80 text-base mt-3 max-w-xl mx-auto">
            Add your team, services, capability statement, and capture pipeline. Free for verified contractors.
          </p>
          <Link
            href="/check"
            className="mt-6 inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
          >
            Find your profile <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
