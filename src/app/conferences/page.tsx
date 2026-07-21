import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
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
        title="Le programme de la journée"
        description="Sessions d'environ 45 minutes, accès libre et gratuit. Arrive 10 minutes avant pour bien t'installer."
      >
        <CtaButton>Je m&apos;inscris au salon →</CtaButton>
      </PageHero>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-saem-night/60">{EVENT.dateLabel}</p>
            <h2 className="font-display text-2xl font-extrabold text-saem-night">
              Planning des interventions
            </h2>
          </div>
          <p className="rounded-pill bg-saem-yellow/80 px-4 py-1.5 text-xs font-bold text-saem-night">
            Sans réservation
          </p>
        </div>

        <ol className="relative space-y-0 border-l-2 border-saem-turquoise/40 pl-6 sm:pl-8">
          {CONFERENCES.map((conf, index) => (
            <li key={conf.id} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[1.9rem] top-1 flex size-5 items-center justify-center rounded-full bg-saem-coral sm:-left-[2.4rem]"
                aria-hidden
              >
                <span className="size-2 rounded-full bg-white" />
              </span>
              <div className="rounded-saem bg-white p-5 shadow-[0_12px_40px_-28px_rgba(26,23,48,0.4)] sm:p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <time className="rounded-pill bg-saem-turquoise px-3 py-1 text-sm font-bold text-white">
                    {conf.time}
                  </time>
                  <span className="text-xs font-semibold tracking-wide text-saem-night/50 uppercase">
                    {conf.room}
                  </span>
                  <span className="text-xs text-saem-night/40">
                    Session {index + 1}/{CONFERENCES.length}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-extrabold text-saem-night">
                  {conf.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-saem-coral">
                  {conf.speaker}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-saem-night/65">
                  {conf.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-saem-night py-14 text-white sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-extrabold">
            Ne rate aucune conférence
          </h2>
          <p className="mt-3 text-white/70">
            Inscris-toi au salon pour recevoir le programme final et les rappels
            avant le {EVENT.dateShort}.
          </p>
          <div className="mx-auto mt-8 max-w-lg rounded-saem bg-white p-5 text-left sm:p-8">
            <RegistrationForm source="conferences" compact />
          </div>
        </div>
      </section>
    </>
  );
}
