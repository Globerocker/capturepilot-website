/**
 * Conversion-event helpers. Safe to call from anywhere — no-ops if the
 * underlying pixel isn't loaded. Use these instead of raw gtag/fbq/lintrk
 * so we can change tracking destinations in one place.
 *
 * Standard events we fire:
 *   signup_clicked    every CTA that leads to /signup
 *   pricing_pro_click click on Pro plan CTA
 *   demo_clicked      click on "Book Demo" / Calendly
 *   check_started     /check URL form submitted
 *   lead_magnet       email capture form submitted (resource downloads)
 */

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  lintrk?: (action: string, data: Record<string, unknown>) => void;
};

const isBrowser = () => typeof window !== "undefined";

function w() {
  return window as DataLayerWindow;
}

export type ConversionEvent =
  | "signup_clicked"
  | "pricing_pro_click"
  | "pricing_consulting_click"
  | "demo_clicked"
  | "check_started"
  | "lead_magnet"
  | "trial_started";

const META_MAP: Record<ConversionEvent, string> = {
  signup_clicked: "Lead",
  pricing_pro_click: "InitiateCheckout",
  pricing_consulting_click: "Contact",
  demo_clicked: "Schedule",
  check_started: "Search",
  lead_magnet: "Lead",
  trial_started: "StartTrial",
};

const LINKEDIN_CONVERSION_IDS: Partial<Record<ConversionEvent, string>> = {
  // Fill in via process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_* if you use LI Ads.
  signup_clicked: process.env.NEXT_PUBLIC_LINKEDIN_CONV_SIGNUP || "",
  trial_started: process.env.NEXT_PUBLIC_LINKEDIN_CONV_TRIAL || "",
  demo_clicked: process.env.NEXT_PUBLIC_LINKEDIN_CONV_DEMO || "",
};

const GOOGLE_ADS_LABELS: Partial<Record<ConversionEvent, string>> = {
  signup_clicked: process.env.NEXT_PUBLIC_GADS_LABEL_SIGNUP || "",
  trial_started: process.env.NEXT_PUBLIC_GADS_LABEL_TRIAL || "",
  demo_clicked: process.env.NEXT_PUBLIC_GADS_LABEL_DEMO || "",
};

/**
 * Fire a conversion event to every configured destination. Safe to call
 * server-side (no-op) or before pixels load (queued via dataLayer/fbq/lintrk).
 */
export function track(event: ConversionEvent, params: Record<string, unknown> = {}) {
  if (!isBrowser()) return;

  const W = w();

  // GA4 + GTM datalayer
  W.dataLayer = W.dataLayer || [];
  W.dataLayer.push({ event, ...params });

  // GA4 explicit (independent of GTM)
  if (W.gtag && process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
    W.gtag("event", event, params);
  }

  // Google Ads conversion
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = GOOGLE_ADS_LABELS[event];
  if (W.gtag && adsId && label) {
    W.gtag("event", "conversion", {
      send_to: `${adsId}/${label}`,
      ...params,
    });
  }

  // Meta Pixel
  if (W.fbq) {
    W.fbq("track", META_MAP[event], params);
  }

  // LinkedIn Insight conversion
  const liConv = LINKEDIN_CONVERSION_IDS[event];
  if (W.lintrk && liConv) {
    W.lintrk("track", { conversion_id: liConv });
  }
}

/** Convenience wrapper for `<a onClick>` handlers — fires + lets href proceed. */
export function trackClick(event: ConversionEvent, params: Record<string, unknown> = {}) {
  return () => track(event, params);
}
