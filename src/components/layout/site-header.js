"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MobileNavDock } from "@/components/layout/mobile-nav-dock";
import { NavigationOverlay } from "@/components/layout/navigation-overlay";
import { navGroups, site } from "@/config/site";

function isLinkActive(pathname, href) {
  if (href === "/") return pathname === "/";
  if (href === "/registration") return pathname === "/registration";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active, transparent) {
  if (active) {
    return (
      "cursor-pointer rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider underline decoration-icami-blue decoration-2 underline-offset-[6px]" +
      (transparent ? " text-white" : " text-slate-900")
    );
  }
  return (
    "cursor-pointer rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider transition" +
    (transparent
      ? " text-white/80 hover:text-white hover:bg-white/10"
      : " text-slate-600 hover:bg-slate-100 hover:text-slate-900")
  );
}

function NavDropdown({ label, links, pathname, transparent }) {
  const activeLink = links.find((l) => isLinkActive(pathname, l.href));
  const displayLabel = activeLink ? activeLink.label : label;

  const btnBase =
    "relative flex cursor-pointer items-center gap-1 rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider transition max-w-[11rem]";
  const btnClass = activeLink
    ? `${btnBase} after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:rounded-full after:bg-icami-blue after:content-['']${transparent ? " text-white" : " text-slate-900"}`
    : `${btnBase}${transparent ? " text-white/80 hover:text-white hover:bg-white/10" : " text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`;

  return (
    <div className="group relative">
      <button type="button" className={btnClass}>
        <span className="truncate">{displayLabel}</span>
        <svg
          className="h-3 w-3 opacity-40 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <div className="pointer-events-none absolute right-0 top-full z-50 pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="animate-dropdown min-w-[220px] rounded-lg border border-slate-200/90 bg-white/98 py-2 shadow-xl shadow-slate-900/[0.08] backdrop-blur-xl">
          {links.map((l) => {
            const active = isLinkActive(pathname, l.href);
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

function SiteHeaderInner() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const exploreTheme = "light";

  const exploreDialogRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);

  const navLogoRef = useRef(null);
  const travelingLogoRef = useRef(null);
  const heroDataRef = useRef(null);

  useLockBody(open);

  useEffect(() => {
    if (!isHome) return;

    const heroEl = document.getElementById("hero-logo");
    const navSlot = navLogoRef.current;
    const travelEl = travelingLogoRef.current;

    if (!heroEl || !navSlot || !travelEl) {
      const sync = () => setHomeScrolled(window.scrollY > 80);
      sync();
      window.addEventListener("scroll", sync, { passive: true });
      return () => window.removeEventListener("scroll", sync);
    }

    const capture = () => {
      const r = heroEl.getBoundingClientRect();
      heroDataRef.current = {
        absTop: r.top + window.scrollY,
        left: r.left,
        width: r.width,
        height: r.height,
      };
    };
    capture();

    let prevArrived = null;

    const update = () => {
      const hero = heroDataRef.current;
      if (!hero) return;

      const nr = navSlot.getBoundingClientRect();
      const scrollY = window.scrollY;

      const threshold = Math.max(hero.absTop - nr.top, 60);
      const rawUnclamped = scrollY / threshold;
      const raw = Math.min(1, Math.max(0, rawUnclamped));

      // easeOutCubic
      const t = 1 - Math.pow(1 - raw, 3);

      // Interpolate
      const heroViewY = hero.absTop - scrollY;
      const scaledH = hero.height * (nr.width / hero.width);
      const targetY = nr.top + (nr.height - scaledH) / 2;

      const y = heroViewY + (targetY - heroViewY) * t;
      const x = hero.left + (nr.left - hero.left) * t;
      const w = hero.width + (nr.width - hero.width) * t;

      travelEl.style.top = `${y}px`;
      travelEl.style.left = `${x}px`;
      travelEl.style.width = `${w}px`;

      // Traveling logo opacity: hidden at rest, visible during travel, fades past arrival
      let travelOp;
      if (raw <= 0) {
        travelOp = 0;
      } else if (raw < 1) {
        travelOp = 1;
      } else {
        // Fade out over 30px past threshold so it cross-fades with the nav logo
        travelOp = Math.max(0, 1 - (rawUnclamped - 1) * 3);
      }
      travelEl.style.opacity = String(travelOp);

      // Drop shadow fades as logo shrinks toward navbar
      travelEl.style.filter = `drop-shadow(0 2px 24px rgba(30,92,255,${(0.4 * (1 - t)).toFixed(3)}))`;

      // Fade out the actual hero logo so it doesn't double up
      heroEl.style.opacity = String(Math.max(0, 1 - raw * 2.5));

      // Trigger header solid state slightly before full arrival for smooth cross-fade
      const arrived = raw >= 0.92;
      if (arrived !== prevArrived) {
        prevArrived = arrived;
        setHomeScrolled(arrived);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    const onResize = () => {
      capture();
      update();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
      if (heroEl) heroEl.style.opacity = "1";
    };
  }, [isHome]);

  const homeBarSolid = !isHome || homeScrolled || open;
  const transparent = isHome && !homeBarSolid;

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
        <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
          {/* Nav logo slot — always occupies space, opacity controlled by state */}
          <div
            ref={navLogoRef}
            className={`shrink-0 transition-opacity duration-150 ${
              transparent ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Link
              href="/"
              className="block rounded-xl py-1"
              tabIndex={transparent ? -1 : undefined}
            >
              <Image
                src="https://cdn.icami.net/icami.png"
                alt=""
                width={70}
                height={70}
                className="h-9 w-9 shrink-0 object-contain sm:h-16 sm:w-16"
                priority
              />
            </Link>
          </div>

          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex">
            <Link
              href="/"
              className={navLinkClass(pathname === "/", transparent)}
            >
              Home
            </Link>
            {navGroups.map((g) => (
              <NavDropdown
                key={g.title}
                label={g.title.split(" & ")[0]}
                links={g.links}
                pathname={pathname}
                transparent={transparent}
              />
            ))}
            <Link
              href="/contact"
              className={navLinkClass(
                pathname === "/contact" || pathname.startsWith("/contact/"),
                transparent,
              )}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Traveling logo — floats from hero position to navbar on scroll */}
      {isHome && (
        <div
          ref={travelingLogoRef}
          className="pointer-events-none fixed z-[400]"
          style={{
            opacity: 0,
            willChange: "top, left, width, opacity, filter",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icami_dark.png"
            alt=""
            width={480}
            height={240}
            className="h-auto w-full object-contain"
          />
        </div>
      )}

      <NavigationOverlay
        ref={exploreDialogRef}
        open={open}
        onClose={closeExplore}
        theme={exploreTheme}
      />

      <MobileNavDock exploreOpen={open} onOpenExplore={openExplore} />
    </>
  );
}
