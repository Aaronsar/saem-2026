"use client";

import { FormEvent, useState } from "react";
import { EVENT } from "@/lib/event";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  source?: string;
  compact?: boolean;
};

export function RegistrationForm({ source = "site", compact = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          profile: data.get("profile"),
          companions: Number(data.get("companions") || 0),
          source,
          newsletter: data.get("newsletter") === "on",
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setMessage(
        "Inscription confirmée ! Vous recevrez bientôt votre invitation par e-mail.",
      );
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Impossible d'envoyer l'inscription.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-saem bg-saem-turquoise/10 p-6 text-center sm:p-8">
        <p className="font-display text-2xl font-extrabold text-saem-night">
          À très bientôt !
        </p>
        <p className="mt-2 text-saem-night/75">{message}</p>
        <p className="mt-4 text-sm text-saem-night/60">
          {EVENT.dateLabel} · {EVENT.address}, {EVENT.city}
        </p>
        <button
          type="button"
          className="mt-6 rounded-pill bg-saem-coral px-5 py-2.5 text-sm font-bold text-white"
          onClick={() => setStatus("idle")}
        >
          Inscrire quelqu&apos;un d&apos;autre
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Prénom" name="firstName" required autoComplete="given-name" />
        <Field label="Nom" name="lastName" required autoComplete="family-name" />
      </div>
      <Field
        label="E-mail"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field
        label="Téléphone"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="Optionnel"
      />
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <label className="block space-y-1.5">
          <span className="text-sm font-semibold text-saem-night">Profil</span>
          <select
            name="profile"
            required
            defaultValue=""
            className="w-full rounded-saem border border-saem-night/10 bg-white px-4 py-3 text-saem-night outline-none transition focus:border-saem-turquoise"
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            <option value="seconde">Élève de Seconde</option>
            <option value="premiere">Élève de Première</option>
            <option value="terminale">Élève de Terminale</option>
            <option value="etudiant">Étudiant</option>
            <option value="parent">Parent / accompagnant</option>
            <option value="autre">Autre</option>
          </select>
        </label>
        <label className="block space-y-1.5">
          <span className="text-sm font-semibold text-saem-night">
            Accompagnants
          </span>
          <select
            name="companions"
            defaultValue="0"
            className="w-full rounded-saem border border-saem-night/10 bg-white px-4 py-3 text-saem-night outline-none transition focus:border-saem-turquoise"
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm text-saem-night/75">
        <input
          type="checkbox"
          name="newsletter"
          className="mt-1 size-4 rounded border-saem-night/20 accent-saem-coral"
        />
        <span>
          Je souhaite recevoir les actualités du salon et des conseils
          d&apos;orientation médecine.
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-saem bg-saem-coral/10 px-4 py-3 text-sm text-saem-coral-deep">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-pill bg-saem-coral px-6 py-3.5 text-base font-bold text-white transition hover:bg-saem-coral-deep disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Envoi…" : "Valider mon inscription →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-semibold text-saem-night">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-saem border border-saem-night/10 bg-white px-4 py-3 text-saem-night outline-none transition placeholder:text-saem-night/35 focus:border-saem-turquoise"
      />
    </label>
  );
}
