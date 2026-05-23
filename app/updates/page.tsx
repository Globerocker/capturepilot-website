import type { Metadata } from "next";
import { Sparkles, Zap, Wrench, Gauge, Plug } from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

// Revalidate the rendered page every 5 minutes so new release notes show up
// without needing a redeploy. Don't mix with force-dynamic — those two flags
// conflict and Next ends up disabling caching entirely.
export const revalidate = 300;

export const metadata: Metadata = {
    title: "What's new at CapturePilot",
    description: "A running log of what we've built recently and what we're working on.",
    openGraph: {
        title: "What's new at CapturePilot",
        description: "A running log of what we've built recently and what we're working on.",
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
                            What&apos;s new
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
                            What we&apos;ve been working on.
                        </h1>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            We build CapturePilot in the open. This page is where new stuff shows up first.
                        </p>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-12 px-6">
                    <div className="max-w-3xl mx-auto">
                        {notes.length === 0 ? (
                            <div className="bg-white border border-stone-200 rounded-2xl p-10 text-center space-y-3">
                                <Sparkles className="w-8 h-8 text-stone-300 mx-auto" />
                                <p className="text-sm font-semibold text-stone-700">Hold on, the page hasn&apos;t caught up yet.</p>
                                <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
                                    We pull this from our internal release log, and it takes a few minutes
                                    to refresh after a deploy. Try again in a bit, or say hi on{" "}
                                    <a href="https://www.linkedin.com/company/111953265/" className="underline underline-offset-2 hover:text-stone-700" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    {" "}where we usually post the highlights.
                                </p>
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
