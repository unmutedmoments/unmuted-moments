import Link from "next/link";
import Image from "next/image";
import { formatDateShort, formatDuration, stripTitle } from "@/lib/youtube";
import { YouTubeVideo } from "@/lib/types";

interface Props {
  video: YouTubeVideo;
  hideDescription?: boolean;
}

export default function EpisodeCard({ video, hideDescription = false }: Props) {
  const dateLabel = formatDateShort(video.publishedAt);
  const durationLabel = video.durationSeconds ? ` • ${formatDuration(video.durationSeconds)}` : "";
  const title = stripTitle(video.title);

  return (
    <Link href={`/episodes/${video.id}`} className="group block h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden flex-shrink-0">
          <Image
            src={video.thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/25 transition-colors duration-200" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-14 h-14 rounded-full bg-rust/90 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-charcoal/60 mb-1.5 font-dm">
            {dateLabel}{durationLabel}
          </p>
          <h3 className="font-playfair font-bold text-ink text-base leading-snug line-clamp-2 group-hover:text-rust transition-colors duration-200 flex-1">
            {title}
          </h3>
          {!hideDescription && video.description && (
            <p className="mt-2 text-sm text-charcoal/70 line-clamp-2 leading-relaxed">
              {video.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
