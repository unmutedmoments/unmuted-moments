import { getVideoById, getVideosFromPlaylist, formatDate } from "@/lib/youtube";
import { notFound } from "next/navigation";
import EpisodeCard from "@/components/EpisodeCard";
import ShareButtons from "@/components/ShareButtons";
import { ApplePodcastsIcon, SpotifyIcon, AmazonMusicIcon } from "@/components/Icons";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { videoId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = await getVideoById(params.videoId);
  if (!video) return { title: "Episode | Unmuted Moments" };
  const description = video.description.slice(0, 160).trimEnd();
  const image = video.thumbnail
    ? { url: video.thumbnail, width: 1280, height: 720, alt: video.title }
    : { url: "https://www.unmutedmomentspodcast.com/og-image.jpg", width: 1230, height: 630, alt: "Unmuted Moments" };
  return {
    title: `${video.title} | Unmuted Moments`,
    description,
    alternates: {
      canonical: `https://www.unmutedmomentspodcast.com/episodes/${video.id}`,
    },
    openGraph: {
      title: `${video.title} | Unmuted Moments`,
      description,
      url: `https://www.unmutedmomentspodcast.com/episodes/${video.id}`,
      type: "video.other",
      siteName: "Unmuted Moments",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${video.title} | Unmuted Moments`,
      description,
      images: [image.url],
    },
  };
}

const TIMESTAMP_RE = /^\d{1,2}:\d{2}(:\d{2})?[\s\-–—]/;

function parseTimestamp(line: string) {
  const match = line.match(/^(\d{1,2}:\d{2}(?::\d{2})?)[\s\-–—]+(.+)/);
  if (match) return { time: match[1], label: match[2].trim() };
  return null;
}

function renderWithLinks(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, i) =>
    part.startsWith("http://") || part.startsWith("https://") ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-rust underline hover:text-rust-dark break-all"
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

function ShowNotes({ description }: { description: string }) {
  const blocks = description.split("\n\n");
  return (
    <div className="text-charcoal leading-relaxed text-base space-y-4">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
        const hasTimestamps = lines.some((l) => TIMESTAMP_RE.test(l));

        if (hasTimestamps) {
          return (
            <div key={i} className="bg-warm rounded-lg p-4">
              <ul className="space-y-2">
                {lines.map((line, j) => {
                  const ts = parseTimestamp(line);
                  return ts ? (
                    <li key={j} className="flex gap-3 items-baseline text-sm">
                      <span className="text-gold font-semibold font-dm flex-shrink-0 min-w-[3rem]">
                        {ts.time}
                      </span>
                      <span className="text-charcoal">{ts.label}</span>
                    </li>
                  ) : (
                    <li key={j} className="text-charcoal text-sm">
                      {renderWithLinks(line)}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        }

        return <p key={i}>{renderWithLinks(trimmed)}</p>;
      })}
    </div>
  );
}

export default async function EpisodePage({ params }: Props) {
  const [video, allVideos] = await Promise.all([
    getVideoById(params.videoId),
    getVideosFromPlaylist("PLA41Q9OxQLzxSv_mSzqA8OaSeFvoc-efE", 10),
  ]);

  if (!video) notFound();

  const related = allVideos.filter((v) => v.id !== params.videoId).slice(0, 3);

  const episodeJsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: video.title,
    url: `https://www.unmutedmomentspodcast.com/episodes/${video.id}`,
    datePublished: video.publishedAt,
    description: video.description.slice(0, 500),
    image: video.thumbnail,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Unmuted Moments",
      url: "https://www.unmutedmomentspodcast.com/episodes",
    },
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeJsonLd) }}
      />
    <div className="pt-20 md:pt-24 min-h-screen bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-3 text-sm text-charcoal/60 flex items-center gap-2 flex-wrap">
          <Link
            href="/episodes"
            className="hover:text-rust transition-colors font-medium"
          >
            Episodes
          </Link>
          <span className="text-charcoal/30">/</span>
          <span className="text-ink line-clamp-1">{video.title}</span>
        </nav>

        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/episodes"
            className="inline-flex items-center gap-1 text-sm text-rust font-semibold hover:text-rust-dark transition-colors"
          >
            ← Back to All Episodes
          </Link>
        </div>

        {/* Video embed */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl mb-8">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Title */}
        <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-ink mb-2">
          {video.title}
        </h1>

        {/* Date + share */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <p className="text-charcoal/50 text-sm">{formatDate(video.publishedAt)}</p>
          <ShareButtons title={video.title} />
        </div>

        {/* Listen buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://open.spotify.com/show/6MfIxIeK3FP8Tv6cGUZrCP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors"
          >
            <SpotifyIcon size={18} />
            Listen on Spotify
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/unmuted-moments/id1798134705"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors"
          >
            <ApplePodcastsIcon size={18} />
            Listen on Apple Podcasts
          </a>
          <a
            href="https://music.amazon.com/podcasts/0d336eb6-da95-4ca6-b408-220c5138a2a0/unmuted-moments"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors"
          >
            <AmazonMusicIcon size={18} />
            Listen on Amazon Music
          </a>
        </div>

        {/* Divider */}
        <hr className="border-sand mb-8" />

        {/* Show notes */}
        <div>
          <h2 className="font-playfair text-xl md:text-2xl font-bold text-ink mb-4">
            Show Notes
          </h2>
          {video.description ? (
            <ShowNotes description={video.description} />
          ) : (
            <p className="text-charcoal/50 italic">
              Show notes not available for this episode.
            </p>
          )}
        </div>

        {/* Related episodes */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-8">
              More Episodes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v) => (
                <EpisodeCard key={v.id} video={v} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
