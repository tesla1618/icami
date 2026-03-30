/**
 * Subtle L-brackets for light surfaces — matches hero HUD, no interaction.
 */
export function LightHudCorners({ className = "" }) {
  const arm = "absolute border-slate-400/50 sm:border-slate-400/55";
  return (
    <div
      className={`pointer-events-none absolute inset-3 z-0 sm:inset-4 md:inset-5 ${className}`}
      aria-hidden
    >
      <span className={`${arm} left-0 top-0 h-4 w-4 border-l-2 border-t-2`} />
      <span className={`${arm} right-0 top-0 h-4 w-4 border-r-2 border-t-2`} />
      <span className={`${arm} bottom-0 left-0 h-4 w-4 border-b-2 border-l-2`} />
      <span className={`${arm} bottom-0 right-0 h-4 w-4 border-b-2 border-r-2`} />
    </div>
  );
}
