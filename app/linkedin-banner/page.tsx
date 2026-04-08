"use client";

import Image from "next/image";

export default function LinkedInBanner() {
  return (
    <div className="min-h-screen bg-stone-400 flex flex-col items-center justify-center gap-14 p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-stone-800 mb-2">LinkedIn Banner — Final Variations</h1>
        <p className="text-stone-600 text-sm">1584 × 396px · Background covers FULL image · Content upper-right · Bottom-left empty for headshot</p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          DARK 1 — Grid + Emerald Glow
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-white/80 uppercase tracking-widest mb-3 text-center font-bold">Dark 1 — Grid + Emerald Glow</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-stone-950" />
          {/* FULL background pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(16,185,129,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          <div className="absolute -top-24 right-[20%] w-[600px] h-[500px] bg-emerald-500/6 rounded-full blur-[130px]" />
          <div className="absolute bottom-[-100px] left-[10%] w-[400px] h-[300px] bg-emerald-500/3 rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-emerald-500" />

          <div className="relative z-10 h-full flex">
            <div className="w-[28%]" />
            <div className="w-[72%] flex flex-col justify-start pt-8 pr-14">
              {/* Both logos — same size, side by side */}
              <div className="flex items-center gap-5 mb-6">
                <Image src="/americurial-logo-white.png" alt="Americurial" width={200} height={36} className="opacity-90" />
                <div className="w-[1px] h-8 bg-stone-700" />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-white.png" alt="CapturePilot" width={32} height={32} className="opacity-90" />
                  <span className="text-stone-300 text-lg font-light tracking-tight">CapturePilot</span>
                </div>
              </div>

              <h1 className="text-[50px] font-extralight text-white tracking-tight leading-[1.1] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[50px] font-light text-emerald-400 tracking-tight leading-[1.05]">
                Win Government Contracts
              </h2>

              <div className="flex items-center gap-6 mt-5">
                <span className="text-stone-600 text-[13px]">Federal Capture Consulting</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                <span className="text-stone-600 text-[13px]">AI-Powered Matching</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                <span className="text-emerald-500/60 text-[13px]">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          DARK 2 — Dot Grid + Accent Bar
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-white/80 uppercase tracking-widest mb-3 text-center font-bold">Dark 2 — Dot Grid + Accent Bar</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-stone-950" />
          {/* FULL dot grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
          {/* Accent bar left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-500 via-emerald-400/50 to-transparent" />
          {/* Glow */}
          <div className="absolute top-[20%] right-[30%] w-[400px] h-[300px] bg-emerald-500/4 rounded-full blur-[100px]" />

          <div className="relative z-10 h-full flex">
            <div className="w-[28%]" />
            <div className="w-[72%] flex flex-col justify-start pt-7 pr-14">
              <div className="flex items-center gap-5 mb-5">
                <Image src="/americurial-logo-white.png" alt="Americurial" width={200} height={36} className="opacity-85" />
                <div className="w-[1px] h-8 bg-stone-700" />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-white.png" alt="CapturePilot" width={32} height={32} className="opacity-85" />
                  <span className="text-stone-300 text-lg font-light tracking-tight">CapturePilot</span>
                </div>
              </div>

              <p className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-medium mb-3">Veteran-Owned · Federal Capture Consulting</p>

              <h1 className="text-[52px] font-extralight text-white tracking-tight leading-[1.08]">
                Helping Veteran-Owned &amp;
              </h1>
              <h1 className="text-[52px] font-extralight tracking-tight leading-[1.08]">
                <span className="text-stone-400">Small Businesses </span>
                <span className="text-emerald-400">Win</span>
              </h1>

              <div className="flex items-center gap-5 mt-4">
                <span className="text-stone-600 text-sm">40,000+ Opportunities</span>
                <span className="w-1 h-1 rounded-full bg-emerald-500/40" />
                <span className="text-stone-600 text-sm">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          DARK 3 — Topo/Contour Lines
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-white/80 uppercase tracking-widest mb-3 text-center font-bold">Dark 3 — Contour Lines</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950" />
          {/* Contour/topo effect with concentric circles */}
          <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] rounded-full border border-emerald-500/[0.04]" />
          <div className="absolute top-[-150px] right-[-50px] w-[600px] h-[600px] rounded-full border border-emerald-500/[0.06]" />
          <div className="absolute top-[-100px] right-[0px] w-[500px] h-[500px] rounded-full border border-emerald-500/[0.08]" />
          <div className="absolute top-[-50px] right-[50px] w-[400px] h-[400px] rounded-full border border-emerald-500/[0.06]" />
          <div className="absolute top-[0px] right-[100px] w-[300px] h-[300px] rounded-full border border-emerald-500/[0.04]" />
          {/* Bottom left contours */}
          <div className="absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full border border-stone-700/20" />
          <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full border border-stone-700/15" />
          <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full border border-stone-700/10" />

          <div className="relative z-10 h-full flex">
            <div className="w-[28%]" />
            <div className="w-[72%] flex flex-col justify-start pt-8 pr-14">
              <div className="flex items-center gap-5 mb-7">
                <Image src="/americurial-logo-white.png" alt="Americurial" width={200} height={36} className="opacity-85" />
                <div className="w-[1px] h-8 bg-stone-700" />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-white.png" alt="CapturePilot" width={32} height={32} className="opacity-85" />
                  <span className="text-stone-300 text-lg font-light tracking-tight">CapturePilot</span>
                </div>
              </div>

              <h1 className="text-[48px] font-extralight text-white tracking-tight leading-[1.12] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[48px] font-light text-emerald-400 tracking-tight leading-[1.08]">
                Win Government Contracts
              </h2>

              <div className="flex items-center gap-6 mt-5">
                <span className="text-stone-600 text-[13px]">Federal Capture Consulting</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                <span className="text-stone-600 text-[13px]">AI-Powered Intelligence</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
                <span className="text-emerald-500/50 text-[13px]">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          LIGHT 1 — Dot Grid + Emerald Accents
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-stone-600 uppercase tracking-widest mb-3 text-center font-bold">Light 1 — Dot Grid</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-white" />
          {/* FULL dot grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, #d6d3d1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }} />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/30 to-emerald-500" />
          <div className="absolute -top-20 right-[25%] w-[500px] h-[400px] bg-emerald-50 rounded-full blur-[100px]" />

          <div className="relative z-10 h-full flex">
            <div className="w-[30%]" />
            <div className="w-[70%] flex flex-col justify-center pl-4 pr-14">
              <div className="flex items-center gap-5 mb-5">
                <Image src="/americurial-logo-black.png" alt="Americurial" width={200} height={36} />
                <div className="w-[1px] h-8 bg-stone-300" />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-black.png" alt="CapturePilot" width={32} height={32} />
                  <span className="text-stone-700 text-lg font-light tracking-tight">CapturePilot</span>
                </div>
              </div>

              <h1 className="text-[50px] font-extralight text-stone-900 tracking-tight leading-[1.1] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[50px] font-light text-emerald-600 tracking-tight leading-[1.05] mb-5">
                Win Government Contracts
              </h2>

              <div className="flex items-center gap-8">
                <span className="text-stone-500 text-base">Federal Capture Consulting</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-stone-500 text-base">AI-Powered Matching</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-600 text-base font-medium">capturepilot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          LIGHT 2 — Clean Lines
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-stone-600 uppercase tracking-widest mb-3 text-center font-bold">Light 2 — Clean Lines</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50 to-emerald-50/20" />
          {/* FULL line grid */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: "linear-gradient(#d6d3d1 1px, transparent 1px), linear-gradient(90deg, #d6d3d1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-300" />

          <div className="relative z-10 h-full flex">
            <div className="w-[28%]" />
            <div className="w-[72%] flex flex-col justify-start pt-7 pr-14">
              <div className="flex items-center gap-5 mb-5">
                <Image src="/americurial-logo-black.png" alt="Americurial" width={200} height={36} className="opacity-90" />
                <div className="w-[1px] h-8 bg-stone-300" />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-black.png" alt="CapturePilot" width={32} height={32} className="opacity-90" />
                  <span className="text-stone-600 text-lg font-light tracking-tight">CapturePilot</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4 self-start">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 text-xs font-medium">Veteran-Owned · Federal Capture Consulting</span>
              </div>

              <h1 className="text-[50px] font-extralight text-stone-900 tracking-tight leading-[1.1] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[50px] font-light text-emerald-600 tracking-tight leading-[1.05]">
                Win Government Contracts
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          LIGHT 3 — Contour + Badge
      ═══════════════════════════════════════════════════════════════ */}
      <div>
        <p className="text-xs text-stone-600 uppercase tracking-widest mb-3 text-center font-bold">Light 3 — Contour + Badge</p>
        <div className="relative overflow-hidden" style={{ width: 1584, height: 396 }}>
          <div className="absolute inset-0 bg-white" />
          {/* Contour circles */}
          <div className="absolute top-[-200px] right-[-80px] w-[600px] h-[600px] rounded-full border border-emerald-200/40" />
          <div className="absolute top-[-150px] right-[-30px] w-[500px] h-[500px] rounded-full border border-emerald-200/50" />
          <div className="absolute top-[-100px] right-[20px] w-[400px] h-[400px] rounded-full border border-emerald-200/40" />
          <div className="absolute top-[-50px] right-[70px] w-[300px] h-[300px] rounded-full border border-emerald-200/30" />
          {/* Bottom left contours */}
          <div className="absolute bottom-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full border border-stone-200/30" />
          <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full border border-stone-200/20" />

          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/20 to-emerald-500" />

          <div className="relative z-10 h-full flex">
            <div className="w-[28%]" />
            <div className="w-[72%] flex flex-col justify-start pt-8 pr-14">
              <div className="flex items-center gap-5 mb-6">
                <Image src="/americurial-logo-black.png" alt="Americurial" width={200} height={36} />
                <div className="w-[1px] h-8 bg-stone-300" />
                <div className="flex items-center gap-3">
                  <Image src="/cp-icon-black.png" alt="CapturePilot" width={32} height={32} />
                  <span className="text-stone-700 text-lg font-light tracking-tight">CapturePilot</span>
                </div>
              </div>

              <h1 className="text-[50px] font-extralight text-stone-900 tracking-tight leading-[1.1] mb-1">
                Helping Veteran-Owned &amp; Small Businesses
              </h1>
              <h2 className="text-[50px] font-light text-emerald-600 tracking-tight leading-[1.05]">
                Win Government Contracts
              </h2>

              <div className="flex items-center gap-6 mt-5">
                <span className="text-stone-400 text-[13px]">Federal Capture Consulting</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-stone-400 text-[13px]">AI-Powered Intelligence</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-emerald-600 text-[13px] font-medium">40,000+ Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
