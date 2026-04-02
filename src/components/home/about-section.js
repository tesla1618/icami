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
          

          <div className="icami-prose space-y-6 text-[1.05rem] leading-relaxed">
            <p>
              ICAMI 2026 focuses on the theoretical and algorithmic foundations of artificial intelligence. It brings together researchers who study core principles, mathematical models, and efficient algorithms that drive AI forward. The goal is to deepen understanding, share new ideas, and support rigorous research that shapes the future of AI systems.
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
