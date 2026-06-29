"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import {
  Lock, Clock, FileText, Scale, Award, Trophy, Mail, DollarSign, Video,
  ArrowRight, Loader2, Star, ShieldCheck, ClipboardCheck, BookOpen, Building2,
  Infinity as InfinityIcon, Plus, Eye, X, ChevronDown, Download, Zap,
  CheckCircle2, Handshake, BadgeCheck, Volume2, VolumeX,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECKOUT_URL = `${APP_URL}/api/startup-pack/checkout`;

const PRODUCT_NAME = "Federal Launch Kit";
const PRICE_CENTS = 7000;
const FULL_PRICE_CENTS = 15000;

function fmtPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}
function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

// ─── Content ──────────────────────────────────────────────────────────────────

const PREVIEWS = [
  { src: "/previews/ss-01.jpg", label: "Sources Sought / RFI Playbook", page: "p.1", note: "How to shape an RFP 12 months before it posts." },
  { src: "/previews/cap-1.jpg", label: "Capability Statement Template", page: "p.1", note: "The one-page format contracting officers actually read." },
  { src: "/previews/rfp-01.jpg", label: "RFP Response Playbook", page: "p.1", note: "Compliance matrix to submission, step by step." },
  { src: "/previews/far-01.jpg", label: "FAR Clause Decoder", page: "p.1", note: "50 clauses in plain English, not legalese." },
  { src: "/previews/ss-02.jpg", label: "Sources Sought Playbook", page: "p.2", note: "The exact response structure, annotated.", locked: true },
  { src: "/previews/far-02.jpg", label: "FAR Clause Decoder", page: "p.2", note: "What each clause means for a small business.", locked: true },
];

const FOLDERS = [
  { num: "01", label: "SAM.gov Registration Kit", count: 4, description: "Step-by-step walkthrough, pre-registration checklist, NAICS picker, and annual renewal kit. Gets you past the number-one blocker.", icon: Building2, formats: ["PDF", "XLSX"] },
  { num: "02", label: "Capability Statement Kit", count: 3, description: "One-page Word template, three styled design variants, and a written walkthrough with annotated examples.", icon: FileText, formats: ["DOCX", "PDF"] },
  { num: "03", label: "Solicitation-Type Playbooks", count: 7, description: "A dedicated guide for every notice type: Sources Sought, RFI, Pre-Solicitation, RFP, RFQ, IDIQ task orders, and debrief.", icon: BookOpen, formats: ["PDF"], highlight: "Highest ROI" },
  { num: "04", label: "Bid / No-Bid Decision Toolkit", count: 3, description: "10-factor scoring matrix, PWin calculator, and competitive bid analysis worksheet. Score an opportunity in five minutes.", icon: Scale, formats: ["XLSX"] },
  { num: "05", label: "Certification Eligibility Worksheets", count: 4, description: "Self-assessment worksheets for 8(a), HUBZone, WOSB/EDWOSB, and VOSB/SDVOSB. Know in ten minutes whether you qualify.", icon: Award, formats: ["XLSX", "PDF"] },
  { num: "06", label: "Past-Performance Reference Templates", count: 2, description: "The one-page format contracting officers expect, plus a guide for turning commercial work into federal-grade past performance.", icon: Trophy, formats: ["DOCX", "PDF"] },
  { num: "07", label: "Contracting Officer Outreach Library", count: 4, description: "10 CO email templates, 5 COR/PM scripts, a LinkedIn DM sequence, and an Industry Day guide.", icon: Mail, formats: ["PDF"] },
  { num: "08", label: "Price-to-Win Toolkit", count: 3, description: "Wrap rates, indirect cost calculator, and FY2026 GSA labor-rate benchmarks. Defensible pricing for any contract type.", icon: DollarSign, formats: ["XLSX", "PDF"] },
  { num: "09", label: "Internal Best-Practice Library", count: 5, description: "Capture maturity scorecard, Pink/Red/Gold review checklists, FAR clause decoder, teaming agreement template, and compliance matrix.", icon: ClipboardCheck, formats: ["XLSX", "PDF", "DOCX"] },
  { num: "10", label: "Bonus: 30-min Founder Onboarding Call", count: 2, description: "Prep guide plus a Calendly link to book a 1:1 with our capture lead. Walk through your first bid live.", icon: Video, formats: ["PDF", "Calendly"], highlight: "Free with kit" },
];

const TOTAL_FILES = 82;
const FORMAT_BREAKDOWN = [
  { label: "Guides & playbooks", count: 51, color: "bg-emerald-100 text-emerald-800" },
  { label: "Calculators & worksheets", count: 16, color: "bg-blue-100 text-blue-800" },
  { label: "Editable Word templates", count: 15, color: "bg-amber-100 text-amber-800" },
];

// Trust badges shown over the hero video.
const TRUST_BADGES = [
  { Icon: ShieldCheck, label: "Veteran-owned" },
  { Icon: Handshake, label: "HubSpot partner" },
  { Icon: Building2, label: "Built on SAM.gov data" },
  { Icon: Lock, label: "Stripe-secured" },
  { Icon: BadgeCheck, label: "7-day refund" },
];

const VALUE_STACK = [
  { label: "A capture consultant to build this", cost: "$200 to $400 / hour" },
  { label: "A designed capability statement", cost: "$300 to $800" },
  { label: "One bid you should never have chased", cost: "$10k to $40k wasted" },
  { label: "Weeks piecing it together from SAM.gov help docs", cost: "your time" },
];

const PAIN_POINTS = [
  { title: "They never finish SAM.gov", body: "Registration is genuinely confusing: the UEI process, the notarized-letter requirement, the wait times nobody warns you about. About half of first-time registrants give up partway through. Folder 01 is a 32-page annotated walkthrough with a screenshot of every screen." },
  { title: "They show up at the RFP and wonder why they lose", body: "By the time an RFP posts publicly, the incumbent already knows the agency and the contracting officer already knows the incumbent. Everyone else is bidding cold. The Sources Sought playbook shows you how to start that relationship 12 to 18 months earlier." },
  { title: "They price by feel and hope for the best", body: "Federal pricing is its own discipline: wrap rates, indirect costs, G&A, price-to-win banding. Guessing low does not always win. Sometimes it signals you don't understand the work. Folder 08 has the formulas." },
];

const TESTIMONIALS = [
  { quote: "Used the Sources Sought template on a $1.4M HHS notice four days after I bought the kit. Won the spot on the awarded IDIQ.", author: "Marcus T.", role: "Founder, regional IT services firm" },
  { quote: "The SAM.gov walkthrough alone saved me three weeks. I had restarted my registration twice before.", author: "Jenna R.", role: "8(a) construction subcontractor" },
  { quote: "Honestly skeptical of $70 'kit' offers, but the PWin calculator made us drop two bids that would've cost us $40k to chase.", author: "David K.", role: "SDVOSB cybersecurity" },
  { quote: "The internal best-practice library is gold. This is the stuff our last consultant charged us $4k for.", author: "Andrea L.", role: "WOSB facilities services" },
];

const FAQS = [
  { q: "Is it really lifetime access?", a: "Yes. You pay $70 once and the folder is yours forever. Every template, calculator, and playbook we add later shows up in the same folder at no extra cost. The list price goes up as the library grows. What you lock in today, you keep." },
  { q: "What if I already registered on SAM.gov?", a: "Then skip Folder 01 and start with the Sources Sought playbook and the Bid/No-Bid toolkit. Most people tell us those two changed how they pick what to bid on more than anything else in the kit." },
  { q: "Who is this for?", a: "Small businesses going after their first handful of federal contracts. Veteran-owned, 8(a), WOSB, HUBZone, or just a small shop that knows the work but not the paperwork. If you've already won a dozen federal contracts, you probably have most of this already." },
  { q: "Do I need CapturePilot too?", a: "No. The kit stands on its own. CapturePilot is the software that finds and scores the opportunities you'll use these templates on, and there's a free tier if you want to try it. But the kit works whether you ever sign up or not." },
  { q: "What if it's not for me?", a: "Reply to your receipt within 7 days and we refund the $70. No form, no survey, no runaround. You keep whatever you already downloaded." },
];

// ─── Small components ──────────────────────────────────────────────────────────

function FounderVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [sound, setSound] = useState(false);
  const [done, setDone] = useState(false);

  // Keep the visitor on the intro: lock page scroll until the video ends or
  // they skip. Released in unlock(). Cleaned up on unmount.
  useEffect(() => {
    const html = document.documentElement;
    const prevBody = document.body.style.overflow;
    const prevHtml = html.style.overflow;
    document.body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevBody; html.style.overflow = prevHtml; };
  }, []);
  function unlock() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    setDone(true);
  }

  // Try to play with sound once the page settles. Browsers usually block
  // audible autoplay without a gesture, so we also unmute on the visitor's
  // first interaction (a tap, a key, or even an attempt to scroll).
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const enableSound = () => {
      v.muted = false;
      v.volume = 1;
      v.play().then(() => setSound(true)).catch(() => {});
    };
    const t = setTimeout(enableSound, 2500);
    const onFirst = () => { enableSound(); cleanup(); };
    const cleanup = () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
      window.removeEventListener("wheel", onFirst);
      window.removeEventListener("touchstart", onFirst);
    };
    window.addEventListener("pointerdown", onFirst);
    window.addEventListener("keydown", onFirst);
    window.addEventListener("wheel", onFirst, { passive: true });
    window.addEventListener("touchstart", onFirst, { passive: true });
    return () => { clearTimeout(t); cleanup(); };
  }, []);

  function toggleSound() {
    const v = ref.current;
    if (!v) return;
    const next = !sound;
    setSound(next);
    v.muted = !next;
    if (next) v.play().catch(() => {});
  }

  return (
    <div className="relative mx-auto w-full max-w-[360px]">
      <div className="absolute -inset-4 bg-emerald-400/25 blur-3xl rounded-[2.5rem]" aria-hidden />
      <video
        ref={ref}
        onEnded={unlock}
        className="relative w-full aspect-[9/16] object-cover rounded-[1.75rem] shadow-2xl ring-1 ring-white/20 bg-black"
        autoPlay
        muted
        playsInline
        poster="/flk-hero-poster.jpg"
        preload="auto"
      >
        <source src="/flk-hero.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-black/80 transition-colors"
      >
        {sound ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        {sound ? "Sound on" : "Tap for sound"}
      </button>
      {!done && (
        <button
          type="button"
          onClick={unlock}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-white/55 hover:text-white text-xs font-semibold transition-colors whitespace-nowrap"
        >
          Skip intro <ChevronDown className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

function PreviewCard({ p, i }: { p: (typeof PREVIEWS)[number]; i: number }) {
  return (
    <Reveal dir={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 80} className="h-full">
      <div className="group relative bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
        <div className="relative aspect-[8.5/11] overflow-hidden bg-stone-100">
          <Image
            src={p.src}
            alt={`${p.label} preview, ${p.page}`}
            fill
            sizes="(max-width: 768px) 50vw, 300px"
            className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
          />
          {p.locked && (
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/20 to-transparent flex items-end justify-center pb-5 backdrop-blur-[2px]">
              <span className="inline-flex items-center gap-1.5 text-white text-xs font-bold bg-white/10 border border-white/25 px-3 py-1.5 rounded-full">
                <Lock className="w-3.5 h-3.5" /> Unlock all 82 files
              </span>
            </div>
          )}
          <span className="absolute top-2.5 left-2.5 text-[10px] font-bold bg-white/90 text-stone-600 px-2 py-0.5 rounded-md backdrop-blur">
            {p.page}
          </span>
        </div>
        <div className="p-3.5">
          <p className="font-bold text-stone-900 text-[13px] leading-snug">{p.label}</p>
          <p className="text-[11px] text-stone-500 mt-1 leading-snug">{p.note}</p>
        </div>
      </div>
    </Reveal>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden">
      <button type="button" onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-stone-50 transition-colors">
        <span className="font-bold text-stone-900 text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-stone-600 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StartupPackLandingPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [exitOpen, setExitOpen] = useState(false);
  const exitFired = useRef(false);

  const COUNTDOWN_HOURS = 72;
  const [endsAt, setEndsAt] = useState(0);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const KEY = "launchkit_promo_ends_at_www";
    let saved = 0;
    try { saved = Number(localStorage.getItem(KEY) || "0") || 0; } catch {}
    const target = saved > Date.now() ? saved : Date.now() + COUNTDOWN_HOURS * 3600_000;
    try { localStorage.setItem(KEY, String(target)); } catch {}
    setEndsAt(target);
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Exit-intent ("jump-off prohibition"): desktop = cursor leaves via the top;
  // mobile/all = a one-time dwell fallback. Fires once per session.
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("flk_exit_seen") === "1"; } catch {}
    if (seen) { exitFired.current = true; return; }
    const fire = () => {
      if (exitFired.current) return;
      exitFired.current = true;
      try { sessionStorage.setItem("flk_exit_seen", "1"); } catch {}
      setExitOpen(true);
    };
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) fire();
    };
    document.addEventListener("mouseout", onMouseOut);
    const dwell = setTimeout(fire, 35000);
    return () => { document.removeEventListener("mouseout", onMouseOut); clearTimeout(dwell); };
  }, []);

  const diff = Math.max(0, endsAt - now);
  const expired = endsAt > 0 && diff === 0;
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const handleBuy = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(CHECKOUT_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({}) });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  };

  const savings = FULL_PRICE_CENTS - PRICE_CENTS;
  const savingsPct = Math.round((savings / FULL_PRICE_CENTS) * 100);

  const CTA = ({ label, dark = false, big = false }: { label: string; dark?: boolean; big?: boolean }) => (
    <button
      type="button"
      onClick={handleBuy}
      disabled={loading || expired}
      className={`inline-flex items-center justify-center gap-2 font-black rounded-2xl transition-all duration-200 disabled:opacity-60 active:scale-95 hover:scale-[1.02] ${
        big ? "px-8 py-4 text-base w-full sm:w-auto" : "px-6 py-3.5 text-sm"
      } ${dark ? "bg-stone-900 hover:bg-black text-white" : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg animate-pulse-glow"}`}
    >
      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-5 h-5" />}
      {label}
    </button>
  );

  return (
    <>
      {/* Announcement bar (countdown) — sits at the very top, no nav links above it */}
      <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-amber-950">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2 sm:gap-3 text-center">
          <Clock className="w-4 h-4 hidden sm:block" />
          <span className="text-[11px] sm:text-sm font-black uppercase tracking-widest">{expired ? "Offer ended" : `${savingsPct}% off ends in`}</span>
          {!expired && <span className="font-mono text-xs sm:text-base tabular-nums font-black">{days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s</span>}
        </div>
      </div>

      {/* Minimal landing nav — logo + one CTA, no links out (this is a landing page, not the site) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none">
            <span className="w-7 h-7 rounded-lg bg-stone-900 text-white flex items-center justify-center font-black text-[11px]">CP</span>
            <span className="font-black text-base tracking-tight text-stone-900">CapturePilot</span>
          </div>
          <button type="button" onClick={handleBuy} disabled={loading || expired} className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-xl transition-all hover:scale-[1.03] disabled:opacity-60">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
            Get the Kit — {fmtPrice(PRICE_CENTS)}
          </button>
        </div>
      </header>

      <main className="bg-stone-50 overflow-x-clip">
        {/* ── HERO (full-bleed, headline over the explainer reel) ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" aria-hidden>
            <Image src="/flk-hero-poster.jpg" alt="" fill priority className="object-cover blur-2xl scale-110 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-stone-950/92 via-stone-950/82 to-emerald-950/88" />
          </div>
          {/* h1 kept for SEO/accessibility; the headline itself lives in the video. */}
          <h1 className="sr-only">{TOTAL_FILES} files, one folder: your first federal contract, demystified. The Federal Launch Kit by Americurial.</h1>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-12 items-center">
            {/* The explainer reel — first on mobile, bigger overall */}
            <Reveal dir="right" delay={60} className="order-1 lg:order-2">
              <FounderVideo />
            </Reveal>

            <Reveal dir="left" className="order-2 lg:order-1">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl">
                Every template, playbook, checklist and worksheet a small business needs to get registered, pick the right bids, price them correctly, and reach the contracting officer before the RFP drops. The same toolkit we run in paid capture work at Americurial.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mt-5">
                {TRUST_BADGES.map(({ Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur">
                    <Icon className="w-3.5 h-3.5 text-emerald-300" />{label}
                  </span>
                ))}
              </div>

              {/* Format pills */}
              <div className="flex flex-wrap gap-2 mt-3">
                {FORMAT_BREAKDOWN.map((f) => (
                  <span key={f.label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${f.color}`}>
                    <span className="text-sm font-black">{f.count}</span>{f.label}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex flex-wrap items-baseline gap-3 mt-6">
                <span className="text-5xl font-black text-white">{fmtPrice(PRICE_CENTS)}</span>
                <span className="text-xl text-white/40 line-through">{fmtPrice(FULL_PRICE_CENTS)}</span>
                <span className="text-xs font-bold bg-amber-300 text-amber-950 px-2 py-1 rounded-md uppercase tracking-wider">Save {fmtPrice(savings)}</span>
              </div>
              <div className="mt-5"><CTA label={`Get the Kit — ${fmtPrice(PRICE_CENTS)}`} big /></div>
              <p className="text-[11px] text-white/50 mt-2.5">Instant access · Lifetime use · Free future updates · 7-day refund · Stripe-secured</p>
              {error && <p className="text-red-200 text-sm mt-3 bg-red-900/40 border border-red-400/30 px-3 py-2 rounded-lg max-w-md">{error}</p>}
            </Reveal>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-24 pt-16 space-y-20">

          {/* ── MARQUEE STRIP (always-on motion) ── */}
          <div className="relative -mx-4 border-y border-stone-200 bg-white py-3 overflow-hidden">
            <div className="flex gap-8 w-max animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, r) => (
                <div key={r} className="flex gap-8 text-xs font-semibold text-stone-500">
                  {["SAM.gov walkthrough", "Sources Sought playbook", "Capability statement template", "PWin calculator", "FAR clause decoder", "CO email scripts", "Price-to-win toolkit", "Bid / No-Bid matrix", "Teaming agreement", "8(a) · HUBZONE · WOSB · SDVOSB worksheets"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />{t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── PEEK INSIDE (real PDF previews) ── */}
          <section>
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-1.5"><Eye className="w-3.5 h-3.5" /> Look inside</p>
              <h2 className="font-black text-3xl text-stone-900 mt-1">These are real pages. Not stock screenshots.</h2>
              <p className="text-stone-500 mt-2 max-w-2xl">Here are the first pages of four of the files. You can see the formatting, the depth, the annotations. The rest unlock the moment you buy.</p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-7">
              {PREVIEWS.map((p, i) => <PreviewCard key={p.src} p={p} i={i} />)}
            </div>
          </section>

          {/* ── LIFETIME + FUTURE ASSETS (the bargain) ── */}
          <section className="relative overflow-hidden rounded-[32px] bg-stone-900 text-white p-7 sm:p-12">
            <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 bg-emerald-500/20 blur-3xl rounded-full animate-float-slow" />
            <div className="relative">
              <Reveal>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300 flex items-center gap-1.5"><InfinityIcon className="w-4 h-4" /> Buy once. Keep forever.</p>
                <h2 className="font-black text-3xl sm:text-4xl mt-2 max-w-3xl leading-tight">You're not buying 82 files. You're buying a folder that keeps growing, at a price you lock in today.</h2>
                <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">Every new template, calculator, and playbook we build goes into this same folder. You get it automatically, at no extra cost, for as long as the kit exists. The list price climbs as the library grows. Your $70 does not.</p>
              </Reveal>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Download, t: "Today", d: "82 files across 6 phases, in your inbox the second you pay." },
                  { icon: Plus, t: "Every few weeks", d: "New templates and tools land in the same folder. Yours, free." },
                  { icon: InfinityIcon, t: "Forever", d: "No renewal, no subscription. One payment, lifetime access." },
                ].map((c, i) => (
                  <Reveal key={c.t} dir="up" delay={i * 110}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 h-full hover:border-emerald-400/40 hover:bg-white/[.08] transition-all duration-300">
                      <c.icon className="w-6 h-6 text-emerald-300" />
                      <p className="font-bold mt-3 text-sm">{c.t}</p>
                      <p className="text-white/60 text-[13px] mt-1 leading-relaxed">{c.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ── VALUE STACK ── */}
          <section className="grid lg:grid-cols-2 gap-8 items-center">
            <Reveal dir="left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">What it replaces</p>
              <h2 className="font-black text-3xl text-stone-900 mt-1 leading-tight">The math isn't close.</h2>
              <p className="text-stone-500 mt-3 leading-relaxed max-w-lg">People pay real money for each of these one piece at a time. The kit is all of it, once, for the price of lunch for the team.</p>
              <div className="mt-6"><CTA label={`Get the Kit — ${fmtPrice(PRICE_CENTS)}`} dark /></div>
            </Reveal>
            <Reveal dir="right" delay={100}>
              <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
                <ul className="divide-y divide-stone-100">
                  {VALUE_STACK.map((v) => (
                    <li key={v.label} className="flex items-center justify-between gap-4 py-3.5">
                      <span className="text-sm text-stone-700">{v.label}</span>
                      <span className="text-sm font-bold text-stone-400 line-through whitespace-nowrap">{v.cost}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t-2 border-stone-900">
                  <span className="font-black text-stone-900">The Federal Launch Kit</span>
                  <span className="text-3xl font-black text-emerald-600">{fmtPrice(PRICE_CENTS)}</span>
                </div>
                <p className="text-[11px] text-stone-400 mt-2 text-right">Once. Lifetime. Free updates.</p>
              </div>
            </Reveal>
          </section>

          {/* ── WHY THIS EXISTS ── */}
          <section>
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Why this exists</p>
              <h2 className="font-black text-3xl text-stone-900 mt-1 max-w-2xl">Most first-time bidders waste a year before they win anything.</h2>
              <p className="text-stone-500 mt-3 max-w-2xl">It's not because they're bad at the work. It's usually one of three things.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
              {PAIN_POINTS.map((item, i) => (
                <Reveal key={i} dir="up" delay={i * 100}>
                  <div className="bg-white border border-stone-200 rounded-2xl p-5 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <p className="font-bold text-stone-900 text-sm">{item.title}</p>
                    <p className="text-sm text-stone-500 mt-2 leading-relaxed">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── WIN-GAP GRAPHIC ── */}
          <section className="grid lg:grid-cols-5 gap-8 items-center">
            <Reveal dir="left" className="lg:col-span-2">
              <Image src="/flk-winrate-wingap.png" alt="Win rate comparison: first-time bidder around 3%, established small contractor around 30%" width={600} height={600} className="rounded-3xl shadow-xl w-full animate-float-slow" />
            </Reveal>
            <Reveal dir="right" delay={100} className="lg:col-span-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-3">The qualification gap</p>
              <h2 className="font-black text-3xl text-stone-900 leading-tight">First-time bidders win about 3% of what they chase.</h2>
              <p className="text-stone-500 mt-4 leading-relaxed">That's not a motivation problem. It's a preparation problem. Most new entrants show up at solicitations they were never going to win, without the relationships or positioning experienced firms built 12 months before the RFP posted.</p>
              <p className="text-stone-500 mt-3 leading-relaxed">The firms with 30% win rates don't bid more. They bid less, on the right opportunities, after doing the capture work. The Bid/No-Bid toolkit and the Sources Sought playbook are the two pieces that change that fastest.</p>
              <div className="mt-6"><CTA label={`Get the Kit — ${fmtPrice(PRICE_CENTS)}`} dark /></div>
            </Reveal>
          </section>

          {/* ── WHAT'S INSIDE ── */}
          <section>
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">What's inside</p>
              <h2 className="font-black text-3xl text-stone-900 mt-1">{TOTAL_FILES} files. {FOLDERS.length} folders.</h2>
              <p className="text-stone-500 mt-2 max-w-2xl">Built from our internal consulting toolkit. This is what we use in paid capture engagements. The Master Field Manual alone runs 40+ pages.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {FORMAT_BREAKDOWN.map((f) => (
                  <span key={f.label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${f.color}`}>
                    <span className="text-sm font-black">{f.count}</span>{f.label}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {FOLDERS.map((folder, i) => {
                const Icon = folder.icon;
                return (
                  <Reveal key={folder.num} dir={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 60}>
                    <div className="bg-white border border-stone-200 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2 flex-wrap">
                            <div>
                              <span className="text-[10px] font-bold text-stone-400 tabular-nums">{folder.num}</span>
                              <p className="font-bold text-stone-900 text-sm leading-snug">{folder.label}</p>
                            </div>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              {folder.highlight && <span className="text-[9px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded uppercase tracking-wider">{folder.highlight}</span>}
                              <span className="text-[10px] font-bold bg-stone-100 text-stone-600 border border-stone-200 px-2 py-0.5 rounded">{folder.count} files</span>
                            </div>
                          </div>
                          <p className="text-xs text-stone-500 leading-snug mt-1.5">{folder.description}</p>
                          <div className="flex gap-1 mt-2">
                            {folder.formats.map((fmt) => <span key={fmt} className="text-[9px] font-bold bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">{fmt}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* ── TESTIMONIALS ── */}
          <section>
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">What customers say</p>
              <h2 className="font-black text-3xl text-stone-900 mt-1">People who've used it.</h2>
              <p className="text-stone-500 mt-2 text-sm">Real quotes. We didn't write them.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.author} dir={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 80}>
                  <div className="bg-white border border-stone-200 rounded-2xl p-5 h-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}</div>
                    <p className="text-sm text-stone-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <p className="text-xs font-bold text-stone-900 mt-4">{t.author}</p>
                    <p className="text-[11px] text-stone-500">{t.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── GUARANTEE ── */}
          <Reveal>
            <section className="bg-white border border-stone-200 rounded-[28px] p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0"><ShieldCheck className="w-7 h-7 text-emerald-600" /></div>
                <div>
                  <h3 className="font-bold text-lg text-stone-900">7-day refund, no questions</h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed max-w-2xl">Open everything. Try the templates. If by day seven you don't think the {PRODUCT_NAME} saved you weeks of research and at least one bad bid, reply to the receipt email and we'll refund the {fmtPrice(PRICE_CENTS)}. No form, no survey, no runaround.</p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── FAQ ── */}
          <section>
            <Reveal>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Questions</p>
              <h2 className="font-black text-3xl text-stone-900 mt-1">The stuff people ask before buying.</h2>
            </Reveal>
            <div className="space-y-3 mt-6">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} dir="up" delay={i * 50}><FaqItem q={f.q} a={f.a} /></Reveal>
              ))}
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <Reveal dir="scale">
            <section className="relative overflow-hidden rounded-[32px] bg-stone-900 text-white p-8 sm:p-12 shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-float-slow" />
              <div className="relative max-w-2xl">
                {!expired && (
                  <div className="inline-flex items-center gap-2 bg-amber-300 text-amber-900 px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider mb-6">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono tabular-nums">{days}d {pad(hours)}h {pad(minutes)}m {pad(seconds)}s</span>
                    <span>left at this price</span>
                  </div>
                )}
                <h2 className="font-black text-3xl sm:text-4xl">You've read enough. It either fits your situation or it doesn't.</h2>
                <p className="text-white/70 text-base mt-4 leading-relaxed">{fmtPrice(PRICE_CENTS)} once. Instant download. Yours for life, updates included. Seven days to decide if it was worth it. If not, one email and you get it back.</p>
                <div className="flex flex-wrap items-center gap-4 mt-7">
                  <CTA label={`Buy the Kit — ${fmtPrice(PRICE_CENTS)}`} big />
                  <Link href="/check" className="text-white/60 hover:text-white text-sm inline-flex items-center gap-1.5 transition-colors">Free readiness check first <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
                <p className="text-[11px] text-white/45 mt-3">Secure Stripe checkout · Apple Pay, Google Pay & cards accepted</p>
              </div>
            </section>
          </Reveal>
        </div>
      </main>

      {/* ── EXIT-INTENT MODAL ── */}
      {exitOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm" onClick={() => setExitOpen(false)}>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-7 sm:p-8 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <button type="button" aria-label="Close" onClick={() => setExitOpen(false)} className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"><X className="w-5 h-5" /></button>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4"><Zap className="w-6 h-6 text-emerald-600" /></div>
            <h3 className="font-black text-2xl text-stone-900 leading-tight">Before you click away.</h3>
            <p className="text-stone-600 text-sm mt-3 leading-relaxed">The whole kit is {fmtPrice(PRICE_CENTS)}, once. That's less than an hour of a capture consultant, for 82 files you keep for life with every future update included.</p>
            <ul className="mt-4 space-y-2">
              {["82 files, instant download", "Lifetime access plus free future updates", "7-day refund, reply to one email"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-stone-700"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />{t}</li>
              ))}
            </ul>
            <button type="button" onClick={() => { setExitOpen(false); handleBuy(); }} disabled={loading} className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lock className="w-5 h-5" />} Get the Kit — {fmtPrice(PRICE_CENTS)}
            </button>
            <button type="button" onClick={() => setExitOpen(false)} className="mt-2 w-full text-center text-xs text-stone-400 hover:text-stone-600 transition-colors py-1">No thanks, I'll keep looking</button>
          </div>
        </div>
      )}

      {/* Mobile sticky buy bar — clickfunnel style, always one tap from checkout */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-stone-200 px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="leading-tight">
          <div className="text-lg font-black text-stone-900">
            {fmtPrice(PRICE_CENTS)} <span className="text-xs text-stone-400 line-through font-bold">{fmtPrice(FULL_PRICE_CENTS)}</span>
          </div>
          <div className="text-[10px] text-stone-500 font-semibold">{TOTAL_FILES} files · lifetime · 7-day refund</div>
        </div>
        <button
          type="button"
          onClick={handleBuy}
          disabled={loading || expired}
          className="flex-1 max-w-[210px] inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-3 rounded-xl text-sm transition-all active:scale-95 disabled:opacity-60"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
          Get the Kit
        </button>
      </div>

      <SiteFooter />
    </>
  );
}
