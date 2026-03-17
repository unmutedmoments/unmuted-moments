import Image from "next/image";
import Link from "next/link";
import { getVideosFromPlaylist } from "@/lib/youtube";
import EpisodeCard from "@/components/EpisodeCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import LatestEpisodeButton from "@/components/LatestEpisodeButton";
import {
  YouTubeIcon,
  SpotifyIcon,
  ApplePodcastsIcon,
  AmazonMusicIcon,
} from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unmuted Moments | Because the World Needs Your Voice",
  description:
    "Unmuted Moments is a podcast exploring the journey to finding and owning your voice through conversations with immigrants, leaders, and professionals.",
  openGraph: {
    title: "Unmuted Moments | Because the World Needs Your Voice",
    description:
      "Unmuted Moments is a podcast exploring the journey to finding and owning your voice through conversations with immigrants, leaders, and professionals.",
    type: "website",
  },
};

const platformLinks = [
  { name: "Subscribe on YouTube", href: "https://www.youtube.com/@UnmutedMoments", Icon: YouTubeIcon },
  { name: "Spotify", href: "https://open.spotify.com/show/6MfIxIeK3FP8Tv6cGUZrCP", Icon: SpotifyIcon },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/unmuted-moments/id1798134705", Icon: ApplePodcastsIcon },
  { name: "Amazon Music", href: "https://music.amazon.com/podcasts/0d336eb6-da95-4ca6-b408-220c5138a2a0/unmuted-moments", Icon: AmazonMusicIcon },
];

const testimonials = [
  {
    quote:
      "As a Nigerian navigating life in America, your reflections on finding and owning your voice deeply resonated with me. There's something incredibly powerful about how you've turned personal vulnerability into a source of inspiration for others.",
    descriptor: "Immigrant Attorney",
  },
  {
    quote:
      "I'm finding my voice as an Asian-American. I love your style of content and found your podcast incredibly helpful.",
    descriptor: "Marketing Student, First-gen American",
  },
  {
    quote:
      "You inspire me a lot and I appreciate all the great content and opportunities you put out there. Well done!",
    descriptor: "Finance and Audit Immigrant Professional",
  },
  {
    quote:
      "I love the theme you and Ama explored in your podcast. The proverb you shared really hit home for me. Having worked in finance, I've seen the same trade-offs that come with politeness and setting boundaries.",
    descriptor: "First-gen Immigrant in Finance",
  },
];

export default async function HomePage() {
  const allEpisodes = await getVideosFromPlaylist("PLA41Q9OxQLzxSv_mSzqA8OaSeFvoc-efE", 15);
  const episodes = allEpisodes
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);
  const latestVideo = episodes[0];

  return (
    <>
      {/* ─── HERO — two-column layout ─── */}
      <section className="bg-cream pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              {/* Badge — sharp corners */}
              <div className="inline-flex items-center border border-ink/25 rounded-sm px-3 py-1 mb-6">
                <span className="text-ink text-xs font-semibold uppercase tracking-widest">
                  New Episodes Bi-Weekly
                </span>
              </div>

              {/* Main heading */}
              <h1 className="font-playfair text-4xl sm:text-5xl xl:text-6xl font-bold text-ink leading-tight mb-5">
                Because the world needs your{" "}
                <span className="text-rust">voice</span>.
              </h1>

              {/* Accent quote + attribution */}
              <p className="font-playfair text-xl md:text-2xl italic text-gold mb-1">
                &ldquo;I didn&apos;t want them to hear my accent.&rdquo;
              </p>
              <p className="text-charcoal/50 text-sm mb-6">
                — Ehis, on arriving in America at 17
              </p>

              {/* Description */}
              <p className="text-charcoal text-lg leading-relaxed mb-4 max-w-lg">
                For young professionals, immigrants, and anyone navigating the
                journey to finding and owning their voice — one honest
                conversation at a time.
              </p>

              {/* Hosted by */}
              <p className="text-charcoal font-semibold text-base mb-8">
                Hosted by Ehis Akhetuamhen.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <LatestEpisodeButton latestVideoId={latestVideo?.id} />
                <Link
                  href="/my-story"
                  className="w-full sm:w-auto px-6 py-3 border-2 border-rust text-rust font-semibold rounded-md hover:bg-rust hover:text-white transition-colors duration-200 text-center"
                >
                  Meet the Host
                </Link>
              </div>
            </div>

            {/* Right — trailer embed */}
            <div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/UIhRNkIV5n8?rel=0&modestbranding=1"
                    title="Unmuted Moments Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="bg-ink px-5 py-3 flex items-center gap-3">
                  <span className="text-rust font-bold text-base" aria-hidden>
                    ▶
                  </span>
                  <span className="text-sand text-xs font-semibold uppercase tracking-widest">
                    Watch the Trailer
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── LISTEN ON ─── */}
      <section className="bg-ink py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
            <span className="text-sand/50 text-xs font-semibold uppercase tracking-widest">
              Listen on your favorite platform
            </span>
            <div className="flex items-center gap-7 sm:gap-10 flex-wrap justify-center">
              {platformLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand/70 hover:text-cream transition-colors duration-200 flex items-center gap-2 text-sm"
                  title={name}
                >
                  <Icon size={22} />
                  <span className="hidden sm:inline font-medium">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED EPISODE ─── */}
      <section className="bg-warm py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Thumbnail */}
            <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[300px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://i.ytimg.com/vi/rqUvs8j6bQM/maxresdefault.jpg"
                alt="Ep 5: Losing the Battle to Win the War — Chasing the American Dream"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://www.youtube.com/watch?v=rqUvs8j6bQM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-rust/90 hover:bg-rust flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Watch on YouTube"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Info */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                Featured Conversation
              </p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink leading-snug mb-4">
                Ep 5: Losing the Battle to Win the War — Chasing the American Dream
              </h2>
              <p className="text-charcoal text-base leading-relaxed mb-4">
                Dr. Emmanuel Ohuabunwa was bullied for his accent as a Nigerian immigrant. He went on to become the first Black male valedictorian at Johns Hopkins, then earned both an M.D. and MBA from Yale.
              </p>
              <p className="text-charcoal text-base leading-relaxed mb-8">
                Now an Assistant Professor of Emergency Medicine at UT Southwestern, his story is one of resilience, restraint, and purpose — and a powerful listen for anyone who&apos;s ever felt unseen or questioned their belonging.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.youtube.com/watch?v=rqUvs8j6bQM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </a>
                <a
                  href="https://open.spotify.com/episode/5HQQtGyEgak9dipf1FQ0bE?si=b7d2b490ea5a4fd5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-rust text-rust text-sm font-semibold rounded-md hover:bg-rust hover:text-white transition-colors"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RECENT CONVERSATIONS ─── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                Latest Episodes
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink">
                Recent Conversations
              </h2>
            </div>
            <Link
              href="/episodes"
              className="hidden sm:inline-flex items-center text-xs font-semibold text-ink hover:text-rust transition-colors gap-1 uppercase tracking-wider whitespace-nowrap"
            >
              View All Episodes →
            </Link>
          </div>

          {episodes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {episodes.map((video) => (
                <EpisodeCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-muted text-center py-16">
              Episodes loading — check back soon.
            </p>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/episodes"
              className="px-6 py-3 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors inline-block"
            >
              View All Episodes
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BANNER ─── */}
      <section className="bg-rust py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl italic text-cream leading-relaxed">
            &ldquo;If somewhere between where you came from and where you&apos;re
            going, your voice got lost. This show is for you.&rdquo;
          </blockquote>
          <p className="mt-6 text-cream/60 text-sm font-dm tracking-wide">
            — Ehis Akhetuamhen
          </p>
        </div>
      </section>

      {/* ─── HOST SNAPSHOT ─── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Full-bleed photo — no rounded corners, no shadow */}
            <div className="relative aspect-[3/4] md:aspect-auto md:h-[560px] overflow-hidden">
              <Image
                src="/images/hero-headphones.jpg"
                alt="Ehis Akhetuamhen — host of Unmuted Moments"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                Your Host
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink mb-5">
                Ehis Akhetuamhen
              </h2>
              <p className="text-charcoal text-base md:text-lg leading-relaxed mb-4">
                I moved to the U.S. at 17 with $150 in my pocket and an African
                accent I was afraid would make people doubt my ideas.
              </p>
              <p className="text-charcoal text-base md:text-lg leading-relaxed mb-4">
                From KPMG to Goldman Sachs to Google, every client call and
                every room I walked into chipped away at that fear.
              </p>
              <p className="text-charcoal text-base md:text-lg leading-relaxed mb-5">
                Now I host Unmuted Moments to tell the stories I wish someone
                had told me — and to help you find yours.
              </p>
              <p className="text-charcoal/50 text-sm font-dm tracking-wide mb-8 flex flex-wrap gap-x-1">
                <span>KPMG · Goldman Sachs · William Blair ·</span>
                <span>Google · Kellogg MBA</span>
              </p>
              <Link
                href="/my-story"
                className="inline-flex items-center px-6 py-3 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors duration-200"
              >
                Read My Full Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-cream py-16 md:py-24 border-t border-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              From the Community
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink">
              What Listeners Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-warm rounded-xl p-8">
                <blockquote className="font-playfair italic text-ink text-lg leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="text-sm text-charcoal/60 font-dm">
                  — {t.descriptor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK WITH EHIS ─── */}
      <section className="bg-warm pt-14 pb-0 md:pt-20 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                Opportunities
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink mb-4">
                Work With Ehis
              </h2>
              <p className="text-charcoal text-base md:text-lg leading-relaxed">
                Invite Ehis to speak, explore a brand partnership, recommend a
                guest, or inquire about collaboration.
              </p>
            </div>
            {/* Right — buttons side by side */}
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-rust text-cream text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors text-center uppercase tracking-wide"
              >
                Partnership Inquiry
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 border-2 border-rust text-rust text-sm font-semibold rounded-md hover:bg-rust hover:text-white transition-colors text-center uppercase tracking-wide"
              >
                Pitch a Guest
              </Link>
            </div>
          </div>
        </div>
        {/* Rust accent bar */}
        <div className="h-1.5 bg-rust" />
      </section>

      {/* ─── NEWSLETTER ─── */}
      <NewsletterSignup />
    </>
  );
}
