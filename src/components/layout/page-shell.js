import { LightHudCorners } from "@/components/ui/light-hud-corners";

/**
 * Inner pages: light “instrument panel” shell — chamfer + HUD corners (matches hero language).
 */
export function PageShell({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-5xl px-4 pb-16 pt-8 sm:px-6 md:max-w-6xl md:pb-24 md:pt-12 lg:px-10 ${className}`}
    >
      <div className="icami-chamfer-panel relative border border-slate-200/95 bg-white px-6 py-12 shadow-[0_2px_48px_-14px_rgba(0,51,160,0.12)] sm:px-10 md:py-16 lg:px-14">
        <LightHudCorners />
        <div className="relative z-[1]">{children}</div>
      </div>
    </div>
  );
}
