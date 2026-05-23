import Image from "next/image";
import { Quote, Star } from "lucide-react";

export interface Testimonial {
  /** First name + last initial, e.g. "Marcus T." */
  name: string;
  /** Job title + company, e.g. "CEO, Acme Defense Services". */
  role: string;
  /** Short quote — ideally < 30 words. */
  quote: string;
  /** Path under /public, e.g. "/testimonials/marcus.jpg". Optional. */
  avatar?: string;
  /** SDVOSB / WOSB / 8(a) / VOSB / HUBZone tag — renders as badge. Optional. */
  certification?: string;
  /** Outcome tag — e.g. "Won $1.2M contract in 90 days". Optional. */
  outcome?: string;
}

/**
 * Real-customer testimonial strip. Used on the homepage trust band + LP pages.
 *
 * **REPLACE THE PLACEHOLDER QUOTES IN `DEFAULT_QUOTES` with real customer
 * quotes before launching ads.** Without real testimonials this block is
 * a credibility liability — keep it commented out or pass `quotes={[]}` until
 * you have at least 3.
 */
const DEFAULT_QUOTES: Testimonial[] = [
  // {
  //   name: "Marcus T.",
  //   role: "CEO, [Company Name]",
  //   certification: "SDVOSB",
  //   quote: "We won our first $500K VA contract within 90 days of switching from manual SAM.gov search to CapturePilot.",
  //   outcome: "First federal win in 90 days",
  // },
  // {
  //   name: "Linda K.",
  //   role: "Founder, [Company Name]",
  //   certification: "WOSB",
  //   quote: "The AI proposal writer cut our drafting time by 70%. We bid on twice as many opportunities now.",
  //   outcome: "2× bid volume",
  // },
  // {
  //   name: "Dave R.",
  //   role: "Capture Manager, [Company Name]",
  //   certification: "8(a)",
  //   quote: "Recompete Radar surfaced a $4M opportunity 8 months before the RFP hit SAM.gov. That's pure capture gold.",
  //   outcome: "$4M recompete identified early",
  // },
];

export default function TestimonialBlock({
  quotes = DEFAULT_QUOTES,
  variant = "light",
  headline = "Trusted by Veteran-Owned & Small Businesses",
}: {
  quotes?: Testimonial[];
  variant?: "light" | "dark";
  headline?: string;
}) {
  if (!quotes || quotes.length === 0) return null;

  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 md:py-20 px-6 ${
        isDark ? "bg-stone-950 text-white" : "bg-white text-stone-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 mb-3" aria-label="5-star rating">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className={`text-2xl md:text-3xl font-black ${isDark ? "text-white" : "text-stone-900"}`}>
            {headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <figure
              key={i}
              className={`rounded-2xl p-6 border ${
                isDark
                  ? "bg-stone-900 border-stone-800"
                  : "bg-stone-50 border-stone-200"
              } relative flex flex-col`}
            >
              <Quote className={`w-7 h-7 mb-4 ${isDark ? "text-emerald-400" : "text-emerald-500"} opacity-60`} />
              <blockquote className={`text-sm leading-relaxed mb-6 flex-1 ${isDark ? "text-stone-300" : "text-stone-700"}`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {t.outcome && (
                <div className={`mb-4 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full self-start ${
                  isDark ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                         : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                }`}>
                  ✓ {t.outcome}
                </div>
              )}

              <figcaption className="flex items-center gap-3">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    isDark ? "bg-emerald-500/20 text-emerald-300" : "bg-emerald-100 text-emerald-700"
                  }`}>
                    {t.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold ${isDark ? "text-white" : "text-stone-900"}`}>{t.name}</p>
                  <p className={`text-xs truncate ${isDark ? "text-stone-400" : "text-stone-500"}`}>{t.role}</p>
                </div>
                {t.certification && (
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isDark ? "bg-stone-800 text-stone-300" : "bg-stone-100 text-stone-600"
                  }`}>
                    {t.certification}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Build a JSON-LD `Review` schema array from the same testimonial data.
 * Drop into `app/layout.tsx` (or page layouts) so Google can surface them
 * as rich-result review snippets.
 */
export function testimonialReviewJsonLd(quotes: Testimonial[]) {
  if (!quotes || quotes.length === 0) return null;
  return quotes.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: t.name },
    reviewBody: t.quote,
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: "CapturePilot",
      applicationCategory: "BusinessApplication",
    },
  }));
}
