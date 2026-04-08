"use client";

import Image from "next/image";

export default function LinkedInBanner() {
  return (
    <div className="min-h-screen bg-stone-300 flex flex-col items-center justify-center gap-16 p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-stone-800 mb-2">LinkedIn Banner Generator</h1>
        <p className="text-stone-500 text-sm">1584 × 396px — Content upper-right 70%, bottom-left 30% empty for headshot</p>
        <p className="text-stone-400 text-xs mt-1">Screenshot with Cmd+Shift+4 (Mac)</p>
      </div>

      {/* ═══ OPTION 1: DARK PREMIUM ═══ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 1 — Dark Premium</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-stone-950" />

          {/* Grid pattern — right side only */}
          <div className="absolute top-0 right-0 w-[75%] h-full" style={{
            backgroundImage: "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          {/* Emerald glow */}
          <div className="absolute -top-20 right-[25%] w-[500px] h-[400px] bg-emerald-500/6 rounded-full blur-[120px]" />

          {/* Accent line top */}
          <div className="absolute top-0 right-0 w-[70%] h-[2px] bg-gradient-to-l from-emerald-500 via-emerald-400/50 to-transparent" />

          {/* Content — upper right 70% */}
          <div className="relative z-10 h-full flex">
            {/* Left 30% — empty for headshot */}
            <div className="w-[30%]" />

            {/* Right 70% — content pushed to upper area */}
            <div className="w-[70%] flex flex-col justify-start pt-10 pr-14">
              {/* Logo row — top right */}
              <div className="flex items-center justify-between mb-6">
                <Image src="/americurial-logo-white.png" alt="Americurial" width={260} height={48} className="opacity-90" />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-white.png" alt="CapturePilot" width={36} height={36} className="opacity-80" />
                  <span className="text-stone-500 text-base font-light">capturepilot.com</span>
                </div>
              </div>

              {/* Headline — BIG */}
              <h1 className="text-[52px] font-extralight text-white tracking-tight leading-[1.1] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[52px] font-light text-emerald-400 tracking-tight leading-[1.1] mb-6">
                Win Government Contracts
              </h2>

              {/* Bottom tags */}
              <div className="flex items-center gap-6">
                <span className="text-stone-600 text-sm">Federal Capture Consulting</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                <span className="text-stone-600 text-sm">AI-Powered Matching</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                <span className="text-stone-600 text-sm">40,000+ Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ OPTION 2: DARK MINIMAL ═══ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 2 — Dark Minimal</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-stone-950" />

          {/* Dot grid right */}
          <div className="absolute top-0 right-0 w-[75%] h-full" style={{
            backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />

          {/* Vertical divider */}
          <div className="absolute left-[30%] top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />

          <div className="relative z-10 h-full flex">
            <div className="w-[30%]" />
            <div className="w-[70%] flex flex-col justify-start pt-8 pr-14 pl-8">
              <p className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium mb-4">Veteran-Owned · Federal Capture Consulting</p>

              <h1 className="text-[60px] font-extralight text-white tracking-tight leading-[1.05] mb-1">
                I Help Businesses
              </h1>
              <h2 className="text-[60px] font-extralight tracking-tight leading-[1.05]">
                <span className="text-emerald-400">Win</span>
                <span className="text-stone-600"> Gov Contracts</span>
              </h2>

              <div className="flex items-center gap-5 mt-auto mb-8">
                <Image src="/americurial-logo-white.png" alt="Americurial" width={180} height={32} className="opacity-50" />
                <div className="w-[1px] h-6 bg-stone-700" />
                <Image src="/cp-icon-white.png" alt="CP" width={24} height={24} className="opacity-50" />
                <span className="text-stone-600 text-sm">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ OPTION 3: LIGHT PREMIUM ═══ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 3 — Light Premium</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-white" />

          {/* Dot grid right */}
          <div className="absolute top-0 right-0 w-[75%] h-full" style={{
            backgroundImage: "radial-gradient(circle, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />

          {/* Emerald accents */}
          <div className="absolute top-0 right-0 w-[70%] h-[2px] bg-gradient-to-l from-emerald-500 via-emerald-400/50 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[1px] bg-gradient-to-l from-emerald-500/20 to-transparent" />

          {/* Glow */}
          <div className="absolute -top-20 right-[20%] w-[400px] h-[300px] bg-emerald-50 rounded-full blur-[100px]" />

          <div className="relative z-10 h-full flex">
            <div className="w-[30%]" />
            <div className="w-[70%] flex flex-col justify-start pt-8 pr-14">
              {/* Logos top */}
              <div className="flex items-center justify-between mb-5">
                <Image src="/americurial-logo-black.png" alt="Americurial" width={240} height={44} />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-black.png" alt="CP" width={32} height={32} />
                  <span className="text-stone-400 text-base font-light">capturepilot.com</span>
                </div>
              </div>

              <h1 className="text-[50px] font-extralight text-stone-900 tracking-tight leading-[1.1] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[50px] font-light text-emerald-600 tracking-tight leading-[1.1] mb-5">
                Win Government Contracts
              </h2>

              <div className="flex items-center gap-6">
                <span className="text-stone-400 text-sm">Federal Capture Consulting</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-stone-400 text-sm">AI-Powered Matching</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-600 text-sm font-medium">40,000+ Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ OPTION 4: LIGHT ULTRA CLEAN ═══ */}
      <div>
        <p className="text-xs text-stone-500 uppercase tracking-widest mb-3 text-center font-bold">Option 4 — Light Ultra Clean</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-emerald-50/20" />

          {/* Grid right */}
          <div className="absolute top-0 right-0 w-[75%] h-full opacity-30" style={{
            backgroundImage: "linear-gradient(#e7e5e4 1px, transparent 1px), linear-gradient(90deg, #e7e5e4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div className="relative z-10 h-full flex">
            <div className="w-[30%]" />
            <div className="w-[70%] flex flex-col justify-start pt-10 pr-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 mb-5 self-start">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 text-sm font-medium">Veteran-Owned Federal Capture Consulting</span>
              </div>

              <h1 className="text-[50px] font-extralight text-stone-900 tracking-tight leading-[1.1] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[50px] font-light text-emerald-600 tracking-tight leading-[1.05]">
                Win Government Contracts
              </h2>

              <div className="flex items-center gap-6 mt-auto mb-8">
                <Image src="/americurial-logo-black.png" alt="Americurial" width={180} height={32} className="opacity-60" />
                <div className="w-[1px] h-7 bg-stone-300" />
                <div className="flex items-center gap-2.5">
                  <Image src="/cp-icon-black.png" alt="CP" width={28} height={28} />
                  <span className="text-stone-500 text-base font-medium">capturepilot.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
