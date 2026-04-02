import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

/**
 * Reads a co-located content.md file from an app route directory.
 * Returns parsed frontmatter fields + the markdown body string.
 *
 * @param {string} routePath - route path relative to src/app, e.g. "faq" or "registration/guidelines"
 */
export async function loadContent(routePath) {
  const filePath = path.join(process.cwd(), "src", "app", routePath, "content.md");
  const raw = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  return { ...data, body: content };
}
