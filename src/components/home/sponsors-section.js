import { SponsorGroupsList } from "@/components/sponsors/sponsor-groups-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightBrush } from "@/components/ui/highlight-brush";

export function SponsorsSection() {
  return (
    <section className="scroll-mt-8">
      <SectionHeading index="07" title="Sponsors & partners" />
      <p className="mt-12 max-w-3xl text-[1.05rem] leading-relaxed text-icami-text-muted">
        We are grateful to organizations that support ICAMI.{" "}
        <HighlightBrush variant="gold">Sponsor packages</HighlightBrush> and
        additional visibility opportunities may be listed here as agreements
        are finalized.
      </p>
      <div className="mt-10">
        <SponsorGroupsList compact />
      </div>
    </section>
  );
}
