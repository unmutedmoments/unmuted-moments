"use client";
import { useState, useMemo } from "react";
import EpisodeCard from "@/components/EpisodeCard";
import { YouTubeVideo } from "@/lib/types";

const CATEGORIES = ["All", "Immigration", "Career", "Personal Development"];
const INITIAL_COUNT = 15;

interface Props {
  videos: YouTubeVideo[];
}

function matchesCategory(video: YouTubeVideo, category: string): boolean {
  if (category === "All") return true;
  const text = (video.title + " " + video.description).toLowerCase();
  const map: Record<string, string[]> = {
    Immigration: ["immigr", "nigeria", "abroad", "accent", "foreig", "visa", "country"],
    Career: ["career", "kpmg", "goldman", "google", "job", "work", "profession", "mba", "business", "finance", "wall street"],
    "Personal Development": ["personal", "growth", "mindset", "voice", "confiden", "belong", "identity", "story", "fear"],
  };
  return (map[category] || []).some((kw) => text.includes(kw));
}

function roundDownToMultipleOf3(n: number): number {
  return n < 3 ? n : Math.floor(n / 3) * 3;
}

export default function EpisodesClient({ videos }: Props) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Sort newest first, then filter
  const filtered = useMemo(() => {
    setShowAll(false); // reset when filters change
    const sorted = [...videos].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    return sorted.filter((v) => {
      const matchSearch =
        !search ||
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase());
      return matchSearch && matchesCategory(v, activeCategory);
    });
  }, [videos, search, activeCategory]);

  const initialCount = roundDownToMultipleOf3(Math.min(INITIAL_COUNT, filtered.length));
  const allCount = roundDownToMultipleOf3(filtered.length);
  const visible = showAll ? filtered.slice(0, allCount) : filtered.slice(0, initialCount);
  const hasMore = !showAll && filtered.length > initialCount;

  return (
    <>
      {/* Search */}
      <div className="mb-5">
        <input
          type="search"
          placeholder="Search episodes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl px-4 py-3 border border-sand rounded-lg bg-white text-ink placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-rust text-sm"
        />
      </div>

      {/* Browse by topic label + filter pills */}
      <p className="text-xs text-charcoal/50 font-semibold uppercase tracking-widest mb-2">
        Browse by topic
      </p>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === cat
                ? "bg-rust text-white"
                : "bg-sand/40 text-charcoal hover:bg-sand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* YouTube CTA */}
      <div className="mb-4 mt-1">
        <a
          href="https://www.youtube.com/@UnmutedMoments"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors shadow-sm"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Watch Episodes on YouTube →
        </a>
      </div>

      {/* Grid */}
      {visible.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((video) => (
              <EpisodeCard key={video.id} video={video} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 border-2 border-rust text-rust text-sm font-semibold rounded-md hover:bg-rust hover:text-white transition-colors duration-200"
              >
                Load More Episodes ({filtered.length - initialCount} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-charcoal/60 text-lg mb-4">No episodes found.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
            className="text-sm font-semibold text-rust hover:text-rust-dark underline transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
