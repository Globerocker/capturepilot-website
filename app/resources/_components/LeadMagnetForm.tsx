"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { track } from "@/lib/analytics";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface LeadMagnetFormProps {
  /** Passed to the API as context for which asset triggered the form. */
  hubspot_source: string;
  /** "Get the [X] →" — this is the X. */
  assetName: string;
  /** The resource slug used to build the thank-you redirect URL. */
  slug: string;
  /** Direct URL to the PDF/download — shown on the thank-you page. */
  downloadUrl?: string;
}

const FREE_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.uk", "ymail.com",
  "hotmail.com", "hotmail.co.uk", "hotmail.fr", "outlook.com", "outlook.co.uk",
  "live.com", "msn.com", "icloud.com", "me.com", "mac.com",
  "aol.com", "aim.com", "protonmail.com", "proton.me",
  "zohomail.com", "mail.com", "gmx.com", "gmx.net", "gmx.de",
]);

const CERTIFICATIONS = [
  { value: "none", label: "None yet" },
  { value: "small_business", label: "Small Business" },
  { value: "sdb", label: "SDB" },
  { value: "sdvosb", label: "SDVOSB" },
  { value: "vosb", label: "VOSB" },
  { value: "8a", label: "8(a)" },
  { value: "hubzone", label: "HUBZone" },
  { value: "wosb", label: "WOSB" },
  { value: "edwosb", label: "EDWOSB" },
  { value: "tribal", label: "Tribally-Owned" },
  { value: "anc", label: "ANC" },
  { value: "nho", label: "NHO" },
  { value: "mbe_state", label: "MBE (state)" },
  { value: "dbe", label: "DBE" },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function isValidUrl(val: string): boolean {
  if (!val.trim()) return false;
  // Accept with or without protocol — we just need a domain
  const withProto = val.startsWith("http://") || val.startsWith("https://")
    ? val
    : `https://${val}`;
  try {
    const u = new URL(withProto);
    return u.hostname.includes(".");
  } catch {
    return false;
  }
}

function emailDomain(email: string): string {
  return email.split("@")[1]?.toLowerCase().trim() ?? "";
}

function isFreeEmail(email: string): boolean {
  return FREE_DOMAINS.has(emailDomain(email));
}

/* ------------------------------------------------------------------ */
/* Field error type                                                     */
/* ------------------------------------------------------------------ */

interface FieldErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  companyWebsite?: string;
  samRegistered?: string;
}

/* ------------------------------------------------------------------ */
/* Input primitives                                                     */
/* ------------------------------------------------------------------ */

function Field({
  label,
  required,
  error,
  warning,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  warning?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-stone-700 mb-1.5">
        {label}
        {required && <span className="text-rose-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {error}
        </p>
      )}
      {!error && warning && (
        <p className="mt-1.5 text-xs text-amber-600">{warning}</p>
      )}
    </div>
  );
}

const inputBase =
  "w-full px-4 py-3 bg-white border rounded-xl text-sm text-stone-900 placeholder:text-stone-400 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500";

function inputClass(hasError: boolean) {
  return `${inputBase} ${hasError ? "border-rose-400 ring-1 ring-rose-300" : "border-stone-300 hover:border-stone-400"}`;
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export default function LeadMagnetForm({
  hubspot_source,
  assetName,
  slug,
  downloadUrl,
}: LeadMagnetFormProps) {
  const router = useRouter();

  /* form state */
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [samRegistered, setSamRegistered] = useState<"yes" | "no" | "">("");
  const [certifications, setCertifications] = useState<Set<string>>(new Set());

  /* UI state */
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [emailWarning, setEmailWarning] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  /* UTM params captured from URL on mount */
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid", "gclid"]) {
      const v = search.get(k);
      if (v) utm[k] = v;
    }
    setUtmParams(utm);
  }, []);

  /* Live free-email soft warning */
  useEffect(() => {
    if (email.includes("@") && isFreeEmail(email)) {
      setEmailWarning("Looks like a personal email — a work address gets you a richer readiness snapshot.");
    } else {
      setEmailWarning("");
    }
  }, [email]);

  /* Certification pill toggle */
  const toggleCert = useCallback((value: string) => {
    setCertifications((prev) => {
      const next = new Set(prev);
      if (value === "none") {
        // "None yet" is exclusive
        return next.has("none") ? new Set() : new Set(["none"]);
      }
      // Selecting any real cert clears "none"
      next.delete("none");
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  }, []);

  /* Validate on submit */
  function validate(): boolean {
    const errors: FieldErrors = {};
    if (!email.trim()) errors.email = "Work email is required.";
    else if (!email.includes("@") || !email.includes(".")) errors.email = "Enter a valid email address.";
    if (!firstName.trim()) errors.firstName = "First name is required.";
    if (!lastName.trim()) errors.lastName = "Last name is required.";
    if (!companyName.trim()) errors.companyName = "Company name is required.";
    if (!companyWebsite.trim()) errors.companyWebsite = "Company website is required.";
    else if (!isValidUrl(companyWebsite)) errors.companyWebsite = "Enter a valid website (e.g. acme.com).";
    if (!samRegistered) errors.samRegistered = "Please select yes or no.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitState("loading");
    setSubmitError("");

    const payload = {
      email: email.trim(),
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      company_name: companyName.trim(),
      company_website: companyWebsite.trim(),
      sam_registered: samRegistered,
      certifications: Array.from(certifications),
      hubspot_source,
      download_url: downloadUrl,
      ...utmParams,
    };

    try {
      const res = await fetch("/api/lead-magnet/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok && res.status !== 409) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      track("lead_magnet", {
        magnet: hubspot_source,
        sam_registered: samRegistered,
        has_certs: certifications.size > 0,
      });

      const destUrl = new URL(
        `/resources/${slug}/thank-you`,
        window.location.origin
      );
      destUrl.searchParams.set("email", email.trim());
      if (downloadUrl) destUrl.searchParams.set("download", downloadUrl);
      for (const [k, v] of Object.entries(utmParams)) {
        destUrl.searchParams.set(k, v);
      }
      router.push(destUrl.toString());
    } catch (err) {
      setSubmitError((err as Error).message || "Something went wrong. Try again.");
      setSubmitState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm"
    >
      {/* 2-col grid on desktop; single col on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Row 1: First name / Last name */}
        <Field label="First name" required error={fieldErrors.firstName}>
          <input
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (fieldErrors.firstName) setFieldErrors((p) => ({ ...p, firstName: undefined }));
            }}
            placeholder="Jane"
            className={inputClass(!!fieldErrors.firstName)}
          />
        </Field>

        <Field label="Last name" required error={fieldErrors.lastName}>
          <input
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (fieldErrors.lastName) setFieldErrors((p) => ({ ...p, lastName: undefined }));
            }}
            placeholder="Smith"
            className={inputClass(!!fieldErrors.lastName)}
          />
        </Field>

        {/* Row 2: Company name / Company website */}
        <Field label="Company name" required error={fieldErrors.companyName}>
          <input
            type="text"
            required
            autoComplete="organization"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              if (fieldErrors.companyName) setFieldErrors((p) => ({ ...p, companyName: undefined }));
            }}
            placeholder="Acme Federal Services"
            className={inputClass(!!fieldErrors.companyName)}
          />
        </Field>

        <Field label="Company website" required error={fieldErrors.companyWebsite}>
          <input
            type="text"
            required
            autoComplete="url"
            inputMode="url"
            value={companyWebsite}
            onChange={(e) => {
              setCompanyWebsite(e.target.value);
              if (fieldErrors.companyWebsite) setFieldErrors((p) => ({ ...p, companyWebsite: undefined }));
            }}
            placeholder="acmefederalservices.com"
            className={inputClass(!!fieldErrors.companyWebsite)}
          />
        </Field>

        {/* Row 3: Email — full width */}
        <div className="md:col-span-2">
          <Field
            label="Work email"
            required
            error={fieldErrors.email}
            warning={emailWarning}
          >
            <input
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: undefined }));
              }}
              placeholder="jane@acmefederalservices.com"
              className={inputClass(!!fieldErrors.email)}
            />
          </Field>
        </div>

        {/* Row 4: SAM.gov registration — full width */}
        <div className="md:col-span-2">
          <Field label="Registered on SAM.gov?" required error={fieldErrors.samRegistered}>
            <div className="flex gap-3 mt-0.5">
              {(["yes", "no"] as const).map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setSamRegistered(opt);
                    if (fieldErrors.samRegistered) setFieldErrors((p) => ({ ...p, samRegistered: undefined }));
                  }}
                  className={[
                    "flex-1 py-3 px-4 rounded-xl border font-semibold text-sm transition-all duration-150",
                    samRegistered === opt
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-400"
                      : "border-stone-300 bg-white text-stone-600 hover:border-stone-400",
                    !!fieldErrors.samRegistered && samRegistered !== opt
                      ? "border-rose-300"
                      : "",
                  ].join(" ")}
                >
                  {opt === "yes" ? "Yes" : "No"}
                </button>
              ))}
            </div>
          </Field>
        </div>

        {/* Row 5: Certifications — full width */}
        <div className="md:col-span-2">
          <p className="block text-sm font-semibold text-stone-700 mb-2">
            Set-aside certifications you have
            <span className="ml-1.5 font-normal text-stone-400 text-xs">(optional — select all that apply)</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map(({ value, label }) => {
              const selected = certifications.has(value);
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => toggleCert(value)}
                  className={[
                    "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150",
                    selected
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-300"
                      : "border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300 hover:bg-white",
                  ].join(" ")}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hidden fields — rendered as DOM inputs so they're part of the form element tree */}
      <input type="hidden" name="hubspot_source" value={hubspot_source} />

      {/* Submit */}
      <div className="mt-6 space-y-3">
        <button
          type="submit"
          disabled={submitState === "loading"}
          className="w-full bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-bold text-base hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-60 transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm hover:shadow"
        >
          {submitState === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating your readiness snapshot...
            </>
          ) : (
            <>
              Get the {assetName} →
            </>
          )}
        </button>

        {submitState === "error" && submitError && (
          <div className="flex items-start gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl">
            <AlertCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-rose-700">{submitError}</p>
          </div>
        )}

        <p className="text-xs text-stone-500 text-center leading-relaxed">
          We&rsquo;ll email you the PDF + a 1-page personalized federal contracting readiness snapshot.
          Takes ~30 sec to generate.
        </p>
        <p className="text-xs text-stone-400 text-center">
          <CheckCircle2 className="w-3.5 h-3.5 inline mr-1 text-stone-300" />
          We don&rsquo;t sell or share your info. Unsubscribe any time.
        </p>
      </div>
    </form>
  );
}
