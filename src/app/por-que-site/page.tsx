import type { Metadata } from "next";
import PorQueSiteClient from "./PorQueSiteClient";

export const metadata: Metadata = {
  title: "Por que ter um Site? | NEUROWEB",
  description: "Entenda por que ter um website de alto padrão é o maior diferencial competitivo, de credibilidade e prospecção passiva de clientes para sua empresa.",
  openGraph: {
    title: "Por que ter um Site? | NEUROWEB",
    description: "Entenda por que ter um website de alto padrão é o maior diferencial competitivo, de credibilidade e prospecção passiva de clientes para sua empresa.",
    url: "https://neuroweb.com.br/por-que-site",
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
    title: "Por que ter um Site? | NEUROWEB",
    description: "Entenda por que ter um website de alto padrão é o maior diferencial competitivo, de credibilidade e prospecção passiva de clientes para sua empresa.",
    images: ["/fonts-design/logoNeuroWeb.png"],
  },
};

export default function PorQueSitePage() {
  return <PorQueSiteClient />;
}
