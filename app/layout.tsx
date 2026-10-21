import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Journey Studio — Cinematic Content, Photography & Creative Direction",
  description:
    "Journey Studio creates cinematic photography, film, brand content, creative direction and cultural experiences from Toronto to wherever the story leads.",
  keywords: [
    "Journey Studio",
    "Cinematic Photography",
    "Filmmaking",
    "Creative Direction",
    "Toronto Studio",
    "Brand Storytelling",
    "Digital Art",
    "Maheen",
  ],
  authors: [{ name: "Journey Studio" }],
  openGraph: {
    title: "Journey Studio — Cinematic Content, Photography & Creative Direction",
    description:
      "A creative studio for brands, people and communities who believe in meaningful stories.",
    url: "https://thejourneystudio.com",
    siteName: "Journey Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey Studio — Cinematic Content, Photography & Creative Direction",
    description:
      "A creative studio for brands, people and communities who believe in meaningful stories.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo/journey-logo-j-white.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050708",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${raleway.variable}`}>
      <body className="bg-[#050708] text-[#F4F7F8] antialiased selection:bg-[#19BDF2] selection:text-[#050708]">
        {children}
      </body>
    </html>
  );
}
