import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // GTM + GA4 + Google Ads + Meta Pixel + LinkedIn Insight + HubSpot all need inline+eval
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://snap.licdn.com https://px.ads.linkedin.com https://js.hsforms.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com https://www.facebook.com https://px.ads.linkedin.com https://*.linkedin.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://app.capturepilot.com https://meetings-na2.hubspot.com https://www.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://www.googletagmanager.com https://connect.facebook.net https://*.facebook.com https://px.ads.linkedin.com",
              "frame-src https://meetings-na2.hubspot.com https://www.googletagmanager.com",
            ].join("; "),
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Allow embedding for /embed and /walkthrough pages
        source: "/embed",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
        ],
      },
      {
        source: "/walkthrough",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
        ],
      },
    ];
  },
};

export default nextConfig;
