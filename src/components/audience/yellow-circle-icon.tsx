import type { ReactNode } from "react";

const sizeClasses = {
  default: {
    circle:
      "h-[4.5rem] w-[4.5rem] sm:h-[5rem] sm:w-[5rem]",
    inner: "h-10 w-10 sm:h-11 sm:w-11",
    label: "max-w-[7.5rem] text-xs sm:text-sm",
    hint: "max-w-[9rem] text-[10px] sm:text-xs",
  },
  lg: {
    circle: "h-[5.5rem] w-[5.5rem] sm:h-28 sm:w-28",
    inner: "h-12 w-12 sm:h-14 sm:w-14",
    label: "max-w-[9rem] text-sm sm:text-base",
    hint: "max-w-[11rem] text-xs sm:text-sm",
  },
} as const;

export function YellowCircleIcon({
  label,
  hint,
  children,
  size = "default",
}: {
  label: string;
  hint?: string;
  children: ReactNode;
  size?: keyof typeof sizeClasses;
}) {
  const s = sizeClasses[size];
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div
        className={`flex shrink-0 items-center justify-center rounded-full border-2 border-black bg-brand text-black shadow-bolt-sm ${s.circle}`}
        aria-hidden
      >
        <span className={`flex items-center justify-center ${s.inner}`}>{children}</span>
      </div>
      <span className={`font-bold leading-tight text-brand-ink ${s.label}`}>{label}</span>
      {hint ? (
        <span className={`leading-snug text-slate-600 ${s.hint}`}>{hint}</span>
      ) : null}
    </div>
  );
}
