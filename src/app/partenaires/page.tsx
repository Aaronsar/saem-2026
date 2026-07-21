import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PageShell, Panel, SectionLabel, SectionTitle } from "@/components/ui";
import { EVENT, EXHIBITORS } from "@/lib/event";

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Partenaires du Salon des Études de Médecine 2026 — médias et acteurs de l'orientation santé.",
};

const partners = EXHIBITORS.filter((e) => e.category === "Partenaire");

export default function PartenairesPage() {
  return (
    <>
      <PageHero
        eyebrow="Partenaires"
        title={
          <>
            Ils
            <br />
            <span className="text-saem-yellow">accompagnent</span> le salon
          </>
        }
        description="Médias et partenaires engagés autour de l'orientation médecine."
      >
        <CtaButton source="partenaires-hero" />
      </PageHero>

      <PageShell narrow>
        {partners.length === 0 ? (
          <p className="text-saem-night/60">Partenaires bientôt annoncés.</p>
        ) : (
          <ul className="divide-y divide-saem-night/10 border-t border-saem-night/10">
            {partners.map((item) => (
              <li key={item.id} className="py-6">
                <Reveal>
                  <p className="text-xs font-bold tracking-wide text-saem-coral uppercase">
                    {item.city}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-extrabold text-saem-night">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-saem-night/65">
                    {item.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </PageShell>

      <section className="border-t border-saem-night/5 bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-stretch gap-4 px-5 sm:px-8 md:grid-cols-2">
          <Reveal className="h-full">
            <Panel className="flex h-full flex-col justify-between bg-saem-night text-white">
              <div>
                <SectionLabel tone="yellow">Devenir partenaire</SectionLabel>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                  Associez votre marque au salon
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Médias, institutions ou entreprises : écrivez-nous pour
                  rejoindre l&apos;édition 2026.
                </p>
              </div>
              <a
                href={`mailto:${EVENT.email}?subject=Partenariat%20SAEM%202026`}
                className="mt-8 inline-flex font-bold text-saem-turquoise underline-offset-4 hover:underline"
              >
                {EVENT.email}
              </a>
            </Panel>
          </Reveal>
          <Reveal delay={1} className="h-full">
            <Panel className="flex h-full flex-col justify-between">
              <div>
                <SectionLabel>Visiteurs</SectionLabel>
                <SectionTitle>Inscrivez-vous au salon</SectionTitle>
                <p className="mt-3 text-sm text-saem-night/70">
                  Entrée gratuite · {EVENT.dateLabel}
                </p>
              </div>
              <div className="mt-8">
                <CtaButton source="partenaires-cta" />
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>
    </>
  );
}
