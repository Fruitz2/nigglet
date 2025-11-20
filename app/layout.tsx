import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: "NIGGLET, Solana, meme coin, crypto, $NIGG, underground, blockchain, Diglett, Pokemon meme",
  authors: [{ name: "NIGGLET Team" }],
  creator: "NIGGLET",
  publisher: "NIGGLET",
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nigglet.vercel.app",
    siteName: "NIGGLET",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "NIGGLET - The Underground Hustler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/logo.png"],
    creator: "@niggletcoin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
