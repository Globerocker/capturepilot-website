import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { FileText, ArrowRight, Download, Mail } from "lucide-react";

interface DownloadEntry {
  slug: string;
  title: string;
  blurb: string;
  pages: number;
  inside: string[];
  badge?: string;
}

const DOWNLOADS: DownloadEntry[] = [
  {
    slug: "win-your-first-government-contract",
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
            <Link
              key={d.slug}
              href={`/downloads/${d.slug}`}
              className="group bg-white border border-stone-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col"
            >
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
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-400 inline-flex items-center gap-1">
                  <Mail className="w-3 h-3" /> Sent by email
                </span>
                <span className="text-sm font-bold text-emerald-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get it <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
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
