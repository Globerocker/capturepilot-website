import LpHero, { LpSocialProof, LpRiskReversal, LpFinalCta } from "@/components/LpHero";
import { Search, Zap, Target, X, Check } from "lucide-react";

export default function SamGovAlternativePage() {
  return (
    <>
      <LpHero
        eyebrow="If SAM.gov is wearing you out"
        headline="You don't actually need to spend"
        headlineAccent="ten hours a week on SAM.gov"
        subhead="SAM.gov is a database. It dumps every contract in front of you and asks you to sort it out. We do the sorting first, then show you only what fits your business. Same data, much less of your week."
        ctaLabel="Show me what's a fit"
        variant="dark"
      />

      <LpSocialProof />

      {/* Comparison table */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-3">
              SAM.gov vs us, side by side
            </h2>
            <p className="text-stone-600">Same source data. Very different day-to-day.</p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-stone-50 border-b border-stone-200">
              <div className="p-4 font-bold text-stone-700">What you're doing</div>
              <div className="p-4 text-center font-bold text-stone-500">On SAM.gov</div>
              <div className="p-4 text-center font-bold text-emerald-700 bg-emerald-50">With CapturePilot</div>
            </div>
            {[
              ["Searching by keyword", "Slow, paginated, exact-match", "Fuzzy, ranked, instant"],
              ["Matching to your NAICS codes", "You filter manually", "Happens automatically, with a score"],
              ["Checking set-aside eligibility", "You read the fine print", "Pulled from your SAM profile"],
              ["Ranking the opportunities", "There isn't one", "0-100 per opportunity"],
              ["Getting notified about new ones", "Email subscriptions only", "Slack, email, or in-app"],
              ["Drafting a proposal", "Open Word, start from scratch", "AI draft based on the RFP"],
              ["Knowing who held it last", "Hidden in the award history", "On the opportunity page"],
              ["Capability statement", "Build it somewhere else", "Drafted from your website"],
              ["What it costs you", "Free, but eats your week", "$199/month, and you get the week back"],
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
          <h2 className="text-3xl md:text-4xl font-black mb-6">"Free" isn't really free</h2>
          <p className="text-lg text-stone-400 mb-10">
            If you spend ten hours a week searching SAM.gov and your time is worth $75 an hour, that's about <span className="text-emerald-400 font-bold">$3,000 a month</span> in opportunity cost. Pro is $199 and you mostly get the week back.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Search, label: "Daily search time", before: "1.5 hrs", after: "About 5 min" },
              { icon: Zap, label: "Time to find a fit", before: "20 min", after: "Instant" },
              { icon: Target, label: "How good is the match?", before: "You guess", after: "Scored 0-100" },
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
        headline="Skip the search, just see your matches"
        subhead="Drop in your website and we'll handle the rest. Takes about 30 seconds."
        label="Show me my matches"
      />
    </>
  );
}
