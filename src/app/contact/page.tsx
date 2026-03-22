import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Unmuted Moments",
  description:
    "Reach out to Ehis Akhetuamhen for speaking engagements, partnerships, podcast guest pitches, or career consultations.",
  openGraph: {
    title: "Contact | Unmuted Moments",
    description:
      "Reach out to Ehis Akhetuamhen for speaking engagements, partnerships, podcast guest pitches, or career consultations.",
    url: "https://www.unmutedmomentspodcast.com/contact",
    type: "website",
    siteName: "Unmuted Moments",
    images: [{ url: "/favicon.png", width: 1200, height: 1200, alt: "Unmuted Moments" }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 md:pt-40 md:pb-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Reach Out
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cream">
            Let&apos;s Connect
          </h1>
          <p className="mt-3 text-sand/70 text-lg max-w-xl">
            All inquiries are welcome. I read every message personally.
          </p>
        </div>
      </section>

      {/* ─── FORM SECTION ─── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warm rounded-2xl shadow-md p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
