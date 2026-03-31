import { DocumentPage } from "@/components/page/document-page";
import { AvatarEasterEgg } from "@/components/committee/avatar-easter-egg";

const initials = (name) =>
  name
    .split(/[\s.]+/)
    .filter(Boolean)
    // Use last 2 “name parts” so e.g. “First Last” => “L”, “First Middle Last” => “ML”
    .slice(-2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

function MemberCard({ name, affiliation, label, emphasis = false }) {
  const frameClass = emphasis
    ? "border-sky-200/85 bg-sky-50 text-sky-700"
    : label === "Creative & Design Chair"
      ? "border-pink-200/80 bg-pink-50 text-pink-700"
      : label === "Publicity Chair"
        ? "border-amber-200/80 bg-amber-50 text-amber-700"
        : label === "Platform Chair" || label === "Platform"
          ? "border-purple-200/80 bg-purple-50 text-purple-700"
          : label === "Industry Chairs"
            ? "border-emerald-200/80 bg-emerald-50 text-emerald-700"
            : label === "Area Chair"
              ? "border-blue-200/80 bg-blue-50 text-blue-700"
              : "border-slate-200/95 bg-white text-slate-600";

  const nameClass = emphasis
    ? "text-icami-blue"
    : label === "Platform Chair" || label === "Platform"
      ? "text-purple-900 group-hover:text-purple-800"
      : "text-slate-900 group-hover:text-icami-blue";

  const isRajiebEasterEgg =
    (label === "Platform Chair" || label === "Platform") && name === "Rajieb";

  return (
    <div
      className={`group relative flex gap-3 rounded-2xl border p-4 transition ${
        emphasis
          ? "border-sky-200 bg-sky-50/40 shadow-[0_18px_60px_-45px_rgba(30,92,255,0.45)]"
          : "border-slate-200/90 bg-white/70 hover:border-sky-200/90"
      }`}
    >
      {isRajiebEasterEgg ? (
        <AvatarEasterEgg
          initials={initials(name)}
          frameClassName={frameClass}
          imageSrc="/rajieb.jpg"
          imageAlt="Rajieb"
        />
      ) : (
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white text-sm font-semibold ${frameClass}`}
          aria-hidden
        >
          {initials(name) || "—"}
        </div>
      )}

      <div className="min-w-0 flex-1">
        {label ? (
          <div className="mb-1 inline-flex items-center gap-2">
            <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {label}
            </span>
          </div>
        ) : null}

        <div
          className={`text-[0.96rem] font-semibold leading-snug ${nameClass}`}
          title={name}
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
          label="General Chair"
          emphasis
          name="Dr. Dunren Che"
          affiliation="School of Computing, Southern Illinois University, Carbondale, IL 62901, USA"
        />
        <MemberCard
          label="General Chair"
          emphasis
          name="Dr. Abu Asaduzzaman"
          affiliation="Professor and Associate Chair, College of Engineering, Electrical and Computer Engineering, Wichita State University (WSU), USA"
        />

        <MemberCard
          label="Program Chair"
          name="Dr. M. Julius Hossain"
          affiliation="Head of Image and Data Analysis Group at the Centre for Cancer Immunology, University of Southampton, UK"
        />
        <MemberCard
          label="Program Chair"
          name="Dr. Joseph Shin"
          affiliation="School of Computer Science and Engineering, The University of Aizu, Aizuwakamatsu, Japan"
        />
        <MemberCard
          label="Program Chair"
          name="Md. Jakir Hossen"
          affiliation="Center for Advanced Analytics (CAA), COE for Artificial Intelligence, Faculty of Engineering & Technology (FET), Multimedia University, 75450 Melaka, Malaysia"
        />
      </div>

      <h2 className="mt-10">TECHNICAL LEADERSHIP</h2>
      <h3 className="mt-4">Technical Program Committee (TPC) Chair</h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          label="TPC Chair"
          name="Dr. Nilanjan Dey"
          affiliation="Department of Computer Science and Engineering, Techno International New Town, Kolkata, India"
        />
        <MemberCard
          label="TPC Chair"
          name="Dr. Yutaka Watanobe"
          affiliation="Department of Computer Science and Engineering, University of Aizu, Aizu-Wakamatsu 965-8580, Japan"
        />
        <MemberCard
          label="TPC Chair"
          name="Dr. Salah Uddin Ahmed"
          affiliation="School of Business, University of South-Eastern Norway, Honefoss, Norway"
        />
      </div>

      <h3 className="mt-8">Area Chairs</h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          label="Area Chair"
          name="Dr. M. F. Mridha"
          affiliation="Department of Computer Science, American International University - Bangladesh (AIUB), Dhaka 1229, Bangladesh"
        />
        <MemberCard
          label="Area Chair"
          name="Dr. Hanif Bhuiyan"
          affiliation="Performance & Analytics City of Gold Coast, Gold Coast, Australia"
        />
        <MemberCard
          label="Area Chair"
          name="Dr. Zeyar Aung"
          affiliation="Department of Computer Science, Khalifa University, Abu Dhabi, United Arab Emirates"
        />
        <MemberCard
          label="Area Chair"
          name="Dr. M M Manjurul Islam"
          affiliation="School of Computing, Engineering and Intelligent Systems at Ulster University, UK"
        />
      </div>

      <h2 className="mt-10">SPECIALIZED CHAIRS</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          label="Publication Chair"
          name="Dr. Md Abdul Hamid"
          affiliation="King Abdulaziz University, Jeddah, Saudi Arabia"
        />
        <MemberCard
          label="Finance Chair"
          name="Dr. Muhammad Mostafa Monowar"
          affiliation="Faculty of Computing and Information Technology, King Abdulaziz University, Jeddah, Saudi Arabia"
        />
        <MemberCard
          label="Publicity / Communication Chair"
          name="Dr. Md. Rashedul Islam"
          affiliation="Department of Computer Science and Engineering, University of Asia Pacific, Dhaka 1216, Bangladesh"
        />
        <MemberCard
          label="Creative & Design Chair"
          name="Naziba Tasnim"
          affiliation="BS, Computer Science — BRAC University."
        />
        <MemberCard
          label="Industry Chairs"
          name="Dr. Md.Nahid Newaz"
          affiliation="Senior Solutions Architect - GPU @ NVIDIA, USA"
        />
        <MemberCard
          label="Industry Chairs"
          name="Dr. Nahid Anwar"
          affiliation="Senior Data Scientist at Walmart, USA"
        />
        <MemberCard
          label="Industry Chairs"
          name="Md Habibur Rahman"
          affiliation="Postdoctoral Scholar, Qualcomm Institute, University of California, San Diego, CA"
        />
        <MemberCard
          label="Publicity Chair"
          name="Md. Mehedi Hasan"
          affiliation="B.Sc. Undergraduate — CSE, Bangladesh University of Business and Technology (BUBT)."
        />
      </div>

      <h2 className="mt-10">LOCAL ORGANIZATION</h2>
      <div className="mt-4 max-w-3xl rounded-2xl border border-slate-200/90 bg-white/70 p-5">
        <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Local Organizing Committee (MMU, Malaysia)
        </div>
        <div className="mt-2 text-slate-700">To be announced</div>
      </div>

      <h2 className="mt-10">TECHNICAL PROGRAM COMMITTEE MEMBER</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          label="Technical Program Committee Member"
          name="Dr. Md. Rajibul Islam"
          affiliation="Department of Data Science & Engineering, Bangladesh University of Business and Technology (BUBT), Bangladesh"
        />
      </div>

      <h2 className="mt-10">PLATFORM CHAIR</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <MemberCard
          label="Platform Chair"
          name="Rajieb"
          affiliation="Master of Computer Science, Military Institute of Science and Technology (MIST)"
        />
      </div>
    </DocumentPage>
  );
}
