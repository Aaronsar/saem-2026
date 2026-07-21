import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { EVENT } from "@/lib/event";

export const metadata: Metadata = {
  title: "Inscription",
  description: `Inscription gratuite au ${EVENT.name} — ${EVENT.dateLabel} à Paris.`,
};

export default function InscriptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Inscription gratuite"
        title="Je m'inscris au salon"
        description={`Réserve ta place pour le ${EVENT.dateLabel}. Invitation nominative envoyée par e-mail.`}
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="rounded-saem bg-white p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-saem-coral uppercase">
                Infos pratiques
              </p>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-saem-night">Date</dt>
                  <dd className="text-saem-night/70">
                    {EVENT.dateLabel}
                    <br />
                    {EVENT.timeLabel}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-saem-night">Lieu</dt>
                  <dd className="text-saem-night/70">
                    {EVENT.address}
                    <br />
                    {EVENT.city}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-saem-night">Public</dt>
                  <dd className="text-saem-night/70">{EVENT.audience}</dd>
                </div>
              </dl>
              <p className="mt-5 text-xs leading-relaxed text-saem-night/50">
                {EVENT.venueNote}
              </p>
            </div>

            <div className="rounded-saem bg-saem-turquoise/10 p-6">
              <p className="font-display text-lg font-bold text-saem-night">
                Pourquoi s&apos;inscrire ?
              </p>
              <ul className="mt-3 space-y-2 text-sm text-saem-night/70">
                <li>· Accès prioritaire à l&apos;entrée</li>
                <li>· Invitation nominative digitale</li>
                <li>· Rappels programme & conférences</li>
              </ul>
            </div>
          </aside>

          <div className="rounded-saem bg-white p-5 shadow-[0_20px_50px_-30px_rgba(26,23,48,0.35)] sm:p-8">
            <h2 className="font-display text-2xl font-extrabold text-saem-night">
              Formulaire d&apos;inscription
            </h2>
            <p className="mt-2 mb-6 text-sm text-saem-night/60">
              Tous les champs marqués sont obligatoires. Une adresse e-mail unique
              par participant.
            </p>
            <RegistrationForm source="page-inscription" />
          </div>
        </div>
      </section>
    </>
  );
}
