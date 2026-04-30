import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATILA PÁDEL — Complejos de Pádel Llave en Mano",
  description:
    "Construimos tu complejo de pádel con calidad profesional y materiales premium. Diseño avanzado, instalación rápida y garantía de durabilidad.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}