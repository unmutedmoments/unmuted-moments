import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.unmutedmomentspodcast.com"),
  title: {
    default: "Unmuted Moments | Because the World Needs Your Voice",
    template: "%s | Unmuted Moments",
  },
  description:
    "Unmuted Moments is a podcast exploring the journey to finding and owning your voice through conversations with immigrants, leaders, and professionals.",
  openGraph: {
    siteName: "Unmuted Moments",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1230, height: 630, alt: "Unmuted Moments" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-dm antialiased bg-cream text-ink`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
