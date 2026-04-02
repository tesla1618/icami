import { AboutIllustration } from "@/components/graphics/about-illustration";
import { HighlightBrush } from "@/components/ui/highlight-brush";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="scroll-mt-8">
      <SectionHeading index="02" title="About the conference" />
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:gap-16">
        <div className="max-w-xl">
          <div className="mb-6 flex items-stretch gap-4">
            <span
              className="icami-accent-bar-light shrink-0 self-stretch"
              aria-hidden
            />
            <div className="min-w-0">
              <p className="icami-mono-eyebrow !text-slate-500">Positioning</p>
              <p className="mt-2 text-[1.05rem] leading-relaxed text-icami-text-muted">
                A conference for applied machine intelligence that survives
                contact with the real world.
              </p>
            </div>
          </div>

          <div className="icami-prose space-y-6 text-[1.05rem] leading-relaxed">
            <p>
              ICAMI brings together researchers and practitioners advancing
              machine intelligence that works in the field: rigorous methods,
              careful evaluation, and measurable{" "}
              <HighlightBrush variant="sky">impact</HighlightBrush>. We
              emphasize selective, high-quality programs and papers that move
              ideas into practice.
            </p>
            <p>
              The program spans foundations, systems, perception, language,
              trust, edge deployment, and high-impact applications—with a
              consistent focus on{" "}
              <HighlightBrush variant="amber">applied research</HighlightBrush>{" "}
              and{" "}
              <HighlightBrush variant="rose">
                responsible innovation
              </HighlightBrush>
              .
            </p>
          </div>
        </div>
        <Image
          className="icami-chamfer w-full max-w-lg justify-self-end shadow-[0_20px_50px_-20px_rgba(0,51,160,0.2)] lg:max-w-none"
          src="/aboutconf.png"
          alt="About the conference"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
