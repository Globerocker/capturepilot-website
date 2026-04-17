"use client";

import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
    ArrowRight,
    Target,
    Zap,
    Award,
    Wrench,
    Building2,
    Siren,
    Truck,
    FlaskConical,
    Users,
    Flame,
    CheckCircle2,
    Shield,
    Clock,
    BarChart3,
    TrendingUp,
    Sparkles,
    Rocket,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

interface PainPoint {
    title: string;
    icon: React.ReactNode;
    bg: string;
    problem: string;
    opportunity: string;
    bestFor: string;
    agencies: string[];
    action: string;
}

const PAIN_POINTS: PainPoint[] = [
    {
        title: "Year-End Spending Urgency (Q4)",
        icon: <Clock className="w-6 h-6" />,
        bg: "from-rose-500 to-pink-600",
        problem: "Agencies must obligate allocated FY budgets before September 30 or lose the money. Unobligated balances can easily run into the tens of billions across major agencies in the final weeks.",
        opportunity: "Q4 RFPs with accelerated response windows, simplified procurement thresholds ($50K–$500K), and decision-makers who value speed over sophistication.",
        bestFor: "Businesses that can mobilize quickly, quote on short notice, and start work within 14 days of award.",
        agencies: ["All agencies — July through September", "DoD components historically have the largest Q4 push"],
        action: "Monitor SAM.gov for postings with \"response due in 7–14 days\" between July 1 and September 20.",
    },
    {
        title: "Small-Business Set-Aside Quotas",
        icon: <Award className="w-6 h-6" />,
        bg: "from-emerald-500 to-green-600",
        problem: "Federal agencies carry statutory small-business contracting goals (23% government-wide; higher for specific programs) and are actively scored on whether they hit them. Many miss in tight-quarter scenarios.",
        opportunity: "Sole-source authority under $4.5M for 8(a), set-aside competitions with 2–5 competitors instead of 20+, expedited procurement timelines.",
        bestFor: "Certified small businesses — 8(a), WOSB/EDWOSB, HUBZone, SDVOSB/VOSB — with clean SAM registrations and capability statements ready to send.",
        agencies: ["DHS — strong small-business program", "DoD — component-level goals", "DOE — active outreach", "DOT — transportation focus"],
        action: "If you hold a certification, these agencies should be your top three targets before any open-market competition.",
    },
    {
        title: "Specialized Technical Expertise Gaps",
        icon: <FlaskConical className="w-6 h-6" />,
        bg: "from-indigo-500 to-blue-600",
        problem: "Agencies need niche capabilities (cybersecurity, nuclear, satellite, missile defense) faster than they can build internal hiring pipelines.",
        opportunity: "Less competition per opportunity, higher margins, longer relationship runways once you're in.",
        bestFor: "Firms with deep expertise in one domain plus relevant clearances, certifications, or past-performance in that exact specialty.",
        agencies: ["Space Force — newest agency, smallest qualified pool", "DOE — nuclear and clean-energy specialization", "DHS — cyber and border tech", "Missile Defense Agency — sensors and integration"],
        action: "Focus on 1–2 specialty areas where you can out-pitch any generalist — not on breadth.",
    },
    {
        title: "Legacy System Modernization",
        icon: <Wrench className="w-6 h-6" />,
        bg: "from-amber-500 to-orange-600",
        problem: "Nearly every federal agency is operating mission-critical systems built 15–30 years ago. Modernization mandates (TMF, Cloud Smart, Zero Trust) have accelerated but the contractor pool is strained.",
        opportunity: "Multi-year task orders across civilian and defense. IT modernization is one of the largest line items in nearly every agency budget.",
        bestFor: "IT services providers, cloud-migration specialists, software development shops, systems integrators, cybersecurity firms.",
        agencies: ["Every agency — truly no exceptions", "DoD enterprise systems are the biggest single bucket"],
        action: "Lead with a legacy-system case study in every capability statement. It's the universal pain point.",
    },
    {
        title: "Construction & Facilities Maintenance",
        icon: <Building2 className="w-6 h-6" />,
        bg: "from-stone-600 to-stone-800",
        problem: "Military bases, federal buildings, and infrastructure carry chronic maintenance backlogs. Aging facilities keep demand constant regardless of budget cycle.",
        opportunity: "Recurring O&M contracts, BOS (Base Operating Support) recompetes, task-order construction vehicles (MATOC, SABER, JOC).",
        bestFor: "General contractors, facility management firms, specialty trades (HVAC, electrical, roofing), and small-business construction teams with bonding capacity.",
        agencies: ["Army — base maintenance and facility operations", "Navy — shipyard facilities and base ops", "Air Force — infrastructure recapitalization", "GSA — federal building portfolio", "DOT — infrastructure programs"],
        action: "Get on SABER/JOC vehicles and position for BOS recompetes 12–18 months before they hit SAM.",
    },
    {
        title: "Rapid Response & Emergency Needs",
        icon: <Siren className="w-6 h-6" />,
        bg: "from-red-500 to-red-700",
        problem: "Disasters, contingencies, and unexpected operational needs force agencies into simplified-acquisition mode with short timelines.",
        opportunity: "Fast-response capability becomes the deciding factor. Pricing sensitivity drops when speed matters more than the last 10% of cost.",
        bestFor: "Firms with 24/7 mobilization, pre-positioned resources, flexible staffing, and field-ready logistics.",
        agencies: ["FEMA — disaster response and recovery", "DHS — emergency preparedness", "DoD — rapid-deployment task orders", "HHS — public health surges"],
        action: "Pre-stage capability statements for emergency response and register on FEMA/GSA disaster vendor lists before you need them.",
    },
    {
        title: "Supply Chain & Logistics Challenges",
        icon: <Truck className="w-6 h-6" />,
        bg: "from-teal-500 to-cyan-600",
        problem: "Post-2020 supply chain volatility made agencies hyper-aware of vendor reliability. DLA and GSA in particular rebuild supplier panels routinely.",
        opportunity: "Recurring supply contracts, GSA Multiple Award Schedules, DLA long-term agreements. Volume over margin.",
        bestFor: "Manufacturers, distributors, logistics firms, office and equipment suppliers, domestic-content producers.",
        agencies: ["DLA — military supply chain", "GSA — federal supply schedules and MAS", "Every agency — consumables and equipment"],
        action: "Get on GSA MAS first; everything else gets easier once you have the vehicle.",
    },
    {
        title: "Research & Development Innovation",
        icon: <Sparkles className="w-6 h-6" />,
        bg: "from-purple-500 to-fuchsia-600",
        problem: "Agencies need emerging-tech capability (AI/ML, quantum, autonomy, advanced materials) but can't hire or build it in-house fast enough.",
        opportunity: "Dedicated programs with lower barrier to entry — SBIR/STTR, OTA agreements, BAA solicitations, innovation cells.",
        bestFor: "R&D firms, deep-tech startups, engineering teams with university partnerships, scientists and researchers.",
        agencies: ["DARPA — cutting-edge research", "Air Force RDT&E + AFWERX", "Navy ONR", "DOE national labs", "Every agency runs SBIR"],
        action: "SBIR Phase I is under $300K and non-dilutive. It's the cleanest way to land a first federal contract without competing against incumbents.",
    },
];

interface StrengthMatch {
    strength: string;
    targets: string[];
    priority: "HIGH" | "MEDIUM-HIGH" | "MEDIUM";
    reason: string;
}

const STRENGTH_MATRIX: StrengthMatch[] = [
    { strength: "Certified small business (8(a), WOSB, HUBZone, SDVOSB)", targets: ["DHS", "DoD", "DOE", "DOT"], priority: "HIGH", reason: "Active small-business programs with sole-source authority." },
    { strength: "IT / cybersecurity / software", targets: ["DHS", "DoD", "All civilian agencies"], priority: "HIGH", reason: "Modernization mandates every agency is under pressure to execute." },
    { strength: "Construction / facilities / trades", targets: ["Army", "Navy", "Air Force", "GSA"], priority: "HIGH", reason: "Chronic backlog; recurring demand." },
    { strength: "Technical specialist (aerospace, nuclear, RF)", targets: ["Space Force", "DOE", "MDA"], priority: "HIGH", reason: "Narrow contractor pool; longer relationships." },
    { strength: "Fast-response / 24-7 capacity", targets: ["FEMA", "DHS", "Q4 agencies"], priority: "MEDIUM-HIGH", reason: "Speed is the deciding factor, not price." },
    { strength: "R&D / deep tech", targets: ["DARPA", "Air Force RDT&E", "SBIR programs"], priority: "MEDIUM-HIGH", reason: "Dedicated innovation vehicles, less competition." },
    { strength: "Manufacturing / distribution", targets: ["DLA", "GSA", "All agencies"], priority: "MEDIUM", reason: "Recurring volume; supplier stability matters." },
    { strength: "New to GovCon (no past performance)", targets: ["DHS", "DOT", "Tier-2 primes (subcontracting)"], priority: "HIGH", reason: "Most accessible small-business programs and subcontracting portals." },
];

export default function AgencyPainPointsPage() {
    return (
        <main className="bg-stone-50 min-h-screen">
            <SiteNav />

            {/* Hero */}
            <section className="pt-28 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
                        <Target className="w-3.5 h-3.5" /> STRATEGIC GUIDE · 12 MIN READ
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-[1.05] mb-5">
                        Agency Pain Points: How to Pick Target Agencies That Actually Buy
                    </h1>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Stop bidding on random opportunities. The small businesses that actually win federal work pick <strong>3–5 target agencies</strong> whose pain points match their strengths — then build relationships there. This guide shows you how to do the same.
                    </p>
                </div>
            </section>

            {/* Core principle */}
            <section className="px-6 pb-14">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center">
                                <Flame className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-black mb-2">Agency pain points = your business opportunities</h2>
                                <p className="text-stone-700 leading-relaxed">
                                    Every federal agency has predictable, recurring problems — Q4 spending urgency, small-business quotas, legacy modernization, base maintenance backlogs. If your capabilities address a pain point, you're a <em>solution provider</em>. If they don't, you're just another no-differentiator bidder competing on price. This is the single highest-leverage decision in GovCon strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8 pain points */}
            <section className="px-6 pb-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-3">The 8 agency pain-point categories</h2>
                        <p className="text-stone-600">Each one creates a specific kind of buying urgency. Match your strengths to one or two, not all eight.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {PAIN_POINTS.map((p, i) => (
                            <article key={i} className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 bg-gradient-to-br ${p.bg} text-white rounded-2xl flex items-center justify-center mb-4`}>
                                    {p.icon}
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                                    <span className="text-stone-400 font-mono text-sm mr-2">#{i + 1}</span>{p.title}
                                </h3>
                                <div className="space-y-3 text-sm text-stone-700">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-rose-600 font-bold block">The problem</span>
                                        <p>{p.problem}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold block">Your opportunity</span>
                                        <p>{p.opportunity}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block">Best for</span>
                                        <p>{p.bestFor}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-indigo-600 font-bold block">Target agencies</span>
                                        <ul className="list-disc list-inside space-y-0.5">
                                            {p.agencies.map((a, j) => <li key={j}>{a}</li>)}
                                        </ul>
                                    </div>
                                    <div className="pt-2 border-t border-stone-100">
                                        <span className="text-[10px] uppercase tracking-widest text-amber-700 font-bold block">Action</span>
                                        <p className="italic">{p.action}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strength matrix */}
            <section className="px-6 pb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-3">Match your strengths to agencies</h2>
                        <p className="text-stone-600">Find your strongest attribute in the left column. The right side tells you which agencies to target first.</p>
                    </div>
                    <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
                        <div className="hidden md:grid grid-cols-12 text-[10px] uppercase tracking-widest text-stone-500 font-bold border-b border-stone-200 bg-stone-50">
                            <div className="col-span-4 px-5 py-3">Your strength</div>
                            <div className="col-span-4 px-5 py-3">Prioritize these agencies</div>
                            <div className="col-span-1 px-5 py-3">Priority</div>
                            <div className="col-span-3 px-5 py-3">Why</div>
                        </div>
                        {STRENGTH_MATRIX.map((row, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-12 border-b border-stone-100 last:border-0 text-sm">
                                <div className="col-span-4 px-5 py-4 font-bold text-black">{row.strength}</div>
                                <div className="col-span-4 px-5 py-4 text-stone-700">
                                    <div className="flex flex-wrap gap-1.5">
                                        {row.targets.map((t, j) => (
                                            <span key={j} className="text-xs font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-1 px-5 py-4">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                                        row.priority === "HIGH" ? "bg-emerald-100 text-emerald-700" :
                                        row.priority === "MEDIUM-HIGH" ? "bg-amber-100 text-amber-700" :
                                        "bg-stone-100 text-stone-600"
                                    }`}>{row.priority}</span>
                                </div>
                                <div className="col-span-3 px-5 py-4 text-stone-600">{row.reason}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4-week action plan */}
            <section className="px-6 pb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-3">The 4-week action plan</h2>
                        <p className="text-stone-600">Take this guide from theory to first SBLO email in 30 days.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { week: 1, title: "Self-assessment", icon: <CheckCircle2 className="w-5 h-5" />, items: ["Score your speed, specialization, certifications, capacity, geography", "List every cert + industry focus + R&D capability", "Identify your top 3 strengths"] },
                            { week: 2, title: "Agency research", icon: <BarChart3 className="w-5 h-5" />, items: ["Pull USASpending top-10 buyers for your NAICS", "Cross-reference agency pain points vs. your strengths", "Score each agency by profile fit"] },
                            { week: 3, title: "Prioritization", icon: <Target className="w-5 h-5" />, items: ["Lock in your top 5 target agencies", "Find SBLO + contracting officer contacts", "Build agency-specific capability statements"] },
                            { week: 4, title: "Outreach", icon: <Rocket className="w-5 h-5" />, items: ["Email top 5 SBLOs referencing a specific pain point", "Request a 15-min intro call per agency", "Track responses, follow up in 7 days"] },
                        ].map((phase, i) => (
                            <div key={i} className="bg-white border border-stone-200 rounded-3xl p-5 shadow-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 bg-black text-white rounded-xl flex items-center justify-center">
                                        {phase.icon}
                                    </div>
                                    <div>
                                        <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Week {phase.week}</div>
                                        <div className="font-bold text-black">{phase.title}</div>
                                    </div>
                                </div>
                                <ul className="space-y-1.5 text-sm text-stone-700">
                                    {phase.items.map((it, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <span className="text-emerald-600 mt-0.5">•</span>
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="px-6 pb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-br from-stone-900 to-black text-white rounded-3xl p-8 sm:p-12">
                        <div className="flex items-center gap-2 mb-2 text-emerald-400">
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-sm font-bold">What "good" looks like</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-6 leading-tight">Structured agency targeting dramatically outperforms the spray-and-pray approach.</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { k: "60%+", v: "SBLO email response rate", sub: "(vs. 10–20% generic)" },
                                { k: "24–48 hr", v: "Response turnaround", sub: "(vs. 1–2 weeks generic)" },
                                { k: "30–45%", v: "Proposal win rate", sub: "(vs. 2–5% generic)" },
                                { k: "3–6 mo", v: "Time to first contract", sub: "(vs. 12–18 months generic)" },
                            ].map((m, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                                    <div className="text-3xl font-bold text-emerald-300 mb-1">{m.k}</div>
                                    <div className="text-sm font-bold text-white">{m.v}</div>
                                    <div className="text-xs text-white/60 mt-0.5">{m.sub}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-white/50 mt-6 italic">Benchmarks based on published industry data from small-business federal-contracting cohorts; individual results vary with certifications, past performance, and market timing.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-10 text-center">
                        <Zap className="w-10 h-10 mx-auto mb-4 text-amber-300" />
                        <h2 className="text-3xl font-bold mb-3">Skip weeks 1–3 — let CapturePilot do the work</h2>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            CapturePilot scores every federal agency against your profile automatically, surfaces Q4 unobligated-balance intel on your dashboard, and maintains a directory of 800+ SBA-certified teaming partners filtered by your NAICS codes. The 30-day plan above is a one-click result.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href={SIGNUP_URL} className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-amber-50 transition-colors">
                                Start free — 30-day trial <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href={CHECK_URL} className="bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-emerald-900 transition-colors border border-emerald-500">
                                Try the Quick Checker <Shield className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related resources */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Related guides</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link href="/resources/bid-checklist" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
                            <Users className="w-5 h-5 text-stone-400 mb-2" />
                            <div className="font-bold text-black text-sm mb-1">17-Step Bid Checklist</div>
                            <p className="text-xs text-stone-500">Every step of the proposal lifecycle.</p>
                        </Link>
                        <Link href="/resources/quick-checker-guide" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
                            <Shield className="w-5 h-5 text-stone-400 mb-2" />
                            <div className="font-bold text-black text-sm mb-1">Quick Checker Guide</div>
                            <p className="text-xs text-stone-500">Analyze any company in 60 seconds.</p>
                        </Link>
                        <Link href="/resources/proposal-template" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
                            <Target className="w-5 h-5 text-stone-400 mb-2" />
                            <div className="font-bold text-black text-sm mb-1">Proposal Template</div>
                            <p className="text-xs text-stone-500">Battle-tested sections to lift from.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
