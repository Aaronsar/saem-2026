import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Reveal } from "@/components/Reveal";
import { PageShell, Panel, SectionLabel } from "@/components/ui";
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
        title={
          <>
            Réserve
            <br />
            ta <span className="text-saem-yellow">place</span>
          </>
        }
        description={`Invitation nominative pour le ${EVENT.dateLabel}. Entrée gratuite.`}
      />

      <PageShell>
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <aside className="space-y-4 lg:sticky lg:top-28">
              <Panel>
                <SectionLabel>Infos pratiques</SectionLabel>
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
              </Panel>

              <Panel className="bg-saem-cream/70">
                <p className="font-display text-lg font-bold text-saem-night">
                  Pourquoi s&apos;inscrire ?
                </p>
                <ul className="mt-3 space-y-2 text-sm text-saem-night/70">
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-saem-coral" />
                    Accès prioritaire à l&apos;entrée
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-saem-coral" />
                    Invitation nominative digitale
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-saem-coral" />
                    Rappels programme &amp; conférences
                  </li>
                </ul>
              </Panel>
            </aside>
          </Reveal>

          <Reveal delay={1}>
            <Panel>
              <h2 className="font-display text-2xl font-extrabold text-saem-night">
                Formulaire d&apos;inscription
              </h2>
              <p className="mt-2 mb-6 text-sm text-saem-night/60">
                Une adresse e-mail unique par participant.
              </p>
              <RegistrationForm source="page-inscription" />
            </Panel>
          </Reveal>
        </div>
      </PageShell>
    </>
  );
}
