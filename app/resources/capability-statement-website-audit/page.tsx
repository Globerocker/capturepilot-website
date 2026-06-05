"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  ArrowRight, CheckCircle2, XCircle, AlertCircle, FileText, Download,
  Eye, Mail, Globe, Award, Hash, Shield, Building2, Clock, Target, Star,
  ChevronDown, ChevronUp, Sparkles,
} from "lucide-react";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const KIT_URL = "https://www.capturepilot.com/startup-pack";
const TEARDOWN_MAILTO = "mailto:hello@capturepilot.com?subject=Capability%20Statement%20Teardown&body=Hi%20Andr%C3%A9%2C%20please%20review%20my%20capability%20statement%20attached.";

/* 10-point self-audit — paired bullets so reader can compare current state */
const CAP_AUDIT = [
  { good: "Logo + 2-line tagline at the top — 'We strip and seal flooring' (verb-first)", bad: "Big mission statement paragraph — 'Our team of experienced professionals strives to deliver...'" },
  { good: "NAICS codes as bold chips (e.g. 561720 · 561210 · 238220)", bad: "NAICS buried in a paragraph or missing entirely" },
  { good: "Set-aside certifications as visible badges (8(a), WOSB, SDVOSB)", bad: "Certifications buried in body text — or wrong/outdated" },
  { good: "3-5 core competencies as verbs ('Demo, remove, dispose of asbestos tile')", bad: "Adjectives ('experienced flooring solutions provider')" },
  { good: "3 past performance bullets with $ + agency + outcome ('$240K · Navy · 14K sq ft delivered 6 weeks ahead of schedule')", bad: "Past performance as 'various government and commercial clients'" },
  { good: "UEI + CAGE code clearly listed at the bottom", bad: "UEI/CAGE missing — instant disqualifier for many COs" },
  { good: "Point of contact: name, title, direct phone, work email", bad: "Generic info@ address with no name" },
  { good: "Single page (2 max) — PDF format", bad: "5-page Word doc with stock photos" },
  { good: "Filename: 'CompanyName_Capability_Statement_YYYY.pdf'", bad: "Filename: 'Final_FINAL_v3_use_this_one.pdf'" },
  { good: "Updated within the last 6 months", bad: "Footer says 'last updated 2022'" },
];

const WEB_AUDIT = [
  { good: "HTTPS / valid SSL cert", bad: "HTTP-only or expired cert (CO browser shows warning)" },
  { good: "Working contact page with named team + direct phone", bad: "Contact form only, no humans named" },
  { good: "Visible NAICS codes + certifications on About or Services page", bad: "No mention of NAICS or set-asides anywhere on site" },
  { good: "Past performance section with logos of agencies/clients served", bad: "Generic 'we serve various clients' with no proof" },
  { good: "Capability statement downloadable as PDF on website", bad: "No capability statement on website at all" },
  { good: "Privacy policy + terms (signals legitimate business)", bad: "No legal pages — looks like a single-day site" },
  { good: "Mobile-responsive — CO checks on their phone first", bad: "Desktop-only layout, text tiny on mobile" },
  { good: "Loading speed under 3 seconds (PageSpeed Insights green)", bad: "Loading speed over 6 seconds — CO bounces" },
  { good: "Active blog or news — signals you're operating", bad: "Last update was 18 months ago — looks abandoned" },
  { good: "Domain age > 1 year + matches your company name", bad: "Brand-new domain or mismatched name (smells like a front)" },
];

const FAQS = [
  { q: "What's the difference between a capability statement and a regular company website?", a: "Capability statements are one-page PDFs formatted specifically for contracting officers. They contain mandatory fields a commercial website doesn't (UEI, CAGE, NAICS, set-asides, past performance with dollar amounts). Contracting officers skim them in 8 seconds." },
  { q: "Is a website even required to win federal contracts?", a: "Yes, implicitly. Contracting officers do background research on every shortlisted vendor. If your website looks abandoned (broken links, no SSL, no team page, no past performance) you lose credibility points that get baked into the technical-fit score." },
  { q: "How long should a capability statement be?", a: "One page. Two maximum. Contracting officers receive dozens per RFP and skim — anything beyond two pages signals you don't understand the format." },
  { q: "Do I need a graphic designer to make a good capability statement?", a: "No. The template in our Capture Kit ($70) uses Word + InDesign source files any business owner can edit in 30 minutes. Structure, not graphic design, is what passes the skim test." },
  { q: "What's the most common capability statement mistake?", a: "Leading with a mission statement instead of NAICS codes + core competencies. The CO needs to know in 8 seconds: (1) which NAICS, (2) which set-asides, (3) what you've delivered. Mission statements live in commercial pitch decks." },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button type="button" onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-stone-50 transition-colors">
        <span className="font-bold text-stone-800 pr-4">{faq.q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5"><p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p></div>}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 via-white to-white pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            <Sparkles className="w-3 h-3" /> The #1 gap we see in calls
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-stone-900 leading-[1.05] tracking-tight mb-5">
            Your capability statement + website are why you're losing federal bids you should be winning.
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-3xl">
            Across hundreds of small-business federal calls, this is the #1 gap. The pricing is fine. The past performance is real. The set-asides check out. But the capability statement reads like a commercial brochure and the website looks like it was last updated in 2019. The contracting officer's 8-second skim test fails before they even read your bid.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={KIT_URL} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-colors">
              <Download className="w-4 h-4" /> Get the template — $70 Capture Kit
            </Link>
            <a href={TEARDOWN_MAILTO} className="bg-white border-2 border-stone-200 hover:border-stone-300 text-stone-800 font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-colors">
              <Mail className="w-4 h-4" /> Send mine for a free teardown
            </a>
          </div>
        </div>
      </section>

      {/* The 8-Second Skim Test */}
      <section className="py-14 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-stone-900 mb-3">The 8-Second Skim Test</h2>
          <p className="text-stone-600 mb-8 max-w-2xl">When a contracting officer opens your capability statement, they decide in 8 seconds whether to read further. Here's exactly what they're looking for, in order:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Hash, n: 1, t: "NAICS codes", d: "Do they match the solicitation? If no — bin." },
              { icon: Shield, n: 2, t: "Set-aside certifications", d: "8(a) / WOSB / HUBZone / SDVOSB present?" },
              { icon: Award, n: 3, t: "Past performance bullets", d: "Dollar amounts + agencies + outcomes — not 'various clients'." },
              { icon: Building2, n: 4, t: "UEI / CAGE codes", d: "Without these, you can't even be awarded." },
              { icon: Target, n: 5, t: "Core competencies as verbs", d: "'We weld pipe' not 'experienced welding solutions provider'." },
              { icon: Mail, n: 6, t: "Named POC + direct contact", d: "First name. Direct phone. Not info@." },
            ].map((it) => (
              <div key={it.n} className="bg-white border border-stone-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 text-emerald-700 rounded-lg w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <it.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-stone-400 mb-1">SECOND {it.n}</div>
                    <div className="font-bold text-stone-900 mb-1">{it.t}</div>
                    <div className="text-sm text-stone-600">{it.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Statement Audit */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-stone-900 mb-3 flex items-center gap-3">
            <FileText className="w-7 h-7 text-emerald-600" /> Capability Statement 10-Point Self-Audit
          </h2>
          <p className="text-stone-600 mb-8">Pull yours up. Mark each row. Anything in the red column needs a rewrite before you bid again.</p>
          <div className="border border-stone-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[40px_1fr_1fr] bg-stone-100 border-b border-stone-200 font-bold text-xs uppercase tracking-wider text-stone-500">
              <div className="p-3 text-center">#</div>
              <div className="p-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> What good looks like</div>
              <div className="p-3 flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Common mistake</div>
            </div>
            {CAP_AUDIT.map((row, i) => (
              <div key={i} className="grid grid-cols-[40px_1fr_1fr] border-b border-stone-100 last:border-0 hover:bg-stone-50">
                <div className="p-3 text-center font-bold text-stone-400 text-sm">{i + 1}</div>
                <div className="p-3 text-sm text-stone-700 border-r border-stone-100">{row.good}</div>
                <div className="p-3 text-sm text-stone-500">{row.bad}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Audit */}
      <section className="py-14 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-stone-900 mb-3 flex items-center gap-3">
            <Globe className="w-7 h-7 text-emerald-600" /> Website 10-Point Self-Audit
          </h2>
          <p className="text-stone-600 mb-8">Open your site in an incognito window on your phone. Each of these is what a contracting officer checks before shortlisting you.</p>
          <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
            <div className="grid grid-cols-[40px_1fr_1fr] bg-stone-100 border-b border-stone-200 font-bold text-xs uppercase tracking-wider text-stone-500">
              <div className="p-3 text-center">#</div>
              <div className="p-3 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> What good looks like</div>
              <div className="p-3 flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Common mistake</div>
            </div>
            {WEB_AUDIT.map((row, i) => (
              <div key={i} className="grid grid-cols-[40px_1fr_1fr] border-b border-stone-100 last:border-0 hover:bg-stone-50">
                <div className="p-3 text-center font-bold text-stone-400 text-sm">{i + 1}</div>
                <div className="p-3 text-sm text-stone-700 border-r border-stone-100">{row.good}</div>
                <div className="p-3 text-sm text-stone-500">{row.bad}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do next */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-stone-900 mb-6">Three ways to fix this</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="border-2 border-emerald-300 bg-emerald-50 rounded-2xl p-6">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Recommended</div>
              <h3 className="text-xl font-black text-stone-900 mb-2">Get the $70 Capture Kit</h3>
              <p className="text-sm text-stone-700 mb-4">Capability statement template (Word + InDesign), past-performance bootstrap guide, SAM walkthrough, 90 days of NAICS-targeted opportunities. One-time. No subscription.</p>
              <Link href={KIT_URL} className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:text-emerald-800">
                Get the Kit <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="border border-stone-200 rounded-2xl p-6">
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Free</div>
              <h3 className="text-xl font-black text-stone-900 mb-2">Send mine for a teardown</h3>
              <p className="text-sm text-stone-700 mb-4">Reply with your current capability statement PDF. I'll send back a 5-line teardown — what's working, what to cut, what to add. Free, 10 minutes.</p>
              <a href={TEARDOWN_MAILTO} className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:text-emerald-800">
                Send PDF <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="border border-stone-200 rounded-2xl p-6">
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Also Free</div>
              <h3 className="text-xl font-black text-stone-900 mb-2">Run the Quick Checker</h3>
              <p className="text-sm text-stone-700 mb-4">60-second scan. Get your NAICS, SAM status, certification fit, and your top 5 matching federal opportunities. No signup, no card.</p>
              <Link href={CHECK_URL} className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:text-emerald-800">
                Start scan <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-stone-900 mb-8">FAQ</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
