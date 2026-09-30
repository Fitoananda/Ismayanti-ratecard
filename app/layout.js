import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata = {
  title: "Neng Ismayanti — Rate Card | Fashion & Affiliate Creator",
  description: "Rate card resmi Neng Ismayanti, konten kreator dan affiliate creator fashion. Layanan, harga, dan ketentuan kolaborasi.",
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#FAF6EE" };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sora.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
