import LpHero, { LpSocialProof, LpRiskReversal, LpFinalCta } from "@/components/LpHero";
import { Shield, Award, Target, CheckCircle2 } from "lucide-react";

export default function SdvosbLandingPage() {
  return (
    <>
      <LpHero
        eyebrow="If you're a veteran-owned business"
        headline="There's roughly $20 billion in federal work"
        headlineAccent="that nobody else can bid on"
        subhead="If you're SDVOSB or VOSB verified, agencies can hand you contracts without anyone else even bidding. Most veteran-owned firms never find out because SAM.gov doesn't filter for them. Drop in your website and we'll show you the ones you qualify for."
        ctaLabel="Show me my contracts"
        trustSignals={[
          { icon: "shield", text: "We check SAM and VA for you" },
          { icon: "clock", text: "Takes about 30 seconds" },
          { icon: "lock", text: "No card, no signup" },
        ]}
        variant="dark"
      />

      <LpSocialProof />

      {/* Why SDVOSB section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Why this status is worth filing for
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Every federal agency has a 3% SDVOSB target, and the VA goes way past that. Contracting officers can also hand SDVOSBs work up to $5M with no competition at all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Award, title: "No-competition awards up to $5M", desc: "A contracting officer can pick you for any SDVOSB contract under $5M. No bidding war, no proposal grind. They just call you." },
              { icon: Target, title: "The VA spends a quarter of its budget on you", desc: "Veterans Affairs awards somewhere around 25-30% of every contract dollar to veteran-owned firms. That's a few billion a year at one agency." },
              { icon: Shield, title: "Smaller bidder pools when there is a competition", desc: "On set-aside contracts, you're competing against dozens of firms instead of hundreds. The math gets a lot friendlier." },
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
                <div className="p-3 bg-white rounded-xl inline-block mb-4">
                  <c.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-black text-stone-900 mb-2">{c.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the check finds */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-8 text-center">
            What you actually get back
          </h2>
          <ul className="space-y-3">
            {[
              "Every open SDVOSB-eligible contract that matches your industry codes",
              "Whether your SAM.gov account is squared away, and what's missing if not",
              "The no-competition opportunities under $5M in your space",
              "Which VA offices are most likely to be your buyer",
              "A simple 0-100 score per opportunity so you know what to chase first",
            ].map((line, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl border border-stone-200 p-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LpRiskReversal
        items={[
          "The check itself costs nothing. No card on file.",
          "Verified SDVOSB and VOSB firms get 20% off every plan, forever.",
          "If you upgrade to Pro, the first 30 days are free.",
          "Cancel anytime from the dashboard. There's no contract.",
        ]}
      />

      <LpFinalCta
        headline="Let's see what you qualify for"
        subhead="Takes about half a minute. Nothing to install or sign up for."
        label="Run the free check"
      />
    </>
  );
}
