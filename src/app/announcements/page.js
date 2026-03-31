import Link from "next/link";
import { DocumentPage } from "@/components/page/document-page";
import { getAnnouncements } from "@/lib/announcements";

export const metadata = {
  title: "Announcements",
};

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();

  return (
    <DocumentPage title="Announcements" eyebrow="Updates">
      <p>
        Official updates from the ICAMI 2026 organizing team. Some announcements
        open a full internal detail page, while others may redirect directly to a
        related page or external resource.
      </p>

      <ul className="not-prose mt-10 grid gap-5 md:grid-cols-2">
        {announcements.map((a) => {
          const isExternal = a.readMore.external;
          const Cmp = isExternal ? "a" : Link;
          const props = isExternal
            ? {
                href: a.readMore.href,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : { href: a.readMore.href };

          return (
            <li key={a.slug} className="icami-card p-7">
              <p className="icami-mono-eyebrow !text-slate-500">Announcement</p>
              <h2 className="mt-3 text-xl tracking-wide text-icami-text">{a.title}</h2>
              {a.date ? (
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-500">
                  {new Date(a.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </p>
              ) : null}
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{a.excerpt}</p>
              <div className="mt-5">
                <Cmp
                  {...props}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-sky-300 hover:text-icami-blue"
                >
                  Read more
                </Cmp>
              </div>
            </li>
          );
        })}
      </ul>
    </DocumentPage>
  );
}
