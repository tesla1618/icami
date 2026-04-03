import { DocumentPage } from "@/components/page/document-page";
import Image from "next/image";
import { site } from "@/config/site";

export const metadata = {
  title: "Venue",
  description:
    "ICAMI 2026 venue at Multimedia University (MMU), Malaysia. Location details, travel tips, and accommodation information.",
};

export default function VenuePage() {
  return (
    <DocumentPage title="Venue & travel" eyebrow="Location">
      <p>
        ICAMI 2026 will be hosted at <strong>{site.location}</strong>. MMU
        offers modern facilities suitable for plenary sessions, parallel tracks,
        and informal collaboration.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <figure className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white md:col-span-7">
          <Image
            src={site.venue.images[0].src}
            alt={site.venue.images[0].alt}
            width={1400}
            height={900}
            className="h-full w-full object-cover"
            priority={false}
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            {site.venue.images[0].caption}
          </figcaption>
        </figure>

        <div className="grid gap-4 md:col-span-5">
          <figure className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white">
            <Image
              src={site.venue.images[1].src}
              alt={site.venue.images[1].alt}
              width={1200}
              height={800}
              className="h-40 w-full object-cover sm:h-44"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              {site.venue.images[1].caption}
            </figcaption>
          </figure>

          <figure className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white">
            <Image
              src={site.venue.images[2].src}
              alt={site.venue.images[2].alt}
              width={1200}
              height={800}
              className="h-40 w-full object-cover sm:h-44"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              {site.venue.images[2].caption}
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
        Use the map below for direct navigation to Multimedia University (MMU),
        Malaysia. Detailed room-level maps and assignments will be added closer
        to the program release.
      </p>
      <div className="icami-chamfer-panel mt-6 overflow-hidden border border-slate-200/90 bg-white p-2">
        <iframe
          title="Map to Multimedia University (MMU), Malaysia"
          src="https://www.google.com/maps?q=Multimedia+University+Melaka&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[24rem] w-full border-0"
        />
      </div>
      <p className="mt-3 text-sm text-slate-600">
        Prefer opening in the Maps app?{" "}
        <a
          className="icami-inline-link"
          href="https://www.google.com/maps/search/?api=1&query=Multimedia+University+Melaka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open MMU in Google Maps
        </a>
        .
      </p>
    </DocumentPage>
  );
}
