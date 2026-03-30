import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Organizing Committee",
};

export default function OrganizingCommitteePage() {
  return (
    <DocumentPage title="Organizing committee" eyebrow="People">
      <p>
        The organizing structure—including general chairs, program chairs,
        track chairs, and the technical program committee—will be published
        here. Names and affiliations are being finalized.
      </p>
      <h2>Roles</h2>
      <ul>
        <li>General chairs</li>
        <li>Program chairs</li>
        <li>Track chairs (per thematic area)</li>
        <li>Technical program committee</li>
        <li>Local organization (MMU)</li>
      </ul>
    </DocumentPage>
  );
}
