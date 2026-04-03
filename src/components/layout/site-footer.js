"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site, footerQuick, navMore } from "@/config/site";

// Exactly the narrative sequence the cat dictated.
const KOMOLAKANTO_IMAGES = [
  "/komolakanto/well_it_was_me.jpg", // 0  961×1280
  "/komolakanto/I_am_Komolakanto.jpg", // 1  961×1280
  "/komolakanto/Im_a_senior_architect_at_nap_division_of_my_dads_job_or_whatever_he_does.jpg", // 2  961×1280
  "/komolakanto/You_may_be_thinking_is_this_a_joke.jpg", // 3  1280×961
  "/komolakanto/well_for_legal_reason_its_not_a_joke.jpg", // 4  961×1280
  "/komolakanto/I_am_the_one_that_commands_him.jpg", // 5  1280×1233
  "/komolakanto/and_he_obeys_them_all.jpg", // 6  1280×947
  "/komolakanto/see_I_am_the_one_guiding_him.jpg", // 7  631×1280
  "/komolakanto/showing_him_the_proper_way.jpg", // 8  1080×1145
  "/komolakanto/to_build_this_website.jpg", // 9  1280×961
  "/komolakanto/now_that_its_live_all_credit_goes_to_him_huh.jpg", // 10 1195×1280
];

// lp = label position (tl/tr/bl/br), rot = slight tilt for comic panel feel
const LABEL_POS = {
  bl: { bottom: "10px", left: "10px" },
  br: { bottom: "10px", right: "10px" },
  tl: { top: "10px", left: "10px" },
  tr: { top: "10px", right: "10px" },
};

/**
 * 7 groups following the script exactly.
 * Solo panels are shown at a narrower maxWidth so portrait images aren't stretched.
 * Pairs/trios share the same row so every cell gets identical height (zero cropping).
 */
const COLLAGE_GROUPS = [
  // 1. Opening reveal — solo
  {
    maxWidth: "clamp(300px, min(72vw, 62vh), 700px)",
    captions: ["Well, it was me."],
    rows: [
      [
        {
          src: 0,
          w: 961,
          h: 1280,
          lp: "bl",
          rot: "-1.2deg",
          anim: "komo-reveal-bottom",
        },
      ],
    ],
  },
  // 2. Introduction — solo
  {
    maxWidth: "clamp(300px, min(72vw, 62vh), 700px)",
    captions: ["I am Komolakanto."],
    rows: [
      [
        {
          src: 1,
          w: 961,
          h: 1280,
          lp: "tr",
          rot: "1deg",
          anim: "komo-reveal-left",
        },
      ],
    ],
  },
  // 3. Credential — solo (the funny long one)
  {
    maxWidth: "clamp(300px, min(72vw, 62vh), 700px)",
    captions: [
      "I'm a senior architect, at nap division of my dad's job or whatever he does.",
    ],
    rows: [
      [
        {
          src: 2,
          w: 961,
          h: 1280,
          lp: "bl",
          rot: "-0.8deg",
          anim: "komo-reveal-right",
        },
      ],
    ],
  },
  // 4. Skepticism Q&A — pair
  {
    maxWidth: "clamp(360px, 86vw, 1100px)",
    captions: [
      "You may be thinking, is this a joke?",
      "For legal reason, it's not a joke.",
    ],
    rows: [
      [
        {
          src: 3,
          w: 1280,
          h: 961,
          lp: "bl",
          rot: "1.1deg",
          anim: "komo-reveal-left",
        },
        {
          src: 4,
          w: 961,
          h: 1280,
          lp: "tr",
          rot: "-1deg",
          anim: "komo-reveal-top",
        },
      ],
    ],
  },
  // 5. Authority — pair
  {
    maxWidth: "clamp(360px, 86vw, 1100px)",
    captions: ["I am the one that commands him.", "And he obeys them all."],
    rows: [
      [
        {
          src: 5,
          w: 1280,
          h: 1233,
          lp: "tl",
          rot: "-1.3deg",
          anim: "komo-reveal-top",
        },
        {
          src: 6,
          w: 1280,
          h: 947,
          lp: "br",
          rot: "0.9deg",
          anim: "komo-reveal-right",
        },
      ],
    ],
  },
  // 6. Evidence — trio (the guiding sequence)
  {
    maxWidth: "clamp(400px, 92vw, 1300px)",
    captions: [
      "See? I am the one guiding him.",
      "Showing him the proper way.",
      "To build this website.",
    ],
    rows: [
      [
        {
          src: 7,
          w: 631,
          h: 1280,
          lp: "bl",
          rot: "-1.1deg",
          anim: "komo-reveal-left",
        },
        {
          src: 8,
          w: 1080,
          h: 1145,
          lp: "br",
          rot: "0.8deg",
          anim: "komo-reveal-bottom",
        },
        {
          src: 9,
          w: 1280,
          h: 961,
          lp: "tr",
          rot: "-0.7deg",
          anim: "komo-reveal-right",
        },
      ],
    ],
  },
  // 7. Punchline finale — solo
  {
    maxWidth: "clamp(300px, min(72vw, 77vh), 800px)",
    captions: ["Now that it's live, all credit goes to him? Huh!"],
    rows: [
      [
        {
          src: 10,
          w: 1195,
          h: 1280,
          lp: "bl",
          rot: "1.2deg",
          anim: "komo-reveal-top",
        },
      ],
    ],
  },
];

/** Formal conference-appropriate credit; confident tone without casual slang. */
function FooterDeveloperCredit({ tone }) {
  const dark = tone === "dark";
  const { name, githubUrl, affiliation, labUrl } = site.developer;

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [blackOpaque, setBlackOpaque] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [introLine, setIntroLine] = useState(0);
  // phase: 'idle' | 'building' | 'full' | 'fadeout' | 'profile'
  const [phase, setPhase] = useState("idle");
  const [groupIdx, setGroupIdx] = useState(0);
  const [revealed, setRevealed] = useState(0);
  const [captionRevealed, setCaptionRevealed] = useState(0);
  // profileStep: 0 = Komolakanto card, 1 = letter-by-letter overwrite animation
  const [profileStep, setProfileStep] = useState(0);
  // counts how many characters have been overwritten so far
  const [overwriteChars, setOverwriteChars] = useState(0);

  const timersRef = useRef([]);
  const overwriteIntervalRef = useRef(null);

  // Texts for the overwrite animation (Komolakanto → Rajieb) — name then title only
  const OW_KOMO_NAME = "Komolakanto A.";
  const OW_RAJIEB_NAME = name;
  const OW_KOMO_TITLE = "Senior Architect · Nap Division";
  const OW_RAJIEB_TITLE = `Researcher, ${affiliation}`;
  const OW_OFF_NAME = 0;
  const OW_OFF_TITLE = Math.max(OW_KOMO_NAME.length, OW_RAJIEB_NAME.length);
  const OW_TOTAL =
    OW_OFF_TITLE + Math.max(OW_KOMO_TITLE.length, OW_RAJIEB_TITLE.length);

  // Returns the in-progress overwrite text for one field
  const ow = (from, to, globalPos, offset) => {
    const pos = Math.max(0, globalPos - offset);
    const len = Math.max(from.length, to.length);
    let out = "";
    for (let i = 0; i < len; i++) {
      if (i < pos) out += i < to.length ? to[i] : "";
      else if (i === pos && pos < len) out += "█";
      else out += i < from.length ? from[i] : "";
    }
    return out;
  };

  const body = dark ? "text-zinc-500" : "text-slate-600";
  const linkClass = dark
    ? "font-semibold cursor-pointer text-sky-300/95 underline decoration-sky-400/40 underline-offset-[3px] transition-colors hover:text-white hover:decoration-white/55"
    : "font-semibold cursor-pointer text-icami-blue underline decoration-icami-blue/40 underline-offset-[3px] transition-colors hover:text-sky-800 hover:decoration-sky-800/50";

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const sched = (fn, delay) => {
    const t = setTimeout(fn, delay);
    timersRef.current.push(t);
  };

  useEffect(
    () => () => {
      clearTimers();
      if (overwriteIntervalRef.current)
        clearInterval(overwriteIntervalRef.current);
    },
    [],
  );

  // Drive the letter-by-letter overwrite when profileStep flips to 1
  useEffect(() => {
    if (phase !== "profile" || profileStep !== 1) {
      if (overwriteIntervalRef.current) {
        clearInterval(overwriteIntervalRef.current);
        overwriteIntervalRef.current = null;
      }
      return;
    }
    setOverwriteChars(0);
    overwriteIntervalRef.current = setInterval(() => {
      setOverwriteChars((prev) => {
        if (prev >= OW_TOTAL) {
          clearInterval(overwriteIntervalRef.current);
          overwriteIntervalRef.current = null;
          return OW_TOTAL;
        }
        return prev + 1;
      });
    }, 55);
    return () => {
      if (overwriteIntervalRef.current) {
        clearInterval(overwriteIntervalRef.current);
        overwriteIntervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, profileStep]);

  const triggerKomolakantoEasterEgg = () => {
    clearTimers();
    setOverlayVisible(true);
    setBlackOpaque(false);
    setTextVisible(false);
    setIntroLine(0);
    setPhase("idle");
    setGroupIdx(0);
    setRevealed(0);
    setCaptionRevealed(0);
    setProfileStep(0);
    setOverwriteChars(0);

    sched(() => setBlackOpaque(true), 20);
    sched(() => {
      setIntroLine(1);
      setTextVisible(true);
    }, 800);
    sched(() => setTextVisible(false), 3400);
    sched(() => setIntroLine(2), 5200);
    sched(() => setTextVisible(true), 5400);
    sched(() => setTextVisible(false), 8000);

    const IMG_GAP = 1500; // ms between images in a group
    const CAP_DELAY = 600; // caption pops in after image settles
    const HOLD = 1000; // hold complete group before fade
    const FADE = 2000; // fade-out duration
    const BETWEEN = 600; // gap between groups

    // Helper: schedule one group and return when the next group should start.
    const schedGroup = (gIdx, gSize, startAt) => {
      sched(() => {
        setPhase("building");
        setGroupIdx(gIdx);
        setRevealed(0);
        setCaptionRevealed(0);
      }, startAt);
      for (let i = 1; i <= gSize; i++) {
        sched(() => setRevealed(i), startAt + (i - 1) * IMG_GAP);
        sched(
          () => setCaptionRevealed(i),
          startAt + (i - 1) * IMG_GAP + CAP_DELAY,
        );
      }
      const end = startAt + (gSize - 1) * IMG_GAP + CAP_DELAY + HOLD;
      sched(() => setPhase("full"), end);
      sched(() => setPhase("fadeout"), end + FADE);
      return end + FADE + BETWEEN;
    };

    // 7 groups following the exact script sequence.
    const t1 = schedGroup(0, 1, 10000); // "Well, it was me."
    const t2 = schedGroup(1, 1, t1); // "I am Komolakanto."
    const t3 = schedGroup(2, 1, t2); // "I'm a senior architect..."
    const t4 = schedGroup(3, 2, t3); // "You may be thinking..." + "For legal reason..."
    const t5 = schedGroup(4, 2, t4); // "I am the one that commands him." + "And he obeys..."
    const t6 = schedGroup(5, 3, t5); // "See? I am guiding him." + "Proper way." + "Website."
    const t7 = schedGroup(6, 1, t6); // "Now that it's live... huh!"

    sched(() => {
      setPhase("profile");
      setProfileStep(0);
    }, t7);
    // After ~3.5 s on Komolakanto's card, Rajieb's card pops in and takes over
    sched(() => setProfileStep(1), t7 + 3500);
  };

  const closeKomolakantoEasterEgg = () => {
    clearTimers();
    setBlackOpaque(false);
    setTextVisible(false);
    setIntroLine(0);
    setPhase("idle");
    setCaptionRevealed(0);
    setProfileStep(0);
    setOverwriteChars(0);
    setTimeout(() => setOverlayVisible(false), 600);
  };

  const group = COLLAGE_GROUPS[groupIdx];
  const isCollageActive =
    phase === "building" || phase === "full" || phase === "fadeout";
  const collageFading = phase === "fadeout";

  return (
    <>
      <div className="mx-auto mt-4 max-w-xl">
        <p
          className={`icami-mono-eyebrow mb-2.5 ${dark ? "text-zinc-500" : "text-slate-500"}`}
        >
          Web implementation
        </p>
        <p className={`text-[0.8125rem] leading-relaxed sm:text-sm ${body}`}>
          This conference website is architected, deployed, and maintained by{" "}
          <a
            href="https://rajieb.dev"
            onClick={(e) => {
              e.preventDefault();
              triggerKomolakantoEasterEgg();
            }}
            className={`${linkClass} touch-manipulation inline-flex items-center`}
            style={{ touchAction: "manipulation", minHeight: "44px" }}
          >
            {name}
          </a>
          {/* .<br />A researcher at the{" "}
          <a
            href={labUrl}
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            {affiliation}
          </a> */}
          .
        </p>
        <p className={`mt-3 text-[0.75rem] sm:text-xs ${body}`}>
          This website is free and open source ❤️ Contributions, improvements,
          and feedback are welcome via{" "}
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

      {overlayVisible ? (
        <div
          className={`fixed inset-0 z-[320] bg-black transition-opacity duration-500 ${
            blackOpaque ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Close button — appears with animation when Rajieb's info shows */}
          {phase === "profile" && profileStep === 1 ? (
            <button
              type="button"
              onClick={closeKomolakantoEasterEgg}
              className="absolute right-4 top-4 z-10 cursor-pointer rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 transition hover:bg-white/20"
              style={{
                animation:
                  "komo-reveal-bottom 0.6s cubic-bezier(0.22,1,0.36,1) both",
              }}
            >
              Close
            </button>
          ) : null}

          {/* Intro text — shown one line at a time */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p
              className={`px-6 text-center text-[clamp(1.4rem,3.6vw,3rem)] font-semibold tracking-[0.02em] text-white transition-opacity duration-[1800ms] ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {introLine === 1
                ? "Every late-night commit had a witness."
                : null}
              {introLine === 2 ? "You are about to meet him." : null}
            </p>
          </div>

          {/* Collage stage */}
          {isCollageActive ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-start overflow-y-auto px-4 pb-6 pt-14 sm:justify-center sm:overflow-y-hidden sm:px-10 lg:px-16"
              style={{
                transition: "opacity 0.75s ease",
                opacity: collageFading ? 0 : 1,
              }}
            >
              {/* flex rows — each cell gets flex:w/h so cell ratio == image ratio → no crop */}
              <div style={{ maxWidth: group.maxWidth, width: "100%" }}>
                {group.rows.map((rowCells, rowIdx) => {
                  // cumulative flatIdx works for rows of any length
                  const rowStart = group.rows
                    .slice(0, rowIdx)
                    .reduce((s, r) => s + r.length, 0);
                  return (
                    <div
                      key={rowIdx}
                      className={rowCells.length > 1 ? "komo-row-multi" : ""}
                      style={{
                        display: "flex",
                        gap: "6px",
                        marginBottom:
                          rowIdx < group.rows.length - 1 ? "6px" : 0,
                      }}
                    >
                      {rowCells.map((cell, colIdx) => {
                        const flatIdx = rowStart + colIdx;
                        const aspect = cell.w / cell.h;
                        const isRevealed = revealed > flatIdx;
                        const hasCaption = captionRevealed > flatIdx;
                        return (
                          <div
                            key={`${groupIdx}-${flatIdx}`}
                            className="komo-cell"
                            style={{
                              flex: aspect,
                              position: "relative",
                              overflow: "hidden",
                              borderRadius: "8px",
                              backgroundColor: "#080808",
                              visibility: isRevealed ? "visible" : "hidden",
                              animation: isRevealed
                                ? `${cell.anim} 0.72s cubic-bezier(0.22,1,0.36,1) both`
                                : "none",
                            }}
                          >
                            {/* padding-top sets intrinsic height = width×(h/w); combined with
                                flex:w/h this makes cell w/h identical to source image → zero crop */}
                            <div
                              style={{
                                paddingTop: `${((cell.h / cell.w) * 100).toFixed(4)}%`,
                              }}
                            />
                            <Image
                              src={KOMOLAKANTO_IMAGES[cell.src]}
                              alt="Komolakanto"
                              fill
                              sizes="(max-width: 640px) 50vw, 30vw"
                              style={{ objectFit: "cover" }}
                              priority={flatIdx < 2}
                            />
                            {hasCaption ? (
                              <div
                                style={{
                                  position: "absolute",
                                  ...LABEL_POS[cell.lp],
                                  transform: `rotate(${cell.rot})`,
                                  transformOrigin: "center center",
                                  zIndex: 2,
                                  maxWidth: "88%",
                                }}
                              >
                                <div
                                  style={{
                                    animation:
                                      "komo-comic-pop 0.32s cubic-bezier(0.34,1.56,0.64,1) both",
                                    backgroundColor: "#fffef0",
                                    border: "2.5px solid #111",
                                    boxShadow: "3px 3px 0 #111",
                                    padding: "7px 16px",
                                    borderRadius: "3px",
                                  }}
                                >
                                  <p
                                    style={{
                                      fontSize: "clamp(1rem, 1.6vw, 1.55rem)",
                                      fontWeight: 400,
                                      color: "#111",
                                      letterSpacing: "0.08em",
                                      lineHeight: 1.15,
                                      margin: 0,
                                      fontFamily:
                                        "var(--font-bangers), ui-monospace, monospace",
                                    }}
                                  >
                                    {group.captions[flatIdx]}
                                  </p>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Progress dots */}
              <div className="mt-3 flex shrink-0 justify-center gap-2">
                {COLLAGE_GROUPS.map((_, i) => (
                  <div
                    key={i}
                    className="h-px rounded-full transition-all duration-500"
                    style={{
                      width: i === groupIdx ? "24px" : "12px",
                      backgroundColor:
                        i === groupIdx
                          ? "rgba(216,180,254,0.85)"
                          : "rgba(255,255,255,0.18)",
                    }}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {/* Profile cards — Komolakanto first, then Rajieb pops in and takes over */}
          {phase === "profile" ? (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              {/* ── Step 0: Komolakanto's card ── */}
              {profileStep === 0 ? (
                <div
                  className="flex flex-col items-center text-center"
                  style={{
                    animation:
                      "komo-reveal-bottom 0.9s cubic-bezier(0.22,1,0.36,1) both",
                  }}
                >
                  <div
                    className="relative overflow-hidden border-4 border-white/25"
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "12px",
                    }}
                  >
                    <Image
                      src="/komolakanto/I_am_the_one_that_commands_him.jpg"
                      alt="Komolakanto"
                      fill
                      sizes="180px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                      priority
                    />
                  </div>

                  <p
                    className="mt-5 text-xl font-bold text-white"
                    style={{
                      animation: "komo-reveal-bottom 0.5s 0.55s ease-out both",
                    }}
                  >
                    Komolakanto A.
                  </p>
                  <p
                    className="mt-1 text-sm text-zinc-400"
                    style={{
                      animation: "komo-reveal-bottom 0.5s 0.7s ease-out both",
                    }}
                  >
                    Senior Architect · Nap Division
                  </p>
                </div>
              ) : null}

              {/* ── Step 1: letter-by-letter overwrite, morphing into Rajieb's card ── */}
              {profileStep === 1 ? (
                <div className="flex flex-col items-center text-center">
                  {/* Image swaps to the cat photo once caption is half-overwritten */}
                  <div
                    className="relative overflow-hidden border-4 border-white/25"
                    style={{
                      width: "180px",
                      height: "180px",
                      borderRadius: "12px",
                    }}
                  >
                    <Image
                      src={
                        overwriteChars > OW_OFF_TITLE / 2
                          ? "/komolakanto/showing_him_the_proper_way.jpg"
                          : "/komolakanto/I_am_the_one_that_commands_him.jpg"
                      }
                      alt={name}
                      fill
                      sizes="180px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top",
                      }}
                      priority
                    />
                  </div>

                  {/* Name — overwritten letter by letter */}
                  <p className="mt-5 text-xl font-bold text-white">
                    {ow(
                      OW_KOMO_NAME,
                      OW_RAJIEB_NAME,
                      overwriteChars,
                      OW_OFF_NAME,
                    )}
                  </p>

                  {/* Title — overwritten after name completes */}
                  <p className="mt-1 text-sm text-zinc-400">
                    {ow(
                      OW_KOMO_TITLE,
                      OW_RAJIEB_TITLE,
                      overwriteChars,
                      OW_OFF_TITLE,
                    )}
                  </p>

                  {/* Links — appear once overwrite is fully done */}
                  {overwriteChars >= OW_TOTAL ? (
                    <div
                      className="mt-5 flex gap-4"
                      style={{
                        animation: "komo-reveal-bottom 0.5s ease-out both",
                      }}
                    >
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://rajieb.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                      >
                        Website
                      </a>
                      <a
                        href="https://www.linkedin.com/in/imrajieb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 bg-white/8 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                      >
                        LinkedIn
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
          {phase === "profile" ? (
            <div
              className="absolute inset-x-0 bottom-6 z-10 flex justify-center"
              style={{
                animation:
                  "komo-reveal-bottom 1s 0.8s cubic-bezier(0.22,1,0.36,1) both",
              }}
            >
              <p className="text-xs tracking-[0.14em] text-white/40">
                a presentation by{" "}
                <a
                  href="https://rajieb.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 underline decoration-white/20 transition hover:text-white/90 hover:decoration-white/50"
                >
                  rajieb.dev
                </a>
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </>
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
          <div className="">
            <div className="font-heading text-xl tracking-[0.12em] text-white relative mb-32">
              <Image
                src="https://cdn.icami.net/icami_nav_dark.svg"
                alt={site.shortTitle}
                width={300}
                height={24}
                className="absolute -left-[.64rem] top-0"
              />
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              {site.fullTitle}
            </p>
            <p className="mt-5 flex items-center gap-2 text-sm text-zinc-600">
              <svg
                className="h-4 w-4 shrink-0 -mt-1 text-icami-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {site.location}
            </p>
          </div>
          <div>
            <p className="icami-mono-eyebrow text-zinc-100">Quick links</p>
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
            <p className="icami-mono-eyebrow text-zinc-500">Contact</p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-5 inline-block text-sm text-sky-300/95 transition-colors hover:text-white"
            >
              {site.contactEmail}
            </a>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <a
                href={site.social.linkedin}
                className="text-zinc-400 transition-colors hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href={site.social.twitter}
                className="text-zinc-400 transition-colors hover:text-white"
                rel="noopener noreferrer"
                target="_blank"
              >
                X / Twitter
              </a>
            </div>
            <ul className="mt-8 space-y-2 text-xs text-zinc-400">
              {navMore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-zinc-100 hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative border-t border-white/[0.04] px-5 py-7 pb-[calc(1.75rem+64px)] text-center text-xs sm:px-10 lg:pb-7 md:px-14">
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
          <div className="font-heading text-xl tracking-[0.12em] text-white relative mb-32">
            <Image
              src="https://cdn.icami.net/icami_nav.svg"
              alt={site.shortTitle}
              width={300}
              height={24}
              className="absolute -left-[.64rem] top-0"
            />
          </div>
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
                <Link
                  href={item.href}
                  className="hover:text-slate-800 hover:underline hover:underline-offset-4 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/80 px-5 py-6 pb-[calc(1.5rem+64px)] text-center text-xs sm:px-10 lg:pb-6 md:px-14">
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
