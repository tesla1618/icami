"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

const INFO = [
  { label: "Submission deadline", value: "July 2026" },
  { label: "Notification", value: "October 2026" },
  { label: "Conference", value: "December 2026" },
];

export function HeroSection() {
  const reduce = useReducedMotion();

  const fade = (delay = 0) =>
    reduce
      ? { initial: {}, animate: {} }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative isolate h-[88svh] min-h-[36rem] overflow-hidden lg:h-[720px] lg:min-h-[720px]">
      {/* Background */}
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(2,4,12,0.82) 0%, rgba(2,4,12,0.55) 45%, rgba(2,4,12,0.22) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1/3"
        style={{
          background:
            "linear-gradient(to top, rgba(2,4,12,0.85) 0%, transparent 100%)",
        }}
      />

      {/* Full-height content grid — uses absolute + inset so padding doesn't break height */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-between pt-[calc(2rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6rem+env(safe-area-inset-top,0px))]"
        style={{
          paddingBottom: "calc(1rem + 56px)",
        }}
      >
        <div
          className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 h-full px-5 sm:px-8 lg:px-12 lg:pb-0"
          style={{ paddingBottom: "0" }}
        >
          {/* ── Logo ── */}
          <motion.div {...fade(0)} className="shrink-0 ">
            <Image
              id="hero-logo"
              src="/icami_nav_dark.svg"
              alt={site.shortTitle}
              width={480}
              height={240}
              className="h-full w-full sm:h-auto sm:w-[clamp(9rem,28vw,26rem)] drop-shadow-[0_2px_24px_rgba(30,92,255,0.4)]"
              priority
            />
          </motion.div>

          {/* ── Main content ── */}
          <div className="flex max-w-2xl flex-col gap-3 xl:max-w-3xl">
            <motion.p
              {...fade(0.12)}
              className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-amber-300/90"
            >
              {site.location} · December 2026
            </motion.p>

            <motion.p
              {...fade(0.22)}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-300/90 sm:text-[0.78rem]"
            >
              {site.fullTitle}
            </motion.p>

            <motion.p
              {...fade(0.3)}
              className="max-w-lg text-[0.92rem] leading-relaxed text-slate-200/80 sm:text-base"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              {...fade(0.38)}
              className="flex flex-wrap gap-3 pt-1 sm:gap-4"
            >
              <Link
                href="/call-for-papers"
                className="inline-flex min-h-[44px] items-center justify-center bg-white px-6 text-[0.78rem] font-bold uppercase tracking-wider text-slate-900 shadow-[0_14px_40px_-12px_rgba(255,255,255,0.25)] transition hover:bg-sky-50 hover:text-icami-blue"
              >
                Call for Papers
              </Link>
              <Link
                href="/submission"
                className="inline-flex min-h-[44px] items-center justify-center border border-white/40 px-6 text-[0.78rem] font-bold uppercase tracking-wider text-white transition hover:border-white/80 hover:bg-white/10"
              >
                Submit Paper
              </Link>
            </motion.div>
          </div>

          {/* ── Bottom info strip ── */}
          <motion.div {...fade(0.5)} className="shrink-0">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div className="flex flex-wrap gap-2">
                {INFO.map((d) => (
                  <div
                    key={d.label}
                    className="rounded-sm border border-white/15 bg-white/8 px-3 py-2 backdrop-blur-md"
                  >
                    <p className="font-mono text-[0.5rem] uppercase tracking-[0.26em] text-slate-400">
                      {d.label}
                    </p>
                    <p className="mt-0.5 font-heading text-base tracking-[0.08em] text-white">
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/venue"
                className="group flex shrink-0 items-center gap-2 rounded-sm border border-white/15 bg-white/8 px-3 py-2.5 backdrop-blur-md transition hover:border-white/30 hover:bg-white/14"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-amber-300/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-white/90 transition group-hover:text-white">
                  {site.location}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
