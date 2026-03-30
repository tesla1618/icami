import Link from "next/link";
import { DocumentPage } from "@/components/page/document-page";
import { HighlightBrush } from "@/components/ui/highlight-brush";
import { tracks } from "@/config/site";

export const metadata = {
  title: "Call for Papers",
};

export default function CallForPapersPage() {
  return (
    <DocumentPage title="Call for Papers" eyebrow="Authors">
      <p>
        ICAMI solicits original, high-quality contributions on{" "}
        <HighlightBrush variant="sky">applied machine intelligence</HighlightBrush>:
        methods, systems, and deployments with clear motivation, rigorous
        evaluation, and <HighlightBrush variant="amber">real-world relevance</HighlightBrush>.
      </p>

      <h2>Scope and topics</h2>
      <p>
        Submissions may report theoretical advances when tightly connected to
        application, or systems and empirical work with reproducible evidence.
        Surveys and position papers are welcome when they offer a unifying view
        or identify open challenges with actionable research directions.
      </p>

      <h2>Tracks</h2>
      <p>
        Papers should select the closest track at submission time; the program
        committee may suggest recategorization after acceptance.
      </p>
      <ul className="mt-4 list-none space-y-8 pl-0">
        {tracks.map((t) => (
          <li key={t.slug}>
            <p className="font-heading text-lg tracking-wide text-icami-text">
              {t.title}
            </p>
            <ul className="mt-2 list-disc pl-5 text-icami-text-muted">
              {t.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2>Submission guidelines</h2>
      <p>
        All submissions must be prepared in English. Papers will undergo a
        double-blind review: omit author names and affiliations from the
        manuscript and anonymize self-references where possible. Supplementary
        material may be provided when it supports reproducibility; it will be
        reviewed at the discretion of the committee.
      </p>

      <h2>Review process</h2>
      <p>
        Each paper receives at least three independent reviews. Area chairs
        oversee consistency and borderline decisions; program chairs make final
        acceptance choices with attention to diversity of topics and quality
        across tracks.
      </p>

      <h2>Publication</h2>
      <p>
        Accepted papers will be published in the official ICAMI 2026 proceedings.
        Publication venue (e.g., IEEE, Springer, or other indexed proceedings)
        will be confirmed on this page and in the acceptance notification.
      </p>

      <h2>Formatting</h2>
      <p>
        Formatting templates and page limits will be linked from the{" "}
        <Link href="/submission" className="font-medium text-icami-blue hover:underline">
          Submission
        </Link>{" "}
        page once camera-ready instructions are finalized. Please use the
        official template only; non-compliant submissions may be rejected
        without review.
      </p>

      <p className="mt-10 border-t border-icami-border pt-8 text-sm text-icami-text-muted">
        Questions? Contact the organizing team at the email listed in the site
        footer.
      </p>
    </DocumentPage>
  );
}
