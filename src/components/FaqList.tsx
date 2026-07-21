"use client";

import { useState } from "react";
import { FAQ } from "@/lib/event";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-saem-night/10 border-t border-saem-night/10">
      {FAQ.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="py-1">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-4 text-left sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-display text-base font-bold text-saem-coral sm:text-lg">
                {item.q}
              </span>
              <span
                className="mt-1 flex size-6 shrink-0 items-center justify-center text-saem-coral"
                aria-hidden
              >
                <span className="relative block h-3.5 w-3.5">
                  <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
                  {!isOpen && (
                    <span className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 rounded-full bg-current" />
                  )}
                </span>
              </span>
            </button>
            {isOpen && (
              <p className="max-w-3xl pb-5 text-sm leading-relaxed text-saem-night/75 sm:text-base">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
