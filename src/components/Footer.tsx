import Link from "next/link";
import { LinkedInIcon, InstagramIcon, YouTubeIcon } from "@/components/Icons";

const navigateLinks = [
  { label: "Home", href: "/" },
  { label: "My Story", href: "/my-story" },
  { label: "Episodes", href: "/episodes" },
  { label: "Reflections", href: "/reflections" },
  { label: "Media", href: "/media" },
  { label: "Career Advice", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const listenLinks = [
  { label: "YouTube", href: "https://www.youtube.com/@UnmutedMoments" },
  { label: "Spotify", href: "https://open.spotify.com/show/6MfIxIeK3FP8Tv6cGUZrCP" },
  { label: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/unmuted-moments/id1798134705" },
  { label: "Amazon Music", href: "https://music.amazon.com/podcasts/0d336eb6-da95-4ca6-b408-220c5138a2a0/unmuted-moments" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/">
              <span className="font-playfair text-2xl font-bold text-cream">
                Unmuted Moments
              </span>
            </Link>
            <p className="mt-3 text-base text-cream max-w-xs leading-relaxed">
              The podcast exploring the journey of finding and owning your voice.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.linkedin.com/in/ehis1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/70 hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/ehiszele/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/70 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://www.youtube.com/@UnmutedMoments"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/70 hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen */}
          <div>
            <h4 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Listen
            </h4>
            <ul className="space-y-2.5">
              {listenLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sand/70 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-sand/40">
          © 2026 Unmuted Moments Podcast. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
