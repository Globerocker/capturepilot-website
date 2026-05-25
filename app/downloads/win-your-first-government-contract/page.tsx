import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import {
  CheckCircle2,
  FileText,
  Target,
  Calculator,
  ClipboardList,
  DollarSign,
  ArrowLeft,
  Shield,
} from "lucide-react";

const PDF_URL =
  "https://ryxgjzehoijjvczqkhwr.supabase.co/storage/v1/object/public/Lead%20Magnets/CapturePilot-Win-Your-First-Government-Contract.pdf";

const SECTIONS = [
  {
    icon: Target,
    title: "Bid / No-Bid Decision Matrix",
    body:
      "The 9-question scoring grid we run on every opportunity before our team picks up a proposal. If you score under 60, walk — chasing the wrong RFP costs $20–40k in lost capture cycles.",
  },
  {
    icon: Calculator,
    title: "PWin (Probability of Win) Calculator",
    body:
      "The same 10-factor model the big primes use, simplified for a small-business owner. Customer relationship, competitive position, past performance, price-to-win — weighted into a single number.",
  },
  {
    icon: ClipboardList,
    title: "RFP Response Framework",
    body:
      "Compliance matrix template + section-by-section outline you can hand to a writer. Cuts your first RFP draft time from 40 hours to about 12.",
  },
  {
    icon: DollarSign,
    title: "Pricing-to-Win Worksheet",
    body:
      "Federal pricing is its own discipline. First-time bidders typically under-price by 25–40%. This worksheet runs your direct + indirect rates, plus a competitive band so you don&rsquo;t leave money on the table.",
  },
];

export default function FieldManualPage() {
  return (
    <>
      <SiteNav />
      <div className="h-[104px]" />

      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-16">
        {/* Breadcrumb */}
        <Link
          href="/downloads"
          className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All downloads
        </Link>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* LEFT — content */}
          <article className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">
              Free field manual · 24 pages · PDF
            </p>
            <h1 className="font-black text-4xl sm:text-5xl text-stone-900 leading-[1.05]">
              Win Your First Government Contract.
            </h1>
            <p className="text-stone-600 mt-5 text-lg leading-relaxed">
              The handbook we wish someone had handed us before our first federal bid. Built for small businesses
              that have never sold to the government &mdash; or have tried, lost, and want to know why.
            </p>

            <div className="mt-10 space-y-5">
              {SECTIONS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="flex items-start gap-4 bg-white border border-stone-200 rounded-2xl p-5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-stone-900">{s.title}</h2>
                      <p
                        className="text-sm text-stone-600 mt-1.5 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: s.body }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 bg-stone-50 border border-stone-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-stone-900">Who this is for</p>
                  <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">
                    Small business owners (1–50 employees) who have never won a federal contract or have spent
                    months on SAM.gov without a single award. If you&rsquo;ve already won three primes, the field
                    manual will feel basic &mdash; skip it.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT — form (sticky on desktop) */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-[120px] space-y-4">
              <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-800 rounded-[20px] p-6 text-white shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Get the PDF</p>
                <h3 className="font-black text-2xl mt-1 leading-tight">
                  Drop your email — we&rsquo;ll send the link.
                </h3>
                <p className="text-white/80 text-sm mt-2.5 leading-relaxed">
                  No credit card, no signup. The PDF link arrives within 60 seconds.
                </p>
                <ul className="mt-4 space-y-2">
                  {["24-page PDF", "Lifetime access", "No spam — promise"].map((it) => (
                    <li key={it} className="text-sm text-white/90 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-200" /> {it}
                    </li>
                  ))}
                </ul>
              </div>

              <LeadMagnetForm
                magnetKey="field-manual"
                title="Send me the field manual"
                description="We&rsquo;ll email the PDF link right now."
                downloadUrl={PDF_URL}
                ctaLabel="Email me the PDF"
                collectCompany={true}
                redirectTo="/thank-you"
              />

              <p className="text-[11px] text-stone-400 text-center px-4">
                By entering your email you&rsquo;ll get the field manual and, occasionally, a heads-up about live
                opportunities for your NAICS. Unsubscribe with one click.
              </p>
            </div>
          </aside>
        </div>

        {/* Final CTA strip */}
        <section className="mt-20 bg-stone-900 text-white rounded-[28px] p-8 sm:p-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-300">After you&rsquo;ve read it</p>
          <h2 className="font-black text-3xl sm:text-4xl mt-2">Want to see what&rsquo;s open for you right now?</h2>
          <p className="text-white/70 text-base mt-3 max-w-xl mx-auto">
            Run the free Quick Check — drop your website URL and we&rsquo;ll tell you your NAICS codes, SAM.gov
            status, and the live federal opportunities matching your business.
          </p>
          <Link
            href="/check"
            className="mt-6 inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-colors"
          >
            Run the Quick Check &mdash; Free
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
