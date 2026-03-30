"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springSoft, viewportOnce } from "@/components/motion/transitions";

export function MotionDocument({ eyebrow, title, children, proseRef }) {
  const reduce = useReducedMotion();
  const off = reduce ? { opacity: 1, y: 0, x: 0 } : undefined;

  return (
    <>
      {eyebrow ? (
        <motion.p
          className="icami-mono-eyebrow text-amber-700/90"
          initial={off ?? { opacity: 1, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springSoft}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.div
        className="mt-6 flex items-stretch gap-5 md:mt-8"
        initial={off ?? { opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springSoft, delay: 0.04 }}
      >
        <span className="icami-accent-bar-light shrink-0 self-stretch" aria-hidden />
        <h1 className="font-heading text-4xl tracking-[0.08em] text-icami-text md:text-5xl md:tracking-[0.09em]">
          {title}
        </h1>
      </motion.div>
      <motion.div
        ref={proseRef}
        className="icami-prose icami-doc-body prose-breathe mt-16 max-w-3xl text-[1.0625rem] leading-[1.75] md:mt-20"
        initial={off ?? { opacity: 1, y: 18 }}
        whileInView={off ?? { opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ ...springSoft, delay: 0.06 }}
      >
        {children}
      </motion.div>
    </>
  );
}
