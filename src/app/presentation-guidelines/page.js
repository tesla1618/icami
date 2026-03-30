import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Presentation guidelines",
};

export default function PresentationGuidelinesPage() {
  return (
    <DocumentPage title="Presentation guidelines" eyebrow="Authors">
      <p>
        Presenters at ICAMI 2026 are expected to deliver clear, time-respecting
        talks that respect double-blind or identification rules as applicable to
        each session type. Detailed slot lengths and room logistics will be
        published with the final program.
      </p>

      <h2>Oral presentations</h2>
      <ul>
        <li>
          Prepare slides in a widely compatible format (e.g., PDF or
          PowerPoint). Bring a backup copy on USB when on-site backup is
          available.
        </li>
        <li>
          Respect the allocated time, including Q&amp;A; session chairs may
          enforce strict cut-offs to keep the program on schedule.
        </li>
        <li>
          Use high-contrast, readable fonts and avoid dense walls of text;
          figures and equations should be legible from the back of the room.
        </li>
      </ul>

      <h2>Posters</h2>
      <p>
        Poster board dimensions, orientation (portrait/landscape), and mounting
        supplies will be announced with venue information. Arrive during the
        designated setup window; remove materials after the scheduled poster
        session unless otherwise instructed.
      </p>

      <h2>Hybrid and remote participation</h2>
      <p>
        If hybrid delivery is offered for specific tracks or sessions,
        technical checks, recommended resolution, and connection deadlines will
        be communicated to registered presenters. Follow organizer instructions
        for screen sharing and recording policies.
      </p>

      <h2>Conduct and accessibility</h2>
      <p>
        Presentations must comply with the{" "}
        <a className="icami-inline-link" href="/code-of-conduct">
          Code of Conduct
        </a>
        . Aim for inclusive language and, where reasonable, describe visuals for
        the benefit of the full audience.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <a className="icami-inline-link" href="/camera-ready">
            Camera-ready submission guidelines
          </a>
        </li>
        <li>
          <a className="icami-inline-link" href="/program">
            Program
          </a>
        </li>
        <li>
          <a className="icami-inline-link" href="/venue">
            Venue
          </a>
        </li>
      </ul>
    </DocumentPage>
  );
}
