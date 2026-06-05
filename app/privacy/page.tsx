import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function Page() {
  return (
    <>
      <SiteNav />

      <section className="pt-20 pb-12 px-4 bg-gradient-to-b from-stone-50 via-white to-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-stone-900 leading-[1.1] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-stone-500">Last updated: 2026-06-05</p>
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto prose prose-stone max-w-none">
          <p className="text-lg text-stone-700 leading-relaxed mb-10">
            This is the short version: we collect what we need to run the product, we don&apos;t sell your data, and you can delete your account whenever you want. The rest of this page is the detail in case you want it.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">What we collect</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            When you sign up we ask for your <strong>email, name, and company</strong>. That&apos;s the minimum to give you a login and personalize matches. If you&apos;re registered with SAM.gov and enter your <strong>UEI</strong>, we store it so we can pull your registration data and score opportunities for you.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            If you sign in with <strong>LinkedIn</strong>, we receive your name, email, profile picture URL, headline (when available), and LinkedIn user ID. That&apos;s it. We do not access your connections, messages, posts, or anything beyond these basic profile fields.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            If you upgrade to a paid plan, <strong>Stripe handles your card information directly</strong>. We never see or store your full card number — we only get back a customer ID and the last four digits for receipts.
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            We collect <strong>usage analytics</strong> via Vercel Analytics and the Meta Pixel so we know which features get used and which ads sent you here. That&apos;s pages visited, buttons clicked, and broad device/region info — not keystrokes, not your screen content.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">How we use it</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Four things, in order of how much data each one touches:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 mb-4">
            <li><strong>Deliver the product.</strong> Score matches, run the Quick Checker, save your pursuits, render your dashboard. None of this works without your profile data.</li>
            <li><strong>Transactional emails.</strong> Welcome message, password reset, Quick Checker results, billing receipts. These are tied to your account — you can&apos;t opt out without closing the account.</li>
            <li><strong>Marketing emails.</strong> Occasional product updates and new-feature notes. Every one has an unsubscribe link in the footer that works in one click.</li>
            <li><strong>Product improvement.</strong> Aggregated, de-identified usage data tells us which features earn their keep. We don&apos;t train external AI models on your data.</li>
          </ul>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">Who we share it with (sub-processors)</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            We use a small set of vendors to run the service. They only see the data they need to do their job:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 mb-4">
            <li><strong>Supabase</strong> — hosts the database (your account, matches, pursuits).</li>
            <li><strong>Resend</strong> — sends transactional and marketing emails on our behalf.</li>
            <li><strong>Stripe</strong> — processes payments and stores card details.</li>
            <li><strong>HubSpot</strong> — CRM for our consulting clients only. If you&apos;re on the self-service plan, your data doesn&apos;t go here.</li>
            <li><strong>Vercel</strong> — hosts the website and the app, plus serves the analytics.</li>
            <li><strong>Meta and Google</strong> — ad platforms. They get aggregated conversion signals (e.g. &quot;someone from this ad signed up&quot;) so we know which ads are working.</li>
            <li><strong>LinkedIn</strong> — sign-in provider, OAuth only. Used to authenticate you if you choose &quot;Sign in with LinkedIn.&quot;</li>
          </ul>
          <p className="text-stone-700 leading-relaxed mb-4">
            We don&apos;t sell your data to anyone. We don&apos;t share it with anyone outside the vendors above without your permission, except when we&apos;re legally required to.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">Your rights</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Whether or not you&apos;re in a jurisdiction with formal privacy laws (GDPR in the EU, CCPA in California, etc.), you can ask us to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 mb-4">
            <li><strong>See</strong> what we have on you.</li>
            <li><strong>Export</strong> your data in a machine-readable format.</li>
            <li><strong>Correct</strong> anything that&apos;s wrong.</li>
            <li><strong>Delete</strong> your account and everything tied to it.</li>
            <li><strong>Unsubscribe</strong> from marketing emails (one click in the email footer, or just ask).</li>
          </ul>
          <p className="text-stone-700 leading-relaxed mb-4">
            Email <a href="mailto:hello@capturepilot.com" className="text-emerald-700 underline">hello@capturepilot.com</a> for any of these. We&apos;ll respond within seven days, usually within one.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">Cookies</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Two flavors:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-700 mb-4">
            <li><strong>Session cookies</strong> — keep you logged in. Without these, the app doesn&apos;t work.</li>
            <li><strong>Analytics cookies</strong> — Vercel Analytics and the Meta Pixel. These tell us which pages get traffic and which ads convert.</li>
          </ul>
          <p className="text-stone-700 leading-relaxed mb-4">
            You can reject any of them in your browser settings. Most browsers let you block third-party cookies by default, which kills the Meta Pixel without breaking the app. If you do this and something stops working, let us know.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">Data retention</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            We keep your data for as long as your account is active. If you delete your account, we delete your personal data within thirty days (some pieces stick around in encrypted backups for up to ninety days before they roll off).
          </p>
          <p className="text-stone-700 leading-relaxed mb-4">
            If you stop logging in for three years, we&apos;ll email you a heads-up and then close the account if you don&apos;t respond. Federal opportunity data and aggregate analytics are kept indefinitely because they&apos;re not tied to you.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">Children</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            CapturePilot is a B2B product for federal contractors. It&apos;s not designed for anyone under thirteen, and we don&apos;t knowingly collect data from children. If you think a child has signed up, email us and we&apos;ll delete the account.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">Changes to this policy</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            If we change anything material — new sub-processor, new category of data, new use case — we&apos;ll email every active user at least <strong>thirty days before it takes effect</strong>. Small fixes (typos, clearer wording) we&apos;ll just push and update the &quot;last updated&quot; date at the top.
          </p>

          <h2 className="text-2xl font-black text-stone-900 mt-12 mb-4">Contact</h2>
          <p className="text-stone-700 leading-relaxed mb-4">
            Questions, requests, complaints — all go to the same place: <a href="mailto:hello@capturepilot.com" className="text-emerald-700 underline">hello@capturepilot.com</a>. A human answers.
          </p>

          <div className="mt-16 pt-8 border-t border-stone-200">
            <Link href="/" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
