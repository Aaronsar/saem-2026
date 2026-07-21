"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

function getRemaining(): Remaining {
  const target = new Date(EVENT.dateISO).getTime();
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: false };
}

export function Countdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = remaining
    ? [
        { label: "Jours", value: remaining.days },
        { label: "Heures", value: remaining.hours },
        { label: "Minutes", value: remaining.minutes },
        { label: "Secondes", value: remaining.seconds },
      ]
    : [
        { label: "Jours", value: "—" },
        { label: "Heures", value: "—" },
        { label: "Minutes", value: "—" },
        { label: "Secondes", value: "—" },
      ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-saem bg-white/10 px-2 py-4 text-center backdrop-blur sm:px-4"
        >
          <p className="font-display text-2xl font-extrabold text-white tabular-nums sm:text-4xl">
            {typeof item.value === "number"
              ? String(item.value).padStart(2, "0")
              : item.value}
          </p>
          <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.18em] text-white/70 uppercase sm:text-xs">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
