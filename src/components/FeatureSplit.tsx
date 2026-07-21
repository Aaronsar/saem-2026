import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
  cta: string;
  visual: ReactNode;
  reverse?: boolean;
  tone?: "turquoise" | "night" | "coral";
};

const tones = {
  turquoise: "bg-saem-turquoise text-white",
  night: "bg-saem-night text-white",
  coral: "bg-saem-coral text-white",
} as const;

export function FeatureSplit({
  eyebrow,
  title,
  description,
  href,
  cta,
  visual,
  reverse = false,
  tone = "turquoise",
}: Props) {
  return (
    <div className="grid overflow-hidden rounded-2xl bg-white md:grid-cols-2">
      <div
        className={`relative flex min-h-[16rem] items-center justify-center p-8 sm:min-h-[20rem] sm:p-10 ${
          reverse ? "md:order-2" : ""
        } ${tones[tone]}`}
      >
        {visual}
      </div>
      <div
        className={`flex flex-col justify-center bg-[#f3f3f3] p-8 sm:p-10 ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <p className="text-xs font-bold tracking-[0.2em] text-saem-coral uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-saem-night sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-saem-night/75 sm:text-base">
          {description}
        </div>
        <div className="mt-8">
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded-pill bg-saem-coral px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.03] hover:bg-saem-coral-deep"
          >
            {cta}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FeaturePoster({
  line1,
  line2,
  line3,
}: {
  line1: string;
  line2: string;
  line3?: string;
}) {
  return (
    <div className="relative w-full max-w-xs text-center">
      <p className="text-xs font-bold tracking-[0.28em] text-white/70 uppercase">
        {line1}
      </p>
      <p className="mt-4 font-display text-4xl font-extrabold leading-none sm:text-5xl">
        {line2}
      </p>
      {line3 && (
        <p className="mt-4 text-sm font-semibold tracking-wide text-white/85">
          {line3}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-saem-yellow" />
    </div>
  );
}
