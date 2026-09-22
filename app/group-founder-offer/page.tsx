import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SlashMark from "@/components/SlashMark";
import ClubProofBand from "@/components/club/ClubProofBand";
import ClubFit from "@/components/club/ClubFit";
import { ArrowIcon, InstagramIcon, MailIcon } from "@/components/icons";
import { brand, legal, legalPages, siteLinks } from "@/lib/site";

const title = "Ultra Endurant Group Coaching — Founding Member Offer";
const description =
  "Founding runner incentive for Ultra Endurant group coaching: 50% off for your first 3 months (€25/mo) and a 100% money-back 30-day satisfaction guarantee.";
const shareImage = "/images/hero-coast-runner.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${brand.url}/group-founder-offer` },
  robots: { index: false, follow: false }, // Private incentive link for waitlist members
  openGraph: {
    title,
    description,
    url: `${brand.url}/group-founder-offer`,
    siteName: brand.name,
    type: "website",
    locale: "en_US",
    images: [{ url: shareImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

const OFFER_INCLUDES = [
  "Custom training plan built specifically for you by Jonathan",
  "Weekly 1-hour live group coaching call with your ~5-runner squad",
  "Direct WhatsApp messaging access for questions and adjustments",
  "Access to our private athlete community channel",
  "Full exercise video library for every movement in your plan",
  "50% off your first 3 months (€25/month, normally €50/month)",
  "Full 30-day 100% refund guarantee if it's not the right fit",
] as const;

export default function GroupFounderOfferPage() {
  return (
    <div className="club club-on-ink min-h-screen bg-ink pt-16 text-snow sm:pt-[4.5rem]">
      <main>
        {/* =============================================================
            HERO: Founder Offer Headline & Guarantee Lockup
            ============================================================= */}
        <header className="relative overflow-hidden border-b-2 border-red/40 bg-ink pb-20 pt-12 sm:pb-28 sm:pt-16">
          <div
            aria-hidden="true"
            className="club-slashes pointer-events-none absolute -right-20 -top-20 h-[50vw] max-h-[36rem] w-[55vw] max-w-[42rem] text-red/[0.12] [--bar:14px] [--gap:44px]"
          />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <SlashMark className="h-4 w-[1.1rem] shrink-0 text-red" />
              <p className="club-label text-snow-dim">
                Founding Member Offer · Private Waitlist Invitation
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h1 className="font-club text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.88] text-snow">
                  <span className="block">50% off for 3 months.</span>
                  <span className="mt-3 block text-[clamp(2.1rem,6.2vw,4.25rem)] leading-[1.15]">
                    <span className="club-tape">Zero risk.</span> 100% guarantee.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-snow-dim sm:text-xl">
                  You didn&apos;t get pulled in the 5 free spots draw, but because you joined the
                  waitlist early and shared your training goals, I want to make joining our
                  inaugural cohort as simple and risk-free as possible.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={siteLinks.booking15Min}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-club btn-club-red club-label group inline-flex items-center justify-center gap-3 px-8 py-5 text-center"
                  >
                    <span className="inline-flex items-center gap-3">
                      Claim your spot — 15-min call
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>

                <p className="mt-4 text-xs text-snow-dim">
                  We verify your schedule and squad fit on the call before collecting any payment.
                </p>
              </div>

              {/* Founder Price Card */}
              <div className="lg:col-span-5">
                <div className="club-cut-br border-2 border-red/40 bg-ink p-8 sm:p-10 text-center">
                  <p className="club-label text-[0.66rem] text-red-bright">
                    Exclusive Waitlist Incentive
                  </p>

                  <div className="my-6 flex items-baseline justify-center gap-3">
                    <span className="club-numeral text-3xl text-snow-dim/50 line-through">
                      €50
                    </span>
                    <span className="club-numeral text-7xl text-snow">€25</span>
                    <span className="club-numeral text-2xl text-snow-dim">/mo</span>
                  </div>

                  <p className="club-label text-[0.66rem] text-snow-dim">
                    50% off for first 3 months · then standard €50/mo
                  </p>

                  <div className="mt-6 border-2 border-snow/20 bg-ink/70 p-5 text-left">
                    <strong className="club-label block text-red-bright text-[0.7rem] mb-2">
                      100% Satisfaction Guarantee
                    </strong>
                    <p className="text-sm text-snow-dim leading-relaxed">
                      Join the squad, receive your custom plan, and jump on the weekly calls. If
                      at any point in your first 30 days you feel it&apos;s not the right fit, message
                      me and I will issue an immediate, full refund.
                    </p>
                  </div>

                  <a
                    href={siteLinks.booking15Min}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-club btn-club-red club-label group mt-6 inline-flex w-full items-center justify-center gap-3 py-4 text-center"
                  >
                    <span className="inline-flex items-center gap-3">
                      Book 15-min call
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* =============================================================
            WHAT'S INCLUDED: Comprehensive Offer Features
            ============================================================= */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28 border-b-2 border-snow/15">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-5">
              <span className="club-numeral club-hollow shrink-0 text-6xl text-snow sm:text-7xl">
                01
              </span>
              <span className="club-label shrink-0 text-snow">Everything Included</span>
              <span
                aria-hidden="true"
                className="club-slashes h-7 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <Reveal className="mt-10 sm:mt-12">
              <h2 className="font-club text-club-lg max-w-[22ch] text-snow">
                The full Ultra Endurant <span className="club-tape">coaching experience</span>.
              </h2>
            </Reveal>

            <Reveal className="mt-12" delay={60}>
              <ul className="border-t-2 border-snow/20">
                {OFFER_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b border-snow/15 py-4 sm:py-5"
                  >
                    <SlashMark className="h-3 w-[0.85rem] shrink-0 translate-y-0.5 text-red-bright" />
                    <span className="text-base sm:text-lg text-snow">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* =============================================================
            WHY WE TALK FIRST: 15-Minute Call Requirement
            ============================================================= */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28 border-b-2 border-snow/15">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal className="flex items-center gap-5">
              <span className="club-numeral club-hollow shrink-0 text-6xl text-snow sm:text-7xl">
                02
              </span>
              <span className="club-label shrink-0 text-snow">No Blind Checkouts</span>
              <span
                aria-hidden="true"
                className="club-slashes h-7 flex-1 text-red [--bar:5px] [--gap:13px]"
              />
            </Reveal>

            <div className="mt-12 border-2 border-snow/15 bg-ink p-8 sm:p-12 max-w-4xl">
              <Reveal>
                <h3 className="font-club text-club-md text-snow">
                  Why we talk before taking any payment.
                </h3>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-snow-dim">
                  Each group is strictly capped at around five runners matched by timezone, weekly
                  training volume, and target race goals.
                </p>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-snow-dim">
                  Before collecting any money, we grab 15 minutes on a video call to ensure the
                  group call time works with your routine and that group coaching is genuinely the
                  best vehicle for your goals.
                </p>

                <div className="mt-8">
                  <a
                    href={siteLinks.booking15Min}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-club btn-club-red club-label group inline-flex items-center justify-center gap-3 px-8 py-4 text-center"
                  >
                    <span className="inline-flex items-center gap-3">
                      Choose your call time
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Proof Band */}
        <ClubProofBand />

        {/* Fit Section */}
        <ClubFit />

        {/* =============================================================
            FINAL CTA
            ============================================================= */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Reveal>
              <div className="club-cut-br flex flex-col items-start justify-between gap-8 bg-red p-8 text-ink sm:flex-row sm:items-center sm:p-12">
                <div className="max-w-2xl">
                  <h3 className="font-club text-club-md">
                    Secure your founding spot.
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-base text-ink font-medium">
                    Cohorts launch at the end of September. Spaces are strictly limited by squad
                    size to ensure personal attention.
                  </p>
                </div>
                <a
                  href={siteLinks.booking15Min}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-club btn-club-ink club-label group inline-flex shrink-0 items-center justify-center gap-3 px-8 py-5 text-center text-sm"
                >
                  <span className="inline-flex items-center gap-3">
                    Book your 15-minute call
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-snow/15 bg-ink">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-5 py-8 text-sm text-snow-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            Looking for 1:1 coaching instead?{" "}
            <Link
              href={siteLinks.coaching}
              className="text-snow underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red-bright"
            >
              Explore 1:1 ultramarathon coaching
            </Link>
            .
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteLinks.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-red-bright"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
            <a
              href={siteLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-red-bright"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-5 pb-8 text-xs text-snow-dim/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved. —{" "}
            {legal.company}, {legal.address}
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="transition-colors hover:text-red-bright"
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
