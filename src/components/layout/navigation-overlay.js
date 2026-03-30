"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { navGroups, site } from "@/config/site";
import { LightHudCorners } from "@/components/ui/light-hud-corners";
import { HighlightBrush } from "@/components/ui/highlight-brush";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Native <dialog> + showModal() from a direct tap handler — required on iOS.
 * No portal, no Framer — avoids touch / stacking / deferred-open bugs.
 */
export const NavigationOverlay = forwardRef(function NavigationOverlay(
  { open, onClose, theme },
  ref
) {
  const pathname = usePathname();
  const light = theme === "light";
  const [q, setQ] = useState("");
  const innerRef = useRef(null);
  const filterInputRef = useRef(null);

  useEffect(() => {
    const node = innerRef.current;
    if (!node) return;
    const onDialogClose = () => {
      setQ("");
      onClose();
    };
    node.addEventListener("close", onDialogClose);
    return () => node.removeEventListener("close", onDialogClose);
  }, [onClose]);

  const requestClose = useCallback(() => {
    innerRef.current?.close();
  }, []);

  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 768px)");
    if (mq.matches) filterInputRef.current?.focus();
  }, [open]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return navGroups;
    return navGroups
      .map((g) => ({
        ...g,
        links: g.links.filter(
          (l) =>
            l.label.toLowerCase().includes(needle) ||
            l.href.toLowerCase().includes(needle)
        ),
      }))
      .filter((g) => g.links.length > 0);
  }, [q]);

  const setRefs = useCallback(
    (node) => {
      innerRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref]
  );

  return (
    <dialog
      ref={setRefs}
      id="nav-explore-overlay"
      className="icami-explore-dialog fixed inset-0 z-[2147483000] m-0 flex h-full max-h-none w-full max-w-none flex-col items-stretch justify-end border-0 bg-transparent p-0 md:items-center md:justify-center md:p-10"
      aria-labelledby="nav-explore-title"
    >
      <div className="relative flex min-h-full w-full flex-1 flex-col justify-end md:min-h-full md:justify-center md:items-center">
        <button
          type="button"
          className="absolute inset-0 z-0 cursor-default bg-slate-950/80 md:bg-transparent"
          aria-label="Close navigation"
          onClick={requestClose}
        />
        <div
          className={`relative z-10 flex max-h-[min(90dvh,860px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-[1.75rem] border shadow-2xl md:max-h-[min(80vh,720px)] ${
            light
              ? "icami-chamfer-panel md:rounded-none border-slate-200/90 bg-white text-slate-900 shadow-slate-900/12 md:ring-1 md:ring-slate-200/70"
              : "border-white/10 bg-[#0b1020] text-zinc-100 shadow-black/40 md:rounded-3xl md:ring-1 md:ring-white/[0.06]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {light ? <LightHudCorners className="opacity-[0.28]" /> : null}
          <div
            className={`flex shrink-0 items-center justify-between border-b px-5 py-4 md:px-8 md:py-5 ${
              light ? "border-slate-200/90" : "border-white/10"
            }`}
          >
            <div>
              <p
                id="nav-explore-title"
                className="font-heading text-xl tracking-[0.08em] md:text-3xl md:tracking-[0.09em]"
              >
                Explore{" "}
                <HighlightBrush variant={light ? "sky" : "onDark"} as="span">
                  ICAMI
                </HighlightBrush>
              </p>
              <p
                className={`mt-1 text-xs md:text-[0.8125rem] ${light ? "text-slate-500" : "text-zinc-500"}`}
              >
                {site.shortTitle} · {site.location}
              </p>
            </div>
            <button
              type="button"
              onClick={requestClose}
              className={`flex h-11 min-w-[44px] items-center justify-center rounded-full text-lg transition ${
                light
                  ? "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  : "text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="shrink-0 px-5 pb-3 pt-2 md:px-8 md:pb-4 md:pt-3">
            <label htmlFor="nav-explore-filter" className="sr-only">
              Filter pages
            </label>
            <input
              ref={filterInputRef}
              id="nav-explore-filter"
              type="search"
              placeholder="Type to filter pages…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className={`w-full rounded-2xl border px-4 py-3 text-base outline-none transition placeholder:opacity-60 focus:ring-2 md:text-sm ${
                light
                  ? "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 ring-sky-500/20 focus:ring-sky-500/25"
                  : "border-white/12 bg-white/[0.04] text-white placeholder:text-zinc-500 ring-sky-400/15 focus:ring-sky-400/25"
              }`}
              autoComplete="off"
              enterKeyHint="search"
            />
          </div>

          <nav
            className="no-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-8 pt-1 md:px-8 md:pb-10"
            aria-label="Site"
          >
            {filtered.length === 0 ? (
              <p
                className={`py-10 text-center text-sm ${light ? "text-slate-500" : "text-zinc-500"}`}
              >
                No pages match “{q}”.
              </p>
            ) : (
              <div className="flex flex-col gap-9 md:gap-10">
                {filtered.map((group, gi) => {
                  const groupHeadingId = `explore-pillar-${gi}`;
                  return (
                    <section key={group.title} aria-labelledby={groupHeadingId}>
                      <h3
                        id={groupHeadingId}
                        className={`font-heading text-lg leading-tight tracking-[0.05em] md:text-xl md:tracking-[0.06em] ${
                          light ? "text-slate-900" : "text-zinc-100"
                        }`}
                      >
                        <HighlightBrush variant={light ? "sky" : "onDark"} as="span">
                          {group.title}
                        </HighlightBrush>
                      </h3>
                      {group.description ? (
                        <p
                          className={`mt-2 max-w-prose text-sm leading-relaxed md:text-[0.9375rem] ${
                            light ? "text-slate-600" : "text-zinc-400"
                          }`}
                        >
                          {group.description}
                        </p>
                      ) : null}
                      <ul
                        className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2"
                        role="list"
                      >
                        {group.links.map((link) => {
                          const active = isActive(pathname, link.href);
                          return (
                            <li key={link.href} className="min-w-0">
                              <Link
                                href={link.href}
                                onClick={requestClose}
                                className={`flex min-h-[48px] items-center rounded-xl px-4 py-3 text-[0.9375rem] font-medium leading-snug transition md:min-h-[44px] md:py-2.5 ${
                                  light
                                    ? active
                                      ? "bg-slate-100 font-semibold text-slate-950"
                                      : "text-slate-800 hover:bg-slate-50 hover:text-slate-950"
                                    : active
                                      ? "bg-white/[0.1] font-semibold text-white"
                                      : "text-zinc-300 hover:bg-white/[0.07] hover:text-white"
                                }`}
                              >
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  );
                })}
              </div>
            )}
          </nav>
        </div>
      </div>
    </dialog>
  );
});

NavigationOverlay.displayName = "NavigationOverlay";
