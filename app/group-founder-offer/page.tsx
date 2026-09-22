import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="club club-on-ink pt-16 sm:pt-[4.5rem] bg-ink text-snow">
      <main>
        {/* Header Hero */}
        <header className="relative isolate overflow-hidden border-b border-paper/10">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero-coast-runner.webp"
              alt="Trail runner along Portugal coast"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink" />
          </div>

          <div className="mx-auto max-w-4xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-accent">
                Founding Member Offer
              </div>
            </Reveal>

            <Reveal className="mt-6" delay={60}>
              <h1 className="club-display text-4xl sm:text-6xl font-bold tracking-tight text-snow uppercase">
                50% off for 3 months.
                <br />
                <span className="text-paper/60">Zero risk.</span>
              </h1>
            </Reveal>

            <Reveal className="mt-6 max-w-2xl mx-auto" delay={120}>
              <p className="text-lg sm:text-xl leading-relaxed text-ink-soft">
                You didn&apos;t get pulled in the 5 free spots draw, but because you joined the
                waitlist early and shared your training goals, I want to make joining our
                inaugural cohort as simple and risk-free as possible.
              </p>
            </Reveal>

            {/* Pricing Card */}
            <Reveal className="mt-10 max-w-lg mx-auto rounded-3xl border border-paper/20 bg-paper/[0.04] p-8 text-center shadow-2xl backdrop-blur-sm" delay={180}>
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl text-paper/40 line-through font-semibold">€50</span>
                <span className="text-6xl font-bold text-snow">€25</span>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent bg-accent/15 px-2.5 py-1 rounded-md">
                  50% off
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">
                per month for your first 3 months &bull; then regular €50/mo
              </p>

              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-4 text-xs text-paper/90 leading-relaxed text-left">
                <strong className="block text-accent font-semibold mb-1">
                  100% Satisfaction Guarantee:
                </strong>
                Join the group, get your custom plan, and jump on the weekly calls. If at any
                point in your first 30 days you don&apos;t feel it&apos;s working for you, send me a message
                and I will issue an immediate, full refund.
              </div>

              <div className="mt-8">
                <a
                  href={siteLinks.booking15Min}
                  className="club-btn-accent w-full inline-flex items-center justify-center gap-2 py-4 text-base font-bold uppercase tracking-wider text-snow transition-transform active:scale-[0.98]"
                >
                  Book 15-min call to claim spot
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <p className="mt-3 text-xs text-ink-soft">
                  We check your schedule and place you in the right squad before taking any payment.
                </p>
              </div>
            </Reveal>
          </div>
        </header>

        {/* What You Get */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 border-b border-paper/10">
          <Reveal>
            <span className="club-kicker">Everything Included</span>
            <h2 className="club-display text-3xl sm:text-4xl font-bold uppercase text-snow mt-2">
              The full Ultra Endurant coaching experience.
            </h2>
          </Reveal>

          <Reveal className="mt-8" delay={60}>
            <ul className="space-y-4">
              {OFFER_INCLUDES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-paper/10 bg-paper/[0.02] p-4 text-sm text-snow"
                >
                  <SlashMark className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Why the 15-min call is required */}
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 border-b border-paper/10">
          <Reveal>
            <div className="rounded-2xl border border-paper/15 bg-paper/[0.03] p-8 sm:p-10">
              <span className="club-kicker">No Blind Checkouts</span>
              <h3 className="club-display text-2xl sm:text-3xl font-bold uppercase text-snow mt-2">
                Why we talk first.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft">
                Each group is strictly capped at around five runners matched by timezone, weekly
                training volume, and target race goals.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                Before collecting any money, we grab 15 minutes on a video call to ensure the
                group call time works with your routine and that group coaching is genuinely the
                best vehicle for your goals.
              </p>

              <div className="mt-8">
                <a
                  href={siteLinks.booking15Min}
                  className="club-btn-accent inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-snow"
                >
                  Choose your call time
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Proof Band */}
        <ClubProofBand />

        {/* Fit Section */}
        <ClubFit />

        {/* Bottom CTA */}
        <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="club-display text-3xl sm:text-4xl font-bold uppercase text-snow">
              Secure your founding spot.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-soft max-w-lg mx-auto">
              Cohorts launch at the end of September. Spaces are strictly limited by squad size.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={siteLinks.booking15Min}
                className="club-btn-accent inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider text-snow"
              >
                Book your 15-minute call
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-paper/10 bg-ink py-12 text-xs text-paper/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>
            &copy; {new Date().getFullYear()} {legal.company}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalPages.map((page) => (
              <Link key={page.href} href={page.href} className="hover:text-snow">
                {page.label}
              </Link>
            ))}
            <a
              href={siteLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-snow flex items-center gap-1"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram
            </a>
            <a
              href={`mailto:${siteLinks.email}`}
              className="hover:text-snow flex items-center gap-1"
            >
              <MailIcon className="h-3.5 w-3.5" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
