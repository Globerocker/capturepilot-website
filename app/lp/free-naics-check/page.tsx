import LpHero, { LpSocialProof, LpRiskReversal, LpFinalCta } from "@/components/LpHero";
import { BadgeCheck, Building2, FileCheck, ListChecks } from "lucide-react";

export default function FreeNaicsCheckPage() {
  return (
    <>
      <LpHero
        eyebrow="Free NAICS Code Identification"
        headline="What NAICS Codes Does Your"
        headlineAccent="Business Qualify For?"
        subhead="Most small businesses qualify for 3-5 NAICS codes they never knew about — each one unlocks a different pool of federal contracts. Enter your website. See your codes in 30 seconds."
        ctaLabel="Find My NAICS Codes"
        variant="dark"
      />

      <LpSocialProof />

      {/* What you get */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              What the Free Check Tells You
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              We crawl your website, cross-reference SAM.gov and SBA databases, and identify every NAICS code your business can claim — plus the contracts open right now under each one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BadgeCheck, title: "Your NAICS Codes", desc: "3-5 codes identified from your website content + SAM data, ranked by best fit." },
              { icon: Building2, title: "SBA Size Standard", desc: "Per NAICS, we calculate whether you qualify as a small business (revenue or headcount based)." },
              { icon: FileCheck, title: "Open Contracts", desc: "Live federal opportunities matched to each NAICS — sorted by deadline and match score." },
              { icon: ListChecks, title: "Action Plan", desc: "Step-by-step what to do next: SAM registration, certifications worth pursuing, top agencies." },
            ].map((c, i) => (
              <div key={i} className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
                <div className="p-3 bg-white rounded-xl inline-block mb-4">
                  <c.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-black text-stone-900 mb-2 text-sm">{c.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS examples */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-stone-900 mb-3 text-center">
            Real Examples
          </h2>
          <p className="text-stone-600 text-center mb-8">
            Most businesses qualify for codes they'd never search for themselves.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "An IT consultancy", codes: ["541512 — Computer Systems Design", "541519 — Other Computer Services", "541611 — Management Consulting"], oppCount: "1,200+ active contracts" },
              { name: "A construction firm", codes: ["236220 — Commercial Building", "237310 — Highway / Street", "238210 — Electrical"], oppCount: "2,800+ active contracts" },
              { name: "A janitorial service", codes: ["561720 — Janitorial Services", "561740 — Carpet Cleaning", "561210 — Facility Support"], oppCount: "900+ active contracts" },
            ].map((ex, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-200 p-5">
                <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-3">{ex.name}</p>
                <ul className="space-y-1.5 mb-4">
                  {ex.codes.map((c) => (
                    <li key={c} className="text-xs font-mono text-stone-700">{c}</li>
                  ))}
                </ul>
                <p className="text-sm font-bold text-emerald-700">{ex.oppCount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LpRiskReversal />

      <LpFinalCta
        headline="Find Your NAICS Codes Now"
        subhead="30 seconds. Free. No signup."
        label="Run Free Check"
      />
    </>
  );
}
