"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Mail, Inbox, ArrowRight, Search, Phone } from "lucide-react";

// Per-magnet copy. Keys must match the dashboard's LEAD_MAGNETS config so the
// thank-you page can confirm exactly what the user just signed up for.
const MAGNET_COPY: Record<string, { title: string; from: string }> = {
  "field-manual": {
    title: "Win Your First Government Contract — Field Manual",
    from: "andre@capturepilot.com",
  },
  "meta-lead-field-manual": {
    title: "Win Your First Government Contract — Field Manual",
    from: "andre@capturepilot.com",
  },
};

const FALLBACK = { title: "Your download", from: "andre@capturepilot.com" };

function ThankYouContent() {
  const params = useSearchParams();
  const magnet = params.get("magnet") || "";
  const copy = MAGNET_COPY[magnet] || FALLBACK;

  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />

      <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
        <div className="bg-white border border-stone-200 rounded-[28px] p-8 sm:p-12 text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6">
            <Inbox className="w-8 h-8" />
          </div>

          <h1 className="font-black text-3xl sm:text-4xl text-stone-900 leading-tight">
            Check your inbox.
          </h1>
          <p className="text-stone-600 mt-3 text-base leading-relaxed">
            Your copy of <span className="font-semibold text-stone-900">{copy.title}</span> is on its way —
            usually within 60 seconds.
          </p>

          <div className="mt-8 bg-stone-50 border border-stone-200 rounded-2xl p-5 text-left space-y-3">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-stone-600">
                Email comes from <span className="font-mono text-stone-800">{copy.from}</span>.
                If you don&rsquo;t see it in 2 minutes, check your spam folder.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Search className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-stone-600">
                Still nothing? Search your inbox for{" "}
                <span className="font-mono text-stone-800">capturepilot</span> &mdash; some filters tuck
                first-time sender emails into &ldquo;Updates&rdquo; or &ldquo;Promotions&rdquo;.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-stone-200">
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
              While you&rsquo;re here
            </p>
            <h2 className="font-black text-xl text-stone-900">
              Run a 60-second readiness check on your own business.
            </h2>
            <p className="text-stone-500 text-sm mt-2">
              Free, no signup. Tells you your NAICS codes, SAM.gov status, and what&rsquo;s open for you right now.
            </p>
            <Link
              href="/check"
              className="mt-5 inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
            >
              Run the Quick Check <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-8 text-xs text-stone-400">
            Or if you&rsquo;d rather talk it through with someone&mdash;
            <a
              href="https://meetings-na2.hubspot.com/americurial/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 underline hover:text-stone-900 inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> book a 15-min intro call
            </a>
            .
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
      <ThankYouContent />
    </Suspense>
  );
}
