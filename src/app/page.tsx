import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Countdown } from "@/components/Countdown";
import { FaqList } from "@/components/FaqList";
import { Reveal } from "@/components/Reveal";
import { PageShell, Panel, SectionLabel, SectionTitle } from "@/components/ui";
import { CONFERENCES, EVENT, EXHIBITORS, FACULTIES_ASTERISK } from "@/lib/event";

const JOURNEY = [
  {
    n: "01",
    title: "Stands étudiants*",
    text: "Pose tes questions à des étudiants de facs d'Île-de-France — sans stand officiel d'université.",
  },
  {
    n: "02",
    title: "Prépas & mobilité",
    text: "Diploma Santé, Link Campus University, Universidad Europea et d'autres acteurs.",
  },
  {
    n: "03",
    title: "Conférences",
    text: "Parcoursup, PASS/LAS, méthodes… sessions libres toute la journée.",
  },
  {
    n: "04",
    title: "Parents bienvenus",
    text: "Un format pensé pour lycéens et familles, de la Seconde à la Terminale.",
  },
];

export default function HomePage() {
  return (
    <>
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
          <h1 className="animate-fade-up max-w-5xl font-display text-[clamp(2.5rem,7.5vw,5.25rem)] leading-[1.12] font-extrabold text-white">
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
            {EVENT.timeLabel}
          </p>
          <p className="animate-fade-up-delay-2 mt-3 text-base font-semibold text-white/85 sm:text-lg">
            Paris 16<sup>e</sup> · {EVENT.address}
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <CtaButton size="lg" />
            <CtaButton href="/conferences" variant="outline" size="lg">
              Voir les conférences
            </CtaButton>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-saem-cream to-transparent" />
      </section>

      <PageShell>
        <div className="grid items-stretch gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <Panel className="flex h-full flex-col justify-between bg-saem-night text-white">
              <div>
                <SectionLabel tone="yellow">Quand ?</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
                  {EVENT.dateLabel}
                </h2>
                <p className="mt-2 text-xl font-bold text-saem-turquoise">
                  {EVENT.timeLabel}
                </p>
              </div>
              <p className="mt-6 text-sm text-white/70">
                Entrée gratuite · inscription nominative
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={1} className="h-full">
            <Panel className="flex h-full flex-col justify-between bg-white">
              <div>
                <SectionLabel>Où ?</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
                  Paris 16<sup>e</sup>
                </h2>
                <p className="mt-2 text-base font-semibold text-saem-night/80">
                  {EVENT.address}
                  <br />
                  {EVENT.city}
                </p>
              </div>
              <p className="mt-6 text-sm text-saem-night/60">{EVENT.venueNote}</p>
            </Panel>
          </Reveal>
        </div>
      </PageShell>

      <PageShell className="!pt-0">
        <Reveal>
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <SectionLabel tone="turquoise">Sur place</SectionLabel>
              <SectionTitle>
                Une journée,{" "}
                <span className="text-saem-coral">quatre temps forts</span>
              </SectionTitle>
            </div>
            <CtaButton className="self-start md:self-auto" />
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {JOURNEY.map((item, i) => (
            <Reveal key={item.n} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <article className="rounded-2xl bg-white p-6 sm:p-7">
                <p className="font-display text-sm font-extrabold text-saem-coral">
                  {item.n}
                </p>
                <h3 className="mt-3 font-display text-xl font-extrabold text-saem-night">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-saem-night/65">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-saem-night/50">
          <span className="font-semibold text-saem-coral">*</span> {FACULTIES_ASTERISK}
        </p>
      </PageShell>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto mb-8 flex max-w-6xl items-end justify-between gap-4 px-5 sm:px-8">
          <Reveal>
            <div>
              <SectionLabel>Programme</SectionLabel>
              <SectionTitle>Les conférences</SectionTitle>
            </div>
          </Reveal>
          <Link
            href="/conferences"
            className="shrink-0 text-sm font-bold text-saem-turquoise-deep underline-offset-4 hover:underline"
          >
            Tout voir →
          </Link>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="snap-x-mandatory flex gap-4 overflow-x-auto px-5 pb-2 sm:px-8">
            {CONFERENCES.map((conf, i) => (
              <article
                key={conf.id}
                className="snap-start w-[min(78vw,20rem)] shrink-0 rounded-2xl border border-saem-night/8 bg-saem-cream/40 p-6 sm:w-[21rem]"
              >
                <div className="flex items-center justify-between gap-3">
                  <time className="text-sm font-extrabold text-saem-turquoise-deep">
                    {conf.time}
                  </time>
                  <span className="text-xs font-bold text-saem-night/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-extrabold text-saem-night">
                  {conf.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-saem-coral">
                  {conf.speaker}
                </p>
                <p className="mt-2 line-clamp-3 text-sm text-saem-night/60">
                  {conf.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageShell>
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Link
              href="/exposants"
              className="group block rounded-2xl bg-saem-night p-8 text-white transition hover:bg-saem-night/95 sm:p-10"
            >
              <SectionLabel tone="yellow">Exposants</SectionLabel>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                Facultés<span className="text-saem-yellow">*</span>, prépas &amp; Europe
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                {EXHIBITORS.length} acteurs annoncés — Link Campus University,
                Universidad Europea, et plus.
              </p>
              <span className="mt-8 inline-flex font-bold text-saem-turquoise transition group-hover:translate-x-1">
                Voir la liste →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="grid h-full grid-cols-2 gap-3">
              {[
                { value: `${CONFERENCES.length}`, label: "Conférences" },
                { value: `${EXHIBITORS.length}+`, label: "Exposants" },
                { value: "1", label: "Journée" },
                { value: "0€", label: "Entrée" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-end rounded-2xl bg-white p-5 sm:p-6"
                >
                  <p className="font-display text-3xl font-extrabold text-saem-coral sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-bold tracking-wide text-saem-night/45 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </PageShell>

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
