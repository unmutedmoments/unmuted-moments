import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Advice | Unmuted Moments",
  description:
    "Finance career guidance from Ehis Akhetuamhen — 12+ years across Big 4, Wall Street, and Big Tech. Book a 1:1 consultation.",
  alternates: {
    canonical: "https://www.unmutedmomentspodcast.com/career",
  },
  openGraph: {
    title: "Career Advice | Unmuted Moments",
    description:
      "Finance career guidance from Ehis Akhetuamhen — 12+ years across Big 4, Wall Street, and Big Tech. Book a 1:1 consultation.",
    url: "https://www.unmutedmomentspodcast.com/career",
    type: "website",
    siteName: "Unmuted Moments",
    images: [{ url: "/og-image.jpg", width: 1230, height: 630, alt: "Unmuted Moments" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Advice | Unmuted Moments",
    description:
      "Finance career guidance from Ehis Akhetuamhen — 12+ years across Big 4, Wall Street, and Big Tech. Book a 1:1 consultation.",
    images: ["https://www.unmutedmomentspodcast.com/og-image.jpg"],
  },
};

const CONSULT_HREF = "https://calendar.app.google/rFxAoSajLSmZCLMq5";

const audiences = [
  {
    label: "Students",
    description:
      "Breaking into finance for the first time and figuring out where to start.",
  },
  {
    label: "Career Switchers",
    description:
      "Making the move into finance from another field and need a clear roadmap.",
  },
  {
    label: "Early to Mid-Career Professionals",
    description:
      "Already in the industry but figuring out how to grow, advance, and thrive.",
  },
];

const careerStops = [
  {
    company: "KPMG",
    years: "2012 — 2014",
    desc: "Financial services audits — where it all began. Became a licensed CPA.",
  },
  {
    company: "Goldman Sachs",
    years: "2014 — 2017",
    desc: "Wall Street, asset management, and proving myself in one of the world's most demanding environments.",
  },
  {
    company: "Kellogg School of Management",
    years: "2017 — 2019",
    desc: "Full-time MBA — honing leadership skills and preparing for the next level.",
  },
  {
    company: "William Blair",
    years: "2019 — 2022",
    desc: "Investment banking, VP. Healthcare M&A.",
  },
  {
    company: "Google",
    years: "2022 — Present",
    desc: "M&A Finance at one of the world's most influential companies.",
  },
];

const helpTopics = [
  "Finance career explainers and resources",
  "Actionable strategies for career transitions",
  "Breaking into Big 4, Wall Street, or Big Tech",
  "Navigating the industry as an immigrant or first-gen professional",
];

const sessionItems = [
  "Clarifying your target role and career path",
  "Understanding the finance career landscape",
  "Building a networking strategy that actually works",
  "Positioning your background effectively for interviews",
];

const testimonials = [
  {
    quote:
      "I am now in the interview process and have you to thank for the opportunity. I really appreciate our session together. Completed 1 round of interviews and am scheduled for the next one.",
    descriptor: "Marketing Professional, Career Switcher into Finance",
  },
  {
    quote:
      "Your advice going into my interview definitely made me feel more prepared. I think it went well. Thanks again for everything — I really appreciate it.",
    descriptor: "Finance Professional, Interview Candidate",
  },
  {
    quote:
      "I really appreciated the honest and straightforward conversation. Your breakdown of the route for international students was especially helpful. Conversations like today's help me feel more grounded in what to expect.",
    descriptor: "International Student, Specialized Master's Program",
  },
];

export default function CareerPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative pt-20 md:pt-24 min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('/images/about-swing-relax.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Career Advice
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
            Finance Careers,{" "}
            <br className="hidden sm:block" />
            Demystified.
          </h1>
          <p className="text-sand/80 text-lg md:text-xl leading-relaxed mb-3 max-w-xl">
            12+ years across Big 4, Wall Street, and Big Tech.
          </p>
          <p className="text-sand/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            I translate insider knowledge into clear steps you can actually use.
          </p>
          <a
            href={CONSULT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="bg-warm py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Who This Is For
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink mb-10">
            Wherever you are in your journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {audiences.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-playfair text-lg font-bold text-ink mb-3">
                  {item.label}
                </h3>
                <p className="text-charcoal text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT I BRING ─── */}
      <section className="bg-ink py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            The Background
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-2">
            I&apos;ve sat in every room.
          </h2>
          <p className="text-sand/50 text-base mb-1">
            Audit, asset management, investment banking, and Big Tech M&A.
          </p>
          <p className="text-sand/60 text-lg mb-12">
            I know what they&apos;re looking for.
          </p>

          <div className="divide-y divide-gold/20">
            {careerStops.map((stop, i) => (
              <div
                key={i}
                className="py-7 grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-8 items-start"
              >
                <span className="text-gold text-sm font-semibold">
                  {stop.years}
                </span>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-cream mb-1">
                    {stop.company}
                  </h3>
                  <p className="text-sand/65 text-sm leading-relaxed">
                    {stop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT I COVER ─── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            How I Can Help
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink mb-10">
            What I cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {helpTopics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-warm rounded-xl p-6"
              >
                <div className="w-8 h-8 rounded-full bg-rust/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b84a2e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-ink font-medium leading-snug text-base">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE'LL COVER IN A SESSION ─── */}
      <section className="bg-warm py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Your Session
          </p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-8">
            What We&apos;ll Cover in a Session
          </h2>
          <ul className="space-y-4">
            {sessionItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-rust/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#b84a2e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-ink text-base md:text-lg leading-relaxed pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── PULL QUOTE ─── */}
      <section className="bg-rust py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl italic text-cream leading-relaxed">
            &ldquo;Finance can look intimidating from the outside. My job is to
            make it feel accessible.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Results
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-ink">
              What People Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-warm rounded-xl p-8">
                <blockquote className="font-playfair italic text-ink text-base leading-relaxed mb-4">
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

      {/* ─── FINAL CTA ─── */}
      <section className="bg-cream py-16 md:py-20 px-4 text-center border-t border-sand/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-8">
            Ready to map your next move?
          </h2>
          <a
            href={CONSULT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
