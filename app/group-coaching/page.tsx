import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SlashMark from "@/components/SlashMark";
import ClubProofBand from "@/components/club/ClubProofBand";
import ClubFit from "@/components/club/ClubFit";
import { ArrowIcon, InstagramIcon, MailIcon } from "@/components/icons";
import { brand, facts, groupCoaching, legal, legalPages, siteLinks } from "@/lib/site";

const title = "Ultra Endurant Group Coaching — Personalized Plans in Small Squads";
const description =
  "Train for your ultramarathon in a small squad of ~5 athletes. Custom training plan personally written by Jonathan Fors, weekly live call, video library, and direct WhatsApp access.";
const shareImage = "/images/hero-coast-runner.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${brand.url}/group-coaching` },
  openGraph: {
    title,
    description,
    url: `${brand.url}/group-coaching`,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ultra Endurant Group Coaching",
  provider: {
    "@type": "Person",
    name: brand.coach,
    url: brand.url,
  },
  description,
  offers: {
    "@type": "Offer",
    price: "50",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${brand.url}/group-coaching`,
  },
};

const PILLARS = [
  {
    step: "01",
    label: "Custom Plan",
    title: "Written personally for your life and your target race",
    body: "No automated algorithms or generic templates. Every workout block is built specifically around your schedule, current mileage, injury history, and life constraints.",
  },
  {
    step: "02",
    label: "Weekly Squad Call",
    title: "One hour live each week with your group",
    body: "Review the week's training, discuss pacing and fuelling hurdles, and dial in the upcoming block. Groups are capped at ~5 runners so everyone gets individual focus.",
  },
  {
    step: "03",
    label: "Direct Access",
    title: "WhatsApp messaging directly with Jonathan",
    body: "Life happens, work runs late, or a niggle pops up. Message me whenever you need a workout adjusted or have a question between calls.",
  },
  {
    step: "04",
    label: "Movement Library",
    title: "Video tutorials for every workout movement",
    body: "Clear demonstrations of running-specific strength, trunk stability, mobility, and recovery routines so you execute every session with confidence.",
  },
] as const;

const SQUAD_STANDARDS = [
  "Strictly ~5 runners per cohort",
  "Matched on goals, target race date, and timezone",
  "Mixed on experience level so runners push and support each other",
  "Direct feedback and workout adjustments every week",
  "No long-term contracts — cancel or pause anytime",
] as const;

export default function GroupCoachingPage() {
  return (
    <div className="club club-on-ink pt-16 sm:pt-[4.5rem] bg-ink text-snow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <header className="relative isolate overflow-hidden border-b border-paper/10">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero-coast-runner.webp"
              alt="Ultrarunner on coastal trail"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/75 to-ink" />
          </div>

          <div className="mx-auto max-w-5xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-paper/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Launching End of September 2026
              </div>
            </Reveal>

            <Reveal className="mt-6" delay={60}>
              <h1 className="club-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-snow uppercase">
                Group coaching.
                <br />
                <span className="text-paper/60">Built around your life.</span>
              </h1>
            </Reveal>

            <Reveal className="mt-6 max-w-2xl" delay={120}>
              <p className="text-lg sm:text-xl leading-relaxed text-ink-soft">
                Train for your first 50k or your next hundred-miler in a tight squad of ~5
                dedicated runners. Custom-written plans, weekly live calls, and direct
                WhatsApp support.
              </p>
            </Reveal>

            {/* Price & Primary Action */}
            <Reveal className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6" delay={180}>
              <a
                href={siteLinks.booking15Min}
                className="club-btn-accent inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider text-snow transition-transform active:scale-[0.98]"
              >
                Book a 15-min intro call
                <ArrowIcon className="h-4 w-4" />
              </a>

              <div className="flex items-center gap-3 text-sm text-ink-soft">
                <span className="text-xl font-bold text-snow">€50</span>
                <span>/ month &bull; No minimum commitment</span>
              </div>
            </Reveal>
          </div>
        </header>

        {/* Pillars */}
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 border-b border-paper/10">
          <Reveal>
            <span className="club-kicker">The Framework</span>
            <h2 className="club-display text-3xl sm:text-4xl font-bold uppercase text-snow mt-2">
              Everything you need to reach the finish line.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar, i) => (
              <Reveal
                key={pillar.step}
                delay={i * 60}
                className="rounded-2xl border border-paper/10 bg-paper/[0.02] p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent">
                    {pillar.step}
                  </span>
                  <span className="text-xs uppercase font-semibold tracking-wider text-paper/40">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="club-heading text-xl font-bold text-snow mt-4">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {pillar.body}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* The Small Group Principle */}
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 border-b border-paper/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="club-kicker">Cohort Design</span>
                <h2 className="club-display text-3xl sm:text-4xl font-bold uppercase text-snow mt-2">
                  Why small squads work better.
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">
                  Mass training programs give you a generic PDF and leave you to figure it out
                  alone. In Ultra Endurant group coaching, groups are strictly capped at around
                  five athletes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  You get the accountability and shared grit of a squad with the individual
                  scrutiny and plan tailoring of a private coach.
                </p>
              </Reveal>

              <Reveal className="mt-8" delay={80}>
                <ul className="space-y-3">
                  {SQUAD_STANDARDS.map((standard) => (
                    <li key={standard} className="flex items-center gap-3 text-sm text-snow">
                      <SlashMark className="h-3 w-3 text-accent shrink-0" />
                      <span>{standard}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-paper/15 bg-paper/[0.04] p-8 text-center">
              <Reveal delay={100}>
                <span className="text-xs uppercase font-mono tracking-widest text-paper/60">
                  Standard Membership
                </span>
                <div className="mt-4 text-5xl font-bold text-snow">€50</div>
                <div className="text-xs text-ink-soft mt-1">per month &bull; cancel anytime</div>

                <div className="my-6 border-t border-paper/10" />

                <p className="text-xs text-ink-soft leading-relaxed text-left">
                  Before joining, we jump on a short 15-minute call to check your schedule,
                  running background, and place you in the right group.
                </p>

                <a
                  href={siteLinks.booking15Min}
                  className="club-btn-accent mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-bold uppercase tracking-wider text-snow"
                >
                  Book 15-min call
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Proof Band */}
        <ClubProofBand />

        {/* Who this is for / not for */}
        <ClubFit />

        {/* Final CTA */}
        <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="club-kicker">Next Cohort</span>
            <h2 className="club-display text-4xl sm:text-5xl font-bold uppercase text-snow mt-3">
              Ready to build your race block?
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-base text-ink-soft leading-relaxed">
              Book a quick 15-minute call with Jonathan to discuss your target race, confirm call
              availability, and secure your place.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href={siteLinks.booking15Min}
                className="club-btn-accent inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wider text-snow"
              >
                Schedule your 15-min call
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-paper/10 bg-ink py-12 text-xs text-paper/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>
            &copy; {new Date().getFullYear()} {legal.company}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href={legalPages.terms.href} className="hover:text-snow">
              Terms
            </Link>
            <Link href={legalPages.privacy.href} className="hover:text-snow">
              Privacy
            </Link>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-snow flex items-center gap-1"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Instagram
            </a>
            <a
              href={`mailto:${brand.email}`}
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
