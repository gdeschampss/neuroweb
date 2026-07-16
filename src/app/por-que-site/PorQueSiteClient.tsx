"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import DisplayCards from "@/components/ui/display-cards";
import InteractiveHoverButton from "@/components/ui/InteractiveHoverButton";
import { Sparkles, Compass, Target, ShieldCheck, ArrowRight, Laptop, Smartphone, FileText, Stars } from "lucide-react";

export default function PorQueSiteClient() {
  const cardsData = [
    {
      title: "Vitrina de Autoridade",
      description: "O Instagram é alugado. Seu site é a sua vitrine própria, gerando confiança imediata e atestando que você é um profissional sério e consolidado.",
      icon: <Sparkles className="h-5 w-5" />,
      date: "CONFIANÇA IMEDIATA",
    },
    {
      title: "Prospecção Passiva 24h",
      description: "Seja encontrado nas pesquisas do Google no momento exato em que seu cliente ideal busca pelo serviço, sem depender de postagens diárias.",
      icon: <Compass className="h-5 w-5" />,
      date: "PROSPECÇÃO NO GOOGLE",
    },
    {
      title: "Independência do Algoritmo",
      description: "Redes sociais mudam as regras e caem. O site é o seu canal de vendas 100% sob seu controle, seguro e livre de bloqueios ou quedas.",
      icon: <Target className="h-5 w-5" />,
      date: "CONTROLE ABSOLUTO",
    },
  ];

  const benefits = [
    {
      icon: <Smartphone className="h-6 w-6 text-[#2db5af]" />,
      title: "Mobile First de Verdade",
      desc: "Mais de 70% dos acessos virão do celular. Seu site é otimizado para carregar instantaneamente e ter navegação fluida em qualquer dispositivo."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-[#2db5af]" />,
      title: "Segurança & Velocidade",
      desc: "Desenvolvimento limpo em Next.js e hospedagem premium ultrarrápida. Menos de 1 segundo de carregamento para reter o interesse do lead."
    },
    {
      icon: <FileText className="h-6 w-6 text-[#2db5af]" />,
      title: "Funil de Conversão Integrado",
      desc: "Diferente de redes sociais bagunçadas, o site guia o cliente em uma narrativa lógica e persuasiva até o botão de ação rápida."
    }
  ];

  return (
    <>
      {/* Floating Widgets & Navigation */}
      <FloatingWhatsApp />
      <Navbar />

      <main className="flex-grow pt-32 bg-[#111111] overflow-hidden text-white font-sans">
        {/* Glow Effects */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#2db5af]/5 blur-[160px] rounded-full pointer-events-none z-0" />

        {/* Section 1: Hero & Browser Video 3D */}
        <section className="relative py-16 z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-border-orange bg-brand-orange/5 text-brand-orange text-xs font-semibold tracking-wide uppercase mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            Vendas & Autoridade Digital
          </div>

          <h1 className="font-sans font-[900] text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
            O INSTAGRAM NÃO É O SEU NEGÓCIO.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2db5af] via-[#3dd3cc] to-[#a2f9f5] shadow-sm">
              SEU SITE
            </span>{" "}
            É O SEU MAIOR ATIVO.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            O site funciona como uma vitrine de alto luxo: somado ao Instagram, você cria múltiplas fontes de prospecção + geração de autoridade. No mercado atual, somente prestadores de serviços e empresas sérias investem em sites próprios para blindar sua marca.
          </p>

          {/* Browser Mockup with 3D perspective effect */}
          <div 
            className="w-full max-w-[800px] aspect-[16/10] bg-[#181818] border border-brand-border rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden select-none mb-20"
            style={{ 
              transform: "perspective(1200px) rotateX(10deg) rotateY(-5deg) rotateZ(1deg)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Browser Header Tab Bar */}
            <div className="h-8 bg-[#151515] border-b border-brand-border/60 flex items-center px-4 justify-between">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="bg-[#1e1e1e] border border-brand-border/40 text-[10px] text-gray-500 px-12 py-0.5 rounded-md font-mono select-none">
                neuroweb.com.br/vitrine
              </div>
              <div className="w-12" />
            </div>

            {/* Video Inner */}
            <div className="relative w-full h-[calc(100%-32px)] bg-[#111111]">
              <video
                className="w-full h-full object-cover opacity-90"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/fonts-design/Lpaltaconverscao.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Section 2: Stacking Cards Argumentation */}
        <section className="relative py-20 bg-[#141414] border-t border-b border-brand-border/40">
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text details */}
            <div>
              <span className="text-[#2db5af] text-xs font-bold tracking-widest uppercase mb-3 inline-block">
                Os 3 Pilares da Prospecção
              </span>
              <h2 className="font-sans font-[900] text-3xl sm:text-4xl text-white tracking-tight mb-6 uppercase">
                Por que quem é sério não depende apenas de redes sociais?
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                O Instagram é ótimo para relacionamento rápido, mas peca em duas coisas vitais: **retenção da atenção** e **intenção de compra**. No Instagram, o lead está navegando para se entreter. No seu site, ele entra com uma dor explícita querendo contratar você.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#2db5af]/10 border border-[#2db5af]/20 flex items-center justify-center shrink-0 text-[#2db5af] mt-1">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <strong>Somatória de forças:</strong> Redirecione o tráfego do Instagram e anúncios pagos para uma página ultra-persuasiva focada em fechamento.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="h-5 w-5 rounded-full bg-[#2db5af]/10 border border-[#2db5af]/20 flex items-center justify-center shrink-0 text-[#2db5af] mt-1">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <strong>Posicionamento Premium:</strong> Apenas profissionais consolidados constroem experiências digitais próprias. Destaque-se dos concorrentes amadores.
                  </p>
                </div>
              </div>
            </div>

            {/* Display Stacked Cards */}
            <div className="relative">
              <DisplayCards cards={cardsData} />
            </div>
          </div>
        </section>

        {/* Section 3: Premium Technical Benefits */}
        <section className="relative py-24 z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2db5af] text-xs font-bold tracking-widest uppercase mb-3 inline-block">
              Padrão de Engenharia
            </span>
            <h2 className="font-sans font-[900] text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
              Diferenciais de um site construído por profissionais
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Não usamos templates prontos ou construtores de páginas lentos que travam no celular. Desenvolvemos com foco em código limpo, velocidade e conversão de leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#181818] border border-brand-border p-8 rounded-2xl flex flex-col hover:border-[#2db5af]/30 transition-all duration-300">
                <div className="mb-5 h-12 w-12 rounded-xl bg-[#2db5af]/5 flex items-center justify-center border border-[#2db5af]/10">
                  {benefit.icon}
                </div>
                <h3 className="font-sans font-bold text-base text-white mb-3 uppercase tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed flex-grow">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Final CTA */}
        <section className="relative py-24 bg-[#0b0a0f] border-t border-brand-border">
          <div className="absolute inset-0 bg-[#2db5af]/5 blur-3xl rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
            <span className="text-[#2db5af] text-xs font-bold tracking-widest uppercase mb-3 inline-block">
              Iniciar Projeto
            </span>
            <h2 className="font-sans font-[900] text-3xl sm:text-5xl text-white tracking-tight mb-6 uppercase">
              VAMOS CONSTRUIR O SEU NOVO SITE JUNTOS?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Desenvolva uma página exclusiva padrão Stripe para sua empresa ou escritório de advocacia. Fale diretamente comigo no WhatsApp para darmos início ao briefing.
            </p>
            <div className="flex justify-center">
              <InteractiveHoverButton
                text="Conversar no WhatsApp"
                onClick={() => {
                  window.open(
                    "https://wa.me/5547999619049?text=Ol%C3%A1%20Gabriel.%20Eu%20respondi%20o%20formul%C3%A1rio%20da%20neuroweb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
