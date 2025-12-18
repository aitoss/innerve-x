import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { s } from "motion/react-client";
import LenisProvider from "@/utils/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clashClan = localFont({
  src: [
    {
      path: "../../public/Clash_Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-clashclan", // useful for Tailwind
});

// const superCell = localFont({
//   src: [
//     {
//       path: "../../public/supercell-magic.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-supercell", // useful for Tailwind
// });

export const metadata: Metadata = {
  title: "Innerve X",
  description:
    "A 24-hour hackathon with challenging problems, exciting swags and goodies for participants. We also conduct seminars and interactions with industry experts.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Innerve X",
    description:
      "A 24-hour hackathon with challenging problems, exciting swags and goodies for participants.",
    url: "https://www.innerve.tech",
    siteName: "Innerve X",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innerve X",
    description:
      "A 24-hour hackathon with challenging problems, exciting swags and goodies for participants.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${clashClan.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
