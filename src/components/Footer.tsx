"use client";

import Link from "next/link";
import { EVENT, FACULTIES_ASTERISK } from "@/lib/event";
import { Logo } from "./Logo";
import { useRegistrationModal } from "./RegistrationModalContext";

export function Footer() {
  const { openModal } = useRegistrationModal();

  return (
    <footer className="bg-saem-night text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo variant="light" href="/" />
          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            {EVENT.tagline}
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-saem-yellow uppercase">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-white">
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link href="/exposants" className="hover:text-white">
                Exposants
              </Link>
            </li>
            <li>
              <Link href="/conferences" className="hover:text-white">
                Conférences
              </Link>
            </li>
            <li>
              <Link href="/partenaires" className="hover:text-white">
                Partenaires
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => openModal("footer")}
                className="hover:text-white"
              >
                Inscription
              </button>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-saem-yellow uppercase">
            Infos pratiques
          </p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>{EVENT.dateLabel}</li>
            <li>
              {EVENT.address}
              <br />
              {EVENT.city}
            </li>
            <li className="text-white/55">{EVENT.venueNote}</li>
            <li>
              <a href={`mailto:${EVENT.email}`} className="hover:text-white">
                {EVENT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-3 px-5 py-5 text-xs text-white/45 sm:px-8">
          <p>
            <span className="text-saem-coral">*</span> {FACULTIES_ASTERISK}
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {EVENT.name}. Tous droits réservés.
            </p>
            <p>Entrée gratuite sur inscription.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
