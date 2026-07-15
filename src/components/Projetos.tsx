"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Landing Page Premium",
    category: "Vendas & Conversão",
    desc: "LP com design de altíssimo impacto visual, Copy de persuasão focada em leads e estrutura ultra otimizada para carregar em milissegundos.",
    image: "/fonts-design/image.png",
    tags: ["Next.js", "Framer Motion", "SEO Pro"],
  },
  {
    title: "Website Institucional",
    category: "Branding & Presença",
    desc: "Apresentação de negócios de luxo e marcas consolidadas. Arquitetura multi-páginas de alto padrão para transmitir autoridade e confiança absoluta.",
    image: "/fonts-design/image copy.png",
    tags: ["React", "UI/UX Figma", "Multilingue"],
  },
  {
    title: "E-Commerce de Luxo",
    category: "Vendas Online",
    desc: "Loja virtual moderna e rápida, com fluxo de checkout fluido, design personalizado de produtos e integrações automatizadas de pagamento.",
    image: "/fonts-design/image copy 3.png",
    tags: ["Stripe / Pix", "Dashboard Admin", "Next.js"],
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[30%] left-10 w-[350px] h-[350px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 inline-block">
              Nossos Trabalhos
            </span>
            <h2 className="font-sans font-[900] text-3xl sm:text-5xl text-white tracking-tight mb-4">
              PROJETOS QUE INSPIRAM E GERAM RESULTADOS
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Conheça as soluções que desenvolvemos para destacar sua marca com design moderno e performance de alto padrão.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#181818] border border-brand-border hover:border-brand-border-orange rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(226,103,25,0.08)] flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-dark flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                {/* Visual Glassmorphic Overlay */}
                <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-brand-orange text-[#111111] flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-brand-orange text-xs font-semibold uppercase tracking-wider block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-white mb-3 group-hover:text-brand-orange transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold text-gray-400 bg-brand-dark border border-brand-border px-2.5 py-1 rounded-full group-hover:border-brand-border-orange/30 group-hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
