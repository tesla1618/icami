import Link from "next/link";

/**
 * Section title: sharp rail + Bebas heading + optional HUD-style action link.
 * @param {import("react").ReactNode} title
 * @param {string} [index] — optional mono index (e.g. "02")
 */
export function SectionHeading({ title, actionHref, actionLabel, index }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex min-w-0 items-stretch gap-4 sm:gap-5">
        <span className="icami-accent-bar-light shrink-0 self-stretch" aria-hidden />
        <div className="min-w-0">
          {index ? (
            <p className="icami-mono-eyebrow mb-2 text-slate-500">{index}</p>
          ) : null}
          <h2 className="font-heading min-w-0 text-2xl tracking-[0.08em] text-icami-text md:text-3xl md:tracking-[0.09em]">
            {title}
          </h2>
        </div>
      </div>
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className="icami-inline-link icami-inline-link-caps shrink-0"
        >
          {actionLabel}
          <span aria-hidden className="icami-inline-link-arrow">
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}
