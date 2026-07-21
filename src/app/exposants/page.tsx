import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { EVENT, EXHIBITORS, FACULTIES_ASTERISK } from "@/lib/event";

export const metadata: Metadata = {
  title: "Exposants",
  description:
    "Exposants du Salon des Études de Médecine 2026 — prépas, associations et échanges avec des étudiants de facultés d'Île-de-France.",
};

const categories = ["Facultés*", "Prépa", "Association", "École", "Partenaire"] as const;

const categoryLabels: Record<(typeof categories)[number], string> = {
  "Facultés*": "Facultés*",
  Prépa: "Prépas",
  Association: "Associations",
  École: "Écoles & mobilité",
  Partenaire: "Partenaires",
};

export default function ExposantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Exposants"
        title="Qui rencontreras-tu sur place ?"
        description="Prépas, associations et stands d'étudiants de facultés* — pour préparer ton orientation médecine."
      >
        <CtaButton />
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <aside className="mb-10 rounded-saem border border-saem-coral/25 bg-saem-coral/5 p-5 sm:p-6">
          <p className="text-sm font-bold text-saem-night">
            Facultés<span className="text-saem-coral">*</span>
          </p>
          <p className="mt-2 text-sm leading-relaxed text-saem-night/75">
            {FACULTIES_ASTERISK}
          </p>
        </aside>

        <p className="mb-8 text-sm text-saem-night/60">
          Liste indicative · mise à jour régulièrement jusqu&apos;au {EVENT.dateShort}.
        </p>

        <div className="space-y-12">
          {categories.map((category) => {
            const items = EXHIBITORS.filter((e) => e.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <h2 className="mb-4 font-display text-xl font-extrabold text-saem-night sm:text-2xl">
                  <span className="mr-2 inline-block h-3 w-3 rounded-full bg-saem-coral align-middle" />
                  {categoryLabels[category]}
                </h2>
                {category === "Facultés*" && (
                  <p className="mb-4 max-w-3xl text-sm text-saem-night/60">
                    Ces stands sont tenus par des étudiants. Ils ne représentent pas
                    officiellement leur université.
                  </p>
                )}
                <ul className="grid gap-4 sm:grid-cols-2">
                  {items.map((exhibitor) => (
                    <li
                      key={exhibitor.id}
                      className="rounded-saem bg-white p-5 shadow-[0_12px_40px_-28px_rgba(26,23,48,0.4)] sm:p-6"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-bold text-saem-night">
                          {exhibitor.name}
                        </h3>
                        <span className="shrink-0 rounded-pill bg-saem-cream px-3 py-1 text-xs font-semibold text-saem-night/70">
                          {exhibitor.city}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-saem-night/65">
                        {exhibitor.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-xs leading-relaxed text-saem-night/50">
          <span className="font-semibold text-saem-coral">*</span> {FACULTIES_ASTERISK}
        </p>
      </section>

      <section className="border-t border-saem-night/5 bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-saem-night">
              Vous souhaitez exposer ?
            </h2>
            <p className="mt-3 text-saem-night/70">
              Prépas, associations ou organismes d&apos;orientation : contactez-nous
              pour rejoindre le salon.
            </p>
            <a
              href={`mailto:${EVENT.email}?subject=Devenir%20exposant%20SAEM%202026`}
              className="mt-5 inline-flex font-bold text-saem-turquoise-deep underline-offset-4 hover:underline"
            >
              {EVENT.email}
            </a>
          </div>
          <div className="rounded-saem bg-saem-cream p-5 sm:p-8">
            <p className="mb-4 font-display text-xl font-bold text-saem-night">
              Visiteur ? Inscrivez-vous ici
            </p>
            <RegistrationForm source="exposants" compact />
          </div>
        </div>
      </section>
    </>
  );
}
