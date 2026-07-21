import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Countdown } from "@/components/Countdown";
import { FaqList } from "@/components/FaqList";
import { RegistrationForm } from "@/components/RegistrationForm";
import { CONFERENCES, EVENT, EXHIBITORS, FACULTIES_ASTERISK } from "@/lib/event";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden hero-mesh noise-overlay">
        <div
          className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full border border-white/20 sm:size-[36rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-8 top-16 size-[20rem] rounded-full border border-white/15 sm:size-[28rem]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-20 size-[22rem] rounded-full bg-saem-night/15"
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:justify-center sm:px-8 sm:pb-20 sm:pt-24">
          <p className="animate-fade-up text-xs font-bold tracking-[0.28em] text-saem-yellow uppercase">
            {EVENT.dateLabel} · {EVENT.timeLabel}
          </p>
          <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl lg:text-6xl">
            Salon des{" "}
            <span className="rounded-lg bg-saem-coral px-2 py-0.5">Études</span>
            <br />
            de Médecine
          </h1>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {EVENT.tagline}
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <CtaButton size="lg" />
            <CtaButton href="/conferences" variant="outline" size="lg">
              Voir les conférences
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Quand / Où */}
      <section className="border-b border-saem-night/5 bg-white">
        <div className="mx-auto grid max-w-6xl gap-0 px-5 sm:px-8 md:grid-cols-2">
          <div className="border-b border-saem-night/5 py-10 md:border-r md:border-b-0 md:pr-10">
            <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
              Quand
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
              {EVENT.dateLabel}
            </h2>
            <p className="mt-2 text-saem-night/70">
              de {EVENT.timeLabel.replace("–", "à")}
            </p>
            <p className="mt-4 text-sm text-saem-night/55">
              Gratuit · sur inscription nominative
            </p>
          </div>
          <div className="py-10 md:pl-10">
            <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
              Où
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
              Paris 16<sup>e</sup>
            </h2>
            <p className="mt-2 text-saem-night/70">
              {EVENT.address}
              <br />
              {EVENT.city}
            </p>
            <p className="mt-4 text-sm text-saem-night/55">{EVENT.venueNote}</p>
          </div>
        </div>
      </section>

      {/* Orientation */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold tracking-[0.22em] text-saem-turquoise uppercase">
            Bien s&apos;orienter
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
            Une journée pour construire ton projet médecine
          </h2>
          <p className="mt-4 text-base leading-relaxed text-saem-night/70 sm:text-lg">
            Lycéen, étudiant ou parent : le {EVENT.name} réunit prépas,
            associations et étudiants de facultés
            <span className="text-saem-coral">*</span> pour t&apos;aider à
            choisir ta voie — PASS, LAS, études en France ou à l&apos;étranger.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Formations médecine & santé",
            "Conseils Parcoursup & concours",
            "Échanges avec étudiants & pros",
            "Conférences & ateliers experts",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-saem-coral" />
              <span className="font-semibold text-saem-night">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <CtaButton />
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-saem-night/50">
          <span className="font-semibold text-saem-coral">*</span>{" "}
          {FACULTIES_ASTERISK}
        </p>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <article className="border-t-4 border-saem-coral pt-6">
            <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
              Les exposants
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
              Facultés<span className="text-saem-coral">*</span>, prépas &amp; associations
            </h2>
            <p className="mt-3 text-saem-night/70">
              Prépare ta visite : stands d&apos;étudiants de fac
              <span className="text-saem-coral">*</span>, prépas et associations.
              Liste mise à jour jusqu&apos;au jour J.
            </p>
            <Link
              href="/exposants"
              className="mt-5 inline-flex font-bold text-saem-turquoise-deep underline-offset-4 hover:underline"
            >
              Découvrir les exposants →
            </Link>
          </article>

          <article className="border-t-4 border-saem-turquoise pt-6">
            <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
              Les conférences
            </p>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-saem-night sm:text-3xl">
              Les temps forts de la journée
            </h2>
            <p className="mt-3 text-saem-night/70">
              {CONFERENCES.length} sessions pour décrypter Parcoursup, PASS/LAS
              et les études à l&apos;étranger — accès libre.
            </p>
            <Link
              href="/conferences"
              className="mt-5 inline-flex font-bold text-saem-turquoise-deep underline-offset-4 hover:underline"
            >
              Voir le programme →
            </Link>
          </article>
        </div>
      </section>

      {/* Chiffres */}
      <section className="bg-saem-night py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 sm:px-8 md:grid-cols-4">
          {[
            { value: "1", label: "Journée" },
            { value: `${EXHIBITORS.length}+`, label: "Exposants" },
            { value: `${CONFERENCES.length}`, label: "Conférences" },
            { value: "100%", label: "Gratuit" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-4xl font-extrabold text-saem-yellow sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm tracking-wide text-white/65 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Inscription inline */}
      <section id="inscription" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-saem-coral uppercase">
              Inscription
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-saem-night sm:text-4xl">
              Réserve ta place gratuite
            </h2>
            <p className="mt-4 text-saem-night/70">
              Remplis le formulaire en 1 minute. Tu recevras une invitation
              nominative pour le {EVENT.dateShort}.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-saem-night/65">
              <li>· Entrée gratuite et obligatoire</li>
              <li>· Accompagnants bienvenus</li>
              <li>· Confirmation par e-mail</li>
            </ul>
          </div>
          <div className="rounded-saem bg-white p-5 shadow-[0_20px_50px_-30px_rgba(26,23,48,0.35)] sm:p-8">
            <RegistrationForm source="accueil" />
          </div>
        </div>
      </section>

      {/* Countdown CTA */}
      <section className="hero-mesh noise-overlay relative overflow-hidden py-16 sm:py-20">
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="text-xs font-bold tracking-[0.22em] text-saem-yellow uppercase">
            Le salon commence dans
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            {EVENT.dateLabel}
          </h2>
          <div className="mt-8">
            <Countdown />
          </div>
          <div className="mt-8">
            <CtaButton size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-center text-xs font-bold tracking-[0.22em] text-saem-turquoise uppercase">
          FAQ
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-extrabold text-saem-night">
          Questions les plus fréquentes
        </h2>
        <div className="mt-8">
          <FaqList />
        </div>
      </section>
    </>
  );
}
