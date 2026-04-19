"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
    Target,
    Telescope,
    FileText,
    Mic,
    Zap,
    ClipboardCheck,
    Shield,
    Radar,
    ArrowLeft,
    ArrowRight,
    Play,
} from "lucide-react";
import clsx from "clsx";

interface Slide {
    eyebrow: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    accent: string;
    bullets: string[];
    stat?: { value: string; label: string };
    ctaHref?: string;
    ctaLabel?: string;
}

const SLIDES: Slide[] = [
    {
        eyebrow: "Shipped Q2 2026",
        title: "What&apos;s new in CapturePilot",
        subtitle: "Six major additions in the last 90 days. This deck walks through every one.",
        icon: Play,
        accent: "emerald",
        bullets: [
            "Capture Briefs (AI) — 2-page brief per opportunity",
            "Voice Briefs — hold to record, release to hear back",
            "Compliance Matrix — Section L/M XLSX export",
            "Recompete Radar — expiring contracts 3-18 mo. ahead",
            "Agency Forecast Watcher — daily agency-page diffs",
            "MCP + Zapier + Slack integrations",
        ],
    },
    {
        eyebrow: "Feature 1 of 6",
        title: "Capture Brief (AI)",
        subtitle: "One click. Two pages. PWin + bid/no-bid + next actions.",
        icon: FileText,
        accent: "emerald",
        bullets: [
            "Pulls opportunity + structured requirements + past awards + competitor data",
            "Single DeepSeek-V3.2 LLM call, cached for 7 days per opportunity",
            "Output: program background, incumbent assessment, gaps, win themes, PWin estimate",
            "Bid / Watch / No-Bid recommendation with next-7-days checklist",
        ],
        stat: { value: "~60 sec", label: "to generate a full capture brief" },
    },
    {
        eyebrow: "Feature 2 of 6",
        title: "Voice Briefs",
        subtitle: "Between meetings? Press the mic. We brief you.",
        icon: Mic,
        accent: "rose",
        bullets: [
            "Whisper transcribes your voice query",
            "Resolves the right opportunity from the page context or keywords",
            "Capture brief generates in background",
            "OpenAI TTS reads back a 150-word narration, phone-ready",
            "Opportunity detail pages get a one-button mic — hold to record, release to send",
        ],
        stat: { value: "150 words", label: "in a 60-second voice briefing" },
    },
    {
        eyebrow: "Feature 3 of 6",
        title: "Compliance Matrix + XLSX Export",
        subtitle: "Every &ldquo;shall&rdquo; in Section L and M, owner-assigned, ready for your proposal team.",
        icon: ClipboardCheck,
        accent: "indigo",
        bullets: [
            "Parses the full solicitation + structured requirements",
            "Extracts every obligation with section reference + verb + category + owner",
            "Rates each line: addressable / partial / gap",
            "One-click export to XLSX with branded formatting",
            "14-day cache so your team can iterate on the same matrix",
        ],
    },
    {
        eyebrow: "Feature 4 of 6",
        title: "Recompete Radar",
        subtitle: "See the recompete 6 months before the RFP.",
        icon: Radar,
        accent: "purple",
        bullets: [
            "Daily scan of USASpending for contracts expiring in 3-18 months",
            "Confidence-scored by agency recompete history + period end + competition type",
            "Auto-filtered to your profile&apos;s NAICS",
            "Specific reasoning per candidate (e.g. &ldquo;6 mo. to end, originally competitive, large $value&rdquo;)",
        ],
        stat: { value: "3-18 mo.", label: "look-ahead window per scan" },
    },
    {
        eyebrow: "Feature 5 of 6",
        title: "Agency Forecast Watcher",
        subtitle: "See opportunities before they hit SAM.gov.",
        icon: Telescope,
        accent: "blue",
        bullets: [
            "Daily change-detection across VA, DoD, GSA, DOE, DHS forecast pages",
            "SHA-256 diffs surface added / removed line items",
            "NAICS codes auto-extracted from new lines",
            "Your feed filters to forecast entries that match YOUR profile",
            "3-12 months lead time before the same opp hits SAM.gov",
        ],
    },
    {
        eyebrow: "Feature 6 of 6",
        title: "MCP · Zapier · Slack",
        subtitle: "CapturePilot talks to the tools you already use.",
        icon: Zap,
        accent: "amber",
        bullets: [
            "MCP server — add CapturePilot to Claude Desktop, Cursor, any MCP client",
            "Zapier app — fire Zaps on pursuit.added, match.hot, capture_brief.generated",
            "Slack — /capturepilot hot, /capturepilot recompetes, /capturepilot <keyword>",
            "OAuth install for Slack, HMAC-signed outbound webhooks for Zapier",
            "Generate tokens at /settings/integrations — no more &ldquo;contact us for an API&rdquo;",
        ],
        stat: { value: "7,000+", label: "Zapier integrations ready to wire in" },
    },
    {
        eyebrow: "Veteran focus",
        title: "20% off — forever — for verified SDVOSBs + VOSBs",
        subtitle: "Verified via SAM Entity API. Auto-applied at checkout. Not just year one.",
        icon: Shield,
        accent: "emerald",
        bullets: [
            "Verified SDVOSB / VOSB firms save 20% on every paid plan",
            "Self-declaration supported for new VetCert holders waiting for SAM to propagate",
            "Applied automatically at Stripe checkout — no coupon code to remember",
            "Free Academy library with SDVOSB-specific playbooks + VetCert checklist",
        ],
        ctaHref: "/for/veterans",
        ctaLabel: "See veteran advantages →",
    },
    {
        eyebrow: "Questions?",
        title: "Let&apos;s talk",
        subtitle: "Book a 20-minute call. Vet-to-vet. No pitch deck. Honest answers.",
        icon: Target,
        accent: "emerald",
        bullets: [
            "See if CapturePilot fits your first 90 days",
            "Or whether Americurial&apos;s managed capture service is the better path",
            "Every new service client gets CapturePilot bundled at 20% off — forever",
        ],
        ctaHref: "https://meetings-na2.hubspot.com/americurial/intro-call",
        ctaLabel: "Book your call →",
    },
];

const ACCENT_MAP: Record<string, { bg: string; chip: string; icon: string; border: string }> = {
    emerald: { bg: "from-emerald-50 via-white to-white", chip: "bg-emerald-100 text-emerald-700", icon: "bg-emerald-600 text-white", border: "border-emerald-300" },
    rose: { bg: "from-rose-50 via-white to-white", chip: "bg-rose-100 text-rose-700", icon: "bg-rose-600 text-white", border: "border-rose-300" },
    indigo: { bg: "from-indigo-50 via-white to-white", chip: "bg-indigo-100 text-indigo-700", icon: "bg-indigo-600 text-white", border: "border-indigo-300" },
    purple: { bg: "from-purple-50 via-white to-white", chip: "bg-purple-100 text-purple-700", icon: "bg-purple-600 text-white", border: "border-purple-300" },
    blue: { bg: "from-blue-50 via-white to-white", chip: "bg-blue-100 text-blue-700", icon: "bg-blue-600 text-white", border: "border-blue-300" },
    amber: { bg: "from-amber-50 via-white to-white", chip: "bg-amber-100 text-amber-700", icon: "bg-amber-600 text-white", border: "border-amber-300" },
};

export default function WhatsNewDeck() {
    const [index, setIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const next = useCallback(() => setIndex((i) => Math.min(SLIDES.length - 1, i + 1)), []);
    const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "ArrowRight" || e.key === " ") next();
            else if (e.key === "ArrowLeft") prev();
            else if (e.key === "Escape") setAutoplay(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [next, prev]);

    useEffect(() => {
        if (!autoplay) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % SLIDES.length);
        }, 8000);
        return () => clearInterval(id);
    }, [autoplay]);

    const slide = SLIDES[index];
    const accent = ACCENT_MAP[slide.accent] || ACCENT_MAP.emerald;
    const Icon = slide.icon;

    return (
        <main className={clsx("min-h-screen flex flex-col bg-gradient-to-b", accent.bg)}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white/60 backdrop-blur">
                <Link href="/" className="text-sm font-bold text-stone-800 hover:text-emerald-700">
                    ← CapturePilot
                </Link>
                <div className="text-xs text-stone-500 font-mono">
                    {index + 1} / {SLIDES.length}
                </div>
                <button
                    type="button"
                    onClick={() => setAutoplay(!autoplay)}
                    className={clsx(
                        "text-xs font-bold px-3 py-1.5 rounded-full transition-all",
                        autoplay
                            ? "bg-emerald-600 text-white"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200",
                    )}
                >
                    {autoplay ? "Auto-play on" : "Auto-play off"}
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center px-6 py-12">
                <div className="max-w-4xl w-full">
                    <div className={clsx("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6", accent.chip)}>
                        {slide.eyebrow}
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                        <div className={clsx("w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0", accent.icon)}>
                            <Icon className="w-7 h-7" />
                        </div>
                        <div>
                            <h1
                                className="text-4xl md:text-5xl font-black text-stone-900 leading-tight mb-3"
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />
                            <p
                                className="text-lg md:text-xl text-stone-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                            />
                        </div>
                    </div>

                    {slide.stat && (
                        <div className={clsx("inline-block rounded-2xl border-2 px-6 py-4 mb-8", accent.border)}>
                            <p className="text-4xl md:text-5xl font-black text-stone-900">{slide.stat.value}</p>
                            <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">{slide.stat.label}</p>
                        </div>
                    )}

                    <ul className="space-y-3 mb-8">
                        {slide.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-base md:text-lg text-stone-800 leading-relaxed">
                                <span className={clsx("w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0", accent.icon)} />
                                <span dangerouslySetInnerHTML={{ __html: b }} />
                            </li>
                        ))}
                    </ul>

                    {slide.ctaHref && (
                        <Link
                            href={slide.ctaHref}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-stone-800"
                            {...(slide.ctaHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                            {slide.ctaLabel}
                        </Link>
                    )}
                </div>
            </div>

            {/* Nav */}
            <div className="px-6 pb-8 flex items-center justify-between">
                <button
                    type="button"
                    onClick={prev}
                    disabled={index === 0}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-300 rounded-full text-sm font-bold hover:bg-stone-50 disabled:opacity-30"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Prev
                </button>
                <div className="flex items-center gap-1.5">
                    {SLIDES.map((_, i) => (
                        <button
                            type="button"
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                            className={clsx(
                                "w-2 h-2 rounded-full transition-all",
                                i === index ? "bg-stone-900 w-8" : "bg-stone-300 hover:bg-stone-400",
                            )}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    onClick={next}
                    disabled={index === SLIDES.length - 1}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-stone-800 disabled:opacity-30"
                >
                    Next
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </main>
    );
}
