import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARMEDIA — Jembatan Digital Masa Depan | Internet Fiber Optic & VSAT",
  description:
    "PT AKSES ARTHA MEDIA (ARMEDIA) — Penyedia layanan internet Fiber Optic dan VSAT terbaik untuk rumah, kantor, dan UMKM. Cukup mbayar wulanane mulai Rp 115.000/bln. Daftar sekarang!",
  keywords: [
    "internet fiber optic",
    "ISP Indonesia",
    "ARMEDIA",
    "PT Akses Artha Media",
    "internet murah",
    "wifi rumahan",
    "internet UMKM",
    "VSAT",
  ],
  authors: [{ name: "PT AKSES ARTHA MEDIA" }],
  openGraph: {
    title: "ARMEDIA — Internet Fiber Optic Mulai Rp 115.000/bln",
    description:
      "Konektivitas tanpa batas untuk rumah, kantor, dan UMKM. Daftar sekarang!",
    url: "https://aksesartamedia.id",
    siteName: "ARMEDIA",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARMEDIA — Internet Fiber Optic Mulai Rp 115.000/bln",
    description:
      "Konektivitas tanpa batas untuk rumah, kantor, dan UMKM. Daftar sekarang!",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
