"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Inbox, Download, Package, Phone, Mail, Search } from "lucide-react";

const HUBSPOT_MEETINGS_URL = "https://meetings-na2.hubspot.com/americurial/intro-call";
const DOWNLOAD_BASE = "https://app.capturepilot.com/api/leads/download";

type MetaWindow = Window & { fbq?: (...args: unknown[]) => void };

function ThankYouContent() {
  const params = useSearchParams();
  const email = params.get("email") ?? "";
  const assetName = params.get("asset_name") ?? "your download";
  const downloadToken = params.get("download_token") ?? "";
  // `download` is the direct URL sent by the new LeadMagnetForm component
  const directDownload = params.get("download") ?? "";

  // Fire Meta Pixel PageView for this specific thank-you view.
  useEffect(() => {
    const W = window as MetaWindow;
    if (W.fbq) {
      W.fbq("track", "PageView");
    }
  }, []);

  // Support both the token-based path (legacy) and the direct URL path (new form)
  const downloadHref = directDownload
    ? directDownload
    : downloadToken
    ? `${DOWNLOAD_BASE}?token=${encodeURIComponent(downloadToken)}`
    : null;

  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />

      <main className="max-w-xl mx-auto px-4 py-16 sm:py-24">
        <div className="bg-white border border-stone-200 rounded-[28px] p-8 sm:p-12 text-center shadow-sm space-y-8">

          {/* Confirmation */}
          <div>
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6">
              <Inbox className="w-8 h-8" />
            </div>
            <h1 className="font-black text-3xl sm:text-4xl text-stone-900 leading-tight">
              Check your inbox.
            </h1>
            <p className="text-stone-600 mt-3 text-base leading-relaxed">
              Your{" "}
              <span className="font-semibold text-stone-900">{assetName}</span>{" "}
              is on its way{email ? (
                <>
                  {" "}to{" "}
                  <span className="font-mono text-stone-800 break-all">{email}</span>
                </>
              ) : null}
              {" "}— usually within 60 seconds.
            </p>
          </div>

          {/* What to expect box */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5 text-left space-y-3.5">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-stone-600">
                Email comes from{" "}
                <span className="font-mono text-stone-800">andre@capturepilot.com</span>.
                If you don&rsquo;t see it in 2 minutes, check your spam folder.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Search className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-stone-600">
                Still nothing? Search your inbox for{" "}
                <span className="font-mono text-stone-800">capturepilot</span> — some
                filters tuck first-time sender emails into &ldquo;Updates&rdquo; or
                &ldquo;Promotions&rdquo;.
              </p>
            </div>
          </div>

          {/* Direct download — shown when a URL is available */}
          {downloadHref && (
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-5">
              <p className="text-sm text-stone-500 mb-3">
                Don&rsquo;t want to wait for email? Grab it now:
              </p>
              <a
                href={downloadHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download directly
              </a>
            </div>
          )}

          {/* Upsell */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">
              While you wait
            </p>
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h2 className="font-black text-stone-900 text-base leading-snug">
                  Want the full kit?{" "}
                  <span className="text-amber-700">$70 — 7-day money-back guarantee.</span>
                </h2>
                <p className="text-sm text-stone-600 mt-1 mb-4">
                  60 federal contracting tools in one bundle — templates, trackers,
                  checklists, and a full bid calendar.
                </p>
                <Link
                  href="/startup-pack"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-amber-700 transition-colors text-sm"
                >
                  See the Startup Pack
                </Link>
              </div>
            </div>
          </div>

          {/* Onboarding call */}
          <p className="text-sm text-stone-500">
            Or{" "}
            <a
              href={HUBSPOT_MEETINGS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-800 font-semibold underline hover:text-emerald-700 inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              book a free 30-min onboarding call
            </a>{" "}
            and we&rsquo;ll walk you through it together.
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

export default function ResourceThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
      <ThankYouContent />
    </Suspense>
  );
}
