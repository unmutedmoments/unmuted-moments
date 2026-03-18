"use client";
import { useState } from "react";

const inquiryTypes = [
  "Partnership/Sponsorship",
  "Pitch a Guest",
  "Career Consultation",
  "General Inquiry",
];

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState("General Inquiry");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(data as any).toString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-rust/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b84a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-ink mb-2">
          Message Sent!
        </h3>
        <p className="text-charcoal/70">
          Thanks for reaching out. I&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="inquiry-type" value={inquiryType} />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-1">
          Send a Message
        </h2>
        <p className="text-charcoal/60 text-sm">
          All inquiries are welcome. I read every message personally.
        </p>
      </div>

      {/* Inquiry type */}
      <div>
        <p className="text-sm font-semibold text-ink mb-3">Inquiry Type</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {inquiryTypes.map((type) => (
            <label
              key={type}
              className={`flex items-center gap-3 p-3.5 rounded-lg border-2 cursor-pointer transition-colors ${
                inquiryType === type
                  ? "border-rust bg-rust/5"
                  : "border-sand hover:border-rust/40"
              }`}
            >
              <input
                type="radio"
                name="inquiry-type-display"
                value={type}
                checked={inquiryType === type}
                onChange={() => setInquiryType(type)}
                className="accent-rust"
              />
              <span className="text-sm text-ink font-medium">{type}</span>
            </label>
          ))}
        </div>
        {/* Guest pitch guidance */}
        {inquiryType === "Pitch a Guest" && (
          <p className="mt-3 text-sm text-charcoal/60 bg-cream rounded-lg px-4 py-3 border border-sand">
            Pitching a guest? Share a short bio and why their story fits the show.
          </p>
        )}
      </div>

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">
            Name <span className="text-rust">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 border-2 border-sand rounded-lg bg-cream text-ink placeholder-charcoal/35 focus:outline-none focus:border-rust text-sm transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">
            Email <span className="text-rust">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 border-2 border-sand rounded-lg bg-cream text-ink placeholder-charcoal/35 focus:outline-none focus:border-rust text-sm transition-colors"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-semibold text-ink mb-1.5">
          Subject <span className="text-rust">*</span>
        </label>
        <input
          type="text"
          name="subject"
          required
          placeholder="What's this about?"
          className="w-full px-4 py-3 border-2 border-sand rounded-lg bg-cream text-ink placeholder-charcoal/35 focus:outline-none focus:border-rust text-sm transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-ink mb-1.5">
          Message <span className="text-rust">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me more..."
          className="w-full px-4 py-3 border-2 border-sand rounded-lg bg-cream text-ink placeholder-charcoal/35 focus:outline-none focus:border-rust text-sm resize-none transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-rust text-white text-sm font-semibold rounded-md hover:bg-rust-dark transition-colors duration-200 uppercase tracking-wide"
      >
        Send Message
      </button>
    </form>
  );
}
