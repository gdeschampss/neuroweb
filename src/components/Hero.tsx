"use client";

import React from "react";
import InteractiveHoverButton from "./ui/InteractiveHoverButton";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { scrollY } = useScroll();

  // Scroll-driven 3D laptop animation maps scroll progress to 3D rotation and scale
  const rigRotateY = useTransform(scrollY, [0, 400], [-30, 0]);
  const rigRotateX = useTransform(scrollY, [0, 400], [20, 9]);
  const rigScale = useTransform(scrollY, [0, 400], [0.86, 1.0]);
  const screenRotateX = useTransform(scrollY, [0, 400], [-100, 0]);

  const rigStyle = isDesktop
    ? {
        rotateY: rigRotateY,
        rotateX: rigRotateX,
        scale: rigScale,
        transformStyle: "preserve-3d" as const,
      }
    : {
        transformStyle: "preserve-3d" as const,
      };

  const screenStyle = isDesktop
    ? {
        rotateX: screenRotateX,
        transformOrigin: "bottom center",
        transformStyle: "preserve-3d" as const,
      }
    : {
        transformOrigin: "bottom center",
        transformStyle: "preserve-3d" as const,
      };

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-border-orange bg-brand-orange/5 text-brand-orange text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          Websites de Alto Padrão
        </div>

        {/* Big Headline (Inter Black) */}
        <h1 className="font-sans font-[900] text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] max-w-4xl mb-6">
          CONSTRUÍMOS WEBSITES QUE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2db5af] via-[#3dd3cc] to-[#a2f9f5] shadow-sm">
            ALAVANCAM
          </span>{" "}
          O SEU NEGÓCIO
        </h1>

        {/* Hook / Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Desenvolvemos designs exclusivos, rápidos, responsivos e focados em
          converter visitantes comuns em clientes fiéis. O cartão de visitas
          digital que sua marca merece.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full justify-center">
          <InteractiveHoverButton
            text="Solicitar Website"
            onClick={() => handleScrollToSection("contato")}
          />
          <button
            onClick={() => handleScrollToSection("projetos")}
            className="px-8 py-3 rounded-full border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 text-sm font-semibold transition-all duration-300 min-w-[160px] cursor-pointer"
          >
            Ver Projetos
          </button>
        </div>

        {/* CSS Notebook Mockup with Video */}
        <div 
          className="relative w-full max-w-[850px] aspect-[16/10] px-4 sm:px-8 mt-4 select-none"
          style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
        >
          {/* Rig */}
          <motion.div
            style={rigStyle}
            className="w-full h-full relative"
          >
            {/* Laptop Screen Structure */}
            <motion.div
              style={screenStyle}
              className="relative w-full aspect-[16/10] bg-[#1a1a1a] border-[6px] md:border-[12px] border-[#252525] rounded-2xl md:rounded-t-[30px] md:rounded-b-none shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-hidden flex items-center justify-center"
            >
              {/* Top Webcam Notch */}
              <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#111] z-30" />
              
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
                  <source src="/fonts-design/HomePageNotebook.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
                {/* Overlay shadow for display depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Laptop Base (Keyboard/Chassis) */}
            <div className="hidden md:flex relative w-[108%] h-3 sm:h-4 bg-gradient-to-b from-[#3a3a3a] via-[#222222] to-[#151515] rounded-b-[10px] sm:rounded-b-[15px] -left-[4%] z-20 shadow-[0_15px_30px_rgba(0,0,0,0.7)] flex justify-center">
              {/* Notch Opening */}
              <div className="w-16 sm:w-24 h-1 bg-[#111111] rounded-b-md" />
            </div>

            {/* Reflections/Shadow on Ground */}
            <div className="absolute top-[100%] left-[-5%] right-[-5%] h-8 bg-gradient-to-b from-brand-orange/5 to-transparent blur-xl rounded-full z-10 pointer-events-none" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => handleScrollToSection("processos")}
          className="mt-16 text-gray-500 hover:text-brand-orange transition-colors duration-300 flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest animate-bounce"
        >
          Descubra Mais
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
