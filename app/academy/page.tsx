import type { Metadata } from "next";
import Link from "next/link";
import {
    GraduationCap,
    Lock,
    ArrowRight,
    BookOpen,
    Award,
    FileText,
    TrendingUp,
    Sparkles,
    Clock,
} from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const revalidate = 600;

export const metadata: Metadata = {
    title: "CapturePilot Academy — Federal Contracting Playbooks for Small Business",
    description: "Playbooks, certification checklists, and capture strategies. Free inside CapturePilot — the full library is one signup away.",
};

const APP_URL = "https://app.capturepilot.com";

interface Article {
    slug: string;
    title: string;
    excerpt: string | null;
    category: string;
    reading_minutes: number | null;
    featured: boolean;
    published_at: string | null;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
    playbook: BookOpen,
    cert: Award,
    proposal: FileText,
    pricing: TrendingUp,
    market_intel: Sparkles,
};

const CATEGORY_LABELS: Record<string, string> = {
    playbook: "Playbook",
    cert: "Certifications",
    proposal: "Proposals",
    pricing: "Pricing",
    market_intel: "Market Intel",
};

async function loadArticles(): Promise<Article[]> {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return [];

    // PostgREST — avoids depending on supabase-js in the marketing site build
    const params = new URLSearchParams({
        select: "slug,title,excerpt,category,reading_minutes,featured,published_at",
        teaser_public: "eq.true",
        published_at: "not.is.null",
        order: "featured.desc,published_at.desc",
        limit: "24",
    });
    try {
        const res = await fetch(`${url}/rest/v1/academy_articles?${params}`, {
            headers: { apikey: key, Authorization: `Bearer ${key}` },
            next: { revalidate: 600 },
        });
        if (!res.ok) return [];
        return (await res.json()) as Article[];
    } catch {
        return [];
    }
}

export default async function AcademyPage() {
    const articles = await loadArticles();

    return (
        <>
            <SiteNav />
            <main className="pt-16">
                {/* Hero */}
                <section className="py-20 px-6 bg-gradient-to-b from-emerald-50 via-white to-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <GraduationCap className="w-4 h-4" />
                            CapturePilot Academy
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
                            Win federal contracts.
                            <br />
                            <span className="text-emerald-600">Here&apos;s how.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed">
                            Playbooks, checklists, and deep-dives from our capture team. Free inside CapturePilot.
                        </p>
                        <Link
                            href={`${APP_URL}/signup?utm_source=academy`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-stone-800 transition-all hover:scale-105 shadow-lg"
                        >
                            Get full access — free
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <p className="text-xs text-stone-500 mt-3">
                            No credit card. Full library unlocks instantly on signup.
                        </p>
                    </div>
                </section>

                {/* Articles grid — teaser mode */}
                <section className="py-12 px-6 bg-white">
                    <div className="max-w-6xl mx-auto">
                        {articles.length === 0 ? (
                            <p className="text-center text-sm text-stone-500">Library loading…</p>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {articles.map((a) => {
                                    const Icon = CATEGORY_ICONS[a.category] || BookOpen;
                                    return (
                                        <div
                                            key={a.slug}
                                            className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col hover:border-emerald-300 transition-colors group"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                                                    <Icon className="w-4 h-4 text-emerald-600" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                                                    {CATEGORY_LABELS[a.category] || a.category}
                                                </span>
                                                {a.reading_minutes && (
                                                    <span className="ml-auto text-[10px] text-stone-400 inline-flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {a.reading_minutes} min
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="font-bold text-stone-900 text-base leading-snug mb-2">
                                                {a.title}
                                            </h3>
                                            {a.excerpt && (
                                                <p className="text-sm text-stone-600 leading-relaxed line-clamp-3 mb-4">
                                                    {a.excerpt}
                                                </p>
                                            )}
                                            <div className="mt-auto pt-3 border-t border-stone-100 flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-stone-400 inline-flex items-center gap-1">
                                                    <Lock className="w-3 h-3" />
                                                    In the app
                                                </span>
                                                <Link
                                                    href={`${APP_URL}/signup?utm_source=academy&utm_content=${a.slug}`}
                                                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                                                >
                                                    Unlock
                                                    <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6 bg-stone-50">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-stone-900 mb-4">
                            The whole library is waiting inside the app.
                        </h2>
                        <p className="text-stone-600 mb-8">
                            New articles every week. Free with every plan.
                        </p>
                        <Link
                            href={`${APP_URL}/signup?utm_source=academy&utm_content=bottom-cta`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg"
                        >
                            Create free account
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
