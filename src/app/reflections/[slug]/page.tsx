import Link from "next/link";
import { notFound } from "next/navigation";
import { getMusing, getRelatedMusings, musings } from "@/lib/musings";
import ShareButtons from "@/components/ShareButtons";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return musings.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getMusing(params.slug);
  if (!post) return { title: "Reflection | Unmuted Moments" };
  return {
    title: `${post.title} | Unmuted Moments`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.unmutedmomentspodcast.com/reflections/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Unmuted Moments`,
      description: post.excerpt,
      url: `https://www.unmutedmomentspodcast.com/reflections/${post.slug}`,
      type: "article",
      siteName: "Unmuted Moments",
      images: [{ url: "https://www.unmutedmomentspodcast.com/og-image.jpg", width: 1230, height: 630, alt: "Unmuted Moments" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Unmuted Moments`,
      description: post.excerpt,
      images: ["https://www.unmutedmomentspodcast.com/og-image.jpg"],
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  Immigration: "text-gold bg-gold/10",
  Career: "text-rust bg-rust/10",
  "Personal Development": "text-gold bg-gold/10",
};

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function ReflectionPage({ params }: Props) {
  const post = getMusing(params.slug);
  if (!post) notFound();

  const related = getRelatedMusings(post, 3);
  const mins = readingTime(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    url: `https://www.unmutedmomentspodcast.com/reflections/${post.slug}`,
    datePublished: post.date,
    description: post.excerpt,
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: "Ehis Akhetuamhen",
      url: "https://www.unmutedmomentspodcast.com/my-story",
    },
    publisher: {
      "@type": "Organization",
      name: "Unmuted Moments",
      url: "https://www.unmutedmomentspodcast.com",
    },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="pt-20 md:pt-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-charcoal/60 flex items-center gap-2 flex-wrap">
            <Link href="/reflections" className="hover:text-rust transition-colors font-medium">
              Reflections
            </Link>
            <span className="text-charcoal/30">/</span>
            <span className="text-ink line-clamp-1">{post.title}</span>
          </nav>

          {/* Category tag */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${CATEGORY_COLORS[post.category]}`}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Date + reading time + share */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-10">
            <p className="text-charcoal/50 text-sm font-dm">
              {post.date} • {mins} min read
            </p>
            <ShareButtons title={post.title} />
          </div>

          <hr className="border-sand mb-10" />

          {/* Content */}
          <div className="prose-custom max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
                const lines = trimmed.split("\n");
                const intro = lines[0].startsWith("- ") ? null : lines[0];
                const items = lines.filter((l) => l.startsWith("- "));
                return (
                  <div key={i} className="mb-6">
                    {intro && (
                      <p className="text-charcoal text-lg leading-relaxed font-dm mb-3">
                        {intro}
                      </p>
                    )}
                    <ul className="space-y-2 pl-4">
                      {items.map((item, j) => (
                        <li key={j} className="text-charcoal text-lg leading-relaxed font-dm flex gap-2">
                          <span className="text-rust mt-1.5 flex-shrink-0">•</span>
                          <span>{item.replace(/^- /, "")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
                <p key={i} className="text-charcoal text-lg leading-relaxed font-dm mb-6">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-sand">
            <Link
              href="/reflections"
              className="text-rust font-semibold hover:text-rust-dark transition-colors flex items-center gap-1"
            >
              ← Back to Reflections
            </Link>
          </div>
        </div>
      </div>

      {/* ─── MORE REFLECTIONS ─── */}
      {related.length > 0 && (
        <section className="bg-warm py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-8">
              More Reflections
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((m) => (
                <article
                  key={m.slug}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest mb-3 ${CATEGORY_COLORS[m.category]?.split(" ")[0]}`}
                  >
                    {m.category}
                  </p>
                  <h3 className="font-playfair text-lg font-bold text-ink leading-snug mb-3 flex-1">
                    {m.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-2 mb-4">
                    {m.excerpt}
                  </p>
                  <Link
                    href={`/reflections/${m.slug}`}
                    className="text-rust text-sm font-semibold hover:text-rust-dark transition-colors mt-auto"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
