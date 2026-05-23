import LpHero, { LpSocialProof, LpRiskReversal, LpFinalCta } from "@/components/LpHero";
import { Shield, Award, Target, CheckCircle2 } from "lucide-react";

export default function SdvosbLandingPage() {
  return (
    <>
      <LpHero
        eyebrow="Built for Veteran-Owned Businesses"
        headline="SDVOSB Contracts Are Worth"
        headlineAccent="$20B Per Year"
        subhead="The federal government sets aside billions for Service-Disabled Veteran-Owned Small Businesses every year. Find your matching opportunities in 30 seconds — free, no signup."
        ctaLabel="Find My Contracts"
        trustSignals={[
          { icon: "shield", text: "VA + SAM verified" },
          { icon: "clock", text: "Results in 30 seconds" },
          { icon: "lock", text: "No credit card" },
        ]}
        variant="dark"
      />

      <LpSocialProof />

      {/* Why SDVOSB section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              Why SDVOSB Status Changes Everything
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Federal agencies have a 3% SDVOSB set-aside goal — and the VA goes much higher. Sole-source authority up to $5M means you can win without competition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Award, title: "Sole-Source Up to $5M", desc: "Contracting officers can award SDVOSB sole-source for any contract below $5M — no competition, no proposal war." },
              { icon: Target, title: "VA Prefers SDVOSBs", desc: "The VA awards 25-30% of every contract dollar to veteran-owned firms. That's $3B+ per year just at one agency." },
              { icon: Shield, title: "Set-Aside Protection", desc: "On full-and-open contracts, set-aside SDVOSB pools shrink the bidder count from hundreds to dozens." },
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
            What Your Free Check Finds
          </h2>
          <ul className="space-y-3">
            {[
              "Every active SDVOSB-eligible contract matched to your NAICS codes",
              "Your SAM.gov registration status (we tell you what's missing if you're not registered)",
              "Sole-source opportunities under $5M in your industry",
              "Top VA agency targets based on your services",
              "Match-score for each opportunity (0-100) so you know what to bid on first",
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
          "Free SDVOSB Quick Checker — no signup, no credit card",
          "20% off all plans for verified SDVOSB/VOSB firms — forever",
          "30-day full-Pro trial when you upgrade",
          "Cancel anytime, no contract",
        ]}
      />

      <LpFinalCta
        headline="See Your SDVOSB Opportunities Now"
        subhead="30 seconds. Free. No signup required."
        label="Run Free Check"
      />
    </>
  );
}
