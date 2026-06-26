import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Lao } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { ContactBar } from "@/components/sections/ContactBar";
import Navbar from "@/components/layout/Navbar";

// const myFont = localFont({
//   src: "../fonts/Phetsarath_OT.ttf",
//   variable: "--Phetsarath_OT",
// });

const notoSansLao = Noto_Sans_Lao({
  weight: ["400", "500", "600", "700"],
  subsets: ["lao"],
  display: "swap",
  variable: "--font-noto-sans-lao",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://phongsavanh-hospital.com";

export const metadata: Metadata = {
  title: "Phongsavanh International Hospital",
  description:
    "Hospital landing page with appointments, services, and care highlights.",
  openGraph: {
    title: "Phongsavanh International Hospital",
    description:
      "Hospital landing page with appointments, services, and care highlights.",
    url: siteUrl,
    type: "website",
    siteName: "Phongsavanh Hospital",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Phongsavanh International Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phongsavanh International Hospital",
    description:
      "Hospital landing page with appointments, services, and care highlights.",
    images: [`${siteUrl}/images/og-image.jpg`],
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
      className={`${notoSansLao.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ContactBar />
        <Footer />
      </body>
    </html>
  );
}
