"use client";

import Image from "next/image";

export default function LinkedInBanner() {
  return (
    <div className="min-h-screen bg-stone-300 flex flex-col items-center justify-center gap-16 p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-stone-800 mb-2">LinkedIn Banner Generator</h1>
        <p className="text-stone-500 text-sm">1584 × 396px — Content on RIGHT side (headshot covers left)</p>
        <p className="text-stone-400 text-xs mt-1">Screenshot with Cmd+Shift+4 (Mac) or Snipping Tool (Win)</p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          OPTION 1: DARK — $100K Premium
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 1 — Dark Premium</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          {/* Base */}
          <div className="absolute inset-0 bg-stone-950" />

          {/* Subtle grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          {/* Emerald glow — right side */}
          <div className="absolute -top-32 right-[15%] w-[500px] h-[400px] bg-emerald-500/6 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 right-[35%] w-[300px] h-[300px] bg-emerald-500/4 rounded-full blur-[80px]" />

          {/* Emerald accent line top */}
          <div className="absolute top-0 right-0 w-[65%] h-[2px] bg-gradient-to-l from-emerald-500 via-emerald-400/50 to-transparent" />

          {/* Content — all RIGHT aligned */}
          <div className="relative z-10 h-full flex items-center justify-end pr-16">
            <div className="text-right max-w-[850px]">
              {/* Logo top-right */}
              <div className="flex items-center justify-end gap-3 mb-6">
                <Image src="/americurial-logo-white.png" alt="Americurial" width={220} height={40} className="opacity-90" />
              </div>

              {/* Headline */}
              <h1 className="text-[46px] font-extralight text-white tracking-tight leading-[1.15] mb-3">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[46px] font-light text-emerald-400 tracking-tight leading-[1.1]">
                Win Government Contracts
              </h2>

              {/* Subtle details */}
              <div className="flex items-center justify-end gap-6 mt-6">
                <span className="text-stone-600 text-[13px]">Federal Capture Consulting</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
                <span className="text-stone-600 text-[13px]">AI-Powered Matching</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500/50" />
                <span className="text-emerald-500/70 text-[13px] font-medium">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          OPTION 2: DARK — Minimal Power
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 2 — Dark Minimal</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950 to-stone-900" />

          {/* Dot grid — emerald */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

          {/* Vertical accent line */}
          <div className="absolute right-[52%] top-[15%] bottom-[15%] w-[1px] bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />

          {/* Content right */}
          <div className="relative z-10 h-full flex items-center justify-end pr-16">
            <div className="text-right max-w-[700px]">
              <p className="text-emerald-400 text-xs tracking-[0.35em] uppercase font-medium mb-5">Veteran-Owned · Federal Capture Consulting</p>

              <h1 className="text-[54px] font-extralight text-white tracking-tight leading-[1.1] mb-1">
                I Help Businesses
              </h1>
              <h2 className="text-[54px] font-extralight tracking-tight leading-[1.1]">
                <span className="text-emerald-400">Win</span>
                <span className="text-stone-500"> Gov Contracts</span>
              </h2>

              <div className="flex items-center justify-end gap-4 mt-7">
                <Image src="/americurial-logo-white.png" alt="Americurial" width={160} height={30} className="opacity-60" />
                <span className="text-stone-700 text-sm">|</span>
                <div className="flex items-center gap-2">
                  <Image src="/cp-icon-white.png" alt="CP" width={20} height={20} className="opacity-60" />
                  <span className="text-stone-500 text-sm">capturepilot.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          OPTION 3: LIGHT — Clean Professional
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 3 — Light Premium</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-white" />

          {/* Dot grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />

          {/* Emerald accent — top right */}
          <div className="absolute top-0 right-0 w-[60%] h-[2px] bg-gradient-to-l from-emerald-500 via-emerald-400/50 to-transparent" />
          {/* Emerald accent — bottom right */}
          <div className="absolute bottom-0 right-0 w-[40%] h-[1px] bg-gradient-to-l from-emerald-500/30 to-transparent" />

          {/* Subtle glow */}
          <div className="absolute -top-20 right-[20%] w-[400px] h-[300px] bg-emerald-50 rounded-full blur-[100px]" />

          {/* Content right */}
          <div className="relative z-10 h-full flex items-center justify-end pr-16">
            <div className="text-right max-w-[800px]">
              <div className="flex items-center justify-end gap-3 mb-6">
                <Image src="/americurial-logo-black.png" alt="Americurial" width={200} height={36} />
              </div>

              <h1 className="text-[44px] font-extralight text-stone-900 tracking-tight leading-[1.15] mb-2">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[44px] font-light text-emerald-600 tracking-tight leading-[1.1]">
                Win Government Contracts
              </h2>

              <div className="flex items-center justify-end gap-6 mt-6">
                <span className="text-stone-400 text-[13px]">Federal Capture Consulting</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-stone-400 text-[13px]">AI-Powered Matching</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-emerald-600 text-[13px] font-medium">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          OPTION 4: LIGHT — Ultra Clean
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 4 — Light Ultra Clean</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-emerald-50/30" />

          {/* Minimal grid */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: "linear-gradient(#e7e5e4 1px, transparent 1px), linear-gradient(90deg, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          {/* Emerald left edge accent (will peek behind headshot) */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-300" />

          {/* Content right */}
          <div className="relative z-10 h-full flex items-center justify-end pr-20">
            <div className="text-right max-w-[750px]">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 text-xs font-medium">Veteran-Owned Federal Capture Consulting</span>
              </div>

              <h1 className="text-[50px] font-extralight text-stone-900 tracking-tight leading-[1.1] mb-1">
                Win Government Contracts.
              </h1>
              <h2 className="text-[50px] font-light text-emerald-600 tracking-tight leading-[1.1]">
                Faster.
              </h2>

              <div className="flex items-center justify-end gap-5 mt-7">
                <Image src="/americurial-logo-black.png" alt="Americurial" width={150} height={28} className="opacity-70" />
                <div className="w-[1px] h-6 bg-stone-300" />
                <div className="flex items-center gap-2">
                  <Image src="/cp-icon-black.png" alt="CP" width={22} height={22} />
                  <span className="text-stone-500 text-sm font-medium">capturepilot.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
