import { Bebas_Neue, Roboto_Slab } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionRoot } from "@/components/providers/motion-root";
import { site } from "@/config/site";
import "./globals.css";

/*
 * -----------------------------------------------------------------------------
 * ICAMI 2026 — site implementation
 * Developer: Rajieb — https://github.com/telsa1618
 * Affiliation: Researcher, AMIRLab
 * Education: Master of Computer Science, MIST
 * -----------------------------------------------------------------------------
 */

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata = {
  title: {
    default: `${site.shortTitle} — ${site.fullTitle}`,
    template: `%s — ${site.shortTitle}`,
  },
  description: `${site.fullTitle}. ${site.location}. ${site.tagline}`,
  icons: {
    icon: "/icami.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robotoSlab.variable} ${bebasNeue.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-slate-100 text-slate-900 antialiased">
        <MotionRoot>
          <SiteHeader />
          {/* Bottom padding clears fixed dock (<lg); must wrap footer too or last content is covered. */}
          <div className="flex flex-1 flex-col pb-[calc(5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
            {children}
            <SiteFooter />
          </div>
        </MotionRoot>
      </body>
    </html>
  );
}
