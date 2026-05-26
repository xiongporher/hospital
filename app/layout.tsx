import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../fonts/Phetsarath_OT.ttf",
  variable: "--Phetsarath_OT",
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
    <html lang="en" className={myFont.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
