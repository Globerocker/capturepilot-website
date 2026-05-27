"use client";

import { useEffect, useState } from "react";

/**
 * Live opportunity counters for the marketing site. Pulls from the dashboard's
 * /api/public/stats endpoint (5 min edge cache, CORS-enabled, anonymous) and
 * renders either a single big number (LiveCountInline) or a jurisdictional
 * breakdown (PublicStatsBar).
 *
 * The endpoint shape (PublicStats interface) is canonical in
 * dashboard/src/app/api/public/stats/route.ts — keep these types in sync.
 */
const STATS_URL = process.env.NEXT_PUBLIC_STATS_URL
    || "https://app.capturepilot.com/api/public/stats";

interface PublicStats {
    federal_opps: number;
    sled_opps: number;
    state_opps: number;
    county_opps: number;
    city_opps: number;
    district_opps: number;
    sled_uncategorized: number;
    active_total: number;
    contractors_tracked: number;
    portals_tracked: number;
    new_today: number;
    last_updated: string;
}

function useStats(pollMs = 60_000) {
    const [stats, setStats] = useState<PublicStats | null>(null);
    useEffect(() => {
        let cancelled = false;
        async function load() {
            try {
                const r = await fetch(STATS_URL, { cache: "no-store" });
                if (!r.ok) return;
                const data = (await r.json()) as PublicStats;
                if (!cancelled) setStats(data);
            } catch { /* keep last value / null */ }
        }
        load();
        const id = setInterval(load, pollMs);
        return () => { cancelled = true; clearInterval(id); };
    }, [pollMs]);
    return stats;
}

/**
 * Single inline counter — total active opportunities. Used in the hero
 * trust line ("40,000+ Active Opportunities"). Falls back to `fallback`
 * while loading or if the API is unreachable.
 */
export function LiveCountInline({ fallback = 40000 }: { fallback?: number }) {
    const stats = useStats();
    const live = stats != null;
    const shown = stats?.active_total ?? fallback;
    return (
        <span className="inline-flex items-center gap-1.5">
            <strong className="text-white tabular-nums">{shown.toLocaleString()}+</strong>
            {live && (
                <span className="relative flex h-1.5 w-1.5" title="Live count, refreshes every 60s">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
            )}
        </span>
    );
}

/**
 * Federal / State / County / City / District breakdown bar — drop into any
 * landing page, presentation slide, or proof section. Matches the
 * PublicStatsBar component shipped in the dashboard codebase so messaging
 * is consistent across both surfaces.
 *
 *   `dark`  — white text on dark background (use on hero/dark sections)
 *   `light` — stone-900 text on light background (default; use anywhere else)
 *
 * `showDistrict` toggles the 5th counter (District) — small bucket (~33 rows
 * today) so hidden by default to keep the bar clean at 4 columns.
 */
export function PublicStatsBar({
    variant = "light",
    showDistrict = false,
}: {
    variant?: "light" | "dark";
    showDistrict?: boolean;
}) {
    const stats = useStats();

    const items = [
        { key: "federal_opps" as const, label: "Federal", color: "text-blue-600" },
        { key: "state_opps" as const, label: "State", color: "text-emerald-600" },
        { key: "county_opps" as const, label: "County", color: "text-purple-600" },
        { key: "city_opps" as const, label: "City", color: "text-amber-600" },
        ...(showDistrict ? [{ key: "district_opps" as const, label: "District", color: "text-rose-600" }] : []),
    ];

    const dark = variant === "dark";
    const card = dark
        ? "bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 text-center"
        : "bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm";
    const number = dark ? "text-white" : "text-stone-900";
    const cols = items.length === 4 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-5";

    return (
        <div className={`grid ${cols} gap-3 sm:gap-4`}>
            {items.map((it) => {
                const v = stats?.[it.key];
                return (
                    <div key={it.key} className={card}>
                        <p className={`text-3xl font-black tabular-nums ${number}`}>
                            {v != null ? v.toLocaleString() : "—"}
                        </p>
                        <p className={`text-[10px] uppercase tracking-wider mt-1 font-bold ${it.color}`}>
                            {it.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

/**
 * Legacy 4-counter widget (Total / Federal / State+Local / New-24h) — kept
 * exported for backward compat with any pages still importing it. New
 * surfaces should prefer `PublicStatsBar` for the jurisdictional split.
 */
export function LiveCountWidget() {
    const stats = useStats();
    if (!stats) return null;
    const fmt = (n: number) => n.toLocaleString();
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-stone-900 tabular-nums">{fmt(stats.active_total)}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">Active Opportunities</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-blue-700 tabular-nums">{fmt(stats.federal_opps)}</p>
                <p className="text-[10px] text-blue-600 uppercase tracking-wider mt-1">Federal</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-emerald-700 tabular-nums">{fmt(stats.sled_opps)}</p>
                <p className="text-[10px] text-emerald-600 uppercase tracking-wider mt-1">State / Local</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-stone-900 tabular-nums">+{fmt(stats.new_today)}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">New / 24h</p>
            </div>
        </div>
    );
}
