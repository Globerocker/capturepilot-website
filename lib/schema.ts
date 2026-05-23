/**
 * Shared JSON-LD builders. Use these in `layout.tsx` files instead of
 * hand-rolling JSON.stringify blocks so we keep schema-type contracts
 * uniform across the site.
 */

const BASE = "https://www.capturepilot.com";
const ORG_NAME = "CapturePilot";
const ORG_LOGO = `${BASE}/logo.png`;

export interface BreadcrumbStep {
  name: string;
  path: string; // absolute path starting with '/'
}

export function breadcrumbJsonLd(steps: BreadcrumbStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: steps.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      item: `${BASE}${s.path === "/" ? "" : s.path}`,
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image ?? `${BASE}/og-default.png`,
    author: { "@type": "Organization", name: ORG_NAME, url: BASE },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: { "@type": "ImageObject", url: ORG_LOGO },
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    mainEntityOfPage: opts.url,
    ...(opts.section ? { articleSection: opts.section } : {}),
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function howToJsonLd(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function softwareFeatureJsonLd(opts: {
  name: string;
  url: string;
  description: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    applicationCategory: opts.category ?? "BusinessApplication",
    operatingSystem: "Web",
    url: opts.url,
    description: opts.description,
    publisher: { "@type": "Organization", name: ORG_NAME, url: BASE },
  };
}

/**
 * Convenience: inline-render an array of JSON-LD blobs into one
 * <script type="application/ld+json"> tag (Google supports multiple
 * blobs but one tag with an array is fine and cuts duplication).
 */
export function jsonLdScript(blobs: object[]) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(blobs) },
  };
}
