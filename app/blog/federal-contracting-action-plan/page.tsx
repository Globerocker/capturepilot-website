"use client";

import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
    ArrowRight,
    CheckCircle2,
    Target,
    Users,
    Handshake,
    Shield,
    Wrench,
    FileCheck,
    Repeat,
    Clock,
    Sparkles,
    ChevronRight,
    Lightbulb,
    AlertTriangle,
    Trophy,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const SIGNUP_URL = `${APP_URL}/signup`;
const CHECK_URL = `${APP_URL}/check`;

interface Phase {
    num: number;
    title: string;
    cadence: "ONCE" | "REPEAT";
    color: string;
    iconColor: string;
    icon: React.ReactNode;
    tagline: string;
    intro: string;
    steps: { title: string; body: string; tip?: string }[];
    capturePilotAngle: string;
}

const PHASES: Phase[] = [
    {
        num: 1,
        title: "Setup",
        cadence: "ONCE",
        color: "from-emerald-500 to-teal-600",
        iconColor: "text-emerald-600",
        icon: <Target className="w-6 h-6" />,
        tagline: "Lay the foundation — once — so every future phase is less painful.",
        intro:
            "Phase 1 is the paperwork phase. It's boring, it's annoying, and 80% of aspiring contractors quit here. Do it once, do it right, and you never have to do it again.",
        steps: [
            {
                title: "Choose the right business entity",
                body: "LLC, S-Corp, or C-Corp — pick the structure that matches your liability, tax, and investor strategy. For most first-time contractors this is an LLC (default) or S-Corp (if you'll have significant profit distributions). If you're pursuing 8(a), your entity structure must show single-owner majority control.",
                tip: "Talk to a CPA who has federal-contracting clients specifically. Generalists often miss DCAA accounting requirements that become critical on cost-reimbursable contracts later.",
            },
            {
                title: "Identify your NAICS codes",
                body: "NAICS codes are the federal government's industry taxonomy. Pick 3–6 codes that describe what you actually do, not every code you could fit under. The wrong NAICS either kills your size-standard eligibility or makes you invisible to the buyers looking for your capability.",
                tip: "Check your NAICS against the SBA's Size Standards table. A firm with 200 employees is a \"small business\" under some codes and a \"large business\" under others.",
            },
            {
                title: "Register on SAM.gov",
                body: "SAM.gov is mandatory. It's the system of record the entire federal government queries when vetting contractors. Registration takes 3–10 business days once you have your UEI, CAGE, IRS match, and bank info lined up — longer if anything trips the verification flags.",
                tip: "Do NOT pay a third-party service to register you. SAM.gov is free. Paid registration services are a scam vector that the FTC has warned about for years.",
            },
            {
                title: "Register on local + state procurement portals",
                body: "Federal is 60%+ of the opportunity, but state and local contracts are usually easier wins and build past performance faster. Register with your state's DGS, your city, your county, and any special districts (transit, airport authority, schools).",
            },
            {
                title: "Meet your local APEX Accelerator",
                body: "Every state has an APEX Accelerator (formerly PTACs) that provides free, one-on-one counseling to government contractors. Book an intake meeting. They'll review your SAM registration, help you pick NAICS, and critique your capability statement — for free.",
            },
            {
                title: "Build your capability statement",
                body: "Your capability statement is your one-page business card to the government. Core competencies, differentiators, NAICS codes, certifications, past performance, corporate data (UEI, CAGE, DUNS), and POC. Keep it to one page. Design matters — federal contracting officers scan them in 10 seconds.",
                tip: "Don't use a template that makes you look identical to 10,000 other small businesses. Spend the budget on a professional design.",
            },
        ],
        capturePilotAngle:
            "CapturePilot auto-generates a polished capability statement from your profile (logo, colors, NAICS, past performance) and exports to branded PDF or Google Doc. Onboarding takes ~8 minutes.",
    },
    {
        num: 2,
        title: "Business Development",
        cadence: "REPEAT",
        color: "from-indigo-500 to-blue-600",
        iconColor: "text-indigo-600",
        icon: <Users className="w-6 h-6" />,
        tagline: "Relationships win contracts. BD is a quarterly rhythm, not a one-time sprint.",
        intro:
            "Once your setup is clean, the game shifts to relationships. The winners in federal contracting don't respond to RFPs — they shape them, months before they post. Phase 2 is how you get there.",
        steps: [
            {
                title: "Identify your top 25 target buyers (not on SAM)",
                body: "Use USASpending.gov and agency forecasts to identify the 25 buying organizations most likely to need what you sell. Not agencies — sub-agencies, program offices, and specific contracting officers. The names that show up repeatedly on awards for your NAICS are the ones you should know by name.",
                tip: "Cross-reference award counts and dollar volume. A program office that buys a lot of small contracts is a better first target than one that makes one big award every three years.",
            },
            {
                title: "Set up meetings with government buyers",
                body: "Small Business Specialists (OSDBUs) take intro meetings. Their job is to connect small businesses to their agency's procurement forecast. Email, offer a 15-minute capability briefing, and come with a specific question about a program or upcoming recompete.",
            },
            {
                title: "Attend industry events",
                body: "Industry days, small-business matchmaking events, AFCEA/NDIA chapter meetings, agency Small Business forums. You don't need to attend everything — pick the 3–4 per year that touch your target buyers and go deep.",
            },
            {
                title: "Attend site visits",
                body: "When an RFP schedules a site visit, go — even if you're not bidding as prime. Site visits are where you meet primes, subs, and the COR face-to-face. Bring business cards and your capability statement.",
            },
            {
                title: "Get on the supplier list for your top 25 primes",
                body: "Every large prime (Lockheed, Raytheon, BAE, GDIT, Leidos, Booz Allen, etc.) has a small-business portal and an SBLO (Small Business Liaison Officer). Register on the portal, then email the SBLO directly referencing a specific contract or program you want to support.",
                tip: "SBLOs respond 3–4× better than cold contracting-officer outreach because primes are contractually required to hit small-business subcontracting goals.",
            },
            {
                title: "Monitor contract awards for subcontracting leads",
                body: "When a large prime wins a multi-year contract on USASpending, that's your lead. They need subs to deliver. Reach out within 2 weeks of the award — before they've locked in their sub team.",
            },
        ],
        capturePilotAngle:
            "CapturePilot's Partners page surfaces 800+ SBA-certified teaming partners pre-ranked by NAICS overlap with your profile. The Year-End Spend Radar on the dashboard flags agencies with large unobligated balances that match your codes.",
    },
    {
        num: 3,
        title: "Bidding",
        cadence: "REPEAT",
        color: "from-amber-500 to-orange-600",
        iconColor: "text-amber-600",
        icon: <FileCheck className="w-6 h-6" />,
        tagline: "Every bid is a mini-project. Run it like one.",
        intro:
            "Bidding is where most small businesses leak time. A disciplined bid process — same stages every time — turns proposal generation into repeatable workflow instead of hero effort.",
        steps: [
            {
                title: "Review immediate bid opportunities",
                body: "Filter SAM.gov for opportunities matching your NAICS, set-aside, and dollar range. Score each one with a bid/no-bid framework (fit, capability, past performance, competition, pricing headroom). Most small businesses bid too much — winners bid fewer, but the ones that match.",
            },
            {
                title: "Assemble the team for this opportunity",
                body: "The team depends on the solicitation. Prime or sub? Self-perform or teaming? Who's writing what section? Who's red-teaming? If you need a partner, Phase 2's relationships pay off here.",
            },
            {
                title: "Apply for vendor / supplier credit",
                body: "Government payment cycles run 30–60 days on invoicing, sometimes longer on first contracts. If you don't have working capital lines pre-approved with your bank and your suppliers, one mid-size award can strangle your cash flow.",
            },
            {
                title: "Respond to the solicitation (RFP, RFQ, RFI, task order)",
                body: "Build a compliance matrix mapping every \"shall\" to your proposal section and page number. Mirror the evaluation criteria in your structure. Don't narrate — prove. Past performance is weighted heavily; lead with it.",
                tip: "Plan backward from the deadline. Submit 24 hours early, not 5 minutes early — SAM.gov portals routinely crash near deadlines and the government's \"late is late\" rule is absolute.",
            },
            {
                title: "Evaluate bid results, win or lose",
                body: "Request a debrief on every loss. Federal contracting officers are required to provide them on request. The feedback is the single most valuable input to your next proposal — free competitive intelligence from the people you're trying to sell to.",
            },
        ],
        capturePilotAngle:
            "CapturePilot's AI Proposal Writer builds the compliance matrix, scores bid/no-bid fit, and drafts every section using your capability statement + past performance — cutting first-draft time from 40+ hours to under an hour.",
    },
    {
        num: 4,
        title: "Business Enhancement",
        cadence: "ONCE",
        color: "from-violet-500 to-purple-600",
        iconColor: "text-violet-600",
        icon: <Sparkles className="w-6 h-6" />,
        tagline: "Compound advantages. Each of these stacks with the next.",
        intro:
            "Phase 4 is the long game. Certifications, programs, and market positioning that you stack over 1–3 years to build an unfair advantage over generic competitors. Not urgent — but transformative.",
        steps: [
            {
                title: "Apply for small-business certifications",
                body: "Self-certify as a Small Business on SAM.gov (free, automatic). Then pursue the formal certifications you qualify for: WOSB/EDWOSB, SDVOSB/VOSB, HUBZone. Each one unlocks set-aside categories where competition is a fraction of open-market.",
            },
            {
                title: "Pursue 8(a) certification",
                body: "The 8(a) Business Development Program is the highest-leverage certification in federal contracting. It unlocks sole-source awards up to $4.5M ($7M manufacturing), mentor-protégé eligibility, and agency-specific set-asides. Requires 2+ years in business, socially + economically disadvantaged ownership, and clean financials.",
            },
            {
                title: "Join the Mentor-Protégé Program",
                body: "Once 8(a), pair with a large mentor through the SBA's All Small Mentor-Protégé Program. Mentor-protégé joint ventures can pursue contracts the protégé couldn't qualify for alone — and the mentor's past performance counts toward the JV's qualifications.",
            },
            {
                title: "Focus on self-performance capability",
                body: "\"We team with everybody\" is not a differentiator — it's a red flag. Federal buyers prefer primes who self-perform 50%+ of the work because it reduces subcontracting risk. Build one or two deep self-performance capabilities and lead with them.",
            },
            {
                title: "Find better partners",
                body: "The teaming partners that got you your first 3–5 contracts are not necessarily the ones that scale with you to the next level. Periodically re-evaluate your partner bench and upgrade.",
            },
            {
                title: "Speak at industry events",
                body: "Once you have 2–3 wins, submit to speak at an industry conference or agency small business day. Speaking positions you as the subject-matter expert in your niche, which is worth more than a dozen marketing campaigns.",
            },
        ],
        capturePilotAngle:
            "CapturePilot's Quick Checker analyzes your current certifications against what set-asides would maximize your win-rate, and the Partners directory flags 8(a) mentor candidates in your NAICS space.",
    },
    {
        num: 5,
        title: "Contract Management",
        cadence: "REPEAT",
        color: "from-stone-600 to-stone-800",
        iconColor: "text-stone-700",
        icon: <Wrench className="w-6 h-6" />,
        tagline: "Winning is 50%. Delivering is the other 50%.",
        intro:
            "Winning a federal contract is a milestone; managing it is a discipline. Phase 5 is the compliance and execution workflow that protects your past performance (and your CPARS ratings) so the second contract is easier than the first.",
        steps: [
            {
                title: "Register in PIEE and WAWF",
                body: "For DoD contracts, PIEE (Procurement Integrated Enterprise Environment) is where you invoice and submit receiving reports via WAWF. Registration has its own role-based approval process — start it the week you're notified of award, not the week invoices are due.",
            },
            {
                title: "Manage subcontractor compliance",
                body: "If you're a prime with subs, you're responsible for their compliance too: small-business subcontracting reports (SSR), flow-down clauses, and payment timeliness. Miss a flow-down and you own the risk when your sub does.",
            },
            {
                title: "Manage project compliance",
                body: "Deliverables on time, in the right format, to the right POC. Document everything. Your CPARS (Contractor Performance Assessment Report) is how the next contracting officer decides whether to believe your past performance claims — it follows you for 3 years after contract end.",
            },
            {
                title: "Communicate proactively with the CO",
                body: "Silence is the enemy. Send short status updates even when nothing's wrong. When something does go wrong — and it will — the contracting officer who trusts you is infinitely easier to work with than the one who's been waiting for status.",
            },
        ],
        capturePilotAngle:
            "CapturePilot's Pipeline tracks every pursuit through award + delivery, surfaces CPARS-relevant milestones, and drafts stakeholder updates so communication is a 2-minute task, not an unfinished to-do.",
    },
];

export default function FederalContractingActionPlanPage() {
    return (
        <main className="bg-stone-50 min-h-screen">
            <SiteNav />

            {/* Hero */}
            <section className="pt-28 pb-10 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full mb-5">
                        <Target className="w-3.5 h-3.5" /> STRATEGY · 14 MIN READ
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-[1.05] mb-5">
                        The Federal Contracting Action Plan: 5 Phases From Setup to Award
                    </h1>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Every small business that scales in federal contracting follows the same arc. Two of the five phases are one-time setup work. Three are ongoing rhythms. Most failed contractors run Phases 2, 3, and 5 like one-time projects — which is exactly why they stall after the first contract.
                    </p>
                    <p className="text-sm text-stone-500 mt-3">By CapturePilot · Updated 2026-04-17</p>
                </div>
            </section>

            {/* Cadence callout */}
            <section className="px-6 pb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                        <h2 className="text-sm font-bold text-stone-900 mb-3 flex items-center gap-2">
                            <Repeat className="w-4 h-4 text-indigo-600" />
                            Before you start — get the cadence right
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-emerald-700 mb-1">One-time phases</div>
                                <ul className="space-y-1 text-emerald-900">
                                    <li>• <strong>Phase 1 — Setup</strong> (2–4 weeks)</li>
                                    <li>• <strong>Phase 4 — Business Enhancement</strong> (1–3 years, at your pace)</li>
                                </ul>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-indigo-700 mb-1">Ongoing phases</div>
                                <ul className="space-y-1 text-indigo-900">
                                    <li>• <strong>Phase 2 — Business Development</strong> (weekly)</li>
                                    <li>• <strong>Phase 3 — Bidding</strong> (per opportunity)</li>
                                    <li>• <strong>Phase 5 — Contract Management</strong> (per contract)</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-xs text-stone-500 mt-4 italic">
                            If you remember one thing: Phases 2, 3, and 5 <strong>never end</strong>. They compound — the firms that treat them as quarterly rhythms out-earn firms that treat them as project-based efforts by an order of magnitude.
                        </p>
                    </div>
                </div>
            </section>

            {/* Phases */}
            {PHASES.map(phase => (
                <section key={phase.num} className="px-6 pb-14">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} text-white rounded-2xl flex items-center justify-center shadow-sm`}>
                                    {phase.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
                                        Phase {phase.num}
                                        <span className={`ml-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold ${
                                            phase.cadence === "ONCE"
                                                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                                                : "bg-indigo-100 text-indigo-700 border border-indigo-200"
                                        }`}>
                                            {phase.cadence === "ONCE" ? <CheckCircle2 className="w-2.5 h-2.5" /> : <Repeat className="w-2.5 h-2.5" />}
                                            {phase.cadence}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tight text-black">{phase.title}</h2>
                                </div>
                            </div>
                            <p className="text-lg text-stone-700 font-medium mb-2">{phase.tagline}</p>
                            <p className="text-stone-600 leading-relaxed">{phase.intro}</p>
                        </div>

                        <div className="space-y-3">
                            {phase.steps.map((s, i) => (
                                <div key={i} className="bg-white border border-stone-200 rounded-2xl p-5 shadow-sm">
                                    <h3 className="text-base font-bold text-black mb-2 flex items-start gap-2">
                                        <span className="font-mono text-stone-400 text-sm flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                        <span>{s.title}</span>
                                    </h3>
                                    <p className="text-sm text-stone-700 leading-relaxed mb-2">{s.body}</p>
                                    {s.tip && (
                                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
                                            <div className="flex items-start gap-2 text-xs text-amber-900">
                                                <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-600" />
                                                <div><strong>Pro tip:</strong> {s.tip}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-stone-900 to-black text-white rounded-2xl p-5 mt-5">
                            <div className="flex items-start gap-3">
                                <Sparkles className={`w-5 h-5 ${phase.iconColor} flex-shrink-0 mt-0.5`} />
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">How CapturePilot helps</div>
                                    <p className="text-sm text-white/90">{phase.capturePilotAngle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* The hidden rule */}
            <section className="px-6 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                            <h2 className="text-xl font-bold text-black">The single rule that separates winners from stallers</h2>
                        </div>
                        <p className="text-stone-700 leading-relaxed mb-4">
                            Every federal contractor who scales past the first $1M in revenue understands this: <strong>bidding is Phase 3, not Phase 1.</strong> You don't find federal work by searching SAM.gov. You find it by running Phase 2 — relationships with your top 25 buyers and top 25 primes — so that by the time the RFP posts, you already know the PWS, the incumbent, the evaluation priorities, and whether you have a real shot.
                        </p>
                        <p className="text-stone-700 leading-relaxed">
                            The firms that skip Phase 2 and try to make up for it with volume in Phase 3 end up with 2–5% win rates, burn out their proposal teams, and quit the market within two years. The firms that run Phase 2 quarterly win 30–45% of the opportunities they bid on.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-10 text-center">
                        <Trophy className="w-10 h-10 mx-auto mb-4 text-amber-300" />
                        <h2 className="text-3xl font-bold mb-3">The 5-phase plan, executed for you</h2>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            CapturePilot handles the grunt-work of every phase: capability statement generation (Phase 1), agency + teaming-partner ranking (Phase 2), AI proposal drafting with compliance matrix (Phase 3), certification-fit analysis (Phase 4), and pipeline tracking through delivery (Phase 5). It's the plan above, turned into software.
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

            {/* Related reading */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">Keep reading</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link href="/resources/agency-pain-points" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
                            <Target className="w-5 h-5 text-stone-400 mb-2" />
                            <div className="font-bold text-black text-sm mb-1">Agency Pain Points</div>
                            <p className="text-xs text-stone-500">How to pick the right target agencies.</p>
                            <ChevronRight className="w-4 h-4 text-stone-400 mt-2" />
                        </Link>
                        <Link href="/resources/bid-checklist" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
                            <FileCheck className="w-5 h-5 text-stone-400 mb-2" />
                            <div className="font-bold text-black text-sm mb-1">17-Step Bid Checklist</div>
                            <p className="text-xs text-stone-500">Don't skip a step on your next proposal.</p>
                            <ChevronRight className="w-4 h-4 text-stone-400 mt-2" />
                        </Link>
                        <Link href="/blog/subcontracting-government-contracts" className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-stone-400 transition-colors">
                            <Handshake className="w-5 h-5 text-stone-400 mb-2" />
                            <div className="font-bold text-black text-sm mb-1">Subcontracting Your Way In</div>
                            <p className="text-xs text-stone-500">The fastest path to federal revenue.</p>
                            <ChevronRight className="w-4 h-4 text-stone-400 mt-2" />
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}
