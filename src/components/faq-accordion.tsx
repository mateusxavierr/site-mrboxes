"use client";

import { useId, useState } from "react";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y-2 divide-black/10 rounded-2xl border-2 border-black bg-white shadow-bolt-accent-lg">
      {items.map((item, i) => {
        const id = `${baseId}-${i}`;
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              id={`${id}-btn`}
              aria-expanded={isOpen}
              aria-controls={`${id}-panel`}
              onClick={() => setOpen(isOpen ? null : i)}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-black hover:bg-black/[0.06] sm:text-base ${
                isOpen ? "bg-black/[0.08]" : ""
              }`}
            >
              {item.q}
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-black bg-brand text-sm font-black text-black"
                aria-hidden
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div
                id={`${id}-panel`}
                role="region"
                aria-labelledby={`${id}-btn`}
                className="border-t-2 border-black/10 bg-background px-5 pb-4 pt-3 text-sm font-medium leading-relaxed text-black/80"
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
