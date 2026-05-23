"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Live opportunity counter for the marketing site. Pulls from the dashboard's
 * /api/opportunities/stats endpoint (CORS-enabled) every 60s. Falls back to
 * a static "40,000+" hint while loading or if the API is unreachable.
 */
const STATS_URL = process.env.NEXT_PUBLIC_STATS_URL
    || "https://captiorpilot-v3.vercel.app/api/opportunities/stats";

interface Stats {
    total: number;
    federal: number;
    sled: number;
    new_last_7d: number;
    expiring_soon: number;
    sources_sought: number;
    generated_at: string;
}

export function LiveCountInline({ fallback = 40000 }: { fallback?: number }) {
    const [count, setCount] = useState<number | null>(null);
    const [live, setLive] = useState(false);

    useEffect(() => {
        let cancelled = false;
        async function go() {
            try {
                const r = await fetch(STATS_URL, { cache: "no-store" });
                if (!r.ok) return;
                const data = await r.json() as Stats;
                if (!cancelled) {
                    setCount(data.total);
                    setLive(true);
                }
            } catch { /* stay on fallback */ }
        }
        go();
        const id = setInterval(go, 60_000);
        return () => { cancelled = true; clearInterval(id); };
    }, []);

    const shown = count ?? fallback;
    return (
        <span className="inline-flex items-center gap-1.5">
            <strong className="text-white tabular-nums">{shown.toLocaleString()}+</strong>
            {live && (
                <span className="relative flex h-1.5 w-1.5" title="Live count, updated every 60 seconds">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
            )}
        </span>
    );
}

/**
 * Full breakdown widget — total + federal + state + new-this-week. Use this
 * on dedicated landing pages, not in tight nav strips.
 */
export function LiveCountWidget() {
    const [stats, setStats] = useState<Stats | null>(null);
    const counterRef = useRef<{ federal: number; sled: number }>({ federal: 0, sled: 0 });

    useEffect(() => {
        let cancelled = false;
        async function go() {
            try {
                const r = await fetch(STATS_URL, { cache: "no-store" });
                if (!r.ok) return;
                const data = await r.json() as Stats;
                if (!cancelled) {
                    counterRef.current = { federal: data.federal, sled: data.sled };
                    setStats(data);
                }
            } catch { /* hide on error */ }
        }
        go();
        const id = setInterval(go, 60_000);
        return () => { cancelled = true; clearInterval(id); };
    }, []);

    if (!stats) return null;
    const fmt = (n: number) => n.toLocaleString();

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-stone-900 tabular-nums">{fmt(stats.total)}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">Active Opportunities</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-blue-700 tabular-nums">{fmt(stats.federal)}</p>
                <p className="text-[10px] text-blue-600 uppercase tracking-wider mt-1">Federal</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-emerald-700 tabular-nums">{fmt(stats.sled)}</p>
                <p className="text-[10px] text-emerald-600 uppercase tracking-wider mt-1">State / Local</p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-4 text-center shadow-sm">
                <p className="text-3xl font-black text-stone-900 tabular-nums">+{fmt(stats.new_last_7d)}</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider mt-1">New / 7 days</p>
            </div>
        </div>
    );
}
