"use client";

import { Shield, Target, FileText, Zap, BarChart3, ArrowRight } from "lucide-react";

export default function LinkedInBanner() {
  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center justify-center gap-12 p-8">
      {/* Instructions */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-stone-800 mb-2">LinkedIn Banner Generator</h1>
        <p className="text-stone-500 text-sm">Screenshot the banner below at exactly 1584 × 396px (LinkedIn recommended size)</p>
        <p className="text-stone-400 text-xs mt-1">Tip: Use browser zoom to fit, then screenshot. Or use Cmd+Shift+4 on Mac.</p>
      </div>

      {/* ═══ OPTION 1: Dark Premium ═══ */}
      <div>
        <p className="text-xs text-stone-400 uppercase tracking-widest mb-3 text-center font-medium">Option 1 — Dark Premium</p>
        <div
          className="relative overflow-hidden"
          style={{ width: 1584, height: 396 }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-stone-950" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Emerald glow orbs */}
          <div className="absolute -top-20 right-[30%] w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 left-[20%] w-60 h-60 bg-emerald-500/8 rounded-full blur-[80px]" />

          {/* Content */}
          <div className="relative z-10 flex items-center h-full px-20">
            {/* Left side — text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-stone-400 text-sm tracking-[0.2em] uppercase font-light">Americurial LLC</span>
              </div>

              <h1 className="text-5xl font-extralight text-white tracking-tight leading-[1.15] mb-4">
                Helping Veteran-Owned &<br />
                Small Businesses{" "}
                <span className="text-emerald-400 font-light">Win</span>
                <br />
                Government Contracts
              </h1>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <Target className="w-4 h-4 text-emerald-500/60" />
                  <span>Smart Matching</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <FileText className="w-4 h-4 text-emerald-500/60" />
                  <span>AI Proposals</span>
                </div>
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <BarChart3 className="w-4 h-4 text-emerald-500/60" />
                  <span>Market Intel</span>
                </div>
              </div>
            </div>

            {/* Right side — CapturePilot branding */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-emerald-500" />
                <span className="text-3xl font-light text-white tracking-tight">CapturePilot</span>
              </div>
              <p className="text-stone-500 text-sm">capturepilot.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ OPTION 2: Clean Minimal ═══ */}
      <div>
        <p className="text-xs text-stone-400 uppercase tracking-widest mb-3 text-center font-medium">Option 2 — Clean Minimal</p>
        <div
          className="relative overflow-hidden"
          style={{ width: 1584, height: 396 }}
        >
          <div className="absolute inset-0 bg-stone-950" />

          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950 to-emerald-950/30" />

          {/* Single accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent" />

          {/* Content — centered */}
          <div className="relative z-10 flex items-center justify-center h-full px-20">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-emerald-500" />
                <span className="text-stone-500 text-xs tracking-[0.3em] uppercase">Veteran-Owned Federal Capture Consulting</span>
              </div>

              <h1 className="text-6xl font-extralight text-white tracking-tight mb-5">
                We Help You <span className="text-emerald-400">Win</span> Government Contracts
              </h1>

              <div className="flex items-center justify-center gap-8 text-stone-500 text-sm">
                <span>40,000+ Opportunities</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>AI-Powered Matching</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>Full Capture Support</span>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-emerald-400 text-sm">
                <Zap className="w-4 h-4" />
                <span className="font-medium">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ OPTION 3: Bold Statement ═══ */}
      <div>
        <p className="text-xs text-stone-400 uppercase tracking-widest mb-3 text-center font-medium">Option 3 — Bold Statement</p>
        <div
          className="relative overflow-hidden"
          style={{ width: 1584, height: 396 }}
        >
          <div className="absolute inset-0 bg-stone-950" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, #10b981 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Emerald accent bar left */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-transparent" />

          <div className="relative z-10 flex items-center h-full pl-16 pr-20">
            <div className="flex-1">
              <p className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Federal Capture Consulting</p>
              <h1 className="text-[56px] font-extralight text-white tracking-tight leading-[1.1] mb-2">
                $700B+ Market.
              </h1>
              <h2 className="text-[42px] font-extralight text-stone-400 tracking-tight leading-[1.1]">
                Your Share Is <span className="text-emerald-400">Waiting.</span>
              </h2>
            </div>

            <div className="text-right">
              <div className="flex items-center justify-end gap-3 mb-4">
                <span className="text-2xl font-light text-white tracking-tight">CapturePilot</span>
                <Zap className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="space-y-1.5 text-right">
                <p className="text-stone-500 text-sm">Veteran-Owned</p>
                <p className="text-stone-500 text-sm">Americurial LLC</p>
                <p className="text-emerald-500 text-sm font-medium">capturepilot.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ OPTION 4: Personal Brand ═══ */}
      <div>
        <p className="text-xs text-stone-400 uppercase tracking-widest mb-3 text-center font-medium">Option 4 — Personal Brand</p>
        <div
          className="relative overflow-hidden"
          style={{ width: 1584, height: 396 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />

          {/* Grid + glow */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]" />

          <div className="relative z-10 flex items-center justify-between h-full px-20">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-medium">Veteran-Owned</span>
              </div>

              <h1 className="text-[48px] font-extralight text-white tracking-tight leading-[1.15]">
                I help businesses<br />
                <span className="text-emerald-400">win government contracts.</span>
              </h1>

              <p className="text-stone-500 text-sm mt-4">
                Federal capture consulting · AI-powered matching · Full pipeline management
              </p>
            </div>

            {/* Right — minimal brand */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-500" />
                <span className="text-xl font-light text-white">CapturePilot</span>
              </div>
              <span className="text-stone-600 text-xs">capturepilot.com</span>
              <span className="text-stone-600 text-xs">americurial.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
