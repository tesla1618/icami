"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MobileNavDock } from "@/components/layout/mobile-nav-dock";
import { NavigationOverlay } from "@/components/layout/navigation-overlay";
import { navGroups, site } from "@/config/site";

function NavDropdown({ label, links, pathname }) {
  const hasActive = links.some(
    (l) =>
      l.href === "/"
        ? pathname === "/"
        : pathname === l.href || pathname.startsWith(`${l.href}/`),
  );

  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider transition ${
          hasActive
            ? "text-icami-blue"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }`}
      >
        {label}
        <svg
          className="h-3 w-3 opacity-40 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div className="pointer-events-none absolute right-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="animate-dropdown min-w-[220px] rounded-lg border border-slate-200/90 bg-white/98 py-2 shadow-xl shadow-slate-900/[0.08] backdrop-blur-xl">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`block cursor-pointer px-4 py-2 text-[0.78rem] transition ${
                  active
                    ? "bg-icami-blue/6 font-semibold text-icami-blue"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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

  /** Light hero: keep a readable light header on home as well. */
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
              ? "sticky top-0 z-[300] isolate border-b border-slate-200/80 bg-white pt-[env(safe-area-inset-top,0px)] shadow-sm shadow-slate-900/[0.04] [transform:translateZ(0)] transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out max-md:backdrop-blur-none md:bg-white/95 md:backdrop-blur-xl"
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
                isHome ? "text-slate-900" : "text-slate-900"
              }`}
            >
              {site.shortTitle}
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex">
            <Link
              href="/"
              className={`cursor-pointer rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider transition ${
                pathname === "/"
                  ? "text-icami-blue"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Home
            </Link>
            {navGroups.map((g) => (
              <NavDropdown
                key={g.title}
                label={g.title.split(" & ")[0]}
                links={g.links}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>
      </header>

      <NavigationOverlay
        ref={exploreDialogRef}
        open={open}
        onClose={closeExplore}
        theme={exploreTheme}
      />

      <MobileNavDock
        exploreOpen={open}
        onOpenExplore={openExplore}
      />
    </>
  );
}
