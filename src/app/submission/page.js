import { DocumentPage } from "@/components/page/document-page";
import { HighlightBrush } from "@/components/ui/highlight-brush";

export const metadata = {
  title: "Submission",
};

export default function SubmissionPage() {
  return (
    <DocumentPage title="Submission" eyebrow="Authors">
      <p>
        The submission system URL (e.g., EasyChair or Microsoft CMT) will be
        published here when submissions open. Until then, please prepare your{" "}
        <HighlightBrush variant="amber">manuscript</HighlightBrush> according to the
        call for papers and official templates.
      </p>

      <h2>Paper guidelines</h2>
      <ul>
        <li>Maximum length and format per the announced template (forthcoming).</li>
        <li>Double-blind: no author-identifying text in the body or references.</li>
        <li>
          Declare use of third-party models, datasets, and tools; cite all
          sources.
        </li>
        <li>
          Plagiarism and duplicate submission policies apply; violations lead to
          rejection and may be reported to institutions.
        </li>
      </ul>

      <h2>Templates</h2>
      <p>
        LaTeX and Word templates will be linked from this page. Use the
        conference style only—do not shrink fonts or margins to evade page
        limits.
      </p>

      <h2>Policies</h2>
      <p>
        Reviews are confidential. Author responses may be solicited for
        borderline papers. Dual submission rules follow the chosen publisher’s
        requirements and will be stated with the final CFP.
      </p>

      <h2>After acceptance</h2>
      <p>
        For final files and on-site delivery, see{" "}
        <a className="icami-inline-link" href="/camera-ready">
          Camera-ready guidelines
        </a>{" "}
        and{" "}
        <a className="icami-inline-link" href="/presentation-guidelines">
          Presentation guidelines
        </a>
        .
      </p>
    </DocumentPage>
  );
}
