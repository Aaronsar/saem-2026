import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Reveal } from "@/components/Reveal";
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

const accents = [
  "bg-saem-coral text-white",
  "bg-saem-turquoise text-white",
  "bg-saem-night text-white",
  "bg-white text-saem-night",
  "bg-saem-yellow text-saem-night",
];

export default function ExposantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Exposants"
        title={
          <>
            Qui sera
            <br />
            <span className="rounded-[0.2em] bg-saem-coral px-[0.15em]">sur place</span> ?
          </>
        }
        description="Prépas, associations, écoles européennes et stands d'étudiants de facultés*."
      >
        <CtaButton />
      </PageHero>

      <Marquee
        items={[
          "Étudiants de fac*",
          "Diploma Santé",
          "Link Campus · Rome",
          "Universidad Europea",
          "Associations",
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <aside className="mb-12 overflow-hidden rounded-[1.5rem] bg-saem-night p-6 text-white sm:p-8">
            <p className="font-display text-2xl font-extrabold">
              Facultés<span className="text-saem-coral">*</span>
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
              {FACULTIES_ASTERISK}
            </p>
          </aside>
        </Reveal>

        <div className="space-y-14">
          {categories.map((category) => {
            const items = EXHIBITORS.filter((e) => e.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category}>
                <Reveal>
                  <h2 className="mb-2 font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
                    {categoryLabels[category]}
                  </h2>
                  {category === "Facultés*" && (
                    <p className="mb-6 max-w-2xl text-sm text-saem-night/60">
                      Stands tenus par des étudiants — pas de représentation
                      officielle d&apos;université.
                    </p>
                  )}
                </Reveal>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((exhibitor, i) => (
                    <Reveal key={exhibitor.id} delay={(i % 3) as 0 | 1 | 2 | 3}>
                      <li
                        className={`panel-shift flex h-full flex-col justify-between rounded-[1.35rem] p-5 sm:p-6 ${
                          accents[i % accents.length]
                        }`}
                      >
                        <div>
                          <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase opacity-70">
                            {exhibitor.city}
                          </p>
                          <h3 className="mt-2 font-display text-xl font-extrabold">
                            {exhibitor.name}
                          </h3>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed opacity-85">
                          {exhibitor.description}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-xs leading-relaxed text-saem-night/50">
          <span className="font-semibold text-saem-coral">*</span> {FACULTIES_ASTERISK}
        </p>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
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
            <div className="rounded-[1.5rem] bg-saem-cream p-5 sm:p-8">
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
