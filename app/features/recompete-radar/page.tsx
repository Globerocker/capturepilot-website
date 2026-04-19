import type { Metadata } from "next";
import Link from "next/link";
import { Radar, ArrowRight, Check, TrendingUp, AlertTriangle, Target } from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";

export const metadata: Metadata = {
    title: "Recompete Radar — Spot Expiring Contracts Before Competitors Do",
    description: "Federal contracts expire. Recompete Radar flags high-confidence recompetes 3-18 months ahead, so you can position yourself before the RFP drops.",
};

export default function RecompetePage() {
    return (
        <>
            <SiteNav />
            <main className="pt-16">
                <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <Radar className="w-4 h-4" />
                            Recompete Radar
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
                            See the recompete
                            <br />
                            <span className="text-emerald-600">6 months before the RFP.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
                            Every federal contract ends. We scan USASpending daily for contracts expiring in the next
                            3&ndash;18 months, score each candidate&apos;s recompete likelihood, and surface the ones
                            that match your NAICS.
                        </p>
                        <Link
                            href={`${APP_URL}/signup?utm_source=features_recompete`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-stone-800 transition-all hover:scale-105"
                        >
                            Try Recompete Radar free
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                <section className="py-16 px-6 bg-white">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                        <Card icon={TrendingUp} title="Confidence-scored" body="Every candidate gets a 0-100% confidence score based on agency recompete history, period-of-performance end date, and competition patterns." />
                        <Card icon={Target} title="NAICS-matched" body="Auto-filtered to YOUR profile. You only see the expiring contracts you could realistically win." />
                        <Card icon={AlertTriangle} title="Early warning" body="Engage the contracting officer, attend industry day, and build the capture case months before competitors even notice." />
                    </div>
                </section>

                <section className="py-16 px-6 bg-stone-50">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-stone-900 mb-6 text-center">
                            How the scoring works
                        </h2>
                        <div className="space-y-3">
                            <Row label="+20 pts" text="Contract end date in 6-12 months (recompete prep window)" />
                            <Row label="+15 pts" text="Originally competitive (not sole-source)" />
                            <Row label="+10 pts" text="Large contract — agencies often re-break for SB set-asides" />
                            <Row label="−10 pts" text={"Many modifications — incumbent may get extended instead"} />
                            <Row label="+10 pts" text="Agency has historical recompete cadence in this NAICS" />
                        </div>
                    </div>
                </section>

                <Cta />
            </main>
            <SiteFooter />
        </>
    );
}

function Card({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
    return (
        <div className="bg-white rounded-2xl border border-stone-200 p-5">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
        </div>
    );
}

function Row({ label, text }: { label: string; text: string }) {
    return (
        <div className="bg-white rounded-xl border border-stone-200 p-3 flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-1 flex-shrink-0">
                {label}
            </span>
            <span className="text-sm text-stone-700">{text}</span>
        </div>
    );
}

function Cta() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-black text-stone-900 mb-4">Get the jump on every recompete in your NAICS.</h2>
                <Link
                    href={`${APP_URL}/signup?utm_source=features_recompete_bottom`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700"
                >
                    Start free
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
