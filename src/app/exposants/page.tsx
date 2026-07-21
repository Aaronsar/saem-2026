import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
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
        description="Prépas, associations, écoles européennes, média et stands d'étudiants de facultés*."
      >
        <CtaButton source="exposants-hero" />
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
