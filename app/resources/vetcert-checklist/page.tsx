import type { Metadata } from "next";
import Link from "next/link";
import {
    Award,
    ArrowRight,
    CheckSquare,
    Square,
    AlertTriangle,
} from "lucide-react";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";

export const metadata: Metadata = {
    title: "VetCert 2026 Checklist — Definitive SDVOSB / VOSB Readiness Guide",
    description: "The complete 14-point VetCert filing checklist. Every document, form, and control requirement you need before hitting submit. Updated for 2026 SBA requirements.",
};

const SECTIONS = [
    {
        title: "Entity documents",
        items: [
            "SAM.gov active registration with UEI",
            "Articles of incorporation or LLC operating agreement",
            "Ownership documents showing 51%+ veteran ownership",
            "DD-214 for every veteran owner (Member-4 copy)",
            "VA disability rating letter (SDVOSB only)",
        ],
    },
    {
        title: "Control documents",
        items: [
            "Bylaws showing veteran control of day-to-day operations",
            "Signature authority on primary bank account(s)",
            "Board resolutions / meeting minutes (last 12 months)",
            "Executive compensation records — veteran owner paid above all non-veterans",
        ],
    },
    {
        title: "Operational documents",
        items: [
            "Business license + state registration",
            "Federal tax returns (last 3 years)",
            "Financial statements (balance sheet + income statement)",
            "Payroll records documenting veteran control of compensation",
            "Operating agreement (if LLC) showing veteran managing-member status",
        ],
    },
];

export default function VetCertChecklistPage() {
    return (
        <>
            <SiteNav />
            <main className="pt-16">
                <section className="py-20 px-6 bg-gradient-to-b from-amber-50 via-white to-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            2026 VetCert Edition
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-stone-900 mb-6">
                            The VetCert
                            <br />
                            <span className="text-amber-700">Readiness Checklist.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
                            The SBA replaced CVE + Vets First with VetCert in 2023. Here&apos;s every document you need
                            before hitting submit — 14 items, organized by category, updated for 2026 requirements.
                        </p>
                        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 max-w-2xl mx-auto mb-10 text-left">
                            <div className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-900">
                                    <strong>Processing takes 60–90 days.</strong> Missing a single document restarts the
                                    clock. This checklist is the one we hand every client before they file.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 px-6">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {SECTIONS.map((s, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6">
                                <h2 className="font-bold text-lg text-stone-900 mb-4">{s.title}</h2>
                                <ul className="space-y-2">
                                    {s.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-stone-800">
                                            <Square className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16 px-6 bg-emerald-50 border-y border-emerald-100">
                    <div className="max-w-3xl mx-auto text-center">
                        <CheckSquare className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                        <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3">
                            Want this as a printable PDF + automated document tracking?
                        </h2>
                        <p className="text-stone-700 mb-6">
                            Get a fillable version + automated reminders as documents get collected inside CapturePilot.
                            Free with any account.
                        </p>
                        <Link
                            href={`${APP_URL}/signup?utm_source=resource_vetcert`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700"
                        >
                            Unlock in the app
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                <section className="py-20 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-4">
                            Don&apos;t have time to file this yourself?
                        </h2>
                        <p className="text-stone-600 mb-6">
                            Americurial handles the full VetCert pipeline — document collection, filing, follow-through —
                            for a fixed fee as part of our SAM Setup package.
                        </p>
                        <Link
                            href="https://www.americurial.com/services/govcon"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            See Americurial&apos;s VetCert service →
                        </Link>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
