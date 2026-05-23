import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { TOP_NAICS } from "@/lib/naics-seed";
import { breadcrumbJsonLd } from "@/lib/schema";

const APP_URL = "https://app.capturepilot.com";

export const metadata: Metadata = {
  title: "Federal Contracts by NAICS Code | CapturePilot",
  description: "Browse federal government contracts by industry NAICS code. Top buying agencies, set-aside coverage, and live opportunity counts for 60+ NAICS categories.",
  alternates: { canonical: "https://www.capturepilot.com/contracts" },
  openGraph: {
    title: "Federal Contracts by NAICS Code",
    description: "Browse federal contracts by industry. NAICS codes, agencies, set-asides, live opportunities.",
    url: "https://www.capturepilot.com/contracts",
  },
};

export default function ContractsIndex() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Federal Contracts by NAICS", path: "/contracts" },
  ]);

  // Group by NAICS sector (first 2 digits)
  const sectors: Record<string, { label: string; items: typeof TOP_NAICS }> = {};
  for (const n of TOP_NAICS) {
    const sectorCode = n.code.slice(0, 2);
    const sectorLabel = SECTOR_LABELS[sectorCode] || `NAICS ${sectorCode}xxx`;
    if (!sectors[sectorCode]) sectors[sectorCode] = { label: sectorLabel, items: [] };
    sectors[sectorCode].items.push(n);
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <SiteNav />
      <main className="pt-16">
        <section className="py-16 md:py-20 px-6 bg-stone-950 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Federal Contracts by Industry
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
              Browse Federal Contracts by NAICS Code
            </h1>
            <p className="text-lg text-stone-300 mb-8">
              Each NAICS code unlocks a different pool of federal opportunities. Pick your industry to see top buying agencies, set-aside coverage, and a free check on live matching contracts.
            </p>
            <Link
              href={`${APP_URL}/check`}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105"
            >
              Don&apos;t know your NAICS? Run Free Check <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            {Object.entries(sectors).map(([code, sec]) => (
              <div key={code} className="mb-10">
                <h2 className="text-xs uppercase tracking-wider font-bold text-stone-500 mb-3">
                  {sec.label} — NAICS {code}xxx
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sec.items.map((n) => (
                    <Link
                      key={n.code}
                      href={`/contracts/${n.slug}`}
                      className="bg-stone-50 border border-stone-200 rounded-xl p-4 hover:border-emerald-400 hover:bg-emerald-50 transition-colors group"
                    >
                      <p className="font-bold text-stone-900 group-hover:text-emerald-700 text-sm mb-1">{n.label}</p>
                      <p className="text-xs text-stone-500 font-mono">NAICS {n.code}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

const SECTOR_LABELS: Record<string, string> = {
  "23": "Construction",
  "48": "Transportation",
  "49": "Warehousing & Logistics",
  "54": "Professional, Scientific & Technical Services",
  "56": "Administrative & Support Services",
  "62": "Health Care",
  "81": "Other Services",
};
