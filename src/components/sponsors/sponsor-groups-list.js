import Image from "next/image";
import Link from "next/link";
import { sponsorGroups, site } from "@/config/site";

/**
 * Renders `sponsorGroups` from site config — used on home and /sponsors.
 * Logos are treated as square (1:1); grid auto-fills as the roster grows.
 * Toggle `site.showSponsorLogos` in config to show logos vs TBA placeholder.
 */
export function SponsorGroupsList({ compact = false }) {
  if (!site.showSponsorLogos) {
    return (
      <div
        className={`icami-card flex items-center justify-center text-center ${
          compact ? "py-12 sm:py-14" : "py-16 sm:py-20"
        }`}
      >
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          TBA
        </p>
      </div>
    );
  }

  const gridClass = compact
    ? "grid gap-3 sm:gap-4 [grid-template-columns:repeat(auto-fill,minmax(9.5rem,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(10.5rem,1fr))]"
    : "grid gap-4 sm:gap-5 [grid-template-columns:repeat(auto-fill,minmax(11rem,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(13rem,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(14rem,1fr))]";

  const padClass = compact ? "p-4 sm:p-5" : "p-5 sm:p-6";

  return (
    <div className="space-y-10 sm:space-y-12">
      {sponsorGroups.map((group) => (
        <div key={group.title}>
          <h2 className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
            {group.title}
          </h2>
          <ul className={`mt-4 ${gridClass}`}>
            {group.items.map((item) => {
              const card = (
                <div
                  className={`icami-card flex aspect-square w-full min-w-0 items-center justify-center ${padClass}`}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={320}
                    height={320}
                    sizes={
                      compact
                        ? "(max-width: 640px) 45vw, 11rem"
                        : "(max-width: 640px) 50vw, 14rem"
                    }
                    className="h-full w-full object-contain"
                  />
                </div>
              );

              return (
                <li key={item.name} className="min-w-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition hover:opacity-90"
                    >
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
