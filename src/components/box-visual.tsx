import type { BoxTier } from "@/lib/boxes";

const heights = [26, 34, 42, 50, 58, 68, 80] as const;

export function BoxVisual({
  tier,
  className = "",
}: {
  tier: BoxTier;
  className?: string;
}) {
  const h = heights[tier.index] ?? 40;
  return (
    <div
      className={`flex flex-col items-center justify-end ${className}`}
      aria-hidden
    >
      <div
        className="relative w-full max-w-[120px] rounded-t border-2 border-brand-muted bg-gradient-to-b from-brand-soft to-amber-100/90 shadow-inner"
        style={{ height: `${h}px` }}
      >
        <div className="absolute inset-x-2 top-2 h-1 rounded bg-brand-muted/25" />
        <div className="absolute bottom-2 left-2 right-2 flex gap-1">
          <div className="h-6 flex-1 rounded-sm bg-amber-800/30" />
          <div className="h-4 w-4 rounded-sm bg-slate-600/40" />
        </div>
      </div>
      <div className="mt-1 h-1 w-[130%] max-w-[140px] rounded-full bg-slate-300" />
    </div>
  );
}
