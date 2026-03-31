import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

function AnnouncementCard({ item }) {
  const isExternal = item.readMore.external;
  const Cmp = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? {
        href: item.readMore.href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href: item.readMore.href };

  return (
    <li className="icami-card p-7">
      <p className="icami-mono-eyebrow !text-slate-500">Announcement</p>
      <h3 className="mt-3 font-heading text-2xl tracking-[0.06em] text-icami-text">{item.title}</h3>
      {item.date ? (
        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-500">
          {new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>
      ) : null}
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.excerpt}</p>
      <div className="mt-5">
        <Cmp
          {...linkProps}
          className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-sky-300 hover:text-icami-blue"
        >
          Read more
        </Cmp>
      </div>
    </li>
  );
}

export function AnnouncementsPreview({ items }) {
  return (
    <section className="scroll-mt-8">
      <SectionHeading
        index="03"
        title="Announcements"
        actionHref="/announcements"
        actionLabel="All announcements"
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <AnnouncementCard key={item.slug} item={item} />
        ))}
      </ul>
    </section>
  );
}
