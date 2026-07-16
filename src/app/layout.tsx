import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEUROWEB | Websites & Landing Pages de Alto Padrão",
  description: "Desenvolvimento de websites e landing pages premium, rápidas, responsivas e otimizadas para vendas. Destaque sua empresa e atraia clientes de alto padrão.",
  metadataBase: new URL("https://neuroweb.com.br"),
  openGraph: {
    title: "NEUROWEB | Websites & Landing Pages de Alto Padrão",
    description: "Desenvolvimento de websites e landing pages premium, rápidas, responsivas e otimizadas para vendas. Destaque sua empresa e atraia clientes de alto padrão.",
    url: "https://neuroweb.com.br",
    siteName: "NEUROWEB",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/fonts-design/logoNeuroWeb.png",
        width: 800,
        height: 600,
        alt: "NEUROWEB Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEUROWEB | Websites & Landing Pages de Alto Padrão",
    description: "Desenvolvimento de websites e landing pages premium, rápidas, responsivas e otimizadas para vendas. Destaque sua empresa e atraia clientes de alto padrão.",
    images: ["/fonts-design/logoNeuroWeb.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body className="min-h-full flex flex-col bg-brand-dark text-white selection:bg-brand-orange selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}

