import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Registration",
};

export default function RegistrationPage() {
  return (
    <DocumentPage title="Registration" eyebrow="Attend">
      <p>
        Registration categories (author, student, listener) and fees will be
        posted here. Early-bird deadlines and cancellation policies will be
        included alongside payment instructions.
      </p>

      <h2>Detailed guides</h2>
      <ul>
        <li>
          <a className="icami-inline-link" href="/registration/fees">
            Registration fees
          </a>{" "}
          — categories, planned rates, and payment information when available.
        </li>
        <li>
          <a className="icami-inline-link" href="/registration/guidelines">
            Registration guidelines
          </a>{" "}
          — who must register, policies, and travel-related notes.
        </li>
      </ul>

      <h2>Planned categories</h2>
      <ul>
        <li>Author registration — includes proceedings and main program access</li>
        <li>Student registration — reduced rate with valid verification</li>
        <li>Listener / non-author — access to sessions and materials as announced</li>
      </ul>
      <p>
        Payment gateway and invoicing details will be added when registration
        opens.
      </p>
    </DocumentPage>
  );
}
