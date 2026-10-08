"use client";
import { useEffect } from "react";

/**
 * Injects a noindex meta tag when the page is served from a *.netlify.app
 * preview URL, preventing preview deployments from competing with the
 * canonical domain in search results.
 */
export default function NetlifyNoIndex() {
  useEffect(() => {
    if (window.location.hostname.endsWith(".netlify.app")) {
      const meta = document.createElement("meta");
      meta.name = "robots";
      meta.content = "noindex,nofollow";
      document.head.appendChild(meta);
    }
  }, []);
  return null;
}
