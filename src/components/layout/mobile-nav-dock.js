"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function DockIcon({ name }) {
  const common = "h-6 w-6 shrink-0";
  if (name === "home") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    );
  }
  if (name === "cfp") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    );
  }
  if (name === "dates") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    );
  }
  return null;
}

function DockLink({ href, label, icon, active, isHome }) {
  return (
    <Link
      href={href}
      className={`flex min-h-[52px] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wide md:transition md:active:scale-95 ${
        active
          ? isHome
            ? "text-sky-300"
            : "text-sky-700"
          : isHome
            ? "text-zinc-500 hover:text-zinc-300"
            : "text-slate-500 hover:text-slate-800"
      }`}
    >
      <DockIcon name={icon} />
      <span className="truncate">{label}</span>
    </Link>
  );
}

export function MobileNavDock({ isHome, exploreOpen, onOpenExplore }) {
  const pathname = usePathname();

  const active = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-[140] border-t lg:hidden ${
        isHome
          ? "border-white/10 bg-[#070b14]/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-xl"
          : "border-slate-200/90 bg-white/95 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-8px_30px_-12px_rgba(15,23,42,0.12)] backdrop-blur-xl"
      }`}
      aria-label="Quick navigation"
    >
      <div className="mx-auto flex max-w-lg items-stretch justify-between gap-0.5 px-1 pt-1">
        <DockLink href="/" label="Home" icon="home" active={active("/")} isHome={isHome} />
        <DockLink
          href="/call-for-papers"
          label="CfP"
          icon="cfp"
          active={active("/call-for-papers")}
          isHome={isHome}
        />
        <DockLink
          href="/important-dates"
          label="Dates"
          icon="dates"
          active={active("/important-dates")}
          isHome={isHome}
        />
        <button
          type="button"
          onClick={onOpenExplore}
          aria-expanded={exploreOpen}
          aria-haspopup="dialog"
          aria-controls="nav-explore-overlay"
          className={`flex min-h-[52px] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wide md:transition md:active:scale-95 ${
            isHome
              ? "text-amber-300/95 hover:text-amber-200"
              : "text-amber-700 hover:text-amber-800"
          }`}
        >
          <DockIcon name="grid" />
          <span>Menu</span>
        </button>
      </div>
    </nav>
  );
}
