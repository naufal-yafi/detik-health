import Navbar from "@component/navbar/navbar";
import "@style";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Sudirman Run 2023 | Detik Health",
  description:
    "Berita, Tips, Artikel, Info terkait Kesehatan Terbaru Hari Ini. Diet, parenting, seks, obat dan Penyakit. Ada juga konsultasi dokter dan kalkulator kesehatan.",
  authors: [
    {
      name: "Muhammad Naufal Yafi'",
      url: "www.naufal-yafi.biz.id",
    },
  ],
  robots: { index: true, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
