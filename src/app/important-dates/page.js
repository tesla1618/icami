import { DocumentPage } from "@/components/page/document-page";
import { HighlightBrush } from "@/components/ui/highlight-brush";
import { importantDates } from "@/config/site";

export const metadata = {
  title: "Important Dates",
};

export default function ImportantDatesPage() {
  return (
    <DocumentPage title="Important dates" eyebrow="Plan ahead">
      <p>
        Official <HighlightBrush variant="sky">deadlines</HighlightBrush> will be posted
        here and communicated via the conference mailing list. Until announced, dates
        below are placeholders.
      </p>
      <ol className="mt-10 space-y-6">
        {importantDates.map((row, i) => (
          <li
            key={row.label}
            className="flex flex-col gap-1 border-l-2 border-icami-blue pl-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <span className="font-medium text-icami-text">
              {i + 1}. {row.label}
            </span>
            <span
              className={
                row.highlight ? "text-lg font-semibold text-icami-gold" : "text-icami-text"
              }
            >
              {row.date}
            </span>
          </li>
        ))}
      </ol>
    </DocumentPage>
  );
}
