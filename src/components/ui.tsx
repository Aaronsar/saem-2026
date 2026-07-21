import type { ReactNode } from "react";

export function SectionLabel({
  children,
  tone = "coral",
}: {
  children: ReactNode;
  tone?: "coral" | "yellow" | "turquoise";
}) {
  const tones = {
    coral: "text-saem-coral",
    yellow: "text-saem-yellow",
    turquoise: "text-saem-turquoise",
  } as const;

  return (
    <p className={`text-xs font-bold tracking-[0.22em] uppercase ${tones[tone]}`}>
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-3 font-display text-3xl font-extrabold leading-tight text-saem-night sm:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-white p-6 sm:p-8 ${className}`}>{children}</div>
  );
}

export function PageShell({
  children,
  narrow = false,
  className = "",
  id,
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto px-5 py-14 sm:px-8 sm:py-16 ${
        narrow ? "max-w-3xl" : "max-w-6xl"
      } ${className}`}
    >
      {children}
    </section>
  );
}
