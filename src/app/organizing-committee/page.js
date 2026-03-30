import { DocumentPage } from "@/components/page/document-page";

const initials = (name) =>
  name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

function MemberCard({ name, affiliation, label, emphasis = false }) {
  return (
    <div
      className={`group relative flex gap-3 rounded-2xl border p-4 transition ${
        emphasis
          ? "border-sky-200 bg-sky-50/40 shadow-[0_18px_60px_-45px_rgba(30,92,255,0.45)]"
          : "border-slate-200/90 bg-white/70 hover:border-sky-200/90"
      }`}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white text-sm font-semibold text-slate-700"
        aria-hidden
      >
        {initials(name) || "—"}
      </div>

      <div className="min-w-0 flex-1">
        {label ? (
          <div className="mb-1 inline-flex items-center gap-2">
            <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {label}
            </span>
          </div>
        ) : null}

        <div
          className={`truncate text-[0.96rem] font-semibold ${
            emphasis
              ? "text-icami-blue"
              : "text-slate-900 group-hover:text-icami-blue"
          }`}
        >
          {name}
        </div>

        {affiliation ? (
          <div className="mt-1 text-sm leading-relaxed text-slate-600">
            {affiliation}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export const metadata = {
  title: "ICAMI 2026 : Organizing Committee Structure",
};

export default function OrganizingCommitteePage() {
  return (
    <DocumentPage
      title="ICAMI 2026 : Organizing Committee Structure"
      eyebrow="People"
    >
      <p>
        ICAMI 2026 uses a clean academic governance model: executive leadership
        sets direction, program and technical roles scale reviews, and an
        advisory layer provides high-impact guidance. Member affiliations are
        shown when available.
      </p>

      <h2 className="mt-8">EXECUTIVE COMMITTEE</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 max-w-3xl">
        <MemberCard
          emphasis
          label="General Chair"
          name="Prof. Dr. Mohammad Firoz Mridha"
          affiliation="Founder & Research Director — Professor & Head, Dept. of CSE, American International University-Bangladesh (AIUB)."
        />
        <MemberCard
          label="Program Chair"
          name="Md Mohsin Kabir"
          affiliation="EMJ Masters Student, Intelligent Field Robotic Systems — University of Girona, Spain | Eötvös Loránd University, Hungary."
        />
      </div>

      <h2 className="mt-10">ADVISORY BOARD</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          name="Prof. Dr. Jungpil Shin"
          affiliation="Professor, Department of Computer Science — University of Aizu, Japan."
        />
        <MemberCard
          name="Prof. Dr. Muhammad Mostofa Monwar"
          affiliation="Professor, Department of IT — King Abdulaziz University."
        />
        <MemberCard
          name="Prof. Dr. Md. Abdul Hamid"
          affiliation="Professor, Department of IT — King Abdulaziz University."
        />
        <MemberCard
          name="Dr. Nilanjan Dey"
          affiliation="Professor of Computer Science — Techno International New Town (Kolkata) | University of Reading (UK, Visiting Professor)."
        />
        {/* <MemberCard name="Dr. Sujit Biswas" /> */}
        <MemberCard
          name="Dr. Md. Rashedul Islam"
          affiliation="Chief Researcher of Computer Vision & Chief Engineer (Overseas Division) — Chowagiken Corp., Japan."
        />
      </div>

      <h2 className="mt-10">PROGRAM COMMITTEE</h2>
      <h3 className="mt-4">Senior Program Committee / Area Chairs</h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Khan Md Hasib",
            affiliation:
              "Asst. Prof. — Dept. of CSE, The University of New South Wales (Australia).",
          },
          {
            name: "MD. Reazul Islam",
            affiliation:
              "Lecturer, Department of Computer Science & Engineering — Bangladesh University of Business and Technology (BUBT).",
          },
          {
            name: "Sultanul Arifeen Hamim",
            affiliation:
              "Lecturer — Department of Computer Science & Engineering, American International University-Bangladesh (AIUB).",
          },
        ].map((m) => (
          <MemberCard key={m.name} name={m.name} affiliation={m.affiliation} />
        ))}
      </div>

      <h3 className="mt-8">Technical Program Committee</h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Jamin Rahman Jim",
            affiliation:
              "Erasmus Mundus Joint Master Student — Intelligent Field Robotic Systems (IFRoS), University of Girona, Spain.",
          },
          {
            name: "Durjoy Mistry",
            affiliation:
              "Lecturer — Computer Science & Engineering (CSE), UAP.",
          },
          {
            name: "Md Abrar Jahin",
            affiliation:
              "B.Sc. in Industrial & Production Engineering (IPE) — KUET.",
          },
          {
            name: "Md. Anwar Hussen Wadud",
            affiliation:
              "Chairman, Department of CSE — Sunamgonj Science and Technology University.",
          },
          {
            name: "Ashfia Jannat Keya",
            affiliation:
              "Lecturer — Department of Computer Science & Engineering, Bangladesh University of Business and Technology (BUBT).",
          },
          {
            name: "Khondokar Oliullah",
            affiliation: "Lecturer — Dept. of CSE, BUBT.",
          },
          {
            name: "Adit Ishraq",
            affiliation:
              "Master's in Computer and Systems Sciences — Stockholm University.",
          },
          {
            name: "Osim Kumar Pal",
            affiliation:
              "Erasmus Mundus Master Student — Biomedical Engineering, University of Kragujevac, Serbia.",
          },
          {
            name: "Md Farhan Ishmam",
            affiliation:
              "B.Sc. Undergraduate — Computer Science & Engineering (CSE), American International University Bangladesh.",
          },
        ].map((m) => (
          <MemberCard key={m.name} name={m.name} affiliation={m.affiliation} />
        ))}
      </div>

      <h2 className="mt-10">SPECIALIZED CHAIRS</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          label="Publicity Chair"
          name="Md. Mehedi Hasan"
          affiliation="B.Sc. Undergraduate — CSE, Bangladesh University of Business and Technology (BUBT)."
        />
        <MemberCard
          label="Creative & Design Chair"
          name="Naziba Tasnim"
          affiliation="BS, Computer Science — BRAC University."
        />
        <MemberCard
          label="Publication Chair"
          name="Mohammad Sayem Chowdhury"
          affiliation="M.Sc. in Computer Science — American International University Bangladesh."
        />
        <MemberCard
          label="Web Chair"
          name="Md Nahid Hasan"
          affiliation="B.Sc. Undergraduate — CSE, Bangladesh University of Business and Technology (BUBT)."
        />
        <MemberCard
          label="Sponsorship Chair"
          name="Arifur Rahman"
          affiliation="MBA in Business Analytics — School of Business, International American University."
        />
      </div>

      <h2 className="mt-10">LOCAL ORGANIZATION</h2>
      <div className="mt-4 max-w-3xl rounded-2xl border border-slate-200/90 bg-white/70 p-5">
        <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Local Organizing Committee (MMU, Malaysia)
        </div>
        <div className="mt-2 text-slate-700">To be announced</div>
      </div>

      <h2 className="mt-10">ADDITIONAL COMMITTEE MEMBERS</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          name="Rakin Sad Aftab"
          affiliation="M.Sc. in Computer Science — University of Calgary."
        />
        <MemberCard
          name="Zabir Mohammad"
          affiliation="B.Sc. Undergraduate — Computer Science & Engineering (CSE), Bangladesh University of Business and Technology (BUBT)."
        />
        <MemberCard
          name="Aklima Akter Lima"
          affiliation="B.Sc. Undergraduate — Computer Science & Engineering (CSE), Bangladesh University of Business and Technology (BUBT)."
        />
        <MemberCard
          name="Istiak Mahmud"
          affiliation="B.Sc. Undergraduate — CSE, Ahsanullah University of Science and Technology."
        />
        <MemberCard
          name="Adit Ishraq"
          affiliation="Master's in Computer and Systems Sciences — Stockholm University."
        />
        <MemberCard
          name="Osim Kumar Pal"
          affiliation="Erasmus Mundus Master Student — Biomedical Engineering, University of Kragujevac, Serbia."
        />
        <MemberCard
          name="Md Farhan Ishmam"
          affiliation="B.Sc. Undergraduate — Computer Science & Engineering (CSE), American International University Bangladesh."
        />
        <MemberCard
          name="Mir Maruf Ahmed"
          affiliation="B.Sc. Undergraduate — Computer Science & Engineering (CSE), American International University Bangladesh."
        />
      </div>
    </DocumentPage>
  );
}
