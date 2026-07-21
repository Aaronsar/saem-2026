"use client";

import { useEffect, useId, useRef } from "react";
import { EVENT } from "@/lib/event";
import { RegistrationForm } from "./RegistrationForm";
import { useRegistrationModal } from "./RegistrationModalContext";

export function RegistrationModal() {
  const { open, source, closeModal } = useRegistrationModal();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-saem-night/55 backdrop-blur-sm"
        aria-label="Fermer la fenêtre d'inscription"
        onClick={closeModal}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92svh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-saem-night/8 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-saem-coral uppercase">
              Inscription gratuite
            </p>
            <h2
              id={titleId}
              className="mt-1 font-display text-2xl font-extrabold text-saem-night"
            >
              Je m&apos;inscris
            </h2>
            <p className="mt-1 text-sm text-saem-night/60">
              {EVENT.dateLabel} · {EVENT.timeLabel}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={closeModal}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-saem-cream text-saem-night transition hover:bg-saem-coral hover:text-white"
            aria-label="Fermer"
          >
            <span className="relative block h-3.5 w-3.5" aria-hidden>
              <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full bg-current" />
              <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <RegistrationForm source={source} />
        </div>
      </div>
    </div>
  );
}
