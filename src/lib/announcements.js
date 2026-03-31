import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const ANNOUNCEMENTS_DIR = path.join(process.cwd(), "content", "announcements");

function normalizeDate(value) {
  if (!value) return null;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}

function resolveReadMore(meta, slug) {
  if (meta.readMoreUrl) {
    return { href: String(meta.readMoreUrl), external: /^https?:\/\//.test(String(meta.readMoreUrl)) };
  }
  return { href: `/announcements/${slug}`, external: false };
}

function toAnnouncement(fileName, source) {
  const slug = fileName.replace(/\.md$/i, "");
  const { data, content } = matter(source);
  const title = data.title ? String(data.title) : slug.replace(/[-_]/g, " ");
  const excerpt = data.excerpt
    ? String(data.excerpt)
    : content.trim().split("\n").find((line) => line.trim().length > 0)?.trim() || "";
  const dateIso = normalizeDate(data.date);
  const readMore = resolveReadMore(data, slug);

  return {
    slug,
    title,
    excerpt,
    date: dateIso,
    body: content,
    readMore,
  };
}

export async function getAnnouncements() {
  let entries = [];
  try {
    entries = await fs.readdir(ANNOUNCEMENTS_DIR, { withFileTypes: true });
  } catch {
    return [];
  }

  const files = entries.filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".md"));
  const parsed = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(ANNOUNCEMENTS_DIR, file.name);
      const raw = await fs.readFile(fullPath, "utf8");
      return toAnnouncement(file.name, raw);
    }),
  );

  return parsed.sort((a, b) => {
    if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (a.date) return -1;
    if (b.date) return 1;
    return b.slug.localeCompare(a.slug);
  });
}

export async function getAnnouncementBySlug(slug) {
  const safeSlug = String(slug).replace(/[^a-zA-Z0-9-_]/g, "");
  const fullPath = path.join(ANNOUNCEMENTS_DIR, `${safeSlug}.md`);
  try {
    const raw = await fs.readFile(fullPath, "utf8");
    return toAnnouncement(`${safeSlug}.md`, raw);
  } catch {
    return null;
  }
}
