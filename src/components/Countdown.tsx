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

export function Countdown({
  variant = "cards",
}: {
  variant?: "cards" | "banner";
}) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Jours", value: remaining?.days },
    { label: "Heures", value: remaining?.hours },
    { label: "Minutes", value: remaining?.minutes },
    { label: "Secondes", value: remaining?.seconds },
  ];

  if (variant === "banner") {
    return (
      <div className="grid grid-cols-4 gap-4 sm:gap-10">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-4xl font-extrabold tabular-nums text-white sm:text-6xl lg:text-7xl">
              {item.value == null ? "—" : item.value}
            </p>
            <p className="mt-2 text-xs font-semibold tracking-wide text-white/80 sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-white/10 px-2 py-4 text-center text-white sm:px-3 sm:py-5"
        >
          <p className="font-display text-2xl font-extrabold tabular-nums sm:text-4xl">
            {item.value == null ? "—" : String(item.value).padStart(2, "0")}
          </p>
          <p className="mt-1 text-[0.6rem] font-bold tracking-[0.16em] text-white/60 uppercase sm:text-xs">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
