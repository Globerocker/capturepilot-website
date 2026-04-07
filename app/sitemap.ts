import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://capturepilot.com";
  const now = new Date().toISOString();

  return [
    // Core pages — highest priority
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/process`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Feature pages — high priority
    { url: `${baseUrl}/features/matching`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/proposals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/intelligence`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/quick-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/pipeline`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/capability-statement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Comparison pages — high SEO value
    { url: `${baseUrl}/vs/govwin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vs/govtribe`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vs/sam-gov`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vs/bgov`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/highergov`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/federal-compass`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/unison`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/capture2proposal`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Audience pages — medium-high priority
    { url: `${baseUrl}/for/veterans`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for/women-owned`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for/small-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for/agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Blog — medium priority, high SEO value
    { url: `${baseUrl}/blog/government-contracting-101`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/naics-codes-explained`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/set-aside-programs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/capability-statement-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/sam-registration-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/proposal-writing-tips`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Resources — medium priority
    { url: `${baseUrl}/resources/quick-checker-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/resources/bid-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/resources/proposal-template`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Comparison index + additional pages
    { url: `${baseUrl}/vs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/vs/sweetspot`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/govdash`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/ezgovopps`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Quick Checker + Blog index
    { url: `${baseUrl}/check`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Walkthrough — lower priority (embeddable)
    { url: `${baseUrl}/walkthrough`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
