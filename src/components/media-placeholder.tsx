import type { SVGProps } from "react";

function IconFrame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="text-brand-ink/25" aria-hidden {...props}>
      <rect x="6" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 34l8-8 6 6 10-12 6 8v6H10v-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const aspectClass = {
  square: "aspect-square max-h-[320px]",
  video: "aspect-[4/3] min-h-[220px] sm:min-h-[280px]",
  landscape: "aspect-[16/10] min-h-[180px]",
  wide: "aspect-[21/9] min-h-[140px]",
} as const;

export function MediaPlaceholder({
  title,
  hint,
  aspect = "video",
  className = "",
}: {
  title: string;
  hint?: string;
  aspect?: keyof typeof aspectClass;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border-2 border-black bg-background px-6 py-10 text-center shadow-bolt-accent-sm ${aspectClass[aspect]} ${className}`}
    >
      <IconFrame className="mx-auto h-14 w-14 shrink-0 sm:h-16 sm:w-16" />
      <p className="mt-5 max-w-[16rem] text-xs font-bold uppercase tracking-[0.12em] text-black sm:text-sm">
        {title}
      </p>
      {hint ? (
        <p className="mt-2 max-w-[18rem] text-[11px] leading-relaxed text-slate-500 sm:text-xs">
          {hint}
        </p>
      ) : (
        <p className="mt-2 text-[10px] text-slate-400 sm:text-xs">Fotografia da unidade em breve</p>
      )}
    </div>
  );
}
