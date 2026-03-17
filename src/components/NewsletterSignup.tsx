"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-rust py-16 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-cream/80 text-xs font-semibold uppercase tracking-widest mb-3">
          Stay Connected
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-3">
          Never Miss an Episode
        </h2>
        <p className="text-warm/85 text-base md:text-lg mb-8 leading-relaxed">
          New episodes, behind-the-scenes stories, and community updates
          straight to your inbox.
        </p>
        {status === "success" ? (
          <p className="text-cream font-semibold text-lg">
            You&apos;re in! Talk soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-md bg-warm text-ink placeholder-muted focus:outline-none focus:ring-2 focus:ring-cream text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-transparent border-2 border-cream text-cream text-sm font-semibold rounded-md hover:bg-cream hover:text-rust transition-colors duration-200 whitespace-nowrap uppercase tracking-wide disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-3 text-cream/70 text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
