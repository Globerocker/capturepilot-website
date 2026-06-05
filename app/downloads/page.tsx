import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { FileText, ArrowRight, Download, Mail } from "lucide-react";

// Lucide 1.x in this app doesn't ship a brand `Linkedin` icon — inline the
// official LinkedIn glyph. Same approach used in components/ContractorList.tsx.
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

interface DownloadEntry {
  slug: string;
  /** Lead-magnet key — must match a key in dashboard/src/lib/lead-magnets.ts.
   *  Used by the "Continue with LinkedIn" shortcut on each card. */
  magnetKey: string;
  title: string;
  blurb: string;
  pages: number;
  inside: string[];
  badge?: string;
}

const DOWNLOADS: DownloadEntry[] = [
  {
    slug: "win-your-first-government-contract",
    magnetKey: "field-manual",
    title: "Win Your First Government Contract",
    blurb:
      "The 24-page field manual we built for first-time bidders. Covers the bid/no-bid call, PWin scoring, RFP structure, and federal pricing without the consultant markup.",
    pages: 24,
    inside: [
      "Bid / No-Bid Decision Matrix",
      "PWin (Probability of Win) Calculator",
      "RFP Response Framework",
      "Pricing-to-Win Worksheet",
    ],
    badge: "New",
  },
];

/** Build the LinkedIn shortcut URL for a given magnet. The dashboard runs the
 *  Supabase OAuth dance (cookies have to land on app.capturepilot.com) and
 *  302s the user back to the thank-you page on the marketing site. */
function linkedInHref(magnetKey: string): string {
  const returnTo = encodeURIComponent("https://www.capturepilot.com/thank-you");
  return `https://app.capturepilot.com/auth/linkedin-lead-magnet?magnet=${encodeURIComponent(magnetKey)}&return_to=${returnTo}`;
}

export default function DownloadsPage() {
  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />

      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
        <header className="mb-12 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Free downloads</p>
          <h1 className="font-black text-4xl sm:text-5xl text-stone-900 mt-2 leading-tight">
            Field manuals, worksheets &amp; templates.
          </h1>
          <p className="text-stone-600 mt-4 text-base leading-relaxed">
            What we&rsquo;ve learned working with first-time federal bidders, turned into PDFs you can use on your
            next solicitation. Drop your email — we&rsquo;ll send the link.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DOWNLOADS.map((d) => (
            // Card wrapper is a div (not a Link) so we can put the LinkedIn
            // shortcut as its own anchor without nesting interactive elements.
            <div
              key={d.slug}
              className="group bg-white border border-stone-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col"
            >
              <Link href={`/downloads/${d.slug}`} className="flex-1 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h2 className="font-black text-stone-900 text-lg leading-tight">{d.title}</h2>
                      {d.badge && (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded uppercase tracking-wider">
                          {d.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">PDF · {d.pages} pages · Free</p>
                  </div>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed">{d.blurb}</p>
                <ul className="space-y-1 mt-4 pl-1">
                  {d.inside.slice(0, 4).map((item) => (
                    <li key={item} className="text-xs text-stone-500 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Link>
              {/* LinkedIn shortcut — sits under each card so future magnets
                  inherit it automatically. Routes through the dashboard's
                  /auth/linkedin-lead-magnet shim (Supabase OAuth cookies
                  must land on app.capturepilot.com). */}
              <a
                href={linkedInHref(d.magnetKey)}
                className="mt-5 w-full bg-white border-2 border-[#0A66C2] text-[#0A66C2] rounded-xl py-2.5 px-3 font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#0A66C2]/5 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                Get it instantly with LinkedIn
              </a>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-stone-400 inline-flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Or send to my inbox
                </span>
                <Link
                  href={`/downloads/${d.slug}`}
                  className="text-sm font-bold text-emerald-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Get it <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-stone-100 border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center flex-shrink-0">
            <Download className="w-6 h-6 text-stone-600" />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-lg">How it works</h3>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Pick a download, drop your email, and the PDF link arrives in your inbox within 60 seconds.
              No credit card. We use the same email to send one or two follow-ups about live opportunities for your
              NAICS &mdash; reply &ldquo;stop&rdquo; any time and we&rsquo;ll stop.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
