"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining(): Remaining {
  const diff = Math.max(0, new Date(EVENT.dateISO).getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ dark = false }: { dark?: boolean }) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Jours", value: remaining?.days },
    { label: "Heures", value: remaining?.hours },
    { label: "Min", value: remaining?.minutes },
    { label: "Sec", value: remaining?.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className={`relative overflow-hidden rounded-2xl px-2 py-4 text-center sm:px-3 sm:py-5 ${
            dark
              ? "bg-white/10 text-white"
              : "bg-saem-night text-white"
          }`}
        >
          <p className="font-display text-2xl font-extrabold tabular-nums sm:text-4xl">
            {item.value == null ? "—" : String(item.value).padStart(2, "0")}
          </p>
          <p
            className={`mt-1 text-[0.6rem] font-bold tracking-[0.16em] uppercase sm:text-xs ${
              dark ? "text-white/60" : "text-saem-yellow"
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
