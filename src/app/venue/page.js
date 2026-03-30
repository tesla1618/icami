import { DocumentPage } from "@/components/page/document-page";
import { site } from "@/config/site";

export const metadata = {
  title: "Venue",
};

export default function VenuePage() {
  return (
    <DocumentPage title="Venue & travel" eyebrow="Location">
      <p>
        ICAMI 2026 will be hosted at <strong>{site.location}</strong>. MMU offers
        modern facilities suitable for plenary sessions, parallel tracks, and
        informal collaboration.
      </p>
      <h2>Travel</h2>
      <p>
        Kuala Lumpur is served by major international carriers. Ground transport
        options from the airport, visa guidance for international participants,
        and recommended arrival windows will be summarized here.
      </p>
      <h2>Accommodation</h2>
      <p>
        A list of hotels near campus and in central KL will be provided with
        indicative rates and booking codes where applicable.
      </p>
      <h2>Maps</h2>
      <p>
        Campus maps and venue room assignments will be linked once the program
        is fixed.
      </p>
    </DocumentPage>
  );
}
