import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../fonts/Phetsarath_OT.ttf",
  variable: "--Phetsarath_OT",
});

export const metadata: Metadata = {
  title: "Phongsavanh International Hospital",
  description:
    "Hospital landing page with appointments, services, and care highlights.",
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
