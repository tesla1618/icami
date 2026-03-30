import { DocumentPage } from "@/components/page/document-page";
import { HighlightBrush } from "@/components/ui/highlight-brush";

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <DocumentPage title="Frequently asked questions" eyebrow="Help">
      <p>
        Common questions about submission, registration, visas, and venue will
        be collected here as they arise. Until the FAQ is populated, please use
        the <HighlightBrush variant="gold">contact email</HighlightBrush> in the
        footer.
      </p>
    </DocumentPage>
  );
}
