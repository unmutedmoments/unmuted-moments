import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story | Ehis Akhetuamhen | Unmuted Moments",
  description:
    "From Benin City, Nigeria to KPMG, Goldman Sachs, and Google — the story behind Unmuted Moments and why Ehis Akhetuamhen started the show.",
  openGraph: {
    title: "My Story | Ehis Akhetuamhen | Unmuted Moments",
    description:
      "From Benin City, Nigeria to KPMG, Goldman Sachs, and Google — the story behind Unmuted Moments and why Ehis Akhetuamhen started the show.",
    url: "https://www.unmutedmomentspodcast.com/my-story",
    type: "website",
    siteName: "Unmuted Moments",
    images: [{ url: "/favicon.png", width: 1200, height: 1200, alt: "Unmuted Moments" }],
  },
};

const timeline = [
  {
    years: "2012 — 2014",
    company: "KPMG",
    role: "Audit Associate → Senior Audit Associate",
    location: "New York City",
    caption:
      "Where I learned the language of business — and started finding my footing in rooms where I didn't always feel like I belonged.",
  },
  {
    years: "2014 — 2017",
    company: "Goldman Sachs",
    role: "Senior Financial Analyst → Finance Associate | Goldman Sachs Asset Management",
    location: "New York City",
    caption:
      "Wall Street. The name alone carried weight. I showed up, did the work, and proved to myself that the kid from Benin City could hold his own on one of the world's biggest stages.",
  },
  {
    years: "2017 — 2019",
    company: "Kellogg School of Management",
    role: "MBA",
    location: "Chicago",
    caption:
      "Kellogg didn't just sharpen my business mind — it gave me permission to take up space.",
  },
  {
    years: "2019 — 2022",
    company: "William Blair",
    role: "Investment Banking Associate → Vice President | Healthcare Group",
    location: "Chicago → San Francisco",
    caption:
      "From associate to VP. I learned that the higher you climb, the more your voice — not just your analysis — determines your impact.",
  },
  {
    years: "2022 — Present",
    company: "Google",
    role: "M&A Finance, Other Bets Portfolio",
    location: "San Francisco → Atlanta",
    caption:
      "Today I lead M&A and valuation work at one of the world's most influential companies. Proof that your accent, your background, and your story are assets — not liabilities.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ehis Akhetuamhen",
  url: "https://www.unmutedmomentspodcast.com/my-story",
  birthPlace: { "@type": "Place", name: "Benin City, Nigeria" },
  nationality: "Nigerian-American",
  jobTitle: "Podcast Host, M&A Finance Professional",
  description:
    "Ehis Akhetuamhen moved to the United States at 17 with $150 and an African accent he feared would hold him back. He went on to build a career at KPMG, Goldman Sachs, William Blair, and Google. He hosts Unmuted Moments — a podcast about finding and owning your voice.",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Kellogg School of Management", description: "MBA" },
  ],
  worksFor: { "@type": "Organization", name: "Google" },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Audit Associate",
      occupationalCategory: "Finance",
      hiringOrganization: { "@type": "Organization", name: "KPMG" },
    },
    {
      "@type": "Occupation",
      name: "Senior Financial Analyst / Finance Associate",
      occupationalCategory: "Finance",
      hiringOrganization: { "@type": "Organization", name: "Goldman Sachs" },
    },
    {
      "@type": "Occupation",
      name: "Investment Banking Associate / Vice President",
      occupationalCategory: "Finance",
      hiringOrganization: { "@type": "Organization", name: "William Blair" },
    },
    {
      "@type": "Occupation",
      name: "M&A Finance, Other Bets Portfolio",
      occupationalCategory: "Finance",
      hiringOrganization: { "@type": "Organization", name: "Google" },
    },
  ],
  knowsAbout: [
    "Immigration",
    "Career development",
    "Voice and confidence",
    "Investment banking",
    "M&A finance",
    "Personal development",
    "First-generation professionals",
  ],
  sameAs: [
    "https://www.youtube.com/@UnmutedMoments",
    "https://open.spotify.com/show/6MfIxIeK3FP8Tv6cGUZrCP",
  ],
};

export default function MyStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex flex-col justify-end"
        style={{
          backgroundImage: "url('/images/about-swing-laugh.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.88) 100%)",
          }}
        />
        <div className="relative px-6 sm:px-10 lg:px-16 pb-12 md:pb-16 max-w-5xl">
          <h1 className="font-playfair text-6xl sm:text-8xl md:text-[10rem] font-bold text-cream tracking-tight leading-none">
            EHIS&apos;S<br />JOURNEY
          </h1>
          <p className="mt-4 text-sand/80 text-lg md:text-xl font-dm font-light">
            From Benin City to Silicon Valley — the journey to finding my voice.
          </p>
        </div>
        <div className="absolute bottom-10 left-0 right-0 hidden sm:flex justify-center">
          <a
            href="#where-im-from"
            className="flex flex-col items-center gap-1 text-gold text-sm font-semibold uppercase tracking-widest animate-bounce cursor-pointer"
          >
            <span>Scroll</span>
            <span className="text-lg">↓</span>
          </a>
        </div>
      </section>

      {/* ─── WHERE I'M FROM ─── */}
      <section id="where-im-from" className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Text */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                Origins
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink mb-6">
                Where I&apos;m From
              </h2>
              <div className="space-y-4 text-charcoal text-lg leading-relaxed">
                <p>
                  I was born and raised in Benin City, Nigeria. Growing up,
                  mornings started at 4am — my mother would be up before the
                  sun, and the sound I remember most from those early hours is
                  the Voice of America playing softly on the radio. Those
                  broadcasts planted something in me: a curiosity about the
                  wider world, and a quiet hunger to be part of it.
                </p>
                <p>
                  That hunger had roots. My father dreamed of studying abroad —
                  a dream he never got to pursue. In our small home, he kept
                  stacks of brochures from universities across the US and UK.
                  Images of students lying on green lawns, studying, laughing.
                  He&apos;d look at them and imagine.
                </p>
                <p>
                  Two days before my 13th birthday, he passed suddenly in tragic
                  circumstances.
                </p>
                <p>
                  He never got to live that dream. But he left it for me. I was
                  the first in my family to move abroad. That&apos;s not a small
                  thing. It means you carry everyone with you — every hope,
                  every sacrifice, every early morning — when you step onto that
                  plane. I wasn&apos;t just chasing my own future. I was
                  finishing something my father started.
                </p>
              </div>
              {/* Pull quote */}
              <blockquote className="font-playfair text-xl md:text-2xl italic text-rust mt-8 leading-relaxed border-l-4 border-rust pl-5">
                &ldquo;My father never got to live his dream of studying in
                America. He passed when I was 13. That dream became my
                own.&rdquo;
              </blockquote>
            </div>

            {/* Photo — no rounded corners, taller */}
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[640px]">
              <Image
                src="/images/about-stairs.jpg"
                alt="Ehis Akhetuamhen"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE WEIGHT OF AN ACCENT ─── */}
      <section className="bg-ink py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Photo */}
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[560px] order-2 md:order-1">
              <Image
                src="/images/about-tracks.jpg"
                alt="Ehis Akhetuamhen"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Text */}
            <div className="order-1 md:order-2">
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                The Journey
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-6">
                The Weight of an Accent
              </h2>
              <div className="space-y-4 text-sand/80 text-lg leading-relaxed">
                <p>
                  I arrived in the United States at 17. And for the next ten
                  years, I stayed quiet.
                </p>
                <p>
                  Not because I had nothing to say. I had plenty to say. But I
                  feared being misunderstood. I hated that moment — you know the
                  one — when someone asks you to repeat yourself, and you wonder
                  if it&apos;s about the words or something deeper. I started to
                  believe that my accent meant I didn&apos;t belong. That it was
                  evidence of something lacking.
                </p>
                <p>
                  So I shrank. In meetings, in classrooms, in conversations
                  where I knew the answer but chose silence. Ten years of
                  shrinking.
                </p>
                <p>
                  But that silence didn&apos;t last forever.
                </p>
              </div>
              {/* Pull quote */}
              <blockquote className="font-playfair text-xl md:text-2xl italic text-cream mt-8 leading-relaxed border-l-4 border-gold pl-5">
                &ldquo;I started to believe that my accent meant I didn&apos;t
                belong. That it was evidence of something lacking.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE PIVOTAL MOMENTS ─── */}
      <section className="bg-cream py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            The Journey
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-3 leading-tight">
            Three Pivotal Moments
          </h2>
          <p className="font-playfair italic text-charcoal/60 text-lg mb-16">
            Three moments that proved my voice was always enough.
          </p>

          <div className="space-y-14">
            {/* 01 */}
            <div className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-playfair text-2xl md:text-3xl font-bold text-gold leading-none">
                  01
                </span>
                <div className="w-px flex-1 bg-gold/30 mt-3 min-h-[5rem]" />
              </div>
              <div className="pb-4">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-4">
                  Professor Michelle Tooley: The First Person Who Heard My Voice
                </h3>
                <p className="text-charcoal text-lg leading-relaxed">
                  I was rehearsing a community presentation with her when she
                  stopped me. Just two words: &ldquo;Project, Ehis.&rdquo; But
                  what she was really saying was: your voice deserves to be
                  heard. She believed in me before I had learned to believe in
                  myself. Sometimes that&apos;s all it takes — one person seeing
                  something in you that you haven&apos;t seen yet.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-playfair text-2xl md:text-3xl font-bold text-gold leading-none">
                  02
                </span>
                <div className="w-px flex-1 bg-gold/30 mt-3 min-h-[5rem]" />
              </div>
              <div className="pb-4">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-4">
                  A KPMG Client Call: When My Voice Finally Landed
                </h3>
                <p className="text-charcoal text-lg leading-relaxed">
                  I was on a call, nervous as usual, when something shifted. The
                  client wasn&apos;t listening to my accent. They were listening
                  to my analysis. They cared about the value of the message, not
                  the delivery. I walked out of that call different.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="flex gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <span className="font-playfair text-2xl md:text-3xl font-bold text-gold leading-none">
                  03
                </span>
              </div>
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-4">
                  Kellogg: Realizing I Belonged
                </h3>
                <div className="space-y-4 text-charcoal text-lg leading-relaxed">
                  <p>
                    For the first time, I saw myself as equal to people I&apos;d
                    once put on a pedestal — those from big-name schools, wealthy
                    families, impressive pedigrees. I realized I was no less
                    smart, no less capable. I belonged too.
                  </p>
                  <p>
                    I led the Africa Business Club. I had the ambitious idea to
                    bring the Black Panther cast to campus — my classmates
                    didn&apos;t dismiss it. They listened. We didn&apos;t get the
                    cast, but we brought in Nnedi Okorafor, the award-winning
                    author and Black Panther comics writer, to discuss
                    Africanfuturism. It worked because I stopped waiting to feel
                    like I belonged before I acted like I did.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY THIS PODCAST EXISTS ─── */}
      <section className="bg-ink py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            The Mission
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-8">
            Why This Podcast Exists
          </h2>
          <div className="space-y-5 text-sand/80 text-lg leading-relaxed">
            <p>
              I don&apos;t want another immigrant to spend ten years shrinking
              themselves. I don&apos;t want another young professional to stay
              quiet in rooms they worked hard to enter.
            </p>
            <p>
              Your accent is not a weakness. It is evidence of the journey you
              survived. Every mispronounced word, every asked-to-repeat-yourself
              moment — that&apos;s the cost of crossing. And you paid it.
            </p>
          </div>
          <blockquote className="font-playfair text-xl md:text-2xl italic text-cream mt-8 leading-relaxed border-l-4 border-gold pl-5">
            &ldquo;Your voice has enormous power. You only get better by using
            it.&rdquo;
          </blockquote>
          <p className="mt-6 text-sand/80 text-lg leading-relaxed">
            Unmuted Moments exists to tell those stories — the fears, the
            breakthroughs, the quiet decisions to take up space. Because the
            world needs your voice.
          </p>
        </div>
      </section>

      {/* ─── TRANSITION ─── */}
      <section className="bg-cream pt-16 pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest">
            Here&apos;s how that journey unfolded.
          </p>
        </div>
      </section>

      {/* ─── CAREER TIMELINE ─── */}
      <section className="bg-cream py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-14 leading-tight">
            From Benin City to Wall Street to Silicon Valley.
          </h2>

          <div className="divide-y divide-ink/10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-10 items-start"
              >
                <div>
                  <span className="text-gold font-semibold text-sm font-dm tracking-wide">
                    {item.years}
                  </span>
                  <p className="text-charcoal/40 text-xs mt-1">{item.location}</p>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-1">
                    {item.company}
                  </h3>
                  <p className="text-rust text-sm font-semibold mb-3">
                    {item.role}
                  </p>
                  <p className="text-charcoal/70 leading-relaxed">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
