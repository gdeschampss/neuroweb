"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Landing Page de Serviços",
    category: "Vendas & Conversão",
    desc: "Landing page de altíssima performance para profissionais liberais e prestadores de serviço (como advogados e consultores). Estrutura estratégica focada em captação de leads.",
    image: "/fonts-design/15b91e88f58ad474794fddd4cfa6e25a.jpg",
    tags: ["Conversão", "Next.js", "SEO Pro"],
  },
  {
    title: "Website Institucional",
    category: "Branding & Presença",
    desc: "Apresentação corporativa de alto padrão para empresas e escritórios de advocacia. Multi-páginas estruturadas para transmitir o máximo de autoridade e segurança.",
    image: "/fonts-design/c1f3408384ac3ed65f6bda403e2ada10.jpg",
    tags: ["React", "UI/UX Figma", "Institucional"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-[#181818] border border-brand-border hover:border-brand-border-orange rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(45, 181, 175, 0.08)] flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-dark flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                  sizes="(max-w-768px) 100vw, 50vw"
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
