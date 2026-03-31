import { DocumentPage } from "@/components/page/document-page";
import Image from "next/image";
import { keynotes } from "@/config/site";

export const metadata = {
  title: "Keynotes",
};

export default function KeynotesPage() {
  // Keynote lineup is temporarily TBA.
  const slots = keynotes.length;
  return (
    <DocumentPage title="Keynote speakers" eyebrow="Program">
      <p>
        Current keynote lineup is temporarily populated from the organizing
        committee. Confirmed invited speaker list, final titles, and abstracts
        will be published here as invitations are finalized.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {Array.from({ length: slots }, (_, i) => (
          <li key={i} className="icami-card p-7">
            <div className="mb-5">
              <div className="h-28 w-28 overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-slate-100 to-white font-mono text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  TBA
                </div>
              </div>
            </div>
            <p className="font-heading text-2xl tracking-[0.06em] text-icami-text">
              TBA
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              TBA
            </p>
            <p className="mt-5 border-l border-slate-200 pl-3 text-sm font-medium text-slate-700">
              TBA
            </p>
          </li>
        ))}
      </ul>
    </DocumentPage>
  );
}
