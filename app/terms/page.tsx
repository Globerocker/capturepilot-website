import Link from "next/link";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="text-stone-500 text-base">Last updated: 2026-06-05</p>
        </div>
      </section>

      {/* ─── Body ─── */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto prose prose-stone max-w-none">
          <div className="space-y-12 text-stone-700 leading-relaxed">
            <p>
              These terms cover your use of CapturePilot, the federal capture
              intelligence platform run by Americurial LLC (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;CapturePilot&rdquo;). If you sign up,
              log in, pay us, or even just poke around the free tools, you&apos;re
              agreeing to what&apos;s written here. We&apos;ve done our best to keep
              it plain. If something&apos;s unclear, email us at{" "}
              <a
                href="mailto:hello@capturepilot.com"
                className="text-emerald-700 underline"
              >
                hello@capturepilot.com
              </a>{" "}
              and we&apos;ll explain.
            </p>

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                1. Who can use this
              </h2>
              <p>
                CapturePilot is built for US-based business owners pursuing
                federal, state, and local government contracts. To use the
                platform you need to be at least 18 years old and legally
                allowed to enter into contracts in the United States. You also
                need to be acting on behalf of a real business entity, sole
                proprietorship included. The free tools are open to anyone who
                fits that description. Paid tiers and consulting work are for
                the same audience.
              </p>
              <p>
                If you&apos;re using CapturePilot for an employer or client,
                you&apos;re telling us you have the authority to bind that
                organization to these terms.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                2. Your account
              </h2>
              <p>
                Keep your login credentials private. Anything that happens under
                your account is your responsibility, including pursuits you
                create, proposals you generate, and messages you send through
                the platform. If you suspect someone else got into your account,
                tell us right away so we can lock it down.
              </p>
              <p>
                One human per login. Sharing a seat across multiple operators
                breaks the matching engine (and our pricing model). Need extra
                seats for your team, drop us a line and we&apos;ll set it up.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                3. Subscriptions
              </h2>
              <p>We run four subscription tiers, all billed through Stripe:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Free</strong> &mdash; no card required, limited
                  matches, limited proposal credits.
                </li>
                <li>
                  <strong>Light</strong> &mdash; $39/month. Match alerts,
                  expanded opportunity access, basic pipeline.
                </li>
                <li>
                  <strong>Pro</strong> &mdash; $89/month. Full match engine, AI
                  proposal writer, capability statement tools, full pipeline,
                  competitor tracking.
                </li>
                <li>
                  <strong>Consulting</strong> &mdash; $2,500/month. Managed
                  capture support from our team, in addition to Pro features.
                </li>
              </ul>
              <p className="mt-4">
                Subscriptions auto-renew at the end of each billing period
                until you cancel. You can cancel any time from your billing
                page; the cancellation takes effect at the end of the current
                paid period and you keep access until then. Prices can change
                with at least 30 days&apos; email notice before your next renewal.
              </p>
              <p>
                Pro comes with a 14-day free trial. If you don&apos;t cancel
                before the trial ends, the card on file gets charged for the
                first month and the subscription starts.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                4. One-time purchases
              </h2>
              <p>We sell two things on a one-off basis:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Capture Kit</strong> &mdash; $70. A done-for-you
                  capability statement and starter capture plan.
                </li>
                <li>
                  <strong>Pilot Program</strong> &mdash; $4,500. A scoped,
                  multi-week engagement where we run a full capture cycle on a
                  target opportunity with you.
                </li>
              </ul>
              <p className="mt-4">
                Each one-time purchase has its own refund window, spelled out in
                section 5 below.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                5. Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Capture Kit</strong> &mdash; 7-day refund. If
                  you&apos;re not happy with the deliverable, email us within 7
                  days of delivery and we&apos;ll refund in full.
                </li>
                <li>
                  <strong>Pro monthly subscription</strong> &mdash; 30-day
                  refund on your first month. If Pro isn&apos;t a fit, ask
                  within 30 days of your first paid charge and we&apos;ll refund
                  it. After that first month, future monthly charges are
                  non-refundable, but you can cancel any time to stop the next
                  renewal.
                </li>
                <li>
                  <strong>Consulting</strong> &mdash; no refunds once kickoff
                  has happened. Our team books out time and starts research the
                  moment a Consulting engagement starts. If you need to cancel
                  before kickoff, email us and we&apos;ll refund in full.
                </li>
                <li>
                  <strong>Pilot Program</strong> &mdash; refund terms are
                  stated in the signed scope for each engagement. As a rule,
                  the deposit is refundable up to the kickoff date and
                  milestone payments after that are non-refundable.
                </li>
                <li>
                  <strong>Light tier and yearly plans</strong> &mdash; pro-rated
                  refund on yearly plans within the first 30 days; no refunds
                  on monthly Light charges after they bill.
                </li>
              </ul>
              <p className="mt-4">
                All refund requests go to{" "}
                <a
                  href="mailto:hello@capturepilot.com"
                  className="text-emerald-700 underline"
                >
                  hello@capturepilot.com
                </a>
                . We process approved refunds within 10 business days.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                6. Acceptable use
              </h2>
              <p>
                CapturePilot is for your business&apos;s capture work. Don&apos;t
                do the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Scrape, crawl, or bulk-export the platform. Our matching
                  data, scoring, and enriched opportunity records cost real
                  money to produce and aren&apos;t a public dataset.
                </li>
                <li>
                  Resell, sublicense, or repackage anything we provide,
                  including match lists, generated proposals, and capability
                  statement outputs, for other people&apos;s businesses.
                </li>
                <li>
                  Run automated bots, headless browsers, or load-test scripts
                  against the platform.
                </li>
                <li>
                  Reverse-engineer the scoring algorithm, AI prompts, or any
                  part of the platform.
                </li>
                <li>
                  Use CapturePilot to send spam, harvest contacts, or violate
                  anyone&apos;s privacy.
                </li>
                <li>
                  Upload anything you don&apos;t have the right to upload,
                  including classified material, controlled unclassified
                  information you aren&apos;t cleared to share with a vendor,
                  or third-party copyrighted content.
                </li>
              </ul>
              <p className="mt-4">
                We monitor usage in aggregate and reserve the right to suspend
                accounts that look like they&apos;re abusing the system.
              </p>
              <p className="mt-4">
                If you choose to sign in with LinkedIn, that flow does{" "}
                <strong>not</strong> grant us access to anything you have not
                explicitly consented to via the LinkedIn OAuth consent screen.
                We request the standard scope only:{" "}
                <code>openid</code>, <code>profile</code>, and{" "}
                <code>email</code>. No connections, messages, posts, or company
                pages.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                7. Intellectual property
              </h2>
              <p>
                CapturePilot, the algorithm, the codebase, the UI, the
                aggregated and enriched opportunity data, our written
                templates, and everything else we produce belongs to
                Americurial LLC. You get a non-exclusive, non-transferable
                license to use it for <em>your own business&apos;s</em>{" "}
                capture work for as long as your subscription is active.
                That&apos;s the deal.
              </p>
              <p>
                Anything you upload (capability statement drafts, past
                performance, company info) stays yours. We use it to make the
                platform work for you, and we&apos;ll use anonymized,
                aggregated patterns from across the customer base to improve
                matching and scoring for everyone. We don&apos;t share your
                proprietary materials with other customers.
              </p>
              <p>
                AI-generated outputs (proposals, capability statements, email
                drafts) are yours to use, edit, and submit. We make no claim of
                ownership on text the model writes for you. We also make no
                guarantee that the output is correct, complete, or compliant
                with any specific solicitation. Always review before you submit.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                8. Federal contracting disclaimer
              </h2>
              <p>
                Read this twice. CapturePilot is software and consulting. We
                are <strong>not</strong> a law firm. We are <strong>not</strong>{" "}
                government employees. We are <strong>not</strong> certified
                contracting officers. Nothing in the app, the generated text,
                or anything our consulting team tells you is legal advice or
                official government guidance.
              </p>
              <p>
                Federal contracting rules (FAR, DFARS, agency supplements, set-aside
                size standards, certification requirements) change. We do our
                best to keep up. You&apos;re still the one responsible for
                making sure your proposal, your representations, and your
                business comply with every applicable rule before you submit
                anything. When in doubt, talk to a procurement attorney or
                your local PTAC/APEX Accelerator.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                9. Limitation of liability
              </h2>
              <p>
                CapturePilot is provided &ldquo;as is.&rdquo; We work hard to
                keep matches accurate, deadlines current, and the AI useful,
                but we don&apos;t promise the platform will be error-free,
                uninterrupted, or that any specific contract will be won.
              </p>
              <p>
                To the maximum extent allowed by law, Americurial LLC is not
                liable for any indirect, incidental, consequential, special, or
                punitive damages. That includes lost contracts, lost revenue,
                lost data, lost time, or anything similar, even if we were
                told the loss was possible.
              </p>
              <p>
                Our total liability for any claim related to CapturePilot is
                capped at the amount you actually paid us in the twelve months
                before the claim. If you haven&apos;t paid us anything, the cap
                is $100.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                10. Termination
              </h2>
              <p>
                You can cancel your subscription whenever you want from the
                billing page. Access continues through the end of the paid
                period. After cancellation, your account data sits in cold
                storage for 90 days in case you come back, then gets purged.
              </p>
              <p>
                We can suspend or terminate your account if you violate these
                terms, abuse the platform, charge back a legitimate payment, or
                use CapturePilot for anything illegal. We&apos;ll usually warn
                you first, but for serious violations we may act immediately.
                If we terminate you for cause, we&apos;re not obligated to
                refund unused time.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                11. Governing law and disputes
              </h2>
              <p>
                These terms are governed by the laws of the State of Delaware,
                without regard to conflict-of-laws rules. Any dispute that
                can&apos;t be worked out by email goes to binding arbitration
                in Wilmington, Delaware, under the rules of the American
                Arbitration Association. Each side pays its own legal fees
                unless the arbitrator rules otherwise. You and CapturePilot
                each waive any right to a jury trial or to participate in a
                class action.
              </p>
              <p>
                Nothing here stops either side from filing in small-claims
                court for a qualifying claim, or from asking a court for an
                injunction to protect intellectual property.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                12. Changes to these terms
              </h2>
              <p>
                If we change these terms in a material way, we&apos;ll email
                active accounts at least 30 days before the new version takes
                effect. Continuing to use CapturePilot after the new terms go
                live means you accept them. The current version always lives at{" "}
                <Link href="/terms" className="text-emerald-700 underline">
                  capturepilot.com/terms
                </Link>
                .
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">
                13. Contact
              </h2>
              <p>
                Questions, refund requests, account problems, or legal notices
                go to{" "}
                <a
                  href="mailto:hello@capturepilot.com"
                  className="text-emerald-700 underline"
                >
                  hello@capturepilot.com
                </a>
                . We read everything that comes in, usually within a business
                day.
              </p>
              <p className="text-stone-500 text-sm mt-6">
                CapturePilot is operated by Americurial LLC, a veteran-owned
                business registered in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
