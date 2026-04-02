import { DocumentPage } from "@/components/page/document-page";
import { tracks } from "@/config/site";

export const metadata = {
  title: "Tracks",
  description:
    "ICAMI 2026 conference tracks. Four thematic areas: trustworthy AI, generative intelligence, healthcare AI, and industry applications.",
};

export default function TracksPage() {
  return (
    <DocumentPage title="Conference tracks" eyebrow="Program">
      <div className="mt-10 space-y-12">
        {tracks.map((t, i) => (
          <section key={t.slug}>
            <p className="text-xs font-semibold uppercase tracking-wider text-icami-gold">
              Track {i + 1}
            </p>
            <h2 className="mt-1 text-xl tracking-wide text-icami-text">
              {t.title}
            </h2>
            {/* <p className="mt-3 text-icami-text-muted">{t.summary}</p> */}
            <p className="mt-4 text-sm font-medium text-icami-text">
              Focus areas
            </p>
            <ul className="mt-2 list-disc pl-5 text-icami-text-muted">
              {t.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </DocumentPage>
  );
}
