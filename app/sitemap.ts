import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { NAICS_LABELS } from "@/lib/naics-labels";

const BASE_URL = "https://www.capturepilot.com";

/**
 * Walk the app/ directory at build time and emit a sitemap entry for every
 * static, public route. Dynamic segments (`[slug]`), private groups, the
 * embed route, and the LinkedIn-banner ephemeral pages are excluded.
 *
 * Priority + changeFrequency derive from path depth + section heuristics so
 * we never miss a new page (the old manual list had drifted ~70 routes
 * behind the codebase).
 */
function walkAppRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes: string[] = [];

  function walk(dir: string, urlPath: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some((e) => e.isFile() && e.name === "page.tsx");
    if (hasPage) routes.push(urlPath || "/");

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const name = entry.name;
      // Skip dynamic segments, private route groups, and excluded sections
      if (name.startsWith("[") || name.startsWith("(") || name.startsWith("_")) continue;
      if (EXCLUDED_SECTIONS.includes(name) && urlPath === "") continue;
      walk(path.join(dir, name), `${urlPath}/${name}`);
    }
  }

  walk(appDir, "");
  return routes;
}

// embed/linkedin-banner are presentation surfaces, api is non-HTML. "lp" used to be
// excluded because pages were noindexed; current LP pages render normally and are
// worth indexing for SEO (every public, indexable surface gets a sitemap entry).
const EXCLUDED_SECTIONS = ["embed", "linkedin-banner", "api"];

function priorityFor(route: string): number {
  if (route === "/") return 1.0;
  if (route === "/pricing" || route === "/features" || route === "/check" || route === "/startup-pack") return 0.9;
  if (route === "/downloads" || route.startsWith("/downloads/")) return 0.85;
  if (route === "/contractors") return 0.9;
  if (route.startsWith("/contractors/")) return 0.7;
  if (route.startsWith("/vs/") && route !== "/vs") return 0.85;
  if (route === "/vs" || route === "/blog" || route === "/academy") return 0.8;
  if (route.startsWith("/features/") || route.startsWith("/for/")) return 0.8;
  if (route.startsWith("/blog/")) return 0.7;
  if (route.startsWith("/resources/")) return 0.7;
  if (route.startsWith("/presentations/")) return 0.4;
  if (route === "/walkthrough" || route === "/updates") return 0.5;
  if (route.startsWith("/lp/")) return 0.6;
  return 0.6;
}

function changeFreqFor(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/" || route === "/check" || route === "/startup-pack") return "weekly";
  if (route === "/updates") return "daily";
  if (route === "/blog" || route === "/pricing" || route === "/features") return "weekly";
  if (route === "/downloads" || route.startsWith("/downloads/")) return "weekly";
  if (route === "/contractors" || route.startsWith("/contractors/")) return "weekly";
  if (route.startsWith("/blog/")) return "monthly";
  if (route.startsWith("/vs/")) return "monthly";
  if (route.startsWith("/resources/") || route.startsWith("/for/")) return "monthly";
  return "monthly";
}

// Pages we never want indexed (noindex meta is also set in the page layout).
const HIDDEN_FROM_SITEMAP = new Set(["/thank-you", "/presentations"]);

/**
 * Resource pages that exist as real routes but need priority/changefreq overrides
 * (priority 0.8 / weekly) compared to the default walker-derived values (0.7 / monthly).
 * New /resources/* pages should be added here when created.
 */
const RESOURCE_OVERRIDES: Array<{ slug: string }> = [
  { slug: "federal-contracting-field-manual" },
  { slug: "sam-gov-registration-walkthrough" },
  { slug: "capability-statement-template" },
  { slug: "rfp-response-playbook" },
  { slug: "pwin-calculator" },
  { slug: "vosb-sdvosb-certification-guide" },
  { slug: "past-performance-commercial-to-federal" },
  { slug: "federal-events-calendar-2026" },
  { slug: "federal-labor-rate-benchmarks-2026" },
  { slug: "far-clause-quick-reference" },
  { slug: "cpars-past-performance-guide" },
];

async function fetchContractorSlugs(): Promise<Array<{ slug: string; published_at?: string }>> {
  // Pulls published contractor profile slugs at build/regeneration time so
  // the dynamic /contractors/[slug] routes appear in the sitemap. The hub
  // page itself comes from the file walk above; this adds the per-firm URLs.
  try {
    const res = await fetch("https://app.capturepilot.com/api/public/contractors?limit=200&sort=score", {
      next: { revalidate: 3600 }, // rebuild sitemap at most hourly
    });
    if (!res.ok) return [];
    const data = await res.json() as { contractors?: Array<{ slug: string; published_at?: string }> };
    return data.contractors || [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();
  const routes = walkAppRoutes();

  const staticEntries = routes
    // internal-only sales decks: exclude hub (/presentations) and all sub-pages (/presentations/*)
    .filter((r) => r !== "/presentations" && !r.startsWith("/presentations/"))
    .filter((r) => !HIDDEN_FROM_SITEMAP.has(r))
    .map((route) => ({
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      lastModified: now,
      changeFrequency: changeFreqFor(route),
      priority: priorityFor(route),
    }));

  // New /resources/* pages — added with elevated priority/changefreq before their page.tsx
  // files exist (or to override the walker-derived defaults once the files are created).
  // The walker will naturally find them once page.tsx files land; dedup is harmless because
  // the sitemap spec tolerates duplicate URLs (crawlers use the last occurrence).
  const resourceOverrides: MetadataRoute.Sitemap = RESOURCE_OVERRIDES.map(({ slug }) => ({
    url: `${BASE_URL}/resources/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Dynamic contractor profile pages — fetch published slugs and append.
  const contractors = await fetchContractorSlugs();
  const contractorEntries: MetadataRoute.Sitemap = contractors.map((c) => ({
    url: `${BASE_URL}/contractors/${c.slug}`,
    lastModified: c.published_at || now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // NAICS aggregator landing pages — one per code in our curated label set.
  const naicsAggregators: MetadataRoute.Sitemap = NAICS_LABELS.map((n) => ({
    url: `${BASE_URL}/contractors/in/${n.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...resourceOverrides, ...contractorEntries, ...naicsAggregators]
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
