import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Reveal } from "@/components/Reveal";
import { EVENT, EXHIBITORS, FACULTIES_ASTERISK } from "@/lib/event";

export const metadata: Metadata = {
  title: "Exposants",
  description:
    "Exposants du Salon des Études de Médecine 2026 — prépas, associations et échanges avec des étudiants de facultés d'Île-de-France.",
};

const facultyStudents = EXHIBITORS.filter((e) => e.category === "Facultés*");
const others = EXHIBITORS.filter((e) => e.category !== "Facultés*");

const sectionMeta: Record<string, { label: string; tone: string }> = {
  Prépa: { label: "Prépas", tone: "text-saem-coral" },
  Association: { label: "Associations", tone: "text-saem-turquoise" },
  École: { label: "Écoles & mobilité", tone: "text-saem-yellow" },
  Partenaire: { label: "Partenaires", tone: "text-saem-coral" },
};

export default function ExposantsPage() {
  const grouped = (["Prépa", "Association", "École", "Partenaire"] as const)
    .map((cat) => ({
      cat,
      items: others.filter((e) => e.category === cat),
      ...sectionMeta[cat],
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

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <div className="border-l-2 border-saem-coral pl-5">
            <p className="text-xs font-bold tracking-[0.2em] text-saem-coral uppercase">
              Facultés<span className="text-saem-coral">*</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-saem-night/70">
              {FACULTIES_ASTERISK}
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
              {facultyStudents.map((item) => (
                <li
                  key={item.id}
                  className="rounded-pill bg-white px-3.5 py-1.5 text-sm font-semibold text-saem-night"
                >
                  {item.name.replace(/^Étudiants — /, "")}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-saem-night/45">
              Stands tenus par des étudiants — pas de représentation officielle
              d&apos;université.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 space-y-12">
          {grouped.map((group) => (
            <Reveal key={group.cat}>
              <h2
                className={`text-xs font-bold tracking-[0.22em] uppercase ${group.tone === "text-saem-yellow" ? "text-saem-turquoise-deep" : group.tone}`}
              >
                {group.label}
              </h2>
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
      </section>

      <section className="border-t border-saem-night/5 bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-saem-night">
              Vous souhaitez exposer ?
            </h2>
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
            <div className="rounded-[1.5rem] border border-saem-night/8 bg-saem-cream/60 p-5 sm:p-8">
              <p className="mb-4 font-display text-xl font-bold text-saem-night">
                Visiteur ? Inscrivez-vous
              </p>
              <RegistrationForm source="exposants" compact />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
