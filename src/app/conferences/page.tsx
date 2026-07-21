import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Reveal } from "@/components/Reveal";
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

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="text-sm text-saem-night/60">{EVENT.dateLabel}</p>
            <h2 className="font-display text-3xl font-extrabold text-saem-night">
              Timeline
            </h2>
          </Reveal>
          <span className="rounded-pill bg-saem-yellow px-4 py-1.5 text-xs font-bold text-saem-night">
            Sans réservation
          </span>
        </div>

        <ol className="relative space-y-4">
          {CONFERENCES.map((conf, index) => (
            <Reveal key={conf.id} delay={(index % 3) as 0 | 1 | 2 | 3}>
              <li className="panel-shift grid gap-4 rounded-[1.5rem] bg-white p-5 sm:grid-cols-[7rem_1fr] sm:p-6">
                <div className="flex flex-col justify-center rounded-2xl bg-saem-turquoise px-4 py-5 text-center text-white sm:py-6">
                  <time className="font-display text-2xl font-extrabold">
                    {conf.time}
                  </time>
                  <span className="mt-1 text-[0.65rem] font-bold tracking-wide uppercase opacity-80">
                    {conf.room}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.16em] text-saem-coral uppercase">
                    Session {String(index + 1).padStart(2, "0")} /{" "}
                    {String(CONFERENCES.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-extrabold text-saem-night sm:text-2xl">
                    {conf.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-saem-turquoise-deep">
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
      </section>

      <section className="relative overflow-hidden bg-saem-night py-14 text-white sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,90,95,0.25),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Ne rate aucune session
          </h2>
          <p className="mt-3 text-white/65">
            Inscris-toi pour recevoir le programme final avant le {EVENT.dateShort}.
          </p>
          <div className="mx-auto mt-8 max-w-lg rounded-[1.5rem] bg-white p-5 text-left sm:p-8">
            <RegistrationForm source="conferences" compact />
          </div>
        </div>
      </section>
    </>
  );
}
