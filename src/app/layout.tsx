import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FutVeri - Futbol Analitiği Platformu",
    template: "%s | FutVeri",
  },
  description:
    "Yapay zeka destekli futbol analitik platformu. Oyuncuları, takımları ve maçları daha iyi anlayın. Veri odaklı kararlar alın, performansı maksimize edin.",
  keywords: [
    "futbol",
    "analitik",
    "yapay zeka",
    "sporanalizi",
    "oyuncu analizi",
    "maç istatistikleri",
    "FutVeri",
  ],
  authors: [{ name: "FutVeri Team" }],
  creator: "FutVeri",
  metadataBase: new URL("https://futveri.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://futveri.com",
    siteName: "FutVeri",
    title: "FutVeri - Futbol Analitiği Platformu",
    description:
      "Yapay zeka destekli futbol analitik platformu. Oyuncuları, takımları ve maçları daha iyi anlayın.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FutVeri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutVeri - Futbol Analitiği Platformu",
    description:
      "Yapay zeka destekli futbol analitik platformu.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
