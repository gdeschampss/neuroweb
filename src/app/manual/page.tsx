import type { Metadata } from "next";
import ManualClient from "./ManualClient";

export const metadata: Metadata = {
  title: "Manual do Cliente | NEUROWEB",
  description: "Acesse o Manual do Cliente da NEUROWEB. Conheça nossos processos, cronogramas de entrega e esclareça dúvidas antes de iniciar seu website.",
  openGraph: {
    title: "Manual do Cliente | NEUROWEB",
    description: "Acesse o Manual do Cliente da NEUROWEB. Conheça nossos processos, cronogramas de entrega e esclareça dúvidas antes de iniciar seu website.",
    url: "https://neuroweb.com.br/manual",
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
    title: "Manual do Cliente | NEUROWEB",
    description: "Acesse o Manual do Cliente da NEUROWEB. Conheça nossos processos, cronogramas de entrega e esclareça dúvidas antes de iniciar seu website.",
    images: ["/fonts-design/logoNeuroWeb.png"],
  },
};

export default function Page() {
  return <ManualClient />;
}
