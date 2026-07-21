"use client";

import React from "react";
import InteractiveHoverButton from "./ui/InteractiveHoverButton";
import { ArrowDown, ShieldCheck, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import GradientText from "./ui/GradientText";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

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
    <section className="relative min-h-dvh md:min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0" 
        style={{ backgroundImage: "url('/imgs/ChatGPT-bg.png')" }} 
      />
      {/* Soft gradient mask for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/90 via-[#111111]/75 to-[#111111] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#2db5af]/5 blur-[90px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-border-orange bg-brand-orange/5 text-brand-orange text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2db5af] animate-pulse" />
            Criação de Websites de Alto Padrão
          </div>

          {/* Big Headline */}
          <h1 className="font-sans font-[900] text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            O seu site no ar em{" "}
            <GradientText
              colors={["#e4e4e4", "#2ccbba"]}
              animationSpeed={1}
              showBorder={false}
              pauseOnHover={true}
              yoyo={false}
              className="inline-block text-transparent bg-clip-text font-black"
            >
              48 horas
            </GradientText>
            .
          </h1>

          {/* Subheadline (Negrito) */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-200 mb-6 leading-snug">
            Websites que alavancam seu posicionamento digital
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            Desenvolvemos designs exclusivos, rápidos, responsivos e focados em converter visitantes comuns em clientes fiéis. O cartão de visitas digital que sua marca merece.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <InteractiveHoverButton
              text="Solicitar Website"
              onClick={() => handleScrollToSection("contato")}
              className="w-full sm:w-auto"
            />
            <button
              onClick={() => handleScrollToSection("projetos")}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 text-sm font-semibold transition-all duration-300 cursor-pointer text-white"
            >
              Ver Projetos
            </button>
          </div>

          {/* Bottom Trust Icons / Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-6 border-t border-brand-border/40">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#2db5af]/10 flex items-center justify-center text-[#2db5af] shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Garantia NeuroFlow</h4>
                <p className="text-xs text-gray-400">Tecnologia, segurança e suporte contínuo.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#2db5af]/10 flex items-center justify-center text-[#2db5af] shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Alta Performance</h4>
                <p className="text-xs text-gray-400">Velocidade extrema otimizada para SEO.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Overlapping Devices Mockup */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] mt-8 lg:mt-0 select-none">
          {/* Radial Glow behind mockups */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-orange/15 blur-[50px] rounded-full pointer-events-none z-0" />

          {/* Desktop Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-[85%] lg:w-[90%] aspect-[16/10] bg-[#1a1a1a] border-[5px] sm:border-[7px] border-[#252525] rounded-t-[16px] sm:rounded-t-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden z-10 mr-[10%] lg:mr-[12%]"
          >
            {/* Browser Header */}
            <div className="h-6 sm:h-8 bg-[#222222] border-b border-[#2d2d2d] px-3 flex items-center gap-1.5 shrink-0">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#27c93f]" />
              <div className="flex-1 flex justify-center max-w-[160px] sm:max-w-[200px] mx-auto">
                <div className="w-full bg-[#161616] text-[8px] sm:text-[10px] text-gray-500 rounded py-0.5 text-center flex items-center justify-center gap-1">
                  <Lock className="h-2.5 w-2.5 text-[#2db5af]" />
                  neuroweb.tech
                </div>
              </div>
            </div>

            {/* Screen Inner Display */}
            <div className="relative w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] bg-[#111111] overflow-hidden">
              <img
                src="/imgs/site4.png"
                className="w-full h-full object-cover object-top opacity-90"
                alt="Website Desktop Preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Mobile Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-[-15px] sm:bottom-[-25px] right-[2%] w-[150px] sm:w-[190px] md:w-[210px] aspect-[9/19] bg-[#1a1a1a] rounded-[28px] sm:rounded-[36px] border-[5px] sm:border-[7px] border-[#252525] shadow-[0_25px_50px_rgba(0,0,0,0.8)] overflow-hidden z-20"
          >
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3.5 sm:h-4 bg-black rounded-full z-30" />
            
            {/* Screen Content */}
            <div className="relative w-full h-full bg-[#111] overflow-hidden">
              <img
                src="/imgs/cellphon1.png"
                className="w-full h-full object-cover object-top opacity-95"
                alt="Website Mobile Preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Arrow Scroll Indicator */}
      <button
        onClick={() => handleScrollToSection("processos")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 hover:text-brand-orange transition-colors duration-300 flex flex-col items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest animate-bounce z-10"
      >
        <ArrowDown className="h-4 w-4" />
      </button>
    </section>
  );
}
