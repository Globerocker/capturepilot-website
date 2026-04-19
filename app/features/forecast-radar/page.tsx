import type { Metadata } from "next";
import Link from "next/link";
import { Telescope, ArrowRight, Zap, Target, Calendar } from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";

export const metadata: Metadata = {
    title: "Agency Forecast Radar — See New Opportunities Before SAM.gov Does",
    description: "Federal agencies publish forecasts months before RFPs. CapturePilot monitors VA, DoD, GSA, DOE, DHS and more. Get NAICS-matched alerts when new line items appear.",
};

export default function ForecastPage() {
    return (
        <>
            <SiteNav />
            <main className="pt-16">
                <section className="py-20 px-6 bg-gradient-to-b from-blue-50 via-white to-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                            <Telescope className="w-4 h-4" />
                            Agency Forecast Radar
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
                            See the pipeline
                            <br />
                            <span className="text-blue-600">before SAM.gov does.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10">
                            Every major federal agency publishes a procurement forecast. We scan them daily, detect new
                            line items, match them to your NAICS, and alert you — months before the SAM.gov solicitation
                            drops.
                        </p>
                        <Link
                            href={`${APP_URL}/signup?utm_source=features_forecast`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-stone-800 transition-all hover:scale-105"
                        >
                            Turn on Forecast Radar
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                <section className="py-16 px-6 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-black text-stone-900 mb-6 text-center">
                            Agencies we monitor today
                        </h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                "Department of Veterans Affairs",
                                "Department of Defense",
                                "General Services Administration",
                                "Department of Energy",
                                "Department of Homeland Security",
                                "More coming weekly…",
                            ].map((a, i) => (
                                <div
                                    key={i}
                                    className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center"
                                >
                                    <p className="text-sm font-bold text-stone-800">{a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 px-6 bg-stone-50">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                        <Card
                            icon={Zap}
                            title="Daily scan"
                            body="Every agency forecast page rechecked at 06:30 UTC. Change detection via content hashing + structural diff."
                        />
                        <Card
                            icon={Target}
                            title="NAICS-matched"
                            body="New line items tagged with detected NAICS codes. Your feed auto-filters to the ones that match your profile."
                        />
                        <Card
                            icon={Calendar}
                            title="Months of lead time"
                            body="Forecasts publish 3-12 months before the SAM solicitation. Engage contracting officers early."
                        />
                    </div>
                </section>

                <section className="py-20 px-6 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-black text-stone-900 mb-4">Never miss an agency forecast update again.</h2>
                        <Link
                            href={`${APP_URL}/signup?utm_source=features_forecast_bottom`}
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
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-stone-900 mb-1">{title}</h3>
            <p className="text-sm text-stone-600 leading-relaxed">{body}</p>
        </div>
    );
}
