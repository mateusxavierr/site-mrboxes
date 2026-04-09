"use client";

import Image from "next/image";
import { useState } from "react";
import type { BoxTier } from "@/lib/boxes";
import { BOX_TIERS, boxTypeImageSrc } from "@/lib/boxes";
import { IconWhatsApp } from "@/components/icon-whatsapp";
import { whatsappHref } from "@/lib/site";

function BoxTypePhoto({
  tier,
  className = "",
  dark = false,
  priority = false,
}: {
  tier: BoxTier;
  className?: string;
  dark?: boolean;
  priority?: boolean;
}) {
  const src = boxTypeImageSrc(tier.m3);

  return (
    <div
      className={`flex flex-col ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-2xl ${
          dark
            ? "border border-white/15 bg-black/50 shadow-[inset_0_1px_0_0_rgba(255,215,0,0.06)]"
            : "border border-black/15 bg-background"
        }`}
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            key={tier.id}
            src={src}
            alt={`${tier.name} — Mr. Boxes, self storage Recife`}
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, min(560px, 50vw)"
            priority={priority}
          />
        </div>
      </div>
      <p
        className={`mt-3 text-center text-xs font-medium ${dark ? "text-white/50" : "text-black/50"}`}
      >
        Box de <span className={`font-semibold ${dark ? "text-brand" : "text-black"}`}>{tier.m3} m³</span>
      </p>
    </div>
  );
}

export function BoxTypesPicker({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [selected, setSelected] = useState<BoxTier>(BOX_TIERS[0]!);
  const dark = tone === "dark";

  return (
    <div className="w-full max-w-6xl">
      <div className="-mx-1 flex gap-1.5 overflow-x-auto pb-1 md:mx-0 md:grid md:max-w-none md:grid-cols-7 md:gap-2 md:overflow-visible">
        {BOX_TIERS.map((tier) => {
          const on = selected.id === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => setSelected(tier)}
              className={`shrink-0 rounded-lg border px-2 py-2.5 text-center text-[11px] font-bold transition sm:px-3 sm:text-sm md:w-full md:min-w-0 md:py-3 ${
                on
                  ? dark
                    ? "border-brand bg-brand text-black shadow-[3px_3px_0_0_rgba(255,219,0,0.35)]"
                    : "border-black bg-black text-white"
                  : dark
                    ? "border-white/20 bg-white/10 text-white hover:border-brand/50 hover:bg-white/[0.14]"
                    : "border-black/20 bg-white text-black hover:border-black/40"
              }`}
            >
              {tier.m3} m³
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <BoxTypePhoto
          tier={selected}
          dark={dark}
          priority={selected.index === 0}
          className="min-h-0 lg:min-h-[280px]"
        />

        <div className="space-y-6">
          <div>
            <h3 className={`text-xl font-black sm:text-2xl ${dark ? "text-white" : "text-black"}`}>
              {selected.name}
            </h3>
            <p className={`mt-1 text-sm font-semibold ${dark ? "text-brand" : "text-black/70"}`}>
              {selected.approxM2}
            </p>
            <p className={`mt-1 text-xs font-medium ${dark ? "text-white/55" : "text-black/55"}`}>
              {selected.approxDims}
            </p>
          </div>

          <div>
            <p
              className={`text-xs font-bold uppercase tracking-wider ${dark ? "text-white/40" : "text-black/45"}`}
            >
              Ideal para
            </p>
            <p className={`mt-1 text-sm font-medium leading-relaxed ${dark ? "text-white/90" : "text-black/90"}`}>
              {selected.profile}
            </p>
          </div>

          <div>
            <p
              className={`text-xs font-bold uppercase tracking-wider ${dark ? "text-white/40" : "text-black/45"}`}
            >
              Exemplos do que entra
            </p>
            <ul
              className={`mt-2 list-inside list-disc space-y-1 text-sm font-medium ${dark ? "text-white/85" : "text-black/85"}`}
            >
              {selected.examples.map((ex) => (
                <li key={ex}>{ex}</li>
              ))}
            </ul>
          </div>

          <p className={`text-sm font-medium leading-relaxed ${dark ? "text-white/80" : "text-black/80"}`}>
            <span className={`font-bold ${dark ? "text-brand" : "text-black"}`}>Resumo: </span>
            {selected.note}
          </p>

          <div className="pt-2">
            <a
              href={whatsappHref(
                `Olá! Tenho interesse no box de ${selected.m3} m³ — vim da página de tamanhos no site.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-[3px_3px_0_0_rgba(0,0,0,0.5)] sm:w-auto ${
                dark
                  ? "border-brand bg-brand text-black hover:bg-brand-hover"
                  : "border-black bg-black text-white hover:bg-black/90"
              }`}
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" />
              Falar sobre {selected.m3} m³
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
