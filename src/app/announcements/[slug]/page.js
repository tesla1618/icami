import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { DocumentPage } from "@/components/page/document-page";
import { getAnnouncementBySlug, getAnnouncements } from "@/lib/announcements";

export async function generateStaticParams() {
  const all = await getAnnouncements();
  return all.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = await getAnnouncementBySlug(slug);
  if (!item) return { title: "Announcement not found" };
  return { title: item.title };
}

export default async function AnnouncementDetailPage({ params }) {
  const { slug } = await params;
  const item = await getAnnouncementBySlug(slug);
  if (!item) notFound();

  return (
    <DocumentPage title={item.title} eyebrow="Announcement">
      {item.date ? (
        <p className="not-prose mb-4 text-xs uppercase tracking-[0.14em] text-slate-500">
          {new Date(item.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>
      ) : null}

      <ReactMarkdown>{item.body}</ReactMarkdown>

      <p className="not-prose mt-8">
        <Link className="icami-inline-link" href="/announcements">
          Back to all announcements
        </Link>
      </p>
    </DocumentPage>
  );
}
