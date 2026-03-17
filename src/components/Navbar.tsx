"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "My Story", href: "/my-story" },
  { label: "Episodes", href: "/episodes" },
  { label: "Reflections", href: "/reflections" },
  { label: "Media", href: "/media" },
  { label: "Career Advice", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const CONSULT_HREF = "https://calendar.app.google/rFxAoSajLSmZCLMq5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-playfair text-lg md:text-2xl font-bold text-cream tracking-wide">
              Unmuted Moments
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")
                    ? "text-gold"
                    : "text-sand hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONSULT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-gold text-ink text-sm font-semibold rounded-md hover:bg-gold/85 transition-colors duration-200 whitespace-nowrap"
            >
              Book a Consultation
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream p-2 -mr-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ink border-t border-white/10">
          <nav className="flex flex-col px-4 py-5 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-base font-medium py-3 border-b border-white/5 transition-colors duration-200 ${
                  pathname === link.href ? "text-gold" : "text-sand hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CONSULT_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-3 bg-gold text-ink text-sm font-semibold rounded-md text-center hover:bg-gold/85 transition-colors"
            >
              Book a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
