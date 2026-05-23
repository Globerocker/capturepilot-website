import LpHero, { LpSocialProof, LpRiskReversal, LpFinalCta } from "@/components/LpHero";
import { BadgeCheck, Building2, FileCheck, ListChecks } from "lucide-react";

export default function FreeNaicsCheckPage() {
  return (
    <>
      <LpHero
        eyebrow="A free check, in about 30 seconds"
        headline="You probably qualify for"
        headlineAccent="more NAICS codes than you think"
        subhead="Most small businesses fit under three to five different industry codes, and each one opens up a different pile of federal contracts. Most owners only know one of them. Drop in your website and we'll figure out the rest."
        ctaLabel="Find my codes"
        variant="dark"
      />

      <LpSocialProof />

      {/* What you get */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
              What we'll send back
            </h2>
            <p className="text-stone-600 max-w-xl mx-auto">
              We look at what your website says you do, cross-check it against SAM and SBA records, and figure out which NAICS codes you can credibly claim. Then we show you the contracts already open under each one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BadgeCheck, title: "Your NAICS codes", desc: "Usually three to five, ranked by how well they actually fit what your business does." },
              { icon: Building2, title: "Whether you count as a small business", desc: "The SBA size standard depends on the code. We do the math per code so you don't have to." },
              { icon: FileCheck, title: "What's open right now", desc: "Live federal contracts for each of your codes, sorted by deadline and how good a match it is." },
              { icon: ListChecks, title: "What to do next", desc: "If you're not on SAM, we'll say so. If a certification would help, we'll say which one and why." },
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
            What this looks like in practice
          </h2>
          <p className="text-stone-600 text-center mb-8">
            Three businesses we've run through this, plus the codes that came back.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "An IT consultancy", codes: ["541512 — Computer Systems Design", "541519 — Other Computer Services", "541611 — Management Consulting"], oppCount: "About 1,200 open contracts" },
              { name: "A construction firm", codes: ["236220 — Commercial Building", "237310 — Highway / Street", "238210 — Electrical"], oppCount: "About 2,800 open contracts" },
              { name: "A janitorial service", codes: ["561720 — Janitorial Services", "561740 — Carpet Cleaning", "561210 — Facility Support"], oppCount: "About 900 open contracts" },
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
        headline="Find out what you qualify for"
        subhead="Takes about 30 seconds. No card, nothing to sign up for."
        label="Run the free check"
      />
    </>
  );
}
