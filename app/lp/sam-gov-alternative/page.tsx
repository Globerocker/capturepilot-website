import LpHero, { LpSocialProof, LpRiskReversal, LpFinalCta } from "@/components/LpHero";
import { Search, Zap, Target, X, Check } from "lucide-react";

export default function SamGovAlternativePage() {
  return (
    <>
      <LpHero
        eyebrow="The SAM.gov Workflow Is Broken"
        headline="Stop Wasting Hours on"
        headlineAccent="SAM.gov Search"
        subhead="SAM.gov is a database, not an intelligence platform. CapturePilot scores every active federal contract against your business — automatically. See your matches in 30 seconds."
        ctaLabel="See My Matches"
        variant="dark"
      />

      <LpSocialProof />

      {/* Comparison table */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-3">
              SAM.gov vs CapturePilot
            </h2>
            <p className="text-stone-600">Same data. Radically different workflow.</p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200">
              <div className="p-4 font-bold text-stone-700">Workflow</div>
              <div className="p-4 text-center font-bold text-stone-500">SAM.gov</div>
              <div className="p-4 text-center font-bold text-emerald-700 bg-emerald-50">CapturePilot</div>
            </div>
            {[
              ["Keyword search", "Slow + paginated", "Real-time, semantic"],
              ["NAICS-based matching", "Manual filter", "Automatic, scored"],
              ["Set-aside eligibility check", "Read the fine print", "Auto-detected from your SAM profile"],
              ["Match scoring", "None", "0-100 per opportunity"],
              ["Daily alerts", "Email subscriptions only", "Slack + email + dashboard"],
              ["AI proposal drafting", "Not available", "Built in (GPT-4o)"],
              ["Competitor / incumbent intel", "Not surfaced", "Full award history per opportunity"],
              ["Capability statement", "Build elsewhere", "AI-drafted from your website"],
              ["Pricing", "Free (but costs you 10+ hrs/week)", "$199/mo Pro — saves 8+ hrs/week"],
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-stone-100 ${i % 2 ? "bg-stone-50/50" : ""}`}>
                <div className="p-4 text-sm text-stone-700">{row[0]}</div>
                <div className="p-4 text-sm text-stone-500 text-center flex items-center justify-center gap-1.5">
                  <X className="w-4 h-4 text-stone-400" /> {row[1]}
                </div>
                <div className="p-4 text-sm text-emerald-800 text-center bg-emerald-50/40 flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" /> {row[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The math */}
      <section className="py-16 px-6 bg-stone-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">The Real Cost of "Free"</h2>
          <p className="text-lg text-stone-400 mb-10">
            10 hours/week searching SAM.gov × $75/hr (your time) = <span className="text-emerald-400 font-bold">$3,000/month</span>. CapturePilot Pro is $199/mo and gives you back the time.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Search, label: "Daily search time", before: "1.5 hrs", after: "5 min" },
              { icon: Zap, label: "Time to find relevant opp", before: "20 min", after: "Instant" },
              { icon: Target, label: "Match quality", before: "Hit or miss", after: "Scored 0-100" },
            ].map((m, i) => (
              <div key={i} className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
                <m.icon className="w-6 h-6 text-emerald-400 mb-3 mx-auto" />
                <p className="text-xs uppercase tracking-wider text-stone-500 mb-2">{m.label}</p>
                <p className="text-xs text-stone-400 line-through">{m.before}</p>
                <p className="text-lg font-black text-emerald-400">{m.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LpRiskReversal />

      <LpFinalCta
        headline="Stop Searching. Start Winning."
        subhead="See what CapturePilot finds for you in 30 seconds."
        label="See My Matches"
      />
    </>
  );
}
