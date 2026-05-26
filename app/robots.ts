import type { MetadataRoute } from "next";

// Robots policy. We want EVERYTHING indexed except internal API routes and
// the embed widget shell. We also explicitly welcome major LLM crawlers
// (GPTBot, ClaudeBot, etc) so we get cited in AI answers — many sites
// silently block them via "User-agent: *" rules misconfigured to deny.
export default function robots(): MetadataRoute.Robots {
  const llmCrawlers = [
    "GPTBot",                  // OpenAI
    "ChatGPT-User",            // OpenAI ChatGPT browsing
    "OAI-SearchBot",           // OpenAI search
    "ClaudeBot",               // Anthropic Claude
    "Claude-Web",              // Anthropic
    "anthropic-ai",            // Anthropic
    "PerplexityBot",           // Perplexity
    "Perplexity-User",         // Perplexity user-fetch
    "Google-Extended",         // Google Gemini training
    "Bytespider",              // ByteDance / Doubao
    "Amazonbot",               // Amazon
    "Applebot-Extended",       // Apple Intelligence
    "Meta-ExternalAgent",      // Meta AI
    "FacebookBot",             // Meta link previews
    "CCBot",                   // Common Crawl
    "Diffbot",
    "YouBot",                  // You.com
  ];
  return {
    rules: [
      // Standard rule for general web crawlers (Googlebot, Bingbot, etc).
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/embed", "/api/"],
      },
      // Explicit allow for LLM crawlers — same allow set, just guarantees
      // we're not accidentally on a deny list when policies tighten over time.
      ...llmCrawlers.map((ua) => ({
        userAgent: ua,
        allow: "/",
        disallow: ["/embed", "/api/"],
      })),
    ],
    sitemap: "https://www.capturepilot.com/sitemap.xml",
    host: "https://www.capturepilot.com",
  };
}
