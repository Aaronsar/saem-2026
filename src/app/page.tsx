import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Countdown } from "@/components/Countdown";
import { FaqList } from "@/components/FaqList";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Reveal } from "@/components/Reveal";
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
    title: "Conférences live",
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
      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden hero-mesh noise-overlay">
        <div
          className="pointer-events-none absolute -right-[10%] top-[8%] size-[28rem] animate-blob bg-white/10 blur-2xl sm:size-[40rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-[20%] -left-[10%] size-[24rem] animate-blob bg-saem-coral/25 blur-3xl [animation-delay:-4s] sm:size-[34rem]"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:justify-center sm:px-8 sm:pb-20">
          <div className="flex items-center gap-3 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-pill bg-saem-night/25 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-saem-yellow uppercase backdrop-blur">
              <span className="size-1.5 rounded-full bg-saem-yellow animate-ticker" />
              Live · {EVENT.dateShort}
            </span>
          </div>

          <h1 className="animate-fade-up-delay mt-6 max-w-5xl font-display text-[clamp(2.75rem,8.5vw,6rem)] leading-[1.12] font-extrabold text-white">
            Salon des
            <br />
            <span className="mt-1 inline-block rounded-[0.22em] bg-saem-coral px-[0.2em] py-[0.08em]">
              Études
            </span>
            <br />
            de <span className="text-saem-yellow">Médecine</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-7 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
            {EVENT.tagline}
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <CtaButton size="lg" />
            <CtaButton href="/conferences" variant="outline" size="lg">
              Programme conférences
            </CtaButton>
            <p className="w-full text-sm font-semibold text-white/75 sm:ml-2 sm:w-auto">
              {EVENT.timeLabel} · Paris 16<sup>e</sup>
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-saem-cream to-transparent" />
      </section>

      {/* QUAND / OÙ — split panels */}
      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <Reveal>
            <div className="panel-shift group relative overflow-hidden rounded-[1.75rem] bg-saem-night p-8 text-white sm:p-10">
              <p className="text-xs font-bold tracking-[0.28em] text-saem-yellow uppercase">
                Quand
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                {EVENT.dateLabel}
              </h2>
              <p className="mt-3 text-2xl font-bold text-saem-turquoise">
                {EVENT.timeLabel}
              </p>
              <p className="mt-6 text-sm text-white/55">
                Entrée gratuite · inscription nominative
              </p>
              <span
                className="pointer-events-none absolute -right-6 -bottom-8 font-display text-[8rem] font-extrabold text-white/5 transition group-hover:text-white/10"
                aria-hidden
              >
                08
              </span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="panel-shift group relative overflow-hidden rounded-[1.75rem] bg-white p-8 sm:p-10">
              <p className="text-xs font-bold tracking-[0.28em] text-saem-coral uppercase">
                Où
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-saem-night sm:text-4xl">
                Paris 16<sup>e</sup>
              </h2>
              <p className="mt-3 text-lg font-semibold text-saem-night/80">
                {EVENT.address}
                <br />
                {EVENT.city}
              </p>
              <p className="mt-6 text-sm text-saem-night/50">{EVENT.venueNote}</p>
              <span
                className="pointer-events-none absolute -right-4 -bottom-6 font-display text-[8rem] font-extrabold text-saem-turquoise/10 transition group-hover:text-saem-turquoise/20"
                aria-hidden
              >
                16
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BENTO PARCOURS */}
      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.22em] text-saem-turquoise uppercase">
                Sur place
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-saem-night sm:text-5xl">
                Une journée,{" "}
                <span className="text-saem-coral">quatre temps forts</span>
              </h2>
            </div>
            <CtaButton className="self-start md:self-auto" />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((item, i) => (
            <Reveal key={item.n} delay={(i % 3) as 0 | 1 | 2 | 3}>
              <article
                className={`panel-shift flex h-full flex-col justify-between rounded-[1.5rem] p-6 sm:p-7 ${
                  i === 0
                    ? "bg-saem-coral text-white sm:col-span-2 lg:col-span-1 lg:min-h-[22rem]"
                    : i === 1
                      ? "bg-saem-turquoise text-white"
                      : i === 2
                        ? "bg-saem-night text-white"
                        : "bg-white text-saem-night"
                }`}
              >
                <p
                  className={`font-display text-5xl font-extrabold ${
                    i === 3 ? "text-saem-coral/30" : "text-white/25"
                  }`}
                >
                  {item.n}
                </p>
                <div>
                  <h3 className="mt-6 font-display text-xl font-extrabold">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      i === 3 ? "text-saem-night/65" : "text-white/80"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-saem-night/50">
          <span className="font-semibold text-saem-coral">*</span>{" "}
          {FACULTIES_ASTERISK}
        </p>
      </section>

      {/* CONFÉRENCES HORIZONTAL SCROLL */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto mb-6 flex max-w-6xl items-end justify-between gap-4 px-5 sm:px-8">
          <Reveal>
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
                Programme
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
                Conférences — swipe
              </h2>
            </div>
          </Reveal>
          <Link
            href="/conferences"
            className="shrink-0 text-sm font-bold text-saem-turquoise-deep underline-offset-4 hover:underline"
          >
            Tout voir →
          </Link>
        </div>

        <div className="mask-fade-x snap-x-mandatory flex gap-4 overflow-x-auto px-5 pb-4 sm:px-8">
          {CONFERENCES.map((conf, i) => (
            <article
              key={conf.id}
              className="snap-start w-[min(85vw,22rem)] shrink-0 rounded-[1.5rem] bg-white p-6 transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-3">
                <time className="rounded-pill bg-saem-turquoise px-3 py-1 text-sm font-bold text-white">
                  {conf.time}
                </time>
                <span className="text-xs font-bold text-saem-night/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-extrabold text-saem-night">
                {conf.title}
              </h3>
              <p className="mt-2 text-sm text-saem-coral font-semibold">
                {conf.speaker}
              </p>
              <p className="mt-2 text-sm text-saem-night/60 line-clamp-3">
                {conf.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPOSANTS TEASER + STATS */}
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Link
              href="/exposants"
              className="panel-shift group relative block overflow-hidden rounded-[1.75rem] bg-saem-turquoise p-8 text-white sm:p-10"
            >
              <p className="text-xs font-bold tracking-[0.22em] text-saem-yellow uppercase">
                Exposants
              </p>
              <h2 className="mt-3 max-w-md font-display text-3xl font-extrabold sm:text-4xl">
                Facultés<span className="text-saem-yellow">*</span>, prépas
                &amp; Europe
              </h2>
              <p className="mt-4 max-w-md text-white/85">
                {EXHIBITORS.length} acteurs annoncés — dont Link Campus University
                et Universidad Europea.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold transition group-hover:gap-3">
                Voir la liste <span aria-hidden>→</span>
              </span>
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="grid h-full grid-cols-2 gap-4">
              {[
                { value: `${CONFERENCES.length}`, label: "Conférences" },
                { value: `${EXHIBITORS.length}+`, label: "Exposants" },
                { value: "1", label: "Journée" },
                { value: "0€", label: "Entrée" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-end rounded-[1.5rem] bg-saem-night p-5 text-white sm:p-6"
                >
                  <p className="font-display text-3xl font-extrabold text-saem-yellow sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-bold tracking-wide text-white/55 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COUNTDOWN BAND */}
      <section className="relative overflow-hidden bg-saem-night py-16 text-white sm:py-20">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(18,181,201,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <p className="text-xs font-bold tracking-[0.22em] text-saem-yellow uppercase">
                Compte à rebours
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
                Le jour J
                <br />
                <span className="text-saem-coral">approche</span>
              </h2>
              <p className="mt-4 text-white/65">{EVENT.dateLabel}</p>
              <div className="mt-6">
                <CtaButton size="lg" />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <Countdown dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* INSCRIPTION */}
      <section id="inscription" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
                Inscription
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold text-saem-night sm:text-5xl">
                60 secondes
                <br />
                <span className="text-saem-turquoise">pour réserver</span>
              </h2>
              <p className="mt-4 text-saem-night/70">
                Invitation nominative pour le {EVENT.dateShort}. Accompagnants
                bienvenus.
              </p>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-saem-night/75">
                {["Gratuit", "Confirmation e-mail", "Accès conférences inclus"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-saem-coral text-xs text-white">
                        ✓
                      </span>
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-[1.75rem] bg-white p-5 sm:p-8">
              <RegistrationForm source="accueil" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-saem-night/5 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="text-center text-xs font-bold tracking-[0.22em] text-saem-turquoise uppercase">
              FAQ
            </p>
            <h2 className="mt-3 text-center font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
              Tout ce que tu veux savoir
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqList />
          </div>
        </div>
      </section>
    </>
  );
}
