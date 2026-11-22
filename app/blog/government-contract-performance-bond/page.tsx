"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  DollarSign,
  Shield,
  FileText,
  Clock,
  Award,
  HardHat,
  Zap,
  BarChart3,
  Lock,
  Building2,
  XCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const APP_URL = "https://app.capturepilot.com";
const CHECK_URL = `${APP_URL}/check`;
const SIGNUP_URL = `${APP_URL}/signup`;

const TOC = [
  { id: "what-they-are", label: "What Performance and Payment Bonds Actually Do" },
  { id: "when-required", label: "When Bonds Are Required: The Miller Act Thresholds" },
  { id: "three-bond-types", label: "The Three Bond Types on Federal Construction" },
  { id: "what-they-cost", label: "What Performance and Payment Bonds Cost" },
  { id: "sba-program", label: "The SBA Surety Bond Guarantee Program" },
  { id: "underwriting", label: "How Underwriters Evaluate Small Contractors" },
  { id: "step-by-step", label: "Getting Bonded: Your Step-by-Step Path" },
  { id: "bond-claims", label: "What Happens When a Performance Bond Is Called" },
  { id: "build-capacity", label: "Building Your Bonding Capacity Over Time" },
  { id: "proposal-impact", label: "How Bonding Affects Your Proposals and Pricing" },
];

function Callout({
  icon: Icon,
  color,
  title,
  children,
}: {
  icon: React.ElementType;
  color: "emerald" | "amber" | "sky" | "blue" | "violet" | "red";
  title: string;
  children: React.ReactNode;
}) {
  const colors = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    sky: "bg-sky-50 border-sky-200 text-sky-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    red: "bg-red-50 border-red-200 text-red-800",
  };
  const iconColors = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
    blue: "text-blue-600",
    violet: "text-violet-600",
    red: "text-red-600",
  };
  return (
    <div className={`rounded-2xl border p-6 my-8 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${iconColors[color]}`} />
        <p className="font-bold text-sm">{title}</p>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeading({
  id,
  number,
  title,
}: {
  id: string;
  number: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-6 pt-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
          {number}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
    </div>
  );
}

export default function GovernmentContractPerformanceBondPage() {
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = articleRef.current?.querySelectorAll(".animate-on-scroll");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-in-up");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6 animate-fade-in-up">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-medium">
              Performance and Payment Bonds
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in-up">
            <HardHat className="w-4 h-4" /> Getting Started
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Performance and Payment Bonds for Government Contracts:{" "}
            <span className="gradient-text">What They Cost and How to Get Bonded</span>
          </h1>

          <p className="text-lg text-stone-500 max-w-2xl mb-6 animate-fade-in-up animate-delay-200">
            You can win a federal construction contract and still lose it — because you
            couldn&apos;t get bonded in time. The Miller Act requires{" "}
            <strong className="text-stone-700">
              both a performance bond and a payment bond on nearly every federal construction
              contract over $150,000
            </strong>
            . No bond, no work. This guide walks through how bonds work, what they cost, and
            exactly how to get qualified so bonding never kills a deal you earned.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-400 animate-fade-in-up animate-delay-300">
            <span>
              By <strong className="text-stone-600">CapturePilot Team</strong>
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Published November 22, 2026</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 px-6 border-y border-stone-100 bg-stone-50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Miller Act threshold", value: "$150K", icon: Shield },
            { label: "Typical bond premium", value: "0.5–3%", icon: DollarSign },
            { label: "SBA federal contract limit", value: "$14M", icon: Award },
            { label: "SBA FY2025 guarantees", value: "$10.6B", icon: TrendingUp },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="w-5 h-5 text-blue-500 mx-auto mb-1" />
              <p className="text-2xl font-black text-stone-900">{value}</p>
              <p className="text-xs text-stone-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOC */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <p className="text-sm font-bold text-blue-800 mb-4">In this guide</p>
            <ol className="space-y-2">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-blue-700 hover:text-blue-900 hover:underline flex items-start gap-2"
                  >
                    <span className="font-bold shrink-0 mt-0.5">{i + 1}.</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article ref={articleRef} className="px-6 pb-24">
        <div className="max-w-4xl mx-auto prose prose-stone prose-lg max-w-none">

          {/* Section 1 */}
          <SectionHeading
            id="what-they-are"
            number="01"
            title="What Performance and Payment Bonds Actually Do"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              A performance bond and a payment bond are two separate financial guarantees
              required on the same contract — and they protect two different parties.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The <strong>performance bond</strong> protects the government. It guarantees that
              you&apos;ll complete the contract according to its terms. If you default — abandon
              the project, go bankrupt mid-job, or fail to deliver — the surety company steps in.
              They either hire another contractor to finish the work, complete it themselves, or
              pay the government the difference between your contract price and what it costs to
              finish without you.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The <strong>payment bond</strong> protects your subcontractors and suppliers. On a
              federal project, those subs and material suppliers can&apos;t put a mechanic&apos;s
              lien on government property the way they could on a private job. The payment bond
              is their recourse. If you don&apos;t pay them, they make a claim against the bond.
              The surety pays them, then comes after you.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Neither bond is insurance for you. Both bonds protect everyone except the person
              who buys them. You&apos;re the principal — the one obligated to perform and to
              reimburse the surety for any claim it pays out. The bond is a credit instrument.
              The surety is extending credit based on its confidence that you&apos;ll perform.
            </p>
          </div>

          <Callout icon={Lightbulb} color="sky" title="The key distinction">
            Surety bonds are not insurance. Insurance absorbs your losses. A bond requires
            you to reimburse the surety for every dollar it pays. If the surety pays out on
            a claim, they will come after your personal assets, your business assets, and
            any indemnitors who signed the agreement. Bond wisely — only take on contracts
            you can deliver.
          </Callout>

          {/* Section 2 */}
          <SectionHeading
            id="when-required"
            number="02"
            title="When Bonds Are Required: The Miller Act Thresholds"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              The Miller Act (40 U.S.C. §§ 3131–3134) is the federal law that sets bonding
              requirements. It applies to all federal construction contracts. State and local
              construction has its own little Miller Acts — most states have them, though
              thresholds vary.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              Under the FAR Part 28 implementation of the Miller Act, here&apos;s how the
              thresholds work:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Contract value</th>
                    <th className="text-left px-4 py-3 font-semibold">Performance bond</th>
                    <th className="text-left px-4 py-3 font-semibold">Payment bond</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-200 bg-white">
                    <td className="px-4 py-3 font-medium">Under $35,000</td>
                    <td className="px-4 py-3 text-stone-500">Not required</td>
                    <td className="px-4 py-3 text-stone-500">Not required</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <td className="px-4 py-3 font-medium">$35,001 – $150,000</td>
                    <td className="px-4 py-3 text-stone-500">Not required (CO discretion)</td>
                    <td className="px-4 py-3 text-emerald-700 font-medium">Required</td>
                  </tr>
                  <tr className="border-b border-stone-200 bg-white">
                    <td className="px-4 py-3 font-medium">Over $150,000</td>
                    <td className="px-4 py-3 text-emerald-700 font-medium">Required (100% of contract)</td>
                    <td className="px-4 py-3 text-emerald-700 font-medium">Required (100% of contract)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The $150,000 performance bond threshold has been in place since 2010, when it was
              raised from $100,000. Unlike many other FAR thresholds, the Miller Act threshold
              is not subject to routine inflation adjustments — Congress has specifically exempted
              it. That means the number stays fixed until Congress acts.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Bond amounts are set at 100% of the contract value by default. A $500,000
              construction contract requires a $500,000 performance bond and a $500,000 payment
              bond. The contracting officer can waive bonds on specific contract types, but
              that&apos;s rare.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="amber" title="Always check the specific solicitation">
            The Miller Act sets minimums. Individual solicitations may require bonds on
            smaller contracts, or require bonds at percentages other than 100%. Service
            contracts and supply contracts don&apos;t fall under the Miller Act, though some
            agencies require bonds anyway. Read the solicitation — don&apos;t assume.
          </Callout>

          {/* Section 3 */}
          <SectionHeading
            id="three-bond-types"
            number="03"
            title="The Three Bond Types on Federal Construction"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-6">
              Most contractors hear &quot;surety bond&quot; and think it&apos;s one thing. There are
              actually three distinct bonds in the federal construction lifecycle. You&apos;ll
              typically need all three on a bonded project.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  icon: FileText,
                  title: "Bid Bond",
                  color: "blue",
                  description:
                    "Required at proposal submission. Guarantees that if you win the award, you'll actually sign the contract and furnish the performance and payment bonds. Typically set at 20% of the bid price. If you win and walk away, the surety pays the government the difference between your bid and the next-lowest bid.",
                  note: "Cost: Usually free or minimal — the premium is built into your relationship with the surety.",
                },
                {
                  icon: Shield,
                  title: "Performance Bond",
                  color: "emerald",
                  description:
                    "Required at contract award, before work begins. Guarantees you complete the contract per its terms. Amount equals 100% of the contract value. The government can call the bond if you default — the surety must then complete the work, arrange for completion, or pay the government's additional costs.",
                  note: "Cost: 0.5% to 3% of the contract value annually, depending on your financials.",
                },
                {
                  icon: Users,
                  title: "Payment Bond",
                  color: "violet",
                  description:
                    "Also required at contract award. Protects subcontractors and material suppliers from non-payment. First-tier subs (those who contracted directly with you) and second-tier subs (those who worked for your subs) can both make claims. Amount equals 100% of the contract value.",
                  note: "Cost: Usually packaged with the performance bond at a combined rate.",
                },
              ].map(({ icon: Icon, title, color, description, note }) => (
                <div
                  key={title}
                  className={`rounded-2xl border p-6 ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : color === "emerald"
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-violet-50 border-violet-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon
                      className={`w-5 h-5 ${
                        color === "blue"
                          ? "text-blue-600"
                          : color === "emerald"
                          ? "text-emerald-600"
                          : "text-violet-600"
                      }`}
                    />
                    <h3
                      className={`font-bold text-base ${
                        color === "blue"
                          ? "text-blue-900"
                          : color === "emerald"
                          ? "text-emerald-900"
                          : "text-violet-900"
                      }`}
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-stone-700 leading-relaxed mb-2">{description}</p>
                  <p
                    className={`text-xs font-medium ${
                      color === "blue"
                        ? "text-blue-700"
                        : color === "emerald"
                        ? "text-emerald-700"
                        : "text-violet-700"
                    }`}
                  >
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 1 */}
          <div className="my-10 rounded-2xl bg-blue-900 text-white p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-lg mb-1">
                  Find bonded federal construction opportunities
                </p>
                <p className="text-blue-200 text-sm">
                  CapturePilot matches your NAICS codes to open federal construction solicitations
                  that fit your bonding capacity — before you waste time pursuing contracts you
                  can&apos;t bond.
                </p>
              </div>
              <a
                href={CHECK_URL}
                className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Check eligibility free <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 4 */}
          <SectionHeading
            id="what-they-cost"
            number="04"
            title="What Performance and Payment Bonds Cost"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Bond premiums are priced as a percentage of the contract (or bond) amount. The
              percentage depends on your financial strength, your track record, the contract
              size, and the duration of the work.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              Typical performance and payment bond premiums range from{" "}
              <strong>0.5% to 3% of the contract value</strong>. For a qualified contractor
              with strong financials, you&apos;ll land at the low end. First-time bonded
              contractors or those with thin balance sheets often pay closer to 2–3%.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Contract value</th>
                    <th className="text-left px-4 py-3 font-semibold">Premium at 1%</th>
                    <th className="text-left px-4 py-3 font-semibold">Premium at 2%</th>
                    <th className="text-left px-4 py-3 font-semibold">Premium at 3%</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["$200,000", "$2,000", "$4,000", "$6,000"],
                    ["$500,000", "$5,000", "$10,000", "$15,000"],
                    ["$1,000,000", "$10,000", "$20,000", "$30,000"],
                    ["$5,000,000", "$50,000", "$100,000", "$150,000"],
                    ["$9,000,000", "$90,000", "$180,000", "$270,000"],
                  ].map(([contract, low, mid, high], idx) => (
                    <tr
                      key={contract}
                      className={`border-b border-stone-200 ${idx % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="px-4 py-3 font-medium">{contract}</td>
                      <td className="px-4 py-3 text-emerald-700 font-medium">{low}</td>
                      <td className="px-4 py-3">{mid}</td>
                      <td className="px-4 py-3 text-red-600">{high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              These are the surety&apos;s premiums. If you use the SBA Surety Bond Guarantee
              Program, you&apos;ll also pay <strong>0.6% of the contract amount</strong> to the
              SBA as a guarantee fee (on top of the surety&apos;s premium). SBA does not charge
              a fee for bid bond guarantees — only for performance and payment bonds.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Bond cost is a direct contract cost and belongs in your cost volume. Most
              experienced contractors include it as a line item under general conditions or
              indirect costs. Forgetting to price it in is a margin killer — especially on
              tight-margin construction work.
            </p>
          </div>

          <Callout icon={DollarSign} color="emerald" title="Price the bond before you bid">
            Get a bond quote from your surety before you finalize your proposal. Bond
            premiums aren&apos;t always predictable, and the rate can vary based on the
            specific project. Build the actual quoted premium into your cost estimate — not
            an estimate of the premium.
          </Callout>

          {/* Section 5 */}
          <SectionHeading
            id="sba-program"
            number="05"
            title="The SBA Surety Bond Guarantee Program"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Small contractors who can&apos;t get bonded in the conventional market have a
              lifeline: the SBA Surety Bond Guarantee (SBG) Program. SBA guarantees between
              70% and 90% of any losses the surety incurs if you default. That guarantee lets
              surety companies take on contractors they&apos;d otherwise turn away.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              The program hit record volume in FY2025, delivering{" "}
              <strong>$10.6 billion in guarantees</strong>. That scale reflects how essential
              it is to the small business construction market.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "Contract limits",
                  items: [
                    "Up to $9M for non-federal contracts",
                    "Up to $14M for federal contracts (with CO certification)",
                    "Quick Bond Guarantee for contracts up to $500K",
                  ],
                  color: "blue",
                },
                {
                  title: "Eligibility requirements",
                  items: [
                    "Must qualify as small under SBA size standards",
                    "Cannot be in bankruptcy",
                    "Must meet surety's credit, capacity & character criteria",
                    "U.S. citizenship requirements apply (see EO 14159)",
                  ],
                  color: "emerald",
                },
              ].map(({ title, items, color }) => (
                <div
                  key={title}
                  className={`rounded-xl border p-5 ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : "bg-emerald-50 border-emerald-200"
                  }`}
                >
                  <p
                    className={`font-bold text-sm mb-3 ${
                      color === "blue" ? "text-blue-900" : "text-emerald-900"
                    }`}
                  >
                    {title}
                  </p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            color === "blue" ? "text-blue-500" : "text-emerald-500"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The program has two tracks. The <strong>Prior Approval Program</strong> requires
              all bond guarantee applications to go to SBA for review before the surety issues
              the bond. Slower, but accessible to contractors with weaker credit. The{" "}
              <strong>Preferred Program</strong> gives pre-approved sureties the authority to
              issue bonds without prior SBA review — faster, better for contractors with
              stronger profiles.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              For smaller projects, the <strong>Quick Bond Guarantee</strong> allows agents to
              get a fast decision on contracts up to $500,000. If you&apos;re starting out and
              bidding sub-$500K federal construction, this is typically the fastest route to
              getting bonded.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              You can&apos;t apply directly to SBA — you work through an SBA-authorized surety
              agent. SBA maintains a directory at sba.gov/surety-bonds, and you can contact
              SBA at suretybonds@sba.gov with questions.
            </p>
          </div>

          {/* Section 6 */}
          <SectionHeading
            id="underwriting"
            number="06"
            title="How Underwriters Evaluate Small Contractors"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Surety underwriters use a framework called the Three Cs: <strong>Character</strong>,
              <strong> Capacity</strong>, and <strong>Capital</strong>. Know how they think about
              each one, because every weakness will cost you either a denial or a higher premium.
            </p>

            <div className="space-y-5 my-8">
              {[
                {
                  letter: "C",
                  title: "Character",
                  color: "blue",
                  content:
                    "Your history of doing what you say you'll do. Personal and business credit scores matter here, but so does your track record on past projects. CPARS ratings, references from previous owners, any prior defaults or litigation — all of it. A single bonded project you completed successfully is worth more to an underwriter than years of unbonded commercial work.",
                },
                {
                  letter: "C",
                  title: "Capacity",
                  color: "emerald",
                  content:
                    "Your ability to actually do the work. This is technical: Do you have the right equipment? The right workforce or access to subs? Relevant project experience? Underwriters want to see that you've done comparable work before. A $2M federal renovation bid from a contractor whose largest prior project was $200K residential will face serious questions.",
                },
                {
                  letter: "C",
                  title: "Capital",
                  color: "violet",
                  content:
                    "Your financial strength. Underwriters look at working capital (current assets minus current liabilities), net worth, and your overall financial statements. The rule of thumb is that you should have working capital equal to roughly 10–15% of your bonding program limit. Thin balance sheets and high leverage are the most common reasons small contractors get turned down.",
                },
              ].map(({ letter, title, color, content }) => (
                <div
                  key={title}
                  className={`flex gap-5 rounded-2xl border p-6 ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : color === "emerald"
                      ? "bg-emerald-50 border-emerald-200"
                      : "bg-violet-50 border-violet-200"
                  }`}
                >
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${
                      color === "blue"
                        ? "bg-blue-200 text-blue-900"
                        : color === "emerald"
                        ? "bg-emerald-200 text-emerald-900"
                        : "bg-violet-200 text-violet-900"
                    }`}
                  >
                    {letter}
                  </div>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-sm text-stone-700 leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Your surety agent is an advocate, not just a form-processor. A good one will
              tell you which of the three Cs is your weakest and what you can do to strengthen
              it before you apply. Building that relationship early — before you need a bond
              for a live award — is one of the highest-leverage things a small contractor
              can do.
            </p>
          </div>

          {/* Section 7 */}
          <SectionHeading
            id="step-by-step"
            number="07"
            title="Getting Bonded: Your Step-by-Step Path"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-6">
              Most contractors start thinking about bonding after they win an award. That&apos;s
              too late. The right time to get pre-qualified is before you bid — so you know
              your bonding capacity and don&apos;t win work you can&apos;t deliver.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  step: "01",
                  title: "Find a surety agent with construction bond experience",
                  content:
                    "Not all insurance agents write construction bonds. Look for someone specializing in contract surety — they know the difference between bid bonds, performance bonds, and payment bonds, and they understand the federal market. SBA's directory lists agents for the guarantee program.",
                },
                {
                  step: "02",
                  title: "Gather your financial documents",
                  content:
                    "You'll need 2–3 years of company financial statements (CPA-prepared is better than self-prepared), a current work-in-progress (WIP) schedule showing all your open contracts, personal financial statements for all owners with 20%+ ownership, and a résumé of completed projects.",
                },
                {
                  step: "03",
                  title: "Complete the underwriting application",
                  content:
                    "Your surety agent submits the application to the surety company. For SBA's program, this goes through SBA's E-App system. Expect the underwriter to ask follow-up questions. Answer them completely — incomplete applications just slow the process.",
                },
                {
                  step: "04",
                  title: "Get pre-qualified with a bonding program limit",
                  content:
                    "You'll receive a single-contract limit (the largest project you can bond) and an aggregate limit (the total value of bonded work you can carry at once). Know both numbers before you bid. Exceeding your aggregate by taking on too much at once is a fast way to lose your surety relationship.",
                },
                {
                  step: "05",
                  title: "Request specific bonds for each award",
                  content:
                    "Each time you win a bonded contract, your surety agent requests the specific bid bond, performance bond, and payment bond from the surety. The bond forms must be executed and submitted per the contract schedule — typically within 10–14 days of award.",
                },
                {
                  step: "06",
                  title: "Maintain the relationship",
                  content:
                    "Keep your surety agent updated on project progress, especially if something goes wrong. Surprises are the enemy. A surety who trusts you will increase your limits as you build your track record. One who finds out bad news late will cut your program.",
                },
              ].map(({ step, title, content }) => (
                <div
                  key={step}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white hover-lift"
                >
                  <span className="shrink-0 font-black text-blue-200 text-3xl leading-none">
                    {step}
                  </span>
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA 2 */}
          <div className="my-10 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-lg text-stone-900 mb-1">
                  Build a pipeline of construction opportunities
                </p>
                <p className="text-stone-500 text-sm">
                  CapturePilot&apos;s{" "}
                  <Link href="/features/pipeline" className="text-blue-600 hover:underline">
                    pipeline management tools
                  </Link>{" "}
                  help you track bonded opportunities by contract size so you never bid past
                  your bonding capacity — and never leave capacity on the table.
                </p>
              </div>
              <a
                href={SIGNUP_URL}
                className="shrink-0 inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Start free trial <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 8 */}
          <SectionHeading
            id="bond-claims"
            number="08"
            title="What Happens When a Performance Bond Is Called"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Most contractors think performance bond claims are rare. They&apos;re not.
              Defaults happen, especially on first-time federal work where contractors
              underestimate scope, Davis-Bacon wage requirements, or working capital needs.
              Knowing what happens when a bond is called prepares you to manage the situation —
              and helps you understand why sureties care so much about your financials.
            </p>

            <p className="text-stone-700 leading-relaxed mb-4">
              When the government declares a contractor in default, it notifies the surety.
              The surety has several options:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-6">
              {[
                {
                  title: "Finance completion",
                  desc: "The surety provides the funds needed for the original contractor to finish the work. Rare — this only works if the contractor just had a cash flow problem, not a performance problem.",
                  icon: DollarSign,
                  color: "blue",
                },
                {
                  title: "Tender a replacement",
                  desc: "The surety hires another contractor to complete the remaining work. Most common outcome. The surety pays the replacement contractor and then pursues reimbursement from the defaulting contractor.",
                  icon: Building2,
                  color: "amber",
                },
                {
                  title: "Pay the penal sum",
                  desc: "The surety pays the government up to the full bond amount (100% of contract). The government uses those funds to hire its own replacement contractor. Surety then pursues the defaulting contractor for the full amount paid.",
                  icon: Lock,
                  color: "red",
                },
              ].map(({ title, desc, icon: Icon, color }) => (
                <div
                  key={title}
                  className={`rounded-xl border p-4 ${
                    color === "blue"
                      ? "bg-blue-50 border-blue-200"
                      : color === "amber"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mb-2 ${
                      color === "blue"
                        ? "text-blue-500"
                        : color === "amber"
                        ? "text-amber-500"
                        : "text-red-500"
                    }`}
                  />
                  <p className="font-bold text-sm text-stone-900 mb-1">{title}</p>
                  <p className="text-xs text-stone-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              After a performance bond claim, the surety will come after you personally.
              Bond applications include a <strong>general indemnity agreement (GIA)</strong>
              — you sign it, your spouse often signs it, and other principals of the business
              sign it. The GIA is a personal guarantee. Personal assets, the family home,
              everything. The surety has full legal recourse.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              A bond claim also ends your surety relationship and makes it extremely difficult
              to get bonded again. For most small contractors, it effectively ends their federal
              construction career. Only take on contracts you can deliver.
            </p>
          </div>

          <Callout icon={AlertTriangle} color="red" title="The personal guarantee reality">
            Every bond you get requires signing a general indemnity agreement. When you sign
            it, you&apos;re pledging personal assets — not just business assets — as collateral
            against any claims. If the surety pays out on a performance bond claim, they will
            pursue you personally. This is not insurance you can walk away from.
          </Callout>

          {/* Section 9 */}
          <SectionHeading
            id="build-capacity"
            number="09"
            title="Building Your Bonding Capacity Over Time"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Bonding capacity is not a fixed ceiling — it grows as your track record and
              balance sheet grow. Most small contractors start with a single-contract limit
              of $500K to $2M and an aggregate of $1M to $5M. Within five years of consistent
              performance, those numbers can grow dramatically.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-stone-800 text-white">
                    <th className="text-left px-4 py-3 font-semibold">Year</th>
                    <th className="text-left px-4 py-3 font-semibold">What to focus on</th>
                    <th className="text-left px-4 py-3 font-semibold">Likely capacity range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Year 1–2", "Complete projects on time. Build CPARS track record. Keep personal credit clean.", "$500K–$2M single contract"],
                    ["Year 3–4", "Build working capital. Get CPA-audited financials. Avoid high leverage.", "$2M–$5M single contract"],
                    ["Year 5+", "Demonstrate consistent profitable revenue. Grow net worth. Expand project types.", "$5M–$14M+ (SBA limit for federal)"],
                  ].map(([year, focus, capacity], idx) => (
                    <tr
                      key={year}
                      className={`border-b border-stone-200 ${idx % 2 === 0 ? "bg-white" : "bg-stone-50"}`}
                    >
                      <td className="px-4 py-3 font-bold text-blue-700">{year}</td>
                      <td className="px-4 py-3 text-stone-700">{focus}</td>
                      <td className="px-4 py-3 font-medium">{capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              The fastest way to increase your bonding capacity is to increase your working
              capital. Underwriters watch this more than any other metric. A simple rule: for
              every dollar of additional working capital you retain (not spend on equipment,
              not distribute to owners), your bonding capacity grows by roughly $5 to $10.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Your{" "}
              <Link
                href="/blog/cpars-contractor-performance"
                className="text-blue-600 hover:underline"
              >
                CPARS ratings
              </Link>{" "}
              from prior government work directly influence how sureties view your character
              and capacity. Exceptional and Very Good ratings are tangible bonding assets.
              Satisfactory is neutral. Marginal or Unsatisfactory ratings will raise hard
              questions and potentially close doors.
            </p>
          </div>

          <Callout icon={TrendingUp} color="emerald" title="Talk to your surety agent every year">
            Don&apos;t wait until you need a bond to call your surety agent. Have an annual
            conversation about your financials, your pipeline, and your program limits.
            Proactive communication builds trust. It also gives you time to course-correct
            if something in your financials would otherwise surprise them at the worst
            possible moment.
          </Callout>

          {/* Section 10 */}
          <SectionHeading
            id="proposal-impact"
            number="10"
            title="How Bonding Affects Your Proposals and Pricing"
          />

          <div className="animate-on-scroll">
            <p className="text-stone-700 leading-relaxed mb-4">
              Bonding has real implications for how you structure a proposal — and most small
              contractors don&apos;t account for it properly until they&apos;ve lost money
              on a bonded contract.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: "Include bond cost in your price",
                  content:
                    "Bond premiums are a direct cost. They belong in your cost estimate as a line item — typically under general conditions or indirect costs. If your contract is $1M and your bond premium is 1.5%, that's $15,000 that must come from somewhere. Don't absorb it out of profit. Use your surety agent's actual quote, not an estimate.",
                  icon: DollarSign,
                },
                {
                  title: "Know your capacity before you bid",
                  content:
                    "If a contract exceeds your single-project bonding limit, you have three choices: don't bid, team with a larger prime, or grow your capacity before the award. Only bid contracts you can actually bond. Award-then-scramble is a losing approach that damages your surety relationship and your agency relationships simultaneously.",
                  icon: BarChart3,
                },
                {
                  title: "Watch your aggregate when bidding multiple projects",
                  content:
                    "Your aggregate bonding limit covers all open bonded contracts simultaneously. If you have $3M in open bonded work and an aggregate limit of $5M, you can only add $2M more. Track your open bonded backlog carefully. CapturePilot's pipeline tools help you see your total committed bonded work at a glance.",
                  icon: Zap,
                },
                {
                  title: "Bonding on teaming arrangements",
                  content:
                    "On a teamed bid, the prime is typically the bond obligee — they buy the bond. If you're the sub, you don't need a bond, but the prime will want to see your financials anyway (especially if you're carrying significant scope). If you're the prime using a sub for the technically complex portion, your surety will want to understand the sub relationship.",
                  icon: Users,
                },
              ].map(({ title, content, icon: Icon }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-white animate-on-scroll hover-lift"
                >
                  <Icon className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-stone-900 mb-1">{title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Bonding and{" "}
              <Link
                href="/blog/government-contract-pricing-strategies"
                className="text-blue-600 hover:underline"
              >
                government contract pricing
              </Link>{" "}
              are tightly connected. The right approach is to build a pipeline of bonded
              opportunities that fit your capacity — not just the largest contracts you
              can find. Use{" "}
              <Link
                href="/features/matching"
                className="text-blue-600 hover:underline"
              >
                CapturePilot&apos;s opportunity matching
              </Link>{" "}
              to filter by contract size so you&apos;re always working within your
              bonding program.
            </p>
          </div>

          {/* Summary */}
          <div className="my-12 rounded-2xl border border-stone-200 bg-stone-50 p-8 animate-on-scroll">
            <h3 className="font-black text-xl text-stone-900 mb-4">
              The short version: what you need to know
            </h3>
            <ul className="space-y-3">
              {[
                "The Miller Act requires performance and payment bonds on federal construction contracts over $150,000 — both bonds, at 100% of the contract value.",
                "Bond premiums run 0.5% to 3% of the contract value. Include the actual quoted premium in your cost estimate — it's a direct project cost.",
                "The SBA Surety Bond Guarantee Program covers contracts up to $14M for federal work, backing 70–90% of losses. It set a record of $10.6B in FY2025 guarantees.",
                "Underwriters evaluate Character, Capacity, and Capital. Working capital is the most common barrier for small contractors — build it deliberately.",
                "Get pre-qualified before you bid. Winning an award and failing to get bonded in time kills the deal and damages your agency relationships.",
                "Bond claims result in personal liability. The general indemnity agreement is a personal guarantee — only take on work you can complete.",
                "Build your bonding capacity through consistent performance, strong CPARS ratings, and retained earnings on your balance sheet.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Related posts */}
          <div className="my-10 animate-on-scroll">
            <p className="font-bold text-stone-900 mb-4">Related reading</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  href: "/blog/surety-bond-government-contract",
                  title: "Surety Bonds for Government Contractors",
                  desc: "How to get bonded and win construction work",
                },
                {
                  href: "/blog/construction-government-contracts",
                  title: "Construction Government Contracts",
                  desc: "Bonding, Davis-Bacon, and how to win",
                },
                {
                  href: "/blog/cpars-contractor-performance",
                  title: "CPARS Explained",
                  desc: "How performance ratings shape future awards",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl border border-stone-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <p className="font-bold text-sm text-stone-900 group-hover:text-blue-700 mb-0.5">
                    {title}
                  </p>
                  <p className="text-xs text-stone-500">{desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="my-10 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-800 text-white p-10 text-center animate-on-scroll">
            <Award className="w-10 h-10 text-blue-300 mx-auto mb-4" />
            <h3 className="font-black text-2xl mb-3">
              Find federal construction opportunities that match your bonding capacity
            </h3>
            <p className="text-blue-200 max-w-xl mx-auto mb-8">
              CapturePilot filters opportunities by contract size, agency, and set-aside status
              so you&apos;re always working within your bonding program — not chasing contracts
              you can&apos;t bond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-800 transition-colors"
              >
                Start 30-day free trial
              </a>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
