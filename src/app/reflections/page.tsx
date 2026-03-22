import type { Metadata } from "next";
import { musings } from "@/lib/musings";
import ReflectionsClient from "./ReflectionsClient";

export const metadata: Metadata = {
  title: "Reflections | Unmuted Moments",
  description:
    "Honest takes on the immigrant journey, career growth, and personal development from Ehis Akhetuamhen.",
  openGraph: {
    title: "Reflections | Unmuted Moments",
    description:
      "Honest takes on the immigrant journey, career growth, and personal development from Ehis Akhetuamhen.",
    url: "https://www.unmutedmomentspodcast.com/reflections",
    type: "website",
    siteName: "Unmuted Moments",
    images: [{ url: "/favicon.png", width: 1200, height: 1200, alt: "Unmuted Moments" }],
  },
};

export default function ReflectionsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 md:pt-40 md:pb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Reflections
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cream">
            Reflections on the Immigrant Journey, Career, and Life
          </h1>
          <p className="mt-3 text-sand/70 text-lg max-w-xl font-playfair italic">
            Honest takes from someone still figuring it out.
          </p>
        </div>
      </section>

      {/* ─── LIST ─── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReflectionsClient posts={musings} />
        </div>
      </section>

      {/* ─── LINKEDIN CTA BANNER ─── */}
      <section className="bg-rust py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-cream text-lg md:text-xl font-semibold font-playfair mb-1">
              Most of my reflections start on LinkedIn.
            </p>
            <p className="text-cream/80 text-base">
              Follow along for new ideas every week.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/ehis1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-3 border-2 border-cream text-cream text-sm font-semibold rounded-md hover:bg-cream hover:text-rust transition-colors whitespace-nowrap"
          >
            Follow on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
