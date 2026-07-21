import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PageShell, Panel, SectionLabel, SectionTitle } from "@/components/ui";
import { CONFERENCES, EVENT } from "@/lib/event";

export const metadata: Metadata = {
  title: "Conférences",
  description:
    "Programme des conférences du Salon des Études de Médecine 2026 — Parcoursup, PASS/LAS et orientation.",
};

export default function ConferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Conférences"
        title={
          <>
            Le programme
            <br />
            de la <span className="text-saem-yellow">journée</span>
          </>
        }
        description="Sessions ~45 min, accès libre. Arrive 10 minutes avant."
      >
        <CtaButton source="conferences-hero">Je m&apos;inscris au salon →</CtaButton>
      </PageHero>

      <PageShell narrow>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionLabel>Planning</SectionLabel>
            <SectionTitle>{EVENT.dateLabel}</SectionTitle>
          </Reveal>
          <span className="rounded-pill bg-saem-yellow px-4 py-1.5 text-xs font-bold text-saem-night">
            Sans réservation
          </span>
        </div>

        <ol className="divide-y divide-saem-night/10 border-t border-saem-night/10">
          {CONFERENCES.map((conf, index) => (
            <Reveal key={conf.id}>
              <li className="grid gap-3 py-6 sm:grid-cols-[5.5rem_1fr] sm:gap-8">
                <div>
                  <time className="font-display text-xl font-extrabold text-saem-turquoise-deep">
                    {conf.time}
                  </time>
                  <p className="mt-1 text-[0.65rem] font-bold tracking-wide text-saem-night/40 uppercase">
                    {conf.room}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-saem-coral uppercase">
                    Session {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-saem-night sm:text-2xl">
                    {conf.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-saem-night/55">
                    {conf.speaker}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-saem-night/65">
                    {conf.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </PageShell>

      <section className="border-t border-saem-night/5 bg-saem-night py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-5 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <SectionLabel tone="yellow">Inscription</SectionLabel>
            <h2 className="mt-3 font-display text-3xl font-extrabold">
              Ne rate aucune session
            </h2>
            <p className="mt-2 text-white/65">
              Programme final envoyé avant le {EVENT.dateShort}.
            </p>
          </div>
          <CtaButton size="lg" source="conferences-cta" />
        </div>
      </section>
    </>
  );
}
