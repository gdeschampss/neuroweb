"use client";

import React from "react";
import { Compass, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Briefing & Planejamento",
    desc: "Alinhamos os objetivos do seu negócio, analisamos concorrentes e estruturamos a arquitetura ideal da página para maximizar suas conversões.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Design de Experiência",
    desc: "Criamos um protótipo exclusivo e moderno com alto apelo visual (sem templates prontos), focado na experiência do usuário (UI/UX) e na sua marca.",
    icon: Palette,
  },
  {
    num: "03",
    title: "Desenvolvimento Premium",
    desc: "Transformamos o design aprovado em código robusto e limpo usando Next.js, React e Tailwind. Otimizado para velocidade, SEO e adaptado a todas as telas.",
    icon: Code,
  },
  {
    num: "04",
    title: "Lançamento & Suporte",
    desc: "Configuramos servidores, domínio, integrações de formulários e analytics. Além disso, entregamos o Manual do Cliente para garantir sua autonomia total.",
    icon: Rocket,
  },
];

export default function Processos() {
  return (
    <section id="processos" className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Background decoration glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 inline-block">
            Fluxo de Trabalho
          </span>
          <h2 className="font-sans font-[900] text-3xl sm:text-5xl text-white tracking-tight mb-6">
            COMO CONSTRUÍMOS O SEU SUCESSO DIGITAL
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Um processo transparente e meticuloso, focado em entregar projetos de alta qualidade técnica e estética no menor tempo possível.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#181818] border border-brand-border hover:border-brand-orange/30 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(45,181,175,0.1)] flex flex-col"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans font-black text-4xl text-gray-800 group-hover:text-brand-orange/30 transition-colors duration-300">
                    {step.num}
                  </span>
                  <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-[#111111] transition-all duration-300 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-sans font-bold text-lg text-white mb-4 group-hover:text-brand-orange transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {step.desc}
                </p>

                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 inset-x-8 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-orange group-hover:to-[#3dded7] transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
