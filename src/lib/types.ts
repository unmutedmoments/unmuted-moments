export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  durationSeconds?: number;
  /** Raw ISO 8601 duration from YouTube API contentDetails (e.g. "PT4M30S") */
  duration?: string;
}
