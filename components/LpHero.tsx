"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Lock, Clock, Shield, Star } from "lucide-react";
import { track } from "@/lib/analytics";

interface LpHeroProps {
  /** Top eyebrow text — e.g. "FREE FOR VETERAN-OWNED BUSINESSES". */
  eyebrow: string;
  /** Big headline. */
  headline: string;
  /** Highlight word(s) (renders in emerald). Optional. */
  headlineAccent?: string;
  /** Sub-headline / value prop. */
  subhead: string;
  /** Quick Checker URL-input is the default conversion. Override here. */
  ctaLabel?: string;
  /** Where to send the URL submit. Defaults to app.capturepilot.com/check?url=. */
  checkBaseUrl?: string;
  /** Optional: replace URL input with a direct CTA link. */
  primaryCta?: { label: string; href: string };
  /** Trust signals row (max 3). */
  trustSignals?: { icon: "lock" | "clock" | "shield"; text: string }[];
  /** Background style. */
  variant?: "dark" | "light";
}

const ICONS = { lock: Lock, clock: Clock, shield: Shield };

export default function LpHero({
  eyebrow,
  headline,
  headlineAccent,
  subhead,
  ctaLabel = "Run Free Check",
  checkBaseUrl = "https://app.capturepilot.com/check",
  primaryCta,
  trustSignals = [
    { icon: "lock", text: "No signup required" },
    { icon: "clock", text: "Results in 30 seconds" },
    { icon: "shield", text: "100% free" },
  ],
  variant = "dark",
}: LpHeroProps) {
  const [url, setUrl] = useState("");

  function go() {
    if (primaryCta) return;
    const trimmed = url.trim();
    if (!trimmed) return;
    track("check_started", { url: trimmed, source: "lp_hero" });
    window.location.href = `${checkBaseUrl}?url=${encodeURIComponent(trimmed)}`;
  }

  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden ${
        isDark ? "bg-stone-950 text-white" : "bg-stone-50 text-stone-900"
      } pt-12 pb-16 md:pt-20 md:pb-24 px-6`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 opacity-80 hover:opacity-100">
          <Image src="/logo.png" alt="CapturePilot" width={28} height={28} className={`rounded-lg ${isDark ? "invert" : ""}`} />
          <span className="font-bold text-sm">CapturePilot</span>
        </Link>

        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 ${
          isDark ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300" : "bg-emerald-100 text-emerald-700"
        }`}>
          {eyebrow}
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
          {headline}{" "}
          {headlineAccent && <span className="text-emerald-400">{headlineAccent}</span>}
        </h1>

        <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${isDark ? "text-stone-300" : "text-stone-600"}`}>
          {subhead}
        </p>

        {primaryCta ? (
          <Link
            href={primaryCta.href}
            onClick={() => track("signup_clicked", { source: "lp_hero", cta: primaryCta.label })}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
          >
            {primaryCta.label} <ArrowRight className="w-5 h-5" />
          </Link>
        ) : (
          <div className="max-w-xl mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && go()}
                  placeholder="Enter your company website"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    isDark
                      ? "bg-stone-900 border border-stone-700 text-white placeholder-stone-500"
                      : "bg-white border border-stone-300 text-stone-900 placeholder-stone-400"
                  }`}
                />
              </div>
              <button
                onClick={go}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold text-base shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 whitespace-nowrap transition-all hover:scale-105"
              >
                {ctaLabel} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm ${isDark ? "text-stone-400" : "text-stone-500"}`}>
          {trustSignals.map((t, i) => {
            const Icon = ICONS[t.icon];
            return (
              <span key={i} className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 opacity-60" /> {t.text}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LpSocialProof() {
  return (
    <section className="py-10 px-6 bg-white border-y border-stone-100">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { stat: "40,000+", label: "Active federal opportunities" },
            { stat: "$2.7B+", label: "Tracked contract value" },
            { stat: "< 30 sec", label: "Average check time" },
            { stat: "4.8 / 5", label: "Customer rating" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-2xl md:text-3xl font-black text-stone-900">{s.stat}</p>
              <p className="text-xs md:text-sm text-stone-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LpRiskReversal({ items }: { items?: string[] }) {
  const defaults = [
    "No credit card required for the free check",
    "30-day full-feature trial with one click",
    "Cancel anytime — no contract, no hassle",
    "Veteran discount: 20% off forever, verified via SAM.gov",
  ];
  const list = items ?? defaults;

  return (
    <section className="py-16 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="w-5 h-5 text-emerald-600" />
          <h2 className="text-2xl md:text-3xl font-black text-stone-900">Zero Risk to Try</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {list.map((it, i) => (
            <div key={i} className="bg-white rounded-xl border border-stone-200 p-4 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                ✓
              </div>
              <p className="text-sm text-stone-700">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LpFinalCta({
  headline = "Ready to See What You Qualify For?",
  subhead = "30 seconds. Free. No signup.",
  label = "Run Free Check",
  href = "https://app.capturepilot.com/check",
}: {
  headline?: string;
  subhead?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="py-20 px-6 bg-stone-950 text-white text-center relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]" />
      <div className="relative max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-4">{headline}</h2>
        <p className="text-lg text-stone-400 mb-8">{subhead}</p>
        <Link
          href={href}
          onClick={() => track("signup_clicked", { source: "lp_final_cta" })}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
        >
          {label} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
