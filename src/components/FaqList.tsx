"use client";

import { useState } from "react";
import { FAQ } from "@/lib/event";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-saem-night/10 overflow-hidden rounded-saem bg-white">
      {FAQ.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-base font-bold text-saem-night sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-saem-cream text-saem-coral transition ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-saem-night/70 sm:px-6">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
