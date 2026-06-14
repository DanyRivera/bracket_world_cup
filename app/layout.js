import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "World Cup 2026 Bracket",
  description: "Mobile-first interactive FIFA World Cup 2026 bracket app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${archivoBlack.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
