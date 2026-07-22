import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PageShell, Panel, SectionLabel } from "@/components/ui";
import { EVENT, STORY } from "@/lib/event";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Le SAEM est porté par un collectif d'anciens étudiants en médecine issus des facultés de toute la France.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={STORY.collective}
        title={
          <>
            Créé par d&apos;anciens
            <br />
            <span className="text-saem-yellow">étudiants</span> en médecine
          </>
        }
        description={STORY.mission}
      >
        <CtaButton source="a-propos-hero" />
      </PageHero>

      <PageShell>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <SectionLabel>Notre histoire</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
              Un collectif national pour une orientation plus juste
            </h2>
            <p className="mt-5 text-base leading-relaxed text-saem-night/75">
              {STORY.lead}
            </p>
            <p className="mt-4 text-base leading-relaxed text-saem-night/70">
              {STORY.body}
            </p>
            <p className="mt-4 text-base leading-relaxed text-saem-night/70">
              Le SAEM n&apos;est pas un salon « institutionnel » : c&apos;est une
              initiative étudiante devenue rendez-vous national, pour que
              l&apos;orientation médecine soit enfin claire, humaine et utile.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <Panel className="bg-saem-night text-white">
              <p className="text-xs font-bold tracking-[0.2em] text-saem-yellow uppercase">
                Ce qu&apos;on défend
              </p>
              <ul className="mt-6 space-y-5">
                {STORY.values.map((v) => (
                  <li key={v.title}>
                    <p className="font-display text-lg font-extrabold text-saem-coral">
                      {v.title}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{v.text}</p>
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        </div>
      </PageShell>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:px-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-saem-night">
              Rejoins-nous le {EVENT.dateShort}
            </h2>
            <p className="mt-2 text-saem-night/65">
              Gratuit · Paris · Une journée pour construire ton projet médecine.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaButton source="a-propos-cta" />
            <Link
              href="/exposants"
              className="inline-flex items-center rounded-pill border-2 border-saem-night/15 px-6 py-3 text-sm font-bold text-saem-night"
            >
              Voir les exposants
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
