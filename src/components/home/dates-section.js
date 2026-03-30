import { SectionHeading } from "@/components/ui/section-heading";
import { importantDates } from "@/config/site";

export function DatesSection() {
  return (
    <section className="scroll-mt-8">
      <SectionHeading
        index="03"
        title="Important dates"
        actionHref="/important-dates"
        actionLabel="Full timeline"
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {importantDates.map((row) => (
          <li
            key={row.label}
            className={`icami-card relative overflow-hidden p-7 ${
              row.highlight ? "icami-card-highlight" : ""
            }`}
          >
            {row.highlight ? (
              <span
                className="pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-amber-400 via-icami-gold to-transparent opacity-90"
                aria-hidden
              />
            ) : null}

            <div className="flex items-start justify-between gap-4">
              <p className="icami-mono-eyebrow !text-slate-600">{row.label}</p>
              <span
                className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
                  row.highlight
                    ? "border-amber-300/60 bg-amber-50 text-amber-800"
                    : "border-slate-200 bg-white/70 text-slate-500"
                }`}
              >
                {row.highlight ? "Priority" : "TBA"}
              </span>
            </div>

            <p
              className={`mt-5 font-heading text-[2rem] leading-none tracking-[0.06em] ${
                row.highlight ? "text-[#9a7b18]" : "text-icami-text"
              }`}
            >
              {row.date}
            </p>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-200/80 via-slate-200/30 to-transparent" />

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {row.highlight
                ? "Lock this in. Everything else schedules around it."
                : "Will be published once the timeline is finalized."}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
