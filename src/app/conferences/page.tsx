import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
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
        <CtaButton>Je m&apos;inscris au salon →</CtaButton>
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

      <section className="border-t border-saem-night/5 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel>Inscription</SectionLabel>
            <SectionTitle>Ne rate aucune session</SectionTitle>
            <p className="mt-3 text-saem-night/65">
              Inscris-toi pour recevoir le programme final avant le {EVENT.dateShort}.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <Panel className="mt-8">
              <RegistrationForm source="conferences" compact />
            </Panel>
          </Reveal>
        </div>
      </section>
    </>
  );
}
