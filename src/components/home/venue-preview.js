import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightBrush } from "@/components/ui/highlight-brush";
import { site } from "@/config/site";

// const venueImages = [
//   {
//     src: "https://cdn.icami.net/mmu1.jpg",
//     alt: "Multimedia University (MMU) campus",
//     caption: "Multimedia University (MMU)",
//   },
//   {
//     src: "https://cdn.icami.net/malacca.jpg",
//     alt: "Malacca city view",
//     caption: "Malacca, Malaysia",
//   },
//   {
//     src: "https://cdn.icami.net/malacca2.webp",
//     alt: "Malacca city atmosphere",
//     caption: "Old town + waterfront",
//   },
// ];

export function VenuePreview() {
  return (
    <section className="scroll-mt-8 pb-4">
      <SectionHeading index="08" title="Venue" />
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <figure className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
            <Image
              src={site.venue.images[0].src}
              alt={site.venue.images[0].alt}
              width={1200}
              height={800}
              className="h-64 w-full object-cover sm:h-full"
              priority={false}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              {site.venue.images[0].caption}
            </figcaption>
          </figure>

          <div className="grid gap-4">
            {site.venue.images.slice(1).map((img) => (
              <figure
                key={img.src}
                className="icami-chamfer-panel relative overflow-hidden border border-slate-200/90 bg-white shadow-[0_18px_48px_-28px_rgba(15,23,42,0.22)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className="h-40 w-full object-cover sm:h-[8.75rem]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[1.05rem] leading-relaxed text-icami-text-muted">
            ICAMI 2026 will be held at{" "}
            <HighlightBrush variant="sky" className="font-medium">
              {site.location}
            </HighlightBrush>
            . Travel, local access, and suggested accommodation will be
            published on the venue page.
          </p>
          <Link
            href="/venue"
            className="icami-inline-link mt-10 inline-flex min-h-11 items-center font-medium"
          >
            Venue & travel information
            <span aria-hidden className="icami-inline-link-arrow">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
