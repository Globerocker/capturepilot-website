"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Briefcase, MapPin, Trophy, Globe, ArrowRight } from "lucide-react";
import { NAICS_LABELS } from "@/lib/naics-labels";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

export type ContractorSummary = {
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
  company_website?: string | null;
  company_linkedin?: string | null;
  naics_rank?: number | null;
  naics_total?: number | null;
  state_rank?: number | null;
  state_total?: number | null;
  total_awards_count?: number | null;
  ai_summary?: string | null;
  awards_by_year?: Array<{ year: number; value: number; count: number }> | null;
};

function fmtMoney(n: number): string {
  if (!n) return "$0";
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

function naicsSlugFor(code: string | null | undefined): string | null {
  if (!code) return null;
  const e = NAICS_LABELS.find((n) => n.code === code);
  return e ? e.slug : null;
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

type SortKey =
  | "lifetime_amount"
  | "lifetime_count"
  | "y2026_amount"
  | "y2026_count"
  | "y2025_amount"
  | "federal_score";

const SORT_OPTIONS: Array<{ key: SortKey; label: string; hint: string }> = [
  { key: "lifetime_amount",  label: "Lifetime $",        hint: "Total federal awards (all years)" },
  { key: "lifetime_count",   label: "Total contracts",   hint: "Count of federal contracts won" },
  { key: "y2026_amount",     label: "Most $ in 2026",    hint: "Top earners this year" },
  { key: "y2026_count",      label: "Most contracts 2026", hint: "Most active bidders this year" },
  { key: "y2025_amount",     label: "Most $ in 2025",    hint: "Top earners last year" },
  { key: "federal_score",    label: "Federal Score",     hint: "Composite ranking" },
];

function yearAmount(c: ContractorSummary, year: number): number {
  const row = c.awards_by_year?.find((y) => y.year === year);
  return row?.value || 0;
}
function yearCount(c: ContractorSummary, year: number): number {
  const row = c.awards_by_year?.find((y) => y.year === year);
  return row?.count || 0;
}

function sortValue(c: ContractorSummary, key: SortKey): number {
  switch (key) {
    case "lifetime_amount": return c.total_awarded_amount || 0;
    case "lifetime_count":  return c.total_awards_count || 0;
    case "y2026_amount":    return yearAmount(c, 2026);
    case "y2026_count":     return yearCount(c, 2026);
    case "y2025_amount":    return yearAmount(c, 2025);
    case "federal_score":   return c.federal_score || 0;
  }
}

export default function ContractorList({ contractors }: { contractors: ContractorSummary[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("lifetime_amount");

  const sorted = useMemo(
    () => [...contractors].sort((a, b) => sortValue(b, sortKey) - sortValue(a, sortKey)),
    [contractors, sortKey],
  );

  // Pick the metric to highlight in the right column based on the sort.
  const metric = useMemo(() => {
    if (sortKey === "lifetime_count") {
      return (c: ContractorSummary) => ({
        big: `${(c.total_awards_count || 0).toLocaleString()}`,
        label: "contracts won",
        sub: c.total_awarded_amount ? fmtMoney(c.total_awarded_amount) + " total" : null,
      });
    }
    if (sortKey === "y2026_amount") {
      return (c: ContractorSummary) => ({
        big: fmtMoney(yearAmount(c, 2026)),
        label: "won in 2026",
        sub: yearCount(c, 2026) > 0 ? `${yearCount(c, 2026)} contracts` : null,
      });
    }
    if (sortKey === "y2026_count") {
      return (c: ContractorSummary) => ({
        big: `${yearCount(c, 2026)}`,
        label: "contracts in 2026",
        sub: yearAmount(c, 2026) > 0 ? fmtMoney(yearAmount(c, 2026)) : null,
      });
    }
    if (sortKey === "y2025_amount") {
      return (c: ContractorSummary) => ({
        big: fmtMoney(yearAmount(c, 2025)),
        label: "won in 2025",
        sub: yearCount(c, 2025) > 0 ? `${yearCount(c, 2025)} contracts` : null,
      });
    }
    if (sortKey === "federal_score") {
      return (c: ContractorSummary) => ({
        big: `${c.federal_score ?? 0}`,
        label: "Federal Score",
        sub: c.total_awarded_amount ? fmtMoney(c.total_awarded_amount) + " lifetime" : null,
      });
    }
    return (c: ContractorSummary) => ({
      big: fmtMoney(Number(c.total_awarded_amount || 0)),
      label: "lifetime awards",
      sub: c.total_awards_count != null && c.total_awards_count > 0
        ? `${c.total_awards_count.toLocaleString()} contracts`
        : null,
    });
  }, [sortKey]);

  const activeHint = SORT_OPTIONS.find((s) => s.key === sortKey)?.hint || "";

  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-black text-2xl text-stone-900">Top contractors</h2>
        <p className="text-xs text-stone-500">{activeHint}</p>
      </div>

      {/* Sort tabs */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => setSortKey(opt.key)}
            className={
              sortKey === opt.key
                ? "text-xs font-bold bg-stone-900 text-white px-3 py-1.5 rounded-lg"
                : "text-xs font-medium bg-stone-100 text-stone-600 hover:bg-stone-200 px-3 py-1.5 rounded-lg transition-colors"
            }
            title={opt.hint}
          >
            {opt.label}
          </button>
        ))}
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
          {sorted.map((c, idx) => {
            const m = metric(c);
            const primaryNaicsSlug = naicsSlugFor(c.primary_naics);
            return (
              <Link
                key={c.slug}
                href={`/contractors/${c.slug}`}
                className="group block bg-white border border-stone-200 hover:border-emerald-300 hover:shadow-md rounded-2xl p-5 sm:p-6 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Rank — reflects the active sort */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center font-black text-stone-700">
                    #{idx + 1}
                  </div>

                  {/* Identity */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-black text-stone-900 text-lg group-hover:text-emerald-700 transition-colors">
                        {c.business_name}
                      </h3>
                      {c.federal_score !== null && c.federal_score !== undefined && (
                        <span className="text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded" title="Federal Contracting Score (composite of awards, certs, recency)">
                          {c.federal_score}/100
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-stone-500 mt-0.5 inline-flex items-center gap-1.5 flex-wrap">
                      {c.city && c.state && (
                        <>
                          <MapPin className="w-3 h-3" /> {c.city}, {c.state}
                        </>
                      )}
                      {c.industry && <span className="mx-1 text-stone-300">&middot;</span>}
                      {c.industry && <span>{c.industry}</span>}
                      {c.naics_rank != null && c.naics_total != null && (
                        <>
                          <span className="mx-1 text-stone-300">&middot;</span>
                          <span title={`Federal score rank within NAICS ${c.primary_naics ?? ""}`}>
                            #{c.naics_rank.toLocaleString()} / {c.naics_total.toLocaleString()} in NAICS
                          </span>
                        </>
                      )}
                      {c.state_rank != null && c.state_total != null && c.state && (
                        <>
                          <span className="mx-1 text-stone-300">&middot;</span>
                          <span title={`Federal score rank within ${c.state}`}>
                            #{c.state_rank.toLocaleString()} / {c.state_total.toLocaleString()} in {c.state}
                          </span>
                        </>
                      )}
                    </p>
                    {c.ai_summary && (
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-2">{c.ai_summary}</p>
                    )}
                    <div className="flex gap-1.5 flex-wrap mt-3 items-center">
                      {/* Primary NAICS chip — clickable when an aggregator
                          page exists for the code. */}
                      {c.primary_naics && (
                        primaryNaicsSlug ? (
                          <Link
                            href={`/contractors/in/${primaryNaicsSlug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 px-2 py-1 rounded inline-flex items-center gap-0.5"
                          >
                            NAICS {c.primary_naics} <ArrowRight className="w-2.5 h-2.5 opacity-70" />
                          </Link>
                        ) : (
                          <span className="text-[10px] font-mono bg-stone-100 text-stone-600 border border-stone-200 px-2 py-1 rounded">
                            NAICS {c.primary_naics}
                          </span>
                        )
                      )}
                      {c.badges && c.badges.slice(0, 4).map((b) => {
                        const meta = BADGE_META[b];
                        if (!meta) return null;
                        return (
                          <span key={b} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${meta.tone}`}>
                            {meta.label}
                          </span>
                        );
                      })}
                      {c.company_website && (
                        <a
                          href={c.company_website.startsWith("http") ? c.company_website : `https://${c.company_website}`}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border bg-stone-50 text-stone-700 border-stone-200 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors inline-flex items-center gap-1"
                          title="Visit website"
                        >
                          <Globe className="w-3 h-3" /> Website
                        </a>
                      )}
                      {c.company_linkedin && (
                        <a
                          href={c.company_linkedin}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100 transition-colors inline-flex items-center gap-1"
                          title="Open LinkedIn profile"
                        >
                          <LinkedinIcon className="w-3 h-3" /> LinkedIn
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right column — metric that matches the active sort */}
                  <div className="flex-shrink-0 text-right">
                    <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{m.label}</p>
                    <p className="text-2xl font-black text-stone-900 mt-1 tabular-nums">{m.big}</p>
                    {m.sub && <p className="text-[10px] text-stone-400 mt-0.5">{m.sub}</p>}
                    {c.top_agency && (
                      <p className="text-xs text-stone-500 mt-1 inline-flex items-center gap-1">
                        <Trophy className="w-3 h-3" /> {c.top_agency}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
