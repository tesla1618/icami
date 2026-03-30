import { DocumentPage } from "@/components/page/document-page";

export const metadata = {
  title: "Registration fees",
};

export default function RegistrationFeesPage() {
  return (
    <DocumentPage title="Registration fees" eyebrow="Attend">
      <p>
        Official fee schedules for ICAMI 2026 will be published when registration
        opens. Rates typically differentiate authors, students, and non-author
        attendees; early-bird windows may apply.
      </p>

      <h2>Planned categories</h2>
      <ul>
        <li>
          <strong>Author</strong> — includes proceedings access and main program
          sessions as announced.
        </li>
        <li>
          <strong>Student</strong> — reduced rate subject to valid student
          verification at check-in or as specified during payment.
        </li>
        <li>
          <strong>Listener / non-author</strong> — access to sessions and
          materials according to the published program tier.
        </li>
      </ul>

      <h2>Currency and payment</h2>
      <p>
        Accepted currencies, tax treatment, and the payment gateway will be
        listed here. Invoicing and institutional billing instructions will be
        provided for delegates who require them.
      </p>

      <h2>What to expect next</h2>
      <p>
        Once fees and deadlines are confirmed, this page will show exact
        amounts, cut-off dates for early registration, and any bundled options
        (e.g., workshops). See also{" "}
        <a className="icami-inline-link" href="/registration/guidelines">
          Registration guidelines
        </a>{" "}
        and the main{" "}
        <a className="icami-inline-link" href="/registration">
          Registration
        </a>{" "}
        overview.
      </p>
    </DocumentPage>
  );
}
