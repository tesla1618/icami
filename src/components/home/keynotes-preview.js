import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { keynotesHomePreviewCount } from "@/config/site";

export function KeynotesPreview() {
  // Keynote roster is temporarily TBA.
  const preview = Array.from({ length: keynotesHomePreviewCount }, (_, i) => ({
    name: "TBA",
    affiliation: "TBA",
    talkTitle: "TBA",
    image: null,
    _idx: i,
  }));

  return (
    <section className="scroll-mt-8">
      <SectionHeading
        index="05"
        title="Keynote speakers"
        actionHref="/keynotes"
        actionLabel="All keynotes"
      />
      <ul className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
        {preview.map((speaker, i) => (
          <li
            key={`${speaker.name}-${i}`}
            className="icami-card group relative flex h-full flex-col p-7 transition will-change-transform"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="icami-mono-eyebrow !text-slate-500">
                Keynote {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Invited
              </span>
            </div>

            <div className="mb-4">
              <div className="h-28 w-28 overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} portrait`}
                    width={224}
                    height={224}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-slate-100 to-white font-mono text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    TBA
                  </div>
                )}
              </div>
            </div>

            <p className="min-h-[3.2rem] font-heading text-2xl leading-[1.05] tracking-[0.06em] text-icami-text">
              {speaker.name}
            </p>
            <p className="mt-3 max-h-[4.5rem] min-h-[4.5rem] overflow-hidden text-sm leading-relaxed text-slate-600">
              {speaker.affiliation}
            </p>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-200/90 via-slate-200/40 to-transparent" />
            <p className="mt-4 max-h-[2.75rem] min-h-[2.75rem] overflow-hidden border-l border-slate-200 pl-3 text-sm font-medium leading-snug text-slate-700">
              {speaker.talkTitle}
            </p>

            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            >
              <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
