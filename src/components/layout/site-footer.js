"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, footerQuick, navMore } from "@/config/site";

/** Formal conference-appropriate credit; confident tone without casual slang. */
function FooterDeveloperCredit({ tone }) {
  const dark = tone === "dark";
  const { name, githubUrl, affiliation, labUrl } = site.developer;
  const body = dark ? "text-zinc-500" : "text-slate-600";
  const linkClass = dark
    ? "font-semibold text-sky-300/95 underline decoration-sky-400/40 underline-offset-[3px] transition-colors hover:text-white hover:decoration-white/55"
    : "font-semibold text-icami-blue underline decoration-icami-blue/40 underline-offset-[3px] transition-colors hover:text-sky-800 hover:decoration-sky-800/50";

  return (
    <div className="mx-auto mt-4 max-w-xl">
      <p
        className={`icami-mono-eyebrow mb-2.5 ${dark ? "text-zinc-500" : "text-slate-500"}`}
      >
        Web implementation
      </p>
      <p className={`text-[0.8125rem] leading-relaxed sm:text-sm ${body}`}>
        This conference website is architected, deployed, and maintained by{" "}
        <a
          href={githubUrl}
          className={linkClass}
          rel="noopener noreferrer"
          target="_blank"
        >
          {name}
        </a>
        .<br />A researcher at the{" "}
        <a
          href={labUrl}
          className={linkClass}
          rel="noopener noreferrer"
          target="_blank"
        >
          {affiliation}
        </a>
        .
      </p>
      <p className={`mt-3 text-[0.75rem] sm:text-xs ${body}`}>
        This website is free and open source ❤️ Contributions, improvements, and
        feedback are welcome via{" "}
        <a
          href="https://github.com/tesla1618/icami"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}

export function SiteFooter() {
  const isHome = usePathname() === "/";

  if (isHome) {
    return (
      <footer className="relative border-t border-white/[0.07] bg-[#010208] text-zinc-300">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0033a0]/40 to-transparent"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,51,160,0.12),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-3 sm:px-10 md:px-14">
          <div>
            <p className="font-heading text-xl tracking-[0.12em] text-white">
              {site.shortTitle}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              {site.fullTitle}
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-zinc-600">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-icami-blue to-amber-500 shadow-[0_0_12px_rgba(30,92,255,0.6)]"
                aria-hidden
              />
              {site.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Quick links
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {footerQuick.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Contact
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-5 inline-block text-sm text-sky-300/95 transition-colors hover:text-white"
            >
              {site.contactEmail}
            </a>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <a
                href={site.social.linkedin}
                className="text-zinc-500 transition-colors hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href={site.social.twitter}
                className="text-zinc-500 transition-colors hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                X / Twitter
              </a>
            </div>
            <ul className="mt-8 space-y-2 text-xs text-zinc-600">
              {navMore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-zinc-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative border-t border-white/[0.04] px-5 py-7 text-center text-xs sm:px-10 md:px-14">
          <p className="text-zinc-500">
            © 2026{" "}
            <strong className="text-icami-blue hover:text-icami-blue-bright cursor-pointer hover:underline">
              ICAMI
            </strong>
            . All rights reserved.
          </p>
          <FooterDeveloperCredit tone="dark" />
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative border-t border-slate-200/90 bg-slate-100 text-slate-600">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0033a0]/18 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-10 md:px-14">
        <div>
          <p className="font-heading text-xl tracking-[0.12em] text-slate-900">
            {site.shortTitle}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            {site.fullTitle}
          </p>
          <p className="mt-5 text-sm text-slate-500">{site.location}</p>
        </div>
        <div>
          <p className="icami-mono-eyebrow text-slate-500">Quick links</p>
          <ul className="mt-5 space-y-3 text-sm">
            {footerQuick.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-600 transition-colors hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="icami-mono-eyebrow text-slate-500">Contact</p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-5 inline-block text-sm text-icami-blue transition-colors hover:text-sky-700"
          >
            {site.contactEmail}
          </a>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a
              href={site.social.linkedin}
              className="text-slate-500 transition-colors hover:text-slate-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href={site.social.twitter}
              className="text-slate-500 transition-colors hover:text-slate-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              X / Twitter
            </a>
          </div>
          <ul className="mt-8 space-y-2 text-xs text-slate-500">
            {navMore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-slate-800">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/80 px-5 py-6 text-center text-xs sm:px-10 md:px-14">
        <p className="text-slate-500">
          © 2026{" "}
          <strong className="text-icami-blue hover:text-icami-blue-muted cursor-pointer hover:underline">
            ICAMI
          </strong>
          . All rights reserved.
        </p>
        <FooterDeveloperCredit tone="light" />
      </div>
    </footer>
  );
}
