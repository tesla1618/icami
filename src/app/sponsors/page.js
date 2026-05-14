import { DocumentPage } from "@/components/page/document-page";
import { SponsorGroupsList } from "@/components/sponsors/sponsor-groups-list";

export const metadata = {
  title: "Sponsors",
  description: "ICAMI 2026 sponsors and partners. Sponsorship tiers, branding opportunities, and exhibition information.",
};

export default function SponsorsPage() {
  return (
    <DocumentPage title="Sponsors & partners" eyebrow="Support">
      <p>
        Industry and institutional partners help ICAMI deliver a strong program
        and accessible attendance. Sponsorship tiers, branding opportunities,
        and exhibition space will be described in the sponsorship prospectus.
      </p>
      <p>
        For inquiries, please email the organizing committee using the address
        in the site footer.
      </p>

      <div className="mt-10 not-prose">
        <SponsorGroupsList />
      </div>
    </DocumentPage>
  );
}
