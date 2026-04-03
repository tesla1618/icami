import { DocumentPage } from "@/components/page/document-page";
import { site } from "@/config/site";

export const metadata = {
  title: "Contact",
  description:
    "Contact ICAMI 2026. Email channels for general inquiries, technical support, registration, and information.",
};

export default function ContactPage() {
  return (
    <DocumentPage title="Contact" eyebrow="Support">
      <p>
        For conference communication, use the email channel that best matches
        your query so the organizing team can respond faster.
      </p>

      <h2>Contact channels</h2>
      <div className="not-prose mt-5 grid gap-4 md:grid-cols-2">
        <article className="icami-card p-6">
          <p className="icami-mono-eyebrow !text-slate-500">
            General inquiries
          </p>
          <a
            className="mt-3 inline-block text-base font-semibold text-icami-blue hover:text-sky-700"
            href={`mailto:${site.contact.general}`}
          >
            {site.contact.general}
          </a>
        </article>
        <article className="icami-card p-6">
          <p className="icami-mono-eyebrow !text-slate-500">
            Web / technical issues
          </p>
          <a
            className="mt-3 inline-block text-base font-semibold text-icami-blue hover:text-sky-700"
            href={`mailto:${site.contact.technical}`}
          >
            {site.contact.technical}
          </a>
        </article>
        <article className="icami-card p-6">
          <p className="icami-mono-eyebrow !text-slate-500">
            Registration related
          </p>
          <a
            className="mt-3 inline-block text-base font-semibold text-icami-blue hover:text-sky-700"
            href={`mailto:${site.contact.registration}`}
          >
            {site.contact.registration}
          </a>
        </article>
        <article className="icami-card p-6">
          <p className="icami-mono-eyebrow !text-slate-500">Information desk</p>
          <a
            className="mt-3 inline-block text-base font-semibold text-icami-blue hover:text-sky-700"
            href={`mailto:${site.contact.information}`}
          >
            {site.contact.information}
          </a>
        </article>
      </div>

      <h2>Venue and location</h2>
      <p>
        ICAMI 2026 is hosted at <strong>{site.venue.name}</strong>.
      </p>
      <ul>
        <li>
          <strong>Host institution:</strong> {site.venue.name},{" "}
          {site.venue.address}
        </li>
        <li>
          <strong>Primary conference venue:</strong> {site.venue.name} campus
          facilities (exact hall allocation, access routes, and on-site desk
          timing will be published in the final program)
        </li>
      </ul>
    </DocumentPage>
  );
}
