const segmenter = new Intl.Segmenter();

/**
 * Truncates text to at most maxLen grapheme clusters using Intl.Segmenter,
 * so emoji and other multi-byte sequences are never split mid-character.
 * Does NOT append an ellipsis.
 */
export function truncateGrapheme(text: string, maxLen: number): string {
  const segs = Array.from(segmenter.segment(text), (s) => s.segment);
  if (segs.length <= maxLen) return text;
  return segs.slice(0, maxLen).join("").trimEnd();
}

/**
 * Truncates text to at most maxLen grapheme clusters, cutting at the last
 * full word boundary and appending "…" when truncated.
 */
export function truncateAtWord(text: string, maxLen: number): string {
  const segs = Array.from(segmenter.segment(text), (s) => s.segment);
  if (segs.length <= maxLen) return text;
  const cut = segs.slice(0, maxLen).join("").trimEnd();
  const boundary = cut.lastIndexOf(" ");
  return (boundary > 0 ? cut.slice(0, boundary) : cut).trimEnd() + "…";
}
