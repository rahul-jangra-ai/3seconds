import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Preloader } from "@/components/common/Preloader";
import { Header } from "@/components/common/Header";
import { CustomCursor } from "@/components/common/CustomCursor";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { VerticalScrollRail } from "@/components/common/VerticalScrollRail";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3seconds — The 3-Second Viral Hook & Creative Media Agency",
  description:
    "We engineer high-retention short-form videos, cultural meme campaigns, and creator syndication that capture audience attention in under 3 seconds.",
  keywords: [
    "creative media agency",
    "viral hooks",
    "meme marketing",
    "short-form video production",
    "creator syndication",
    "attention economy",
  ],
  authors: [{ name: "3seconds Media" }],
  openGraph: {
    title: "3seconds — The 3-Second Viral Hook Agency",
    description: "Capture attention in 3 seconds. Or fade away.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased bg-[#FAF6EE] text-[#121212] selection:bg-hook-orange selection:text-white">
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <VerticalScrollRail />
          <Header />
          <main className="relative min-h-screen">
            {children}
          </main>
          <ScrollProgress />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
