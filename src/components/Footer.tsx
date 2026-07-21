import Link from "next/link";
import { EVENT } from "@/lib/event";
import { Logo } from "./Logo";

export function Footer() {
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
              <Link href="/inscription" className="hover:text-white">
                Inscription
              </Link>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {EVENT.name}. Tous droits réservés.</p>
          <p>Entrée gratuite sur inscription.</p>
        </div>
      </div>
    </footer>
  );
}
