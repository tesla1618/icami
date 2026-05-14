"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AboutSection } from "@/components/home/about-section";
import { ConferenceHighlights } from "@/components/home/conference-highlights";
import { DatesSection } from "@/components/home/dates-section";
import { KeynotesPreview } from "@/components/home/keynotes-preview";
import { AnnouncementsPreview } from "@/components/home/announcements-preview";
import { SponsorsSection } from "@/components/home/sponsors-section";
import { TracksPreview } from "@/components/home/tracks-preview";
import { VenuePreview } from "@/components/home/venue-preview";
import { HomeContentSheet } from "@/components/layout/home-content-sheet";
import { springSnappy, viewportOnce } from "@/components/motion/transitions";

function SectionMotion({ children }) {
  const reduce = useReducedMotion();
  if (reduce) return children;
  return (
    <motion.div
      initial={{ opacity: 1, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={springSnappy}
    >
      {children}
    </motion.div>
  );
}

export function HomePageClient({ announcements }) {
  return (
    <HomeContentSheet className="-mt-10 relative z-10">
      <div className="flex flex-col gap-24 md:gap-32">
        <SectionMotion>
          <ConferenceHighlights />
        </SectionMotion>
        <SectionMotion>
          <AboutSection />
        </SectionMotion>
        <SectionMotion>
          <DatesSection />
        </SectionMotion>
        <SectionMotion>
          <TracksPreview />
        </SectionMotion>
        <SectionMotion>
          <AnnouncementsPreview items={announcements} />
        </SectionMotion>
        <SectionMotion>
          <KeynotesPreview />
        </SectionMotion>
        <SectionMotion>
          <SponsorsSection />
        </SectionMotion>
        <SectionMotion>
          <VenuePreview />
        </SectionMotion>
      </div>
    </HomeContentSheet>
  );
}
