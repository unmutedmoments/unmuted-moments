import type { MetadataRoute } from "next";
import { getVideosFromPlaylist } from "@/lib/youtube";
import { musings } from "@/lib/musings";

const BASE_URL = "https://www.unmutedmomentspodcast.com";
const PLAYLIST_ID = "PLA41Q9OxQLzxSv_mSzqA8OaSeFvoc-efE";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/episodes`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/reflections`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/my-story`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/career`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/media`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic episode pages from YouTube playlist
  let episodeEntries: MetadataRoute.Sitemap = [];
  try {
    const videos = await getVideosFromPlaylist(PLAYLIST_ID, 50);
    episodeEntries = videos.map((video) => ({
      url: `${BASE_URL}/episodes/${video.id}`,
      lastModified: new Date(video.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch {
    // If YouTube API is unavailable at build time, skip episode entries
  }

  // Dynamic reflection pages from local musings data
  const reflectionEntries: MetadataRoute.Sitemap = musings.map((musing) => ({
    url: `${BASE_URL}/reflections/${musing.slug}`,
    lastModified: new Date(musing.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...episodeEntries, ...reflectionEntries];
}
