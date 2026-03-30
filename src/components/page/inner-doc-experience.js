"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { docPageLabel } from "@/lib/doc-route-labels";
import { slugify } from "@/lib/slugify";
import { MotionDocument } from "@/components/page/motion-document";

function DocBreadcrumb({ pathname }) {
  const current = docPageLabel(pathname);
  return (
    <nav
      className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-slate-500"
      aria-label="Breadcrumb"
    >
      <Link href="/" className="text-icami-blue transition-colors hover:text-sky-700">
        Home
      </Link>
      <span className="text-slate-300" aria-hidden>
        /
      </span>
      <span className="text-slate-800" aria-current="page">
        {current}
      </span>
    </nav>
  );
}

function useHeadingScan(proseRef, pathname) {
  const [toc, setToc] = useState([]);
  const scan = useCallback(() => {
    const root = proseRef.current;
    if (!root) return;
    const seen = {};
    const nodes = root.querySelectorAll("h2, h3");
    const items = [];
    nodes.forEach((el) => {
      const text = (el.textContent || "").trim();
      if (!text) return;
      let base = slugify(text);
      let id = base;
      if (seen[base]) {
        seen[base] += 1;
        id = `${base}-${seen[base]}`;
      } else {
        seen[base] = 1;
      }
      el.id = id;
      items.push({ id, text, level: el.tagName === "H3" ? 3 : 2 });
    });
    setToc(items);
  }, [proseRef]);

  useLayoutEffect(() => {
    queueMicrotask(() => {
      scan();
    });
  }, [pathname, scan]);

  return toc;
}

function useActiveSection(toc) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (toc.length === 0) return;
    const els = toc.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => {
          const ra = a.boundingClientRect.top;
          const rb = b.boundingClientRect.top;
          return ra - rb;
        });
        const top = visible[0]?.target?.id;
        if (top) queueMicrotask(() => setActiveId(top));
      },
      {
        rootMargin: "-20% 0px -52% 0px",
        threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [toc]);

  return [activeId, setActiveId];
}

const NO_MATCHES = [];

function useInPageMatches(proseRef, query, tocFingerprint) {
  const [matches, setMatches] = useState(NO_MATCHES);

  useEffect(() => {
    const root = proseRef.current;
    const q = query.trim().toLowerCase();
    if (!root || !q) {
      queueMicrotask(() => setMatches(NO_MATCHES));
      return;
    }
    const sel = root.querySelectorAll("p, li, td, th, dt, dd, h2, h3");
    const next = [...sel].filter((el) => (el.textContent || "").toLowerCase().includes(q));
    queueMicrotask(() => setMatches(next));
  }, [proseRef, query, tocFingerprint]);

  return matches;
}

function DocRadarPanel({
  proseRef,
  toc,
  activeId,
  setActiveId,
  findQuery,
  setFindQuery,
  inputRef,
  compact,
  reduceMotion,
}) {
  const tocFingerprint = toc.map((t) => t.id).join("|");
  const matches = useInPageMatches(proseRef, findQuery, tocFingerprint);
  const [matchIdx, setMatchIdx] = useState(0);

  useEffect(() => {
    queueMicrotask(() => setMatchIdx(0));
  }, [findQuery]);

  useEffect(() => {
    if (matches.length === 0) return;
    const i = Math.min(matchIdx, matches.length - 1);
    const el = matches[i];
    el.classList.add("icami-doc-match-active");
    el.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
    return () => {
      el.classList.remove("icami-doc-match-active");
    };
  }, [matches, matchIdx, reduceMotion]);

  const filteredToc = useMemo(() => {
    const q = findQuery.trim().toLowerCase();
    if (!q) return toc;
    return toc.filter((t) => t.text.toLowerCase().includes(q));
  }, [toc, findQuery]);

  return (
    <div
      className={`min-w-0 w-full space-y-5 ${compact ? "" : "icami-chamfer border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 p-5 shadow-[0_8px_32px_-12px_rgba(0,51,160,0.1)]"}`}
    >
      <div>
        <p className="icami-mono-eyebrow mb-2 border-l-[3px] border-icami-blue pl-2.5 !text-icami-blue">
          Find on page
        </p>
        <div className="flex w-full min-w-0 flex-col gap-2">
          <input
            ref={inputRef}
            type="search"
            value={findQuery}
            onChange={(e) => setFindQuery(e.target.value)}
            placeholder="Type to scan…"
            className="box-border min-h-11 w-full max-w-full border border-slate-200 bg-white px-3 py-2 font-mono text-sm text-slate-900 outline-none ring-sky-500/30 placeholder:text-slate-400 focus:ring-2"
            aria-label="Find text on this page"
          />
          {findQuery.trim() ? (
            <div className="flex w-full min-w-0 flex-wrap items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-slate-500">
              <button
                type="button"
                className="icami-chamfer border border-slate-200 bg-white px-2.5 py-1.5 transition-colors hover:border-sky-300 hover:text-icami-blue"
                onClick={() => setMatchIdx((i) => (i <= 0 ? matches.length - 1 : i - 1))}
                disabled={matches.length === 0}
              >
                Prev
              </button>
              <span className="min-w-[3.5rem] text-center">
                {matches.length ? matchIdx + 1 : 0}/{matches.length}
              </span>
              <button
                type="button"
                className="icami-chamfer border border-slate-200 bg-white px-2.5 py-1.5 transition-colors hover:border-sky-300 hover:text-icami-blue"
                onClick={() => setMatchIdx((i) => (i >= matches.length - 1 ? 0 : i + 1))}
                disabled={matches.length === 0}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
        <p className="mt-2 font-mono text-[0.6rem] text-slate-400">
          Press <kbd className="rounded border border-slate-200 bg-slate-100 px-1 py-0.5">/</kbd> to
          focus
        </p>
      </div>

      <div>
        <p className="icami-mono-eyebrow mb-3 border-l-[3px] border-icami-blue pl-2.5 !text-icami-blue">
          On this page
        </p>
        {filteredToc.length === 0 ? (
          <p className="text-sm text-slate-500">
            {toc.length === 0
              ? "No section headings — use Find to jump to matching text."
              : "No headings match your filter."}
          </p>
        ) : (
          <ul className="space-y-0.5" role="list">
            {filteredToc.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? "location" : undefined}
                    className={`block rounded-r-md border-l-[3px] py-2 pl-3 text-sm leading-snug transition-[background-color,border-color,color,box-shadow] ${
                      item.level === 3 ? "pl-5" : "pl-3"
                    } ${
                      active
                        ? "border-icami-blue bg-gradient-to-r from-sky-100/95 to-sky-50/40 font-semibold text-icami-blue shadow-[inset_0_0_0_1px_rgba(30,92,255,0.12)]"
                        : "border-transparent font-medium text-slate-700 hover:border-slate-200 hover:bg-slate-50/90 hover:text-icami-blue"
                    } ${item.level === 3 && !active ? "text-slate-600" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveId(item.id);
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: reduceMotion ? "auto" : "smooth",
                        block: "start",
                      });
                      history.replaceState(null, "", `#${item.id}`);
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

/**
 * Breadcrumb + sticky TOC + in-page “radar” find — wraps document body.
 */
export function InnerDocExperience({ title, eyebrow, children }) {
  const pathname = usePathname() || "";
  const proseRef = useRef(null);
  const findInputDesktopRef = useRef(null);
  const findInputMobileRef = useRef(null);
  const [findQuery, setFindQuery] = useState("");
  const reduceMotion = useReducedMotion();

  const toc = useHeadingScan(proseRef, pathname);
  const [activeId, setActiveId] = useActiveSection(toc);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash || toc.length === 0) return;
    const el = document.getElementById(hash);
    if (!el || !proseRef.current?.contains(el)) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [toc, reduceMotion, proseRef]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      e.preventDefault();
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      (desktop ? findInputDesktopRef : findInputMobileRef).current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div
        className="sticky top-[calc(4rem+env(safe-area-inset-top,0px))] z-[280] -mx-6 mb-8 border-b border-slate-200/90 bg-white/95 px-6 py-3 backdrop-blur-md sm:-mx-10 sm:px-10 md:-mx-14 md:px-14"
      >
        <DocBreadcrumb pathname={pathname} />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <aside className="order-2 hidden min-w-0 lg:order-1 lg:col-span-4 lg:block xl:col-span-3">
          <div className="sticky top-[calc(4rem+env(safe-area-inset-top,0px)+3.25rem)] z-20 max-h-[calc(100svh-4rem-3.25rem-1.5rem-env(safe-area-inset-top,0px))] min-h-0 space-y-6 overflow-x-hidden overflow-y-auto overscroll-contain pr-0.5 [-webkit-overflow-scrolling:touch]">
            <DocRadarPanel
              proseRef={proseRef}
              toc={toc}
              activeId={activeId}
              setActiveId={setActiveId}
              findQuery={findQuery}
              setFindQuery={setFindQuery}
              inputRef={findInputDesktopRef}
              compact={false}
              reduceMotion={reduceMotion}
            />
          </div>
        </aside>

        <div className="order-1 min-w-0 lg:order-2 lg:col-span-8 xl:col-span-9">
          <details className="group mb-8 border border-slate-200/90 bg-slate-50/50 lg:hidden">
            <summary className="cursor-pointer list-none px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                Jump &amp; find on this page
                <span className="text-slate-400 transition group-open:rotate-180">▼</span>
              </span>
            </summary>
            <div className="border-t border-slate-200/80 p-4">
              <DocRadarPanel
                proseRef={proseRef}
                toc={toc}
                activeId={activeId}
                setActiveId={setActiveId}
                findQuery={findQuery}
                setFindQuery={setFindQuery}
                inputRef={findInputMobileRef}
                compact
                reduceMotion={reduceMotion}
              />
            </div>
          </details>

          <MotionDocument proseRef={proseRef} title={title} eyebrow={eyebrow}>
            {children}
          </MotionDocument>
        </div>
      </div>
    </>
  );
}
