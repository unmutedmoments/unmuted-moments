"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Musing, MusingCategory } from "@/lib/musings";

const CATEGORIES: ("All" | MusingCategory)[] = [
  "All",
  "Immigration",
  "Career",
  "Personal Development",
];

interface Props {
  posts: Musing[];
}

const CATEGORY_COLORS: Record<MusingCategory, string> = {
  Immigration: "text-gold",
  Career: "text-rust",
  "Personal Development": "text-gold",
};

export default function MusingsClient({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState<"All" | MusingCategory>("All");

  const filtered = useMemo(() => {
    const sorted = [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    if (activeCategory === "All") return sorted;
    return sorted.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <>
      {/* Filter pills */}
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

      {/* Full-width stacked list */}
      <div className="space-y-4">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-xl border border-ink/15 hover:border-ink/30 transition-colors duration-200"
          >
            <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1 min-w-0">
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                    CATEGORY_COLORS[post.category]
                  }`}
                >
                  {post.category}
                </p>
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-ink leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-2 mb-2">
                  {post.excerpt}
                </p>
                <span className="text-xs text-charcoal/40">{post.date}</span>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href={`/musings/${post.slug}`}
                  className="inline-flex items-center px-5 py-2.5 border-2 border-rust text-rust text-sm font-semibold rounded-md hover:bg-rust hover:text-white transition-colors whitespace-nowrap"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
