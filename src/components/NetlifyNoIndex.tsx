"use client";
import { useEffect } from "react";

const CANONICAL_HOST = "unmutedmomentspodcast.com";

/**
 * Injects a noindex,nofollow meta tag whenever the page is served from any
 * hostname other than the canonical production domain. This blocks mirror
 * sites, Netlify preview URLs (*.netlify.app), and any other non-canonical
 * hosts from competing in search results.
 *
 * localhost (including any port) is explicitly allowed so local development
 * continues to work.
 */
export default function NetlifyNoIndex() {
  useEffect(() => {
    const host = window.location.hostname;
    const isCanonical = host === CANONICAL_HOST;
    const isLocalhost = host === "localhost" || host === "127.0.0.1" || host.startsWith("192.168.");
    if (isCanonical || isLocalhost) return;

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
  }, []);
  return null;
}
