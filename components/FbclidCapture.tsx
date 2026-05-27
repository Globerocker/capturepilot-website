"use client";

import { useEffect } from "react";

/**
 * Capture Meta's `fbclid` URL param into the `_fbc` cookie on landing.
 * Mirror of dashboard/src/components/FbclidCapture.tsx — see that file
 * for the full rationale. Set on the root domain (`.capturepilot.com`)
 * so the cookie is shared with app.capturepilot.com.
 */
export default function FbclidCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get("fbclid");
    if (!fbclid) return;

    const existing = document.cookie.split(";").find((c) => c.trim().startsWith("_fbc="));
    if (existing) return;

    const value = `fb.1.${Date.now()}.${fbclid}`;
    const expires = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toUTCString();
    const rootDomain = window.location.hostname.split(".").slice(-2).join(".");
    document.cookie = `_fbc=${value}; domain=.${rootDomain}; path=/; expires=${expires}; SameSite=Lax; Secure`;
  }, []);

  return null;
}
