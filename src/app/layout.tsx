import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Deschamps | Websites & LPs de Alto Padrão",
  description: "Desenvolvimento de websites e landing pages de altíssimo padrão, rápidos, responsivos e otimizados para vendas. Destaque-se no mercado digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-white selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}

