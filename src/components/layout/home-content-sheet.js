import { LightHudCorners } from "@/components/ui/light-hud-corners";

/**
 * Homepage only: light sheet overlapping the dark hero — same HUD vocabulary as inner pages.
 */
export function HomeContentSheet({ children, className = "" }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-7xl overflow-hidden rounded-t-[2rem] border border-white/60 bg-gradient-to-b from-white via-[#fafbfd] to-[#f0f4fa] px-6 py-20 shadow-[0_-12px_60px_-12px_rgba(0,20,60,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-10 sm:pt-24 sm:pb-24 md:rounded-t-[2.25rem] md:px-16 md:py-28 lg:px-20 lg:pt-16 lg:pb-32 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0033a0]/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-28 bg-gradient-to-b from-sky-500/[0.07] to-transparent blur-2xl"
        aria-hidden
      />
      <LightHudCorners className="opacity-[0.55]" />
      <div className="relative z-[1] mx-auto max-w-6xl">{children}</div>
    </div>
  );
}
