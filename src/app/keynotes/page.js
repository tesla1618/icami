import { DocumentPage } from "@/components/page/document-page";
import Image from "next/image";
import { keynotes } from "@/config/site";

export const metadata = {
  title: "Keynotes",
  description: "Keynote speakers at ICAMI 2026. Invited talks from leading researchers in advanced machine intelligence.",
};

export default function KeynotesPage() {
  return (
    <DocumentPage title="Keynote speakers" eyebrow="Program">
      <p>
        Invited keynote speakers for ICAMI 2026. Talk titles and abstracts may
        be updated as the program is finalized.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {keynotes.map((speaker, i) => (
          <li key={`${speaker.name}-${i}`} className="icami-card p-7">
            <div className="mb-5">
              <div className="h-28 w-28 overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100">
                {speaker.image ? (
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} portrait`}
                    width={224}
                    height={224}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-slate-100 to-white font-mono text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Photo TBA
                  </div>
                )}
              </div>
            </div>
            <p className="font-heading text-2xl tracking-[0.06em] text-icami-text">
              {speaker.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {speaker.affiliation}
            </p>
            <p className="mt-5 border-l border-slate-200 pl-3 text-sm font-medium text-slate-700">
              {speaker.talkTitle}
            </p>
          </li>
        ))}
      </ul>
    </DocumentPage>
  );
}
