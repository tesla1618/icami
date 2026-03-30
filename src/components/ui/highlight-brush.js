/**
 * Marker-style highlight for important words in body copy (paragraphs, blurbs).
 * Avoid overusing on page titles, nav labels, or every heading.
 *
 * @param {"amber"|"sky"|"gold"|"rose"|"onDark"} [variant="amber"] — `onDark` only for light text on dark backgrounds (e.g. hero prose).
 * @param {keyof JSX.IntrinsicElements} [as="span"] — semantic wrapper.
 *
 * @example
 * <p>We focus on <HighlightBrush>real-world impact</HighlightBrush> in deployment.</p>
 */
const VARIANT_CLASS = {
  amber: "icami-highlight-brush icami-highlight-brush--amber",
  sky: "icami-highlight-brush icami-highlight-brush--sky",
  gold: "icami-highlight-brush icami-highlight-brush--gold",
  rose: "icami-highlight-brush icami-highlight-brush--rose",
  onDark: "icami-highlight-brush icami-highlight-brush--on-dark",
};

export function HighlightBrush({ as: Comp = "span", variant = "amber", className = "", children }) {
  const base = VARIANT_CLASS[variant] ?? VARIANT_CLASS.amber;
  return <Comp className={[base, className].filter(Boolean).join(" ")}>{children}</Comp>;
}
