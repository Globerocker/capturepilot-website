import type { Metadata } from "next";
import Link from "next/link";
import {
    Shield,
    ArrowRight,
    Target,
    CheckCircle2,
    Download,
    TrendingUp,
    Award,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";

export const metadata: Metadata = {
    title: "The SDVOSB $14B Opportunity Map — Where Veteran-Owned Firms Win",
    description: "A free map of the top 50 federal agencies buying from SDVOSBs — with average contract size, top NAICS, and the unlock-path for each. Built for veteran-owned firms planning their first $1M in federal revenue.",
};

const TOP_AGENCIES = [
    { name: "Department of Veterans Affairs", share: "$4.2B", tag: "Priority buyer" },
    { name: "Department of Defense", share: "$3.1B", tag: "Highest volume" },
    { name: "Department of Homeland Security", share: "$680M" },
    { name: "Department of Energy", share: "$420M" },
    { name: "General Services Administration", share: "$380M" },
    { name: "Department of the Army", share: "$810M", tag: "DoD sub" },
    { name: "Department of the Navy", share: "$620M", tag: "DoD sub" },
    { name: "Department of the Air Force", share: "$540M", tag: "DoD sub" },
    { name: "NASA", share: "$160M" },
    { name: "Department of State", share: "$140M" },
    { name: "Department of Justice", share: "$110M" },
    { name: "Department of the Interior", share: "$95M" },
];

export default function SdvosbMapPage() {
    return (
        <>
            <SiteNav />
            <main className="pt-16">
                {/* Hero */}
                <section className="py-20 px-6 bg-gradient-to-b from-emerald-50 via-white to-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <Shield className="w-4 h-4" />
                            Free resource for verified SDVOSBs
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
                            The $14 Billion
                            <br />
                            <span className="text-emerald-600">SDVOSB Opportunity Map.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
                            The federal government spent <strong>$14.2 billion</strong> with SDVOSBs in the last fiscal
                            year. Here&apos;s where it went, which agencies to target first, and what your path looks like
                            by NAICS.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <Link
                                href={`${APP_URL}/signup?utm_source=resource_sdvosb_map&next=/academy/sdvosb-first-90-days`}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-stone-800 transition-all hover:scale-105"
                            >
                                Unlock the full map in the app
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/for/veterans"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-stone-100 text-stone-800 rounded-full font-bold hover:bg-stone-200 transition-colors"
                            >
                                Learn about veteran discount
                            </Link>
                        </div>
                        <p className="text-xs text-stone-500 mt-3">
                            Verified SDVOSBs get 20% off every CapturePilot plan — forever.
                        </p>
                    </div>
                </section>

                {/* Top 12 agencies */}
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-3">
                                Top 12 agencies buying from SDVOSBs
                            </h2>
                            <p className="text-stone-600 max-w-2xl mx-auto">
                                The full map inside CapturePilot covers all 50 — with per-NAICS breakdowns, seasonal
                                spend patterns, and average contract size per agency.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {TOP_AGENCIES.map((a) => (
                                <div
                                    key={a.name}
                                    className="bg-white border border-stone-200 rounded-xl p-4 hover:border-emerald-300 transition-colors"
                                >
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <p className="font-bold text-sm text-stone-900 leading-tight">{a.name}</p>
                                        {a.tag && (
                                            <span className="text-[9px] font-bold bg-amber-100 text-amber-800 border border-amber-200 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                                                {a.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xl font-black text-emerald-700">{a.share}</p>
                                    <p className="text-[10px] text-stone-500 uppercase font-bold tracking-wider">
                                        FY spend w/ SDVOSBs
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's inside */}
                <section className="py-16 px-6 bg-stone-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-8 text-center">
                            What&apos;s inside (free with any account):
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Target,
                                    title: "Top 50 SDVOSB-friendly agencies",
                                    body: "Ranked by dollars, with the top NAICS per agency and average contract size.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "3-year spend trend per agency",
                                    body: "Which agencies are growing their SDVOSB budget? Which are flat? Which are cutting?",
                                },
                                {
                                    icon: Award,
                                    title: "Certification unlock map",
                                    body: "For every agency: do you need SDVOSB only, or also 8(a) / HUBZone / GSA Schedule?",
                                },
                                {
                                    icon: Shield,
                                    title: "Your first 90-day playbook",
                                    body: "Week-by-week action plan tailored to SDVOSBs new to federal contracting.",
                                },
                            ].map((f, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-stone-200 p-5">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-3">
                                        <f.icon className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <h3 className="font-bold text-stone-900 mb-1">{f.title}</h3>
                                    <p className="text-sm text-stone-600 leading-relaxed">{f.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6 bg-gradient-to-b from-stone-50 to-stone-100">
                    <div className="max-w-3xl mx-auto text-center">
                        <Shield className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                            Unlock the full map — free account, 30-second signup.
                        </h2>
                        <p className="text-stone-600 mb-8">
                            And if you&apos;re a verified SDVOSB or VOSB, you also get 20% off every paid plan — forever.
                        </p>
                        <Link
                            href={`${APP_URL}/signup?utm_source=resource_sdvosb_map_bottom`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 shadow-lg"
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
