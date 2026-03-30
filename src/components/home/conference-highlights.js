import { HighlightBrush } from "@/components/ui/highlight-brush";

/**
 * Conference pulse: compact signal cards with clearer hierarchy.
 */
export function ConferenceHighlights() {
  const pulse = [
    {
      title: "Peer review",
      tag: "Quality",
      body: (
        <>
          <HighlightBrush variant="sky">Double-blind</HighlightBrush>, multi-reviewer
          process.
        </>
      ),
    },
    {
      title: "Proceedings",
      tag: "Publication",
      body: (
        <>
          <HighlightBrush variant="amber">Indexed</HighlightBrush> publication venue
          to be announced.
        </>
      ),
    },
    {
      title: "Applied focus",
      tag: "Impact",
      body: (
        <>
          Methods with{" "}
          <HighlightBrush variant="gold">real-world evaluation</HighlightBrush> and
          impact.
        </>
      ),
    },
    {
      title: "Host",
      tag: "Location",
      body: (
        <>
          Conference hub at{" "}
          <HighlightBrush variant="rose">Multimedia University (MMU)</HighlightBrush>,
          Malaysia.
        </>
      ),
    },
  ];

  return (
    <div>
      <p className="icami-mono-eyebrow mb-10 text-slate-500">01 — conference pulse</p>
      <div className="grid gap-5 border-b border-slate-200/90 pb-20 sm:grid-cols-2 lg:grid-cols-4">
        {pulse.map((item, i) => (
          <article key={item.title} className="icami-card group p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="icami-mono-eyebrow !text-slate-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.tag}
              </span>
            </div>
            <p className="font-heading text-2xl tracking-[0.08em] text-icami-text">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-icami-text-muted">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
