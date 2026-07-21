"use client";

import { useEffect } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useRegistrationModal } from "@/components/RegistrationModalContext";
import { CtaButton } from "@/components/CtaButton";
import { PageShell, Panel, SectionLabel } from "@/components/ui";
import { EVENT } from "@/lib/event";

export default function InscriptionPage() {
  const { openModal } = useRegistrationModal();

  useEffect(() => {
    openModal("page-inscription");
  }, [openModal]);

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
      >
        <CtaButton source="page-inscription">Ouvrir le formulaire →</CtaButton>
      </PageHero>

      <PageShell>
        <div className="grid items-stretch gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <Panel className="flex h-full flex-col justify-between bg-white">
              <div>
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
              </div>
              <p className="mt-6 text-xs leading-relaxed text-saem-night/50">
                {EVENT.venueNote}
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={1} className="h-full">
            <Panel className="flex h-full flex-col justify-between bg-saem-night text-white">
              <div>
                <SectionLabel tone="yellow">Pourquoi s&apos;inscrire ?</SectionLabel>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
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
              </div>
              <div className="mt-8">
                <CtaButton source="page-inscription-cta" />
              </div>
            </Panel>
          </Reveal>
        </div>
      </PageShell>
    </>
  );
}
