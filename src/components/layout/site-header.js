"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MobileNavDock } from "@/components/layout/mobile-nav-dock";
import { NavigationOverlay } from "@/components/layout/navigation-overlay";
import { navQuick, site } from "@/config/site";

function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

export function SiteHeader() {
  const pathname = usePathname();
  return <SiteHeaderInner key={pathname} />;
}

const HOME_SCROLL_SOLID_PX = 24;

function SiteHeaderInner() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  /** Explore dialog always uses the light card (same as inner pages); homepage header stays dark. */
  const exploreTheme = "light";

  const exploreDialogRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  useLockBody(open);

  useEffect(() => {
    if (!isHome) return;
    const sync = () => {
      setHomeScrolled(window.scrollY > HOME_SCROLL_SOLID_PX);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, [isHome]);

  /** On the homepage: blend into hero until scroll; solid bar while Explore is open. */
  const homeBarSolid = !isHome || homeScrolled || open;

  const openExplore = useCallback(() => {
    const el = exploreDialogRef.current;
    if (el && !el.open) el.showModal();
    setOpen(true);
  }, []);

  const closeExplore = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <header
        className={
          isHome
            ? homeBarSolid
              ? "sticky top-0 z-[300] isolate border-b border-white/[0.07] bg-[#070b14] pt-[env(safe-area-inset-top,0px)] [transform:translateZ(0)] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out max-md:backdrop-blur-none md:bg-[#070b14]/90 md:backdrop-blur-xl"
              : "sticky top-0 z-[300] isolate border-b border-transparent bg-transparent pt-[env(safe-area-inset-top,0px)] shadow-none backdrop-blur-none [transform:translateZ(0)] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out"
            : "sticky top-0 z-[300] isolate relative border-b border-slate-200/80 bg-white pt-[env(safe-area-inset-top,0px)] shadow-sm shadow-slate-900/[0.04] [transform:translateZ(0)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-px after:bg-gradient-to-r after:from-transparent after:via-[#0033a0]/22 after:to-transparent max-md:backdrop-blur-none md:bg-white/95 md:backdrop-blur-xl"
        }
      >
        <div
          className={`relative z-10 mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8 ${
            isHome && !homeBarSolid ? "bg-transparent" : ""
          }`}
        >
          <Link
            href="/"
            className={
              isHome
                ? homeBarSolid
                  ? "focus-visible:ring-sky-400/80 flex min-w-0 flex-1 items-center gap-2 rounded-xl py-1 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b14] sm:min-w-0 sm:flex-initial sm:gap-3"
                  : "focus-visible:ring-sky-400/80 flex min-w-0 flex-1 items-center gap-2 rounded-xl py-1 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:min-w-0 sm:flex-initial sm:gap-3"
                : "focus-visible:ring-sky-500/80 flex min-w-0 flex-1 items-center gap-2 rounded-xl py-1 focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-w-0 sm:flex-initial sm:gap-3"
            }
          >
            <Image
              src="/icami.png"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
              priority
            />
            <span
              className={`font-heading min-w-0 truncate text-[0.95rem] leading-none tracking-wide sm:text-lg ${
                isHome
                  ? homeBarSolid
                    ? "text-white"
                    : "text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.45)]"
                  : "text-slate-900"
              }`}
            >
              {site.shortTitle}
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex">
            {navQuick.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className={
                  isHome
                    ? homeBarSolid
                      ? "rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/10"
                      : "rounded-full border border-transparent bg-transparent px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] transition-colors hover:bg-white/[0.08]"
                    : "rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 transition hover:border-sky-200 hover:bg-sky-50"
                }
              >
                {q.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto hidden shrink-0 items-center gap-2 sm:gap-3 lg:flex">
            <button
              type="button"
              onClick={openExplore}
              className={
                isHome
                  ? homeBarSolid
                    ? "group relative z-20 isolate flex min-h-[44px] min-w-0 shrink-0 cursor-pointer touch-manipulation items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] [-webkit-tap-highlight-color:transparent]"
                    : "group relative z-20 flex min-h-[44px] min-w-0 shrink-0 cursor-pointer touch-manipulation items-center justify-center gap-2 rounded-full border border-transparent bg-transparent px-5 py-2 text-sm font-semibold text-white shadow-none ring-0 transition hover:bg-white/[0.07] [-webkit-tap-highlight-color:transparent]"
                  : "group relative z-20 isolate flex min-h-[44px] min-w-0 shrink-0 cursor-pointer touch-manipulation items-center justify-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-300/80 hover:bg-sky-50/80 [-webkit-tap-highlight-color:transparent]"
              }
              aria-expanded={open}
              aria-controls="nav-explore-overlay"
              aria-haspopup="dialog"
            >
              {!isHome ? (
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-amber-400/10 opacity-0 transition group-hover:opacity-100" />
              ) : homeBarSolid ? (
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0033a0]/40 via-sky-600/20 to-amber-500/10 opacity-90" />
              ) : null}
              <span className="relative z-10 grid h-5 w-5 shrink-0 grid-cols-2 grid-rows-2 gap-0.5 place-items-center">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className={`pointer-events-none h-1.5 w-1.5 rounded-sm ${
                      isHome ? "bg-white/90" : "bg-sky-600"
                    }`}
                  />
                ))}
              </span>
              <span className="relative z-10 font-heading tracking-wide">Explore</span>
            </button>
          </div>
        </div>
      </header>

      <NavigationOverlay
        ref={exploreDialogRef}
        open={open}
        onClose={closeExplore}
        theme={exploreTheme}
      />

      <MobileNavDock isHome={isHome} exploreOpen={open} onOpenExplore={openExplore} />
    </>
  );
}
