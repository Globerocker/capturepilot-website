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
  if (route.startsWith("/blog/")) return "monthly";
  if (route.startsWith("/vs/")) return "monthly";
  if (route.startsWith("/resources/") || route.startsWith("/for/")) return "monthly";
  return "monthly";
}

// Pages we never want indexed (noindex meta is also set in the page layout).
const HIDDEN_FROM_SITEMAP = new Set(["/thank-you"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const routes = walkAppRoutes();

  return routes
    .filter((r) => !r.includes("/presentations/")) // internal-only sales decks
    .filter((r) => !HIDDEN_FROM_SITEMAP.has(r))
    .map((route) => ({
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      lastModified: now,
      changeFrequency: changeFreqFor(route),
      priority: priorityFor(route),
    }))
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
}
