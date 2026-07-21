import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Reveal } from "@/components/Reveal";
import { PageShell, Panel, SectionLabel, SectionTitle } from "@/components/ui";
import { EVENT, EXHIBITORS, FACULTIES_ASTERISK } from "@/lib/event";

export const metadata: Metadata = {
  title: "Exposants",
  description:
    "Exposants du Salon des Études de Médecine 2026 — prépas, associations et échanges avec des étudiants de facultés d'Île-de-France.",
};

const facultyStudents = EXHIBITORS.filter((e) => e.category === "Facultés*");
const others = EXHIBITORS.filter((e) => e.category !== "Facultés*");

const sectionMeta: Record<string, string> = {
  Prépa: "Prépas",
  Association: "Associations",
  École: "Écoles & mobilité",
  Partenaire: "Partenaires",
};

export default function ExposantsPage() {
  const grouped = (["Prépa", "Association", "École", "Partenaire"] as const)
    .map((cat) => ({
      cat,
      label: sectionMeta[cat],
      items: others.filter((e) => e.category === cat),
    }))
    .filter((g) => g.items.length > 0);

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
        description="Prépas, associations, écoles européennes et stands d'étudiants de facultés*."
      >
        <CtaButton />
      </PageHero>

      <PageShell narrow>
        <Reveal>
          <div className="border-l-2 border-saem-coral pl-5">
            <SectionLabel>Facultés*</SectionLabel>
            <p className="mt-3 text-sm leading-relaxed text-saem-night/70">
              {FACULTIES_ASTERISK}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {facultyStudents.map((item) => (
                <li
                  key={item.id}
                  className="rounded-pill bg-white px-3.5 py-1.5 text-sm font-semibold text-saem-night"
                >
                  {item.name.replace(/^Étudiants — /, "")}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-14 space-y-12">
          {grouped.map((group) => (
            <Reveal key={group.cat}>
              <SectionLabel>{group.label}</SectionLabel>
              <ul className="mt-4 divide-y divide-saem-night/10 border-t border-saem-night/10">
                {group.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <div>
                      <h3 className="font-display text-xl font-extrabold text-saem-night">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-saem-night/60">
                        {item.description}
                      </p>
                    </div>
                    <p className="shrink-0 text-xs font-bold tracking-wide text-saem-night/40 uppercase">
                      {item.city}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </PageShell>

      <section className="border-t border-saem-night/5 bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Partenaires</SectionLabel>
            <SectionTitle>Vous souhaitez exposer ?</SectionTitle>
            <p className="mt-3 text-saem-night/70">
              Prépas, associations ou organismes d&apos;orientation : écrivez-nous.
            </p>
            <a
              href={`mailto:${EVENT.email}?subject=Devenir%20exposant%20SAEM%202026`}
              className="mt-5 inline-flex font-bold text-saem-turquoise-deep underline-offset-4 hover:underline"
            >
              {EVENT.email}
            </a>
          </Reveal>
          <Reveal delay={1}>
            <Panel className="bg-saem-cream/70">
              <p className="mb-4 font-display text-xl font-bold text-saem-night">
                Visiteur ? Inscrivez-vous
              </p>
              <RegistrationForm source="exposants" compact />
            </Panel>
          </Reveal>
        </div>
      </section>
    </>
  );
}
