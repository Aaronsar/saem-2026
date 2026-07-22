import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Countdown } from "@/components/Countdown";
import { FaqList } from "@/components/FaqList";
import { FeaturePoster, FeatureSplit } from "@/components/FeatureSplit";
import { Reveal } from "@/components/Reveal";
import { ManifestoRail, StoryBand } from "@/components/StoryBand";
import { PageShell, SectionLabel, SectionTitle } from "@/components/ui";
import { CONFERENCES, EVENT, EXHIBITORS, FACULTIES_ASTERISK } from "@/lib/event";

const JOURNEY = [
  {
    n: "01",
    title: "Stands étudiants*",
    text: "Questions libres avec des étudiants de facs d'Île-de-France.",
    color: "bg-saem-coral",
  },
  {
    n: "02",
    title: "Prépas & Europe",
    text: "Diploma Santé, Link Campus, Universidad Europea…",
    color: "bg-saem-turquoise",
  },
  {
    n: "03",
    title: "Conférences",
    text: "PASS/LAS, Parcoursup, méthodes — accès libre.",
    color: "bg-saem-night",
  },
  {
    n: "04",
    title: "Familles",
    text: "Un format pensé pour lycéens et parents.",
    color: "bg-saem-yellow",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden hero-mesh noise-overlay">
        <div
          className="pointer-events-none absolute -right-[10%] top-[8%] size-[28rem] animate-blob bg-white/10 blur-2xl sm:size-[40rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-[20%] -left-[10%] size-[24rem] animate-blob bg-saem-coral/20 blur-3xl [animation-delay:-4s] sm:size-[34rem]"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:justify-center sm:px-8 sm:pb-20">
          <p className="animate-fade-up text-xs font-bold tracking-[0.28em] text-saem-yellow uppercase">
            Collectif d&apos;anciens étudiants en médecine
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-5xl font-display text-[clamp(2.5rem,7.5vw,5.25rem)] leading-[1.12] font-extrabold text-white">
            Salon des
            <br />
            <span className="mt-1 inline-block rounded-[0.22em] bg-saem-coral px-[0.2em] py-[0.08em]">
              Études
            </span>
            <br />
            de <span className="text-saem-yellow">Médecine</span>
          </h1>

          <p className="animate-fade-up-delay mt-6 font-display text-[clamp(1.6rem,4.5vw,2.75rem)] leading-tight font-extrabold text-white">
            {EVENT.dateLabel}
          </p>
          <p className="animate-fade-up-delay mt-2 text-lg font-bold text-saem-yellow sm:text-xl">
            {EVENT.timeLabel} · Paris 16<sup>e</sup>
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <CtaButton size="lg" />
            <Link
              href="/a-propos"
              className="inline-flex items-center rounded-pill border-2 border-white/70 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-saem-turquoise-deep"
            >
              Qui organise le salon ?
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-saem-cream to-transparent" />
      </section>

      {/* STORYTELLING */}
      <StoryBand />

      {/* QUAND / OÙ — bandeau diagonal */}
      <section className="relative -mt-2 overflow-hidden">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="relative bg-saem-night px-8 py-12 text-white sm:px-10 sm:py-16 md:[clip-path:polygon(0_0,100%_0,92%_100%,0_100%)]">
            <p className="text-xs font-bold tracking-[0.22em] text-saem-yellow uppercase">
              Quand ?
            </p>
            <p className="mt-4 font-display text-3xl font-extrabold sm:text-5xl">
              {EVENT.dateLabel}
            </p>
            <p className="mt-3 text-2xl font-bold text-saem-turquoise">
              {EVENT.timeLabel}
            </p>
            <p className="mt-6 text-sm text-white/60">
              Entrée gratuite · inscription nominative
            </p>
          </div>
          <div className="relative bg-white px-8 py-12 sm:px-10 sm:py-16 md:-ml-8 md:pl-16">
            <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
              Où ?
            </p>
            <p className="mt-4 font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
              Paris 16<sup>e</sup>
            </p>
            <p className="mt-3 font-semibold text-saem-night/80">
              {EVENT.address}
              <br />
              {EVENT.city}
            </p>
            <p className="mt-6 text-sm text-saem-night/55">{EVENT.venueNote}</p>
          </div>
        </div>
      </section>

      {/* MANIFESTO + JOURNEY */}
      <PageShell className="!pt-0">
        <Reveal>
          <ManifestoRail />
        </Reveal>

        <div className="mt-10">
          <Reveal>
            <SectionLabel tone="turquoise">Sur place</SectionLabel>
            <SectionTitle>
              Quatre temps,{" "}
              <span className="text-saem-coral">une journée</span>
            </SectionTitle>
          </Reveal>

          <div className="mt-8 flex gap-3 overflow-x-auto pb-2 snap-x-mandatory">
            {JOURNEY.map((item) => (
              <article
                key={item.n}
                className={`snap-start w-[min(70vw,16rem)] shrink-0 rounded-[1.5rem] p-6 ${item.color} ${
                  item.n === "04" ? "text-saem-night" : "text-white"
                }`}
              >
                <p className="font-display text-4xl font-extrabold opacity-30">
                  {item.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-extrabold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-85">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-saem-night/50">
            <span className="font-semibold text-saem-coral">*</span>{" "}
            {FACULTIES_ASTERISK}
          </p>
        </div>
      </PageShell>

      {/* CONFÉRENCES */}
      <section className="relative overflow-hidden bg-saem-night py-14 text-white sm:py-16">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_40%,rgba(18,181,201,0.35),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto mb-8 flex max-w-6xl items-end justify-between gap-4 px-5 sm:px-8">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-saem-yellow uppercase">
              Programme
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Les conférences
            </h2>
          </div>
          <Link
            href="/conferences"
            className="shrink-0 text-sm font-bold text-saem-turquoise underline-offset-4 hover:underline"
          >
            Tout voir →
          </Link>
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="snap-x-mandatory flex gap-4 overflow-x-auto px-5 pb-2 sm:px-8">
            {CONFERENCES.slice(0, 5).map((conf, i) => (
              <article
                key={conf.id}
                className="snap-start w-[min(78vw,20rem)] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:w-[21rem]"
              >
                <time className="text-sm font-extrabold text-saem-turquoise">
                  {conf.time}
                </time>
                <h3 className="mt-3 font-display text-lg font-extrabold">
                  {conf.title}
                </h3>
                <p className="mt-2 text-sm text-white/55 line-clamp-2">
                  {conf.description}
                </p>
                <p className="mt-4 text-xs font-bold text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPOSANTS / PARTENAIRES */}
      <section className="bg-saem-cream py-14 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-5 sm:px-8">
          <FeatureSplit
            eyebrow="Exposants"
            title="Découvrez les exposants du salon"
            description={
              <>
                <p>
                  Stands d&apos;étudiants de facultés
                  <span className="text-saem-coral">*</span>, prépas, écoles
                  européennes et associations.
                </p>
                <p>
                  <strong>{EXHIBITORS.length} acteurs</strong> annoncés.
                </p>
              </>
            }
            href="/exposants"
            cta="Voir les exposants"
            tone="turquoise"
            visual={
              <FeaturePoster line1="Salon 2026" line2="Exposants" line3="Liste →" />
            }
          />
          <FeatureSplit
            eyebrow="Partenaires"
            title="Les partenaires du SAEM"
            description={
              <>
                <p>
                  Médias et partenaires — dont{" "}
                  <strong>Hermione Médecine</strong>.
                </p>
                <p>Associez votre marque à l&apos;édition 2026.</p>
              </>
            }
            href="/partenaires"
            cta="Voir les partenaires"
            tone="night"
            reverse
            visual={
              <FeaturePoster
                line1="Édition 2026"
                line2="Partenaires"
                line3="Hermione Médecine"
              />
            }
          />
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="bg-saem-turquoise py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
            Le {EVENT.name} commence dans&nbsp;:
          </h2>
          <div className="mt-10">
            <Countdown variant="banner" />
          </div>
          <div className="mt-10">
            <CtaButton size="lg" source="countdown-banner" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
            Questions les plus fréquentes
          </h2>
          <div className="mt-6">
            <FaqList />
          </div>
        </div>
      </section>
    </>
  );
}
