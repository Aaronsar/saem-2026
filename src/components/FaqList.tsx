"use client";

import { useState } from "react";
import { FAQ } from "@/lib/event";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQ.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-[1.25rem] transition ${
              isOpen ? "bg-saem-night text-white" : "bg-saem-cream text-saem-night"
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-base font-bold sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-lg transition ${
                  isOpen
                    ? "rotate-45 bg-saem-coral text-white"
                    : "bg-white text-saem-coral"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-white/75 sm:px-6">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
