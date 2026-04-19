import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, ArrowRight, Shield, Users, Award, Target } from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";

export const metadata: Metadata = {
    title: "Certified Teaming — Tribal, 8(a), SDVOSB, HUBZone, WOSB Partner Directory",
    description: "Access a curated directory of SBA-certified tribal, 8(a), HUBZone, WOSB, and SDVOSB firms. NAICS-overlap scoring, PoC contacts, and one-click teaming shortlists.",
};

export default function TribalPartnersPage() {
    return (
        <>
            <SiteNav />
            <main className="pt-16">
                <section className="py-20 px-6 bg-gradient-to-b from-amber-50/60 via-white to-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                            <Handshake className="w-4 h-4" />
                            Certified Teaming Directory
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
                            The right partner
                            <br />
                            <span className="text-amber-700">for the right set-aside.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
                            Tribal, 8(a), HUBZone, WOSB, SDVOSB, VOSB, and EDWOSB firms — ranked by NAICS overlap with
                            YOUR profile. Filter by certification, save to a shortlist, and pitch partners that
                            actually fit your capability gaps.
                        </p>
                        <Link
                            href={`${APP_URL}/partners?utm_source=features_tribal`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-stone-800 transition-all hover:scale-105"
                        >
                            Browse the directory
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                <section className="py-16 px-6 bg-white">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                        <Card
                            icon={Shield}
                            title="Certified firms only"
                            body="Every firm in the directory carries at least one active SBA certification — 8(a), HUBZone, WOSB/EDWOSB, SDVOSB/VOSB, or a tribal designation. No cert-claiming shortcuts."
                        />
                        <Card
                            icon={Target}
                            title="NAICS overlap ranking"
                            body="Results ranked by how well each partner's NAICS footprint matches yours. Primary-code matches weighted higher. Filter by set-aside cert."
                        />
                        <Card
                            icon={Users}
                            title="Capability narratives"
                            body="Each firm's self-described capability statement, year established, employee count, and NAICS portfolio — straight from SBA DSBS."
                        />
                        <Card
                            icon={Award}
                            title="One-click shortlist"
                            body="Save partners into a per-opportunity shortlist. Export for your capture team. Fire a Zapier webhook when you pick one."
                        />
                    </div>
                </section>

                <section className="py-16 px-6 bg-stone-50">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-stone-900 mb-4">
                            Growing from curated to comprehensive.
                        </h2>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            Our first directory shipped with 800 hand-picked firms across every major set-aside. We
                            added the SBA DSBS ingestion pipeline for a 300,000-firm monthly refresh — so if your partner
                            is SBA-certified, we have them.
                        </p>
                    </div>
                </section>

                <section className="py-20 px-6 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-stone-900 mb-4">
                            Find your next JV partner in 5 minutes.
                        </h2>
                        <Link
                            href={`${APP_URL}/signup?utm_source=features_tribal_bottom`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700"
                        >
                            Start free
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}

function Card({ icon: Icon, title, body }: { icon: React.ElementType; title: string; body: string }) {
    return (
        <div className="bg-white rounded-2xl border border-stone-200 p-5">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
        </div>
    );
}
