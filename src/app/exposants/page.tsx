import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { ExhibitorGrid } from "@/components/ExhibitorGrid";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Panel, SectionLabel } from "@/components/ui";
import { EVENT, EXHIBITORS, FACULTIES_ASTERISK } from "@/lib/event";

export const metadata: Metadata = {
  title: "Exposants",
  description:
    "Exposants du Salon des Études de Médecine 2026 — prépas, associations et échanges avec des étudiants de facultés d'Île-de-France.",
};

const facultyStudents = EXHIBITORS.filter((e) => e.category === "Facultés*");
const others = EXHIBITORS.filter((e) => e.category !== "Facultés*");

export default function ExposantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Exposants"
        title={
          <>
            Qui sera
            <br />
            <span className="text-saem-yellow">sur place</span> ?
          </>
        }
        description="Prépas, associations, écoles européennes, média et stands d'étudiants de facultés*."
      >
        <CtaButton source="exposants-hero" />
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="max-w-3xl text-sm leading-relaxed text-saem-night/70">
            <span className="font-semibold text-saem-coral">*</span>{" "}
            {FACULTIES_ASTERISK}
          </p>
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
              Exposants 2026
            </h2>
            <p className="mt-2 text-sm text-saem-night/60">
              Liste mise à jour régulièrement jusqu&apos;au {EVENT.dateShort}.
            </p>
          </Reveal>
          <div className="mt-8">
            <ExhibitorGrid items={others} />
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
              Stands étudiants — facultés*
            </h2>
            <p className="mt-2 text-sm text-saem-night/60">
              Stands tenus par des étudiants — pas de représentation officielle
              d&apos;université.
            </p>
          </Reveal>
          <div className="mt-8">
            <ExhibitorGrid items={facultyStudents} />
          </div>
        </div>
      </section>

      <section className="border-t border-saem-night/5 bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-stretch gap-4 px-5 sm:px-8 md:grid-cols-2">
          <Reveal className="h-full">
            <Panel className="flex h-full flex-col justify-between bg-saem-night text-white">
              <div>
                <SectionLabel tone="yellow">Exposer</SectionLabel>
                <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                  Vous souhaitez un stand ?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Prépas, associations, médias ou organismes d&apos;orientation :
                  contactez-nous.
                </p>
              </div>
              <a
                href={`mailto:${EVENT.email}?subject=Devenir%20exposant%20SAEM%202026`}
                className="mt-8 inline-flex font-bold text-saem-turquoise underline-offset-4 hover:underline"
              >
                {EVENT.email}
              </a>
            </Panel>
          </Reveal>
          <Reveal delay={1} className="h-full">
            <Panel className="flex h-full flex-col justify-between bg-white">
              <div>
                <SectionLabel>Visiter</SectionLabel>
                <h2 className="mt-3 font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
                  Venir au salon
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-saem-night/70">
                  Entrée gratuite sur inscription. Réserve ta place en 60 secondes.
                </p>
              </div>
              <div className="mt-8">
                <CtaButton source="exposants-cta" />
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>
    </>
  );
}
