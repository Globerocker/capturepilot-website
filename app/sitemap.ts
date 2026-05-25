import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

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
const HIDDEN_FROM_SITEMAP = new Set(["/thank-you"]);

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
    .filter((r) => !r.includes("/presentations/")) // internal-only sales decks
    .filter((r) => !HIDDEN_FROM_SITEMAP.has(r))
    .map((route) => ({
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      lastModified: now,
      changeFrequency: changeFreqFor(route),
      priority: priorityFor(route),
    }));

  // Dynamic contractor profile pages — fetch published slugs and append.
  const contractors = await fetchContractorSlugs();
  const contractorEntries: MetadataRoute.Sitemap = contractors.map((c) => ({
    url: `${BASE_URL}/contractors/${c.slug}`,
    lastModified: c.published_at || now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...contractorEntries].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
