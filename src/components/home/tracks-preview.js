import { SectionHeading } from "@/components/ui/section-heading";
import { tracks, tracksHomePreviewCount } from "@/config/site";

export function TracksPreview() {
  const preview = tracks.slice(0, tracksHomePreviewCount);
  return (
    <section className="scroll-mt-8">
      <SectionHeading
        index="04"
        title="Featured tracks"
        actionHref="/tracks"
        actionLabel="All tracks"
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {preview.map((t, idx) => (
          <li key={t.slug} className="icami-card group relative p-8">
            <div className="mb-4 flex items-start justify-between gap-4">
              <span className="icami-mono-eyebrow !text-slate-500">
                Track {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Applied
              </span>
            </div>

            <h3 className="font-heading text-2xl leading-[1.05] tracking-[0.06em] text-icami-text">
              {t.title}
            </h3>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-icami-text-muted">
              {t.summary}
            </p>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-200/90 via-slate-200/30 to-transparent" />
            <ul className="mt-5 flex flex-wrap gap-2 text-xs">
              {(t.bullets || []).slice(0, 3).map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 font-mono font-semibold uppercase tracking-[0.18em] text-slate-500"
                >
                  {b}
                </li>
              ))}
            </ul>

            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            >
              <div className="absolute -right-16 -top-14 h-44 w-44 rounded-full bg-sky-500/10 blur-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
