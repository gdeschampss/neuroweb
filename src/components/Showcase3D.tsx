"use client";

import React from "react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import { FileText, Stars, ArrowRight } from "lucide-react";

export default function Showcase3D() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="relative py-24 bg-[#0c0c0e] overflow-hidden z-30 border-t border-brand-border/40">
      {/* Giant Background Text inspired by "TRANSCEND" Statue visual */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-sans font-black text-[18vw] text-white/[0.015] tracking-tighter uppercase leading-none">
          CONVERSÃO
        </span>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2db5af]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: CTA & Benefits */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 inline-block">
            ESTRUTURA PERSUASIVA
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-6 uppercase">
            Aumente suas vendas com uma máquina de conversão
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-8">
            Diferente das redes sociais que mudam as regras a todo momento, um website premium estruturado é a sua própria vitrine de vendas de alta performance. Ele trabalha 24 horas por dia para qualificar visitantes comuns em clientes pagantes.
          </p>

          {/* Benefits Bullet Points */}
          <div className="space-y-4 mb-10 w-full">
            <div className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-[#2db5af]/10 border border-[#2db5af]/20 flex items-center justify-center shrink-0 text-[#2db5af] mt-1">
                <Stars className="h-3.5 w-3.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Vitrine de Altíssimo Padrão</h4>
                <p className="text-xs text-gray-400 mt-0.5">Transmita autoridade máxima em segundos e conquiste a confiança imediata do lead.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-6 w-6 rounded-full bg-[#2db5af]/10 border border-[#2db5af]/20 flex items-center justify-center shrink-0 text-[#2db5af] mt-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Funil Integrado Direto</h4>
                <p className="text-xs text-gray-400 mt-0.5">Narrativa persuasiva desenhada estrategicamente para fechar negócios rapidamente.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/por-que-site"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-brand-dark text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Por que ter um Site?</span>
              <Stars className="h-4 w-4" />
            </Link>
            <Link
              href="/manual"
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white"
            >
              <FileText className="h-4 w-4 text-brand-orange" />
              <span>Ver Documentação</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Static 3D Mockups (PC Only - Hidden on Mobile) */}
        <div className="hidden lg:block lg:col-span-6 relative w-full h-[450px] select-none">
          <div 
            className="w-full h-full relative"
            style={{ perspective: "1200px" }}
          >
            {/* 3D Laptop Mockup */}
            <div
              style={{
                transform: "perspective(1200px) rotateX(10deg) rotateY(-18deg) rotateZ(2deg)",
                transformStyle: "preserve-3d"
              }}
              className="absolute left-0 top-[10%] w-[72%] aspect-[16/10] z-10"
            >
              {/* Screen Structure */}
              <div className="relative w-full aspect-[16/10] bg-[#1a1a1a] border-[8px] border-[#252525] rounded-t-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center">
                {/* Webcam Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#111] z-30" />
                
                {/* Screen Inner Display */}
                <div className="relative w-full h-full bg-[#111111] overflow-hidden">
                  <video
                    className="w-full h-full object-cover opacity-90"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/imgs/HomePageNotebook.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Laptop Chassis Base */}
              <div className="relative w-[108%] h-4 bg-gradient-to-b from-[#3a3a3a] via-[#222222] to-[#151515] rounded-b-[12px] -left-[4%] z-20 shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex justify-center">
                <div className="w-20 h-1 bg-[#111111] rounded-b-md" />
              </div>
            </div>

            {/* 3D Cellphone Mockup (Tilted to match isometric angle, highly visible) */}
            <div
              style={{
                transform: "perspective(1200px) rotateX(10deg) rotateY(-18deg) rotateZ(2deg)",
                transformStyle: "preserve-3d"
              }}
              className="absolute right-[5%] bottom-[8%] w-[25%] aspect-[9/19.5] bg-[#1a1a1a] rounded-[32px] border-[6px] border-[#252525] shadow-[0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden z-20"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-30" />
              
              {/* Screen Content */}
              <div className="relative w-full h-full bg-[#111] overflow-hidden">
                <video
                  className="w-full h-full object-cover opacity-95"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/imgs/videowebsiteCellphone.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
