import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Camera-ready submission",
};

export default function CameraReadyPage() {
  return (
    <DocumentPage title="Camera-ready submission guidelines" eyebrow="Authors">
      <p>
        After notification of acceptance, authors prepare the final
        camera-ready version of their paper for inclusion in the official
        proceedings. Exact publisher requirements, page limits, and copyright
        steps will be confirmed by the chairs and linked from this page.
      </p>

      <h2>Typical expectations</h2>
      <ul>
        <li>
          Use only the official conference template; do not alter prescribed
          margins, fonts, or layout when the final specification is published.
        </li>
        <li>
          Incorporate reviewer-suggested revisions and any mandatory disclosure
          of limitations or ethics statements as requested by the program
          chairs.
        </li>
        <li>
          Remove anonymization: add full author names, affiliations, and
          acknowledgments as required by the publisher.
        </li>
        <li>
          Submit source files (e.g., LaTeX or Word) and PDF as instructed in the
          submission system.
        </li>
      </ul>

      <h2>Copyright and open access</h2>
      <p>
        Signing publishing agreements, selecting open-access options if
        applicable, and paying any publication charges will be documented in the
        camera-ready instructions package. Do not post the final accepted
        version publicly until any embargo or publisher policy is satisfied.
      </p>

      <h2>Deadlines</h2>
      <p>
        The camera-ready deadline will align with the{" "}
        <a className="icami-inline-link" href="/important-dates">
          Important dates
        </a>{" "}
        calendar. Late submissions may be excluded from proceedings at the
        discretion of the organizers.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <a className="icami-inline-link" href="/submission">
            Submission
          </a>{" "}
          — initial review manuscript requirements
        </li>
        <li>
          <a className="icami-inline-link" href="/presentation-guidelines">
            Presentation guidelines
          </a>
        </li>
      </ul>
    </DocumentPage>
  );
}
