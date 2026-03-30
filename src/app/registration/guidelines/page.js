import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Registration guidelines",
};

export default function RegistrationGuidelinesPage() {
  return (
    <DocumentPage title="Registration guidelines" eyebrow="Attend">
      <p>
        These guidelines describe how registration for ICAMI 2026 is expected
        to work once the portal is live. Final procedures may be refined by the
        organizing committee; this page will be updated accordingly.
      </p>

      <h2>Who should register</h2>
      <ul>
        <li>
          At least one author per accepted paper must register by the author
          registration deadline (to be announced) for the work to appear in the
          proceedings.
        </li>
        <li>
          All attendees accessing sessions or official events must hold a valid
          registration for the corresponding category.
        </li>
        <li>
          Student rates require eligibility proof as defined at registration
          time.
        </li>
      </ul>

      <h2>Changes, cancellations, and substitutions</h2>
      <p>
        Policies on refunds, category changes, and name substitutions will be
        stated alongside the opening of registration. Please complete
        registration using the official channel only; third-party offers are not
        endorsed by the conference.
      </p>

      <h2>Visa and travel</h2>
      <p>
        General advice on travel to the venue appears on the{" "}
        <a className="icami-inline-link" href="/venue">
          Venue
        </a>{" "}
        page. Invitation or support letters for visa applications, if offered,
        will be described in the registration portal help section when
        available.
      </p>

      <h2>Related pages</h2>
      <ul>
        <li>
          <a className="icami-inline-link" href="/registration/fees">
            Registration fees
          </a>
        </li>
        <li>
          <a className="icami-inline-link" href="/registration">
            Registration overview
          </a>
        </li>
        <li>
          <a className="icami-inline-link" href="/faq">
            FAQ
          </a>
        </li>
      </ul>
    </DocumentPage>
  );
}
