import { DocumentPage } from "@/components/page/document-page";
import Image from "next/image";
import { site } from "@/config/site";

export const metadata = {
  title: "Venue",
};

export default function VenuePage() {
  return (
    <DocumentPage title="Venue & travel" eyebrow="Location">
      <p>
        ICAMI 2026 will be hosted at <strong>{site.location}</strong>. MMU offers
        modern facilities suitable for plenary sessions, parallel tracks, and
        informal collaboration.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <figure className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white md:col-span-7">
          <Image
            src="https://cdn.icami.net/mmu1.jpg"
            alt="Multimedia University (MMU) campus"
            width={1400}
            height={900}
            className="h-72 w-full object-cover sm:h-80"
            priority={false}
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            Multimedia University (MMU)
          </figcaption>
        </figure>

        <div className="grid gap-4 md:col-span-5">
          <figure className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white">
            <Image
              src="https://cdn.icami.net/malacca.jpg"
              alt="Malacca city view"
              width={1200}
              height={800}
              className="h-40 w-full object-cover sm:h-44"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              Malacca, Malaysia
            </figcaption>
          </figure>

          <figure className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white">
            <Image
              src="https://cdn.icami.net/malacca2.webp"
              alt="Malacca city atmosphere"
              width={1200}
              height={800}
              className="h-40 w-full object-cover sm:h-44"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              Old town + waterfront
            </figcaption>
          </figure>
        </div>
      </div>

      <h2>Travel</h2>
      <p>
        Kuala Lumpur is served by major international carriers. Ground transport
        options from the airport, visa guidance for international participants,
        and recommended arrival windows will be summarized here.
      </p>
      <h2>Accommodation</h2>
      <p>
        A list of hotels near campus and in central KL will be provided with
        indicative rates and booking codes where applicable.
      </p>
      <h2>Maps</h2>
      <p>
        Campus maps and venue room assignments will be linked once the program
        is fixed.
      </p>
    </DocumentPage>
  );
}
