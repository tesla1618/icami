import { PageShell } from "@/components/layout/page-shell";
import { InnerDocExperience } from "@/components/page/inner-doc-experience";

/**
 * Standard inner page: light shell + breadcrumb, TOC, in-page find, motion header + prose.
 */
export function DocumentPage({ title, eyebrow, children, className = "" }) {
  return (
    <PageShell className={className}>
      <InnerDocExperience title={title} eyebrow={eyebrow}>
        {children}
      </InnerDocExperience>
    </PageShell>
  );
}
