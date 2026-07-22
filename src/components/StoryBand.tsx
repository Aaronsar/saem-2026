"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { STORY } from "@/lib/event";

const WORDS = [
  "PASS",
  "LAS",
  "Parcoursup",
  "Orientation",
  "Collectif",
  "Facultés",
  "Conseil",
  "Médecine",
];

const CITY_LAYOUT = [
  { t: "top-[8%]", l: "left-[6%]", s: "text-sm sm:text-base", r: "-3deg" },
  { t: "top-[18%]", l: "left-[42%]", s: "text-base sm:text-lg", r: "4deg" },
  { t: "top-[6%]", l: "right-[10%]", s: "text-xs sm:text-sm", r: "8deg" },
  { t: "top-[38%]", l: "left-[14%]", s: "text-lg sm:text-xl", r: "-6deg" },
  { t: "top-[44%]", l: "left-[48%]", s: "text-sm", r: "2deg" },
  { t: "top-[36%]", l: "right-[8%]", s: "text-base sm:text-lg", r: "-4deg" },
  { t: "top-[62%]", l: "left-[8%]", s: "text-xs sm:text-sm", r: "5deg" },
  { t: "top-[68%]", l: "left-[36%]", s: "text-base", r: "-2deg" },
  { t: "top-[58%]", l: "right-[18%]", s: "text-sm sm:text-base", r: "7deg" },
  { t: "bottom-[10%]", l: "left-[22%]", s: "text-sm", r: "-8deg" },
  { t: "bottom-[8%]", l: "left-[55%]", s: "text-xs sm:text-sm", r: "3deg" },
  { t: "bottom-[14%]", l: "right-[6%]", s: "text-base", r: "-5deg" },
];

export function StoryBand() {
  return (
    <section className="relative overflow-hidden bg-saem-night text-white">
      <div
        className="pointer-events-none absolute -left-20 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-saem-turquoise/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 size-[22rem] rounded-full bg-saem-coral/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div>
          <p className="text-xs font-bold tracking-[0.28em] text-saem-yellow uppercase">
            Qui sommes-nous
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.08]">
            {STORY.headline}{" "}
            <span className="text-saem-coral">{STORY.headlineAccent}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {STORY.lead}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
            {STORY.body}
          </p>
          <Link
            href="/a-propos"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-saem-yellow underline-offset-4 transition hover:underline"
          >
            Lire toute notre histoire →
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <blockquote className="relative rounded-[1.75rem] border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8">
            <span
              className="absolute -top-4 left-6 font-display text-6xl text-saem-coral"
              aria-hidden
            >
              “
            </span>
            <p className="mt-4 font-display text-xl font-bold leading-snug sm:text-2xl">
              {STORY.mission}
            </p>
            <footer className="mt-5 text-sm font-semibold tracking-wide text-saem-yellow uppercase">
              — {STORY.collective}
            </footer>
          </blockquote>

          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {STORY.values.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <p className="font-display text-sm font-extrabold text-saem-turquoise">
                  {v.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/60">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Constellation France — layout asymétrique */}
      <div className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <p className="mb-6 text-center text-xs font-bold tracking-[0.28em] text-white/40 uppercase">
          Un collectif ancré dans toute la France
        </p>
        <div className="relative mx-auto h-[22rem] max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent sm:h-[26rem]">
          <p
            className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[clamp(4rem,18vw,9rem)] font-extrabold text-white/[0.04] select-none"
            aria-hidden
          >
            FRANCE
          </p>
          {STORY.cities.map((city, i) => {
            const pos = CITY_LAYOUT[i % CITY_LAYOUT.length];
            return (
              <span
                key={city}
                className={`absolute ${pos.t} ${pos.l} ${pos.s} font-display font-extrabold text-white/80 transition hover:text-saem-yellow`}
                style={{ transform: `rotate(${pos.r})` }}
              >
                <span className="mr-1.5 inline-block size-1.5 rounded-full bg-saem-coral align-middle" />
                {city}
              </span>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20 py-3">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 px-4">
          {[...WORDS, ...WORDS, ...WORDS].map((w, i) => (
            <span
              key={`${w}-${i}`}
              className="font-display text-sm font-bold tracking-[0.2em] text-white/35 uppercase"
            >
              {w}
              <span className="ml-10 inline-block size-1.5 rounded-full bg-saem-coral align-middle" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ManifestoRail() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 8;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[2rem] bg-saem-coral px-6 py-10 text-white sm:px-10 sm:py-14"
      style={{
        transform: "translate3d(var(--mx, 0), var(--my, 0), 0)",
        transition: "transform 0.2s ease-out",
      }}
    >
      <p className="text-xs font-bold tracking-[0.25em] text-white/70 uppercase">
        Pourquoi le SAEM
      </p>
      <p className="mt-4 max-w-2xl font-display text-2xl font-extrabold leading-tight sm:text-4xl">
        Parce qu&apos;on a tous été perdus face à Parcoursup.
        <span className="text-saem-yellow"> Aujourd&apos;hui, on guide.</span>
      </p>
    </div>
  );
}
