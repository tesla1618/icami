import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Accepted Papers",
};

export default function AcceptedPapersPage() {
  return (
    <DocumentPage title="Accepted papers" eyebrow="Proceedings">
      <p>
        The list of accepted papers will be published after notifications are
        sent to authors. Each entry will include title, authors, and track.
      </p>
    </DocumentPage>
  );
}
