import { getVideosFromPlaylist, getVideosByIds } from "@/lib/youtube";
import EpisodesClient from "./EpisodesClient";
import EpisodeCard from "@/components/EpisodeCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episodes | Unmuted Moments Podcast",
  description:
    "Browse all episodes of Unmuted Moments — honest conversations with immigrants, professionals, and leaders about finding and owning their voice.",
  openGraph: {
    title: "Episodes | Unmuted Moments Podcast",
    description:
      "Browse all episodes of Unmuted Moments — honest conversations with immigrants, professionals, and leaders about finding and owning their voice.",
  },
};

const START_HERE_IDS = ["zasVgF1E5so", "BZG_tTFYrWs", "ozTIAJayLEY"];
const START_HERE_TITLES: Record<string, string> = {
  BZG_tTFYrWs: "Ep 6: More Than a Crown: From Nigeria to Miss New Jersey USA & Beyond",
  ozTIAJayLEY: "Ep 17: The American Dream: One Generation Later",
};

export default async function EpisodesPage() {
  const [videos, startHereVideos] = await Promise.all([
    getVideosFromPlaylist("PLA41Q9OxQLzxSv_mSzqA8OaSeFvoc-efE", 50),
    getVideosByIds(START_HERE_IDS),
  ]);

  // Ensure Start Here videos appear in correct order and use the defined titles
  const startHere = START_HERE_IDS
    .map((id) => {
      const v = startHereVideos.find((sv) => sv.id === id);
      if (!v) return null;
      return { ...v, title: START_HERE_TITLES[id] || v.title };
    })
    .filter(Boolean) as typeof startHereVideos;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 md:pt-40 md:pb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            All Episodes
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cream">
            Episodes
          </h1>
          <p className="mt-3 text-sand/70 text-lg max-w-xl">
            Every conversation, every story, every unmuted moment.
          </p>
        </div>
      </section>

      {/* ─── START HERE ─── */}
      <section className="bg-warm py-12 md:py-16 border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
            New to the Show?
          </p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-8">
            Start here.
          </h2>
          {startHere.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {startHere.map((video) => (
                <EpisodeCard key={video.id} video={video} hideDescription />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── GRID ─── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <EpisodesClient videos={videos} />
        </div>
      </section>
    </>
  );
}
