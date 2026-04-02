import { DocumentPage } from "@/components/page/document-page";
import { RegistrationFeeCalculator } from "@/components/registration/fees-calculator";

export const metadata = {
  title: "Registration fees",
  description:
    "ICAMI 2026 registration fees and interactive calculator. Base fee USD 500 with Research4Life and IEEE member discounts.",
};

export default function RegistrationFeesPage() {
  return (
    <DocumentPage title="Registration fees" eyebrow="Attend">
      <p>
        ICAMI 2026 uses a baseline registration fee and applies policy discounts
        transparently by eligibility. This page documents the current structure,
        with a live calculator to estimate your exact payable amount.
      </p>

      <h2>Base fee (USD)</h2>
      <ul>
        <li>
          <strong>Standard registration base fee:</strong> <strong>$500</strong>
        </li>
        <li>
          All published waivers are applied against this base according to the
          policy below.
        </li>
      </ul>

      <h2>Waiver policy</h2>
      <ul>
        <li>
          <strong>Research4Life Category A countries:</strong>{" "}
          <strong>80% waiver</strong>
        </li>
        <li>
          <strong>Research4Life Category B countries:</strong>{" "}
          <strong>50% waiver</strong>
        </li>
        <li>
          <strong>IEEE members:</strong> <strong>25% waiver</strong>
        </li>
      </ul>

      <h2>How waivers are applied</h2>
      <p>
        Waivers are <strong>not cumulative</strong>. If a participant is
        eligible for multiple waivers, the system applies only the{" "}
        <strong>highest single waiver</strong>. In other words, this is a{" "}
        <strong>max-waiver  rule</strong>, not stacking.
      </p>
      <ul>
        <li>
          <strong>Category A + IEEE:</strong> max(80%, 25%) = 80% → final{" "}
          <strong>$100.00</strong>  
        </li>
        <li>
          <strong>Category B + IEEE:</strong> max(50%, 25%) = 50% → final{" "}
          <strong>$250.00</strong>
        </li>
        <li>
          <strong>No country waiver + IEEE:</strong> max(0%, 25%) = 25% →
          final <strong>$375.00</strong>
        </li>
      </ul>

      <RegistrationFeeCalculator />

      <h2>Eligibility and verification</h2>
      <p>
        Delegates claiming waived categories should be prepared to provide
        supporting information during registration. The organizing team may
        request evidence for country-category eligibility and IEEE membership
        status before final payment confirmation.
      </p>

      <h2>Research4Life country lists</h2>
      <p>
        Fee waivers are based on{" "}
        <a
          href="https://www.research4life.org/access/eligibility/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-icami-blue hover:text-icami-blue-bright"
        >
          Research4Life eligibility criteria
        </a>
        . Check the link to see if your country falls under Group A (80% waiver)
        or Group B (50% waiver).
      </p>

      <h2>Payment, invoicing, and updates</h2>
      <p>
        Payment gateway details, accepted payment methods, tax notes, and
        invoice-request procedures will be published at portal launch. If policy
        updates occur, this page will remain the source of truth for final fee
        computation rules.
      </p>
    </DocumentPage>
  );
}
