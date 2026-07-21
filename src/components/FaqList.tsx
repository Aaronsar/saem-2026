"use client";

import { useState } from "react";
import { FAQ } from "@/lib/event";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-saem-night/10 border-t border-b border-saem-night/10">
      {FAQ.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-base font-bold text-saem-night sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full text-sm transition ${
                  isOpen
                    ? "rotate-45 bg-saem-coral text-white"
                    : "bg-saem-cream text-saem-coral"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-sm leading-relaxed text-saem-night/65">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
