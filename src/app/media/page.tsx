import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media | Unmuted Moments",
  description:
    "Podcast appearances, press features, and interviews with Ehis Akhetuamhen on leadership, the immigrant journey, and finding your voice.",
  openGraph: {
    title: "Media | Unmuted Moments",
    description:
      "Podcast appearances, press features, and interviews with Ehis Akhetuamhen on leadership, the immigrant journey, and finding your voice.",
    url: "https://www.unmutedmomentspodcast.com/media",
    type: "website",
    siteName: "Unmuted Moments",
    images: [{ url: "/og-image.jpg", width: 1230, height: 630, alt: "Unmuted Moments" }],
  },
};

const allAppearances = [
  {
    show: "Money Memories — NPR",
    episode: "From Nigeria to Wall Street: A Journey of Resilience and Financial Freedom",
    date: "March 12, 2025",
    description:
      "Lost father at 13. Career choices, financial resilience, why speaking up matters as much as skill.",
    link: "https://open.spotify.com/episode/3TTRZBFDWD8Wf0D4hiJ8q5",
    featured: true,
  },
  {
    show: "Thriving Immigrant",
    episode: "Ehis Akhetuamhen on Career Growth and the Immigrant Journey",
    date: "November 12, 2025",
    description:
      "From humble background in Nigeria to M&A Consultant at Google. The power of relationships, accent, self-confidence, KPMG Goldman Sachs Google.",
    link: "https://open.spotify.com/episode/3DiO9nxPuAzznR35ntDQta",
    featured: false,
  },
  {
    show: "Expressions Podcast",
    episode: "Stayed silent to belong, now helping others speak up",
    date: "November 5, 2025",
    description:
      "Identity, belonging, carrying culture forward — and why silence was never the answer.",
    link: "https://open.spotify.com/episode/1kyx73jXaRNmlfsBub4FDF",
    featured: false,
  },
];

const press = [
  {
    outlet: "Tribes and History",
    title: "Ehis Akhetuamhen on Finding Your Voice and Betting on Yourself",
    date: "March 5, 2025",
    link: "https://tribesandhistory.com/ehis-akhetuamhen-on-finding-your-voice-and-betting-on-yourself/",
    description:
      "An in-depth profile on how Ehis transformed self-doubt into a mission to help others unmute themselves.",
  },
];

const speakingTopics = [
  "The immigrant journey and finding your voice.",
  "Career growth for first-generation professionals.",
  "Leadership and identity.",
  "Building confidence in high-pressure environments.",
  "Navigating corporate America as a minority.",
];

export default function MediaPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 md:pt-40 md:pb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            In the Media
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cream">
            Podcast Appearances &amp; Press
          </h1>
          <p className="mt-3 text-sand/70 text-lg max-w-xl">
            Appearances, interviews, and press features.
          </p>
          <p className="mt-1 text-sand/50 text-base max-w-xl">
            Conversations on leadership, the immigrant journey, and finding your voice.
          </p>
        </div>
      </section>

      {/* ─── PODCAST APPEARANCES ─── */}
      <section className="bg-warm py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-8">
            Podcast Appearances
          </p>
          <div className="space-y-6">
            {allAppearances.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 flex flex-col">
                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest">
                      {item.show}
                    </p>
                    {item.featured && (
                      <span className="bg-gold text-ink text-xs font-bold uppercase tracking-widest px-3 py-1 rounded flex-shrink-0">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="font-playfair text-xl md:text-2xl font-bold text-ink mb-2 leading-snug">
                    {item.episode}
                  </h2>
                  <p className="text-charcoal/50 text-sm mb-3">{item.date}</p>
                  <p className="text-charcoal text-base leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors self-start"
                  >
                    Listen on Spotify →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRESS & ARTICLES ─── */}
      <section className="bg-warm py-16 md:py-20 border-t border-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-8">
            Press Coverage
          </p>
          <div className="space-y-5">
            {press.map((article, i) => (
              <a
                key={i}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 bg-white hover:bg-cream rounded-xl p-6 transition-colors shadow-sm"
              >
                <div className="flex-1">
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                    {article.outlet} — {article.date}
                  </p>
                  <h3 className="font-playfair text-xl font-bold text-ink group-hover:text-rust transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <div className="flex-shrink-0 mt-1 text-charcoal/30 group-hover:text-rust transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEDIA BIO ─── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Media Bio
          </p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-6">
            About Ehis
          </h2>
          <p className="text-charcoal text-lg leading-relaxed">
            Ehis Akhetuamhen is the host of the Unmuted Moments podcast, where he explores the
            journey of finding and owning your voice. Born in Benin City, Nigeria, Ehis moved to
            the United States at 17 and built a career spanning KPMG, Goldman Sachs, William Blair,
            and Google. His work and storytelling focus on leadership, identity, and the immigrant
            experience.
          </p>
        </div>
      </section>

      {/* ─── SPEAKING TOPICS ─── */}
      <section className="bg-warm py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Speaking
          </p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-8">
            Topics I Speak About
          </h2>
          <ul className="space-y-3">
            {speakingTopics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold mt-1 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-charcoal text-lg leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-cream py-14 md:py-16 text-center px-4 border-t border-sand/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-4">
            Want to feature Ehis on your show?
          </h2>
          <p className="text-charcoal mb-7 text-base leading-relaxed">
            Reach out and let&apos;s talk about a collaboration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
