import type { Metadata } from "next";
import { Sparkles, Zap, Wrench, Gauge, Plug } from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const revalidate = 300; // refresh every 5 minutes
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Product Updates — CapturePilot",
    description: "See what we shipped this week. Live changelog of new features, integrations, and improvements to CapturePilot.",
    openGraph: {
        title: "Product Updates — CapturePilot",
        description: "A live timeline of what we're building.",
    },
};

interface ReleaseNote {
    id: string;
    version: string | null;
    title: string;
    summary: string;
    category: string;
    highlights: string[];
    shipped_at: string;
}

const CATEGORY_STYLES: Record<string, { icon: React.ElementType; dot: string; label: string }> = {
    feature: { icon: Sparkles, dot: "bg-emerald-500", label: "New feature" },
    integration: { icon: Plug, dot: "bg-purple-500", label: "Integration" },
    performance: { icon: Gauge, dot: "bg-amber-500", label: "Performance" },
    fix: { icon: Wrench, dot: "bg-stone-500", label: "Fix" },
};

async function loadReleaseNotes(): Promise<ReleaseNote[]> {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return [];

    // PostgREST: hit Supabase directly so we don't need the supabase-js dep
    const params = new URLSearchParams({
        select: "id,version,title,summary,category,highlights,shipped_at",
        is_public: "eq.true",
        order: "shipped_at.desc",
        limit: "60",
    });
    try {
        const res = await fetch(`${url}/rest/v1/release_notes?${params}`, {
            headers: { apikey: key, Authorization: `Bearer ${key}` },
            next: { revalidate: 300 },
        });
        if (!res.ok) return [];
        return (await res.json()) as ReleaseNote[];
    } catch {
        return [];
    }
}

export default async function UpdatesPage() {
    const notes = await loadReleaseNotes();

    return (
        <>
            <SiteNav />
            <main className="pt-16">
                {/* Hero */}
                <section className="py-16 px-6 bg-gradient-to-b from-stone-50 to-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <Zap className="w-4 h-4" />
                            Live changelog
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
                            What we&apos;re shipping.
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            A running log of every feature, integration, and improvement we ship. No vague &ldquo;quarterly
                            roadmap&rdquo; — just what&apos;s actually live this week.
                        </p>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-12 px-6">
                    <div className="max-w-3xl mx-auto">
                        {notes.length === 0 ? (
                            <div className="bg-white border border-stone-200 rounded-2xl p-10 text-center">
                                <p className="text-sm text-stone-500">Timeline loading…</p>
                            </div>
                        ) : (
                            <div className="relative pl-8 border-l-2 border-stone-200 space-y-10">
                                {notes.map((n) => {
                                    const style = CATEGORY_STYLES[n.category] || CATEGORY_STYLES.feature;
                                    const Icon = style.icon;
                                    return (
                                        <article key={n.id} className="relative">
                                            <div
                                                className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full ${style.dot} border-4 border-white shadow-md flex items-center justify-center`}
                                            >
                                                <Icon className="w-2.5 h-2.5 text-white" />
                                            </div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                                                {style.label} ·{" "}
                                                {new Date(n.shipped_at).toLocaleDateString("en-US", {
                                                    month: "long",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                                {n.version && <span className="ml-2 font-mono normal-case">v{n.version}</span>}
                                            </p>
                                            <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-2">
                                                {n.title}
                                            </h2>
                                            <p className="text-stone-600 leading-relaxed mb-3">{n.summary}</p>
                                            {n.highlights && n.highlights.length > 0 && (
                                                <ul className="space-y-1">
                                                    {n.highlights.map((h, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-sm text-stone-700 flex items-start gap-2"
                                                        >
                                                            <span className="text-emerald-500 mt-1 flex-shrink-0">→</span>
                                                            {h}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </article>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
