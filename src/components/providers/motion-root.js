"use client";

import { MotionConfig } from "framer-motion";
import { useSyncExternalStore } from "react";

const MOBILE_MQ = "(max-width: 767px)";

function subscribeMobile(cb) {
  const mq = window.matchMedia(MOBILE_MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches;
}

function getMobileServerSnapshot() {
  return false;
}

/**
 * No Framer-driven motion on mobile (≤767px): matches real devices, avoids IO / touch quirks.
 * Desktop still respects prefers-reduced-motion via "user".
 */
export function MotionRoot({ children }) {
  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    getMobileServerSnapshot
  );

  return (
    <MotionConfig reducedMotion={isMobile ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
