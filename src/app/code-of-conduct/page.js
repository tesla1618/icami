import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Code of Conduct",
};

export default function CodeOfConductPage() {
  return (
    <DocumentPage title="Code of conduct & ethics" eyebrow="Community">
      <p>
        ICAMI is committed to an inclusive, harassment-free environment for
        everyone. Participants are expected to behave professionally and
        respectfully in all conference spaces, including online channels.
      </p>
      <h2>Reporting</h2>
      <p>
        Concerns may be raised confidentially with the general chairs. A full
        policy—including consequences for violations—will be published before
        registration opens, aligned with common ACM / IEEE community norms.
      </p>
    </DocumentPage>
  );
}
