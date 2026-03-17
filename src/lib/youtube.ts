import { YouTubeVideo } from "./types";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const MIN_DURATION_SECONDS = 120; // 2 minutes — filters out YouTube Shorts

/** Parse ISO 8601 duration (e.g. PT4M30S) to total seconds */
function parseDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  return (
    parseInt(match[1] || "0") * 3600 +
    parseInt(match[2] || "0") * 60 +
    parseInt(match[3] || "0")
  );
}

/** Strip " | Unmuted Moments" suffix from episode titles */
export function stripTitle(title: string): string {
  return title.replace(/\s*\|\s*Unmuted Moments\s*$/i, "").trim();
}

/** Strip boilerplate from episode descriptions */
export function cleanDescription(desc: string, episodeTitle?: string): string {
  if (!desc) return "";
  let text = desc;

  // Strip repeated episode title from the very start of the description
  if (episodeTitle) {
    const cleanedTitle = stripTitle(episodeTitle);
    const escaped = cleanedTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Remove "Title | Unmuted Moments\n" or just "Title\n" at start
    text = text.replace(
      new RegExp(`^${escaped}(\\s*\\|\\s*Unmuted Moments)?\\s*\\n+`, "im"),
      ""
    );
  }

  // Cut everything from boilerplate markers onward
  const cutPatterns = [
    /Subscribe for More Unmuted Moments/i,
    /Listen on your favorite podcast platform/i,
  ];
  for (const pattern of cutPatterns) {
    const idx = text.search(pattern);
    if (idx !== -1) {
      text = text.slice(0, idx);
    }
  }

  // Remove "| Unmuted Moments" anywhere remaining
  text = text.replace(/\s*\|\s*Unmuted Moments/gi, "");

  // Remove Linktree links
  text = text.replace(/https?:\/\/linktr\.ee\/\S+/gi, "");

  // Remove /@UnmutedMoments references
  text = text.replace(/\/@UnmutedMoments/gi, "");

  // Remove lines that consist only of hashtags
  text = text
    .split("\n")
    .filter((line) => {
      const t = line.trim();
      if (!t) return true;
      if (/^(#\w+(\s+)?)+$/.test(t)) return false;
      return true;
    })
    .join("\n");

  // Remove emoji bullet points at the start of lines
  text = text.replace(/^[🔔🎧📱🎙️✅🔗👇🎵🎤►→]+\s*/gm, "");

  // Clean up excess blank lines
  text = text.replace(/\n{3,}/g, "\n\n").trim();

  return text;
}

/** Fetch full video details (snippet + contentDetails) and filter by duration */
async function fetchVideoDetails(ids: string[]): Promise<YouTubeVideo[]> {
  if (!ids.length) return [];
  try {
    const res = await fetch(
      `${BASE_URL}/videos?part=snippet,contentDetails&id=${ids.join(",")}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (data.items || [])
      .filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (item: any) =>
          parseDuration(item.contentDetails?.duration || "") >=
          MIN_DURATION_SECONDS
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => {
        const rawTitle = item.snippet.title as string;
        const title = stripTitle(rawTitle);
        const durationSeconds = parseDuration(item.contentDetails?.duration || "");
        return {
          id: item.id,
          title,
          description: cleanDescription(item.snippet.description, rawTitle),
          publishedAt: item.snippet.publishedAt,
          thumbnail:
            item.snippet.thumbnails?.maxres?.url ||
            item.snippet.thumbnails?.high?.url ||
            item.snippet.thumbnails?.medium?.url ||
            item.snippet.thumbnails?.default?.url,
          durationSeconds,
        };
      });
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getLatestVideos(maxResults = 6): Promise<YouTubeVideo[]> {
  try {
    // Fetch at least 15 to account for Shorts getting filtered out
    const fetchCount = Math.min(Math.max(maxResults * 5, 15), 50);
    const res = await fetch(
      `${BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${fetchCount}&order=date&type=video&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch videos");
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ids = (data.items || []).map((item: any) => item.id.videoId);
    const filtered = await fetchVideoDetails(ids);
    return filtered.slice(0, maxResults);
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getAllVideos(maxResults = 50): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${maxResults}&order=date&type=video&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch videos");
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ids = (data.items || []).map((item: any) => item.id.videoId);
    return await fetchVideoDetails(ids);
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getVideosFromPlaylist(
  playlistId: string,
  maxResults = 50
): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(
      `${BASE_URL}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch playlist");
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ids = (data.items || []).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.snippet.resourceId.videoId
    );
    return await fetchVideoDetails(ids);
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getVideoById(
  videoId: string
): Promise<YouTubeVideo | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/videos?part=snippet,contentDetails&id=${videoId}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch video");
    const data = await res.json();
    if (!data.items?.length) return null;
    const item = data.items[0];
    const rawTitle = item.snippet.title as string;
    const title = stripTitle(rawTitle);
    return {
      id: item.id,
      title,
      description: cleanDescription(item.snippet.description, rawTitle),
      publishedAt: item.snippet.publishedAt,
      thumbnail:
        item.snippet.thumbnails?.maxres?.url ||
        item.snippet.thumbnails?.high?.url ||
        item.snippet.thumbnails?.medium?.url,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDuration(seconds: number): string {
  const mins = Math.round(seconds / 60);
  return `${mins} min`;
}

export async function getVideosByIds(ids: string[]): Promise<YouTubeVideo[]> {
  return await fetchVideoDetails(ids);
}
