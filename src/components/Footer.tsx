"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const handleScrollToTop = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname !== "/") {
      // Let standard navigation to "/#id" happen
      return;
    }
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0b0a0f] border-t border-brand-border pt-16 pb-8 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Info */}
        <div className="md:col-span-2">
          <Link
            href="/"
            onClick={handleScrollToTop}
            className="flex items-center gap-3 mb-6 group cursor-pointer w-fit"
          >
            <img
              src="/fonts-design/logo3d.png"
              alt="NeuroFlow Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-sans font-black text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-brand-orange uppercase">
              NEUROFLOW<span className="text-brand-orange">.</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
            Construindo pontes digitais de alto nível técnico e estético. Criamos sites e landing pages premium para impulsionar suas vendas e autoridade de marca.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ianeuroflow/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#181818] border border-brand-border flex items-center justify-center text-white hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
              aria-label="Siga no Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://wa.me/5547999619049"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#181818] border border-brand-border flex items-center justify-center text-white hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
              aria-label="Fale no WhatsApp"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
            Navegação
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="/#processos"
                onClick={(e) => handleAnchorClick(e, "processos")}
                className="hover:text-brand-orange transition-colors duration-200"
              >
                Como Trabalhamos
              </a>
            </li>
            <li>
              <a
                href="/#projetos"
                onClick={(e) => handleAnchorClick(e, "projetos")}
                className="hover:text-brand-orange transition-colors duration-200"
              >
                Nossos Projetos
              </a>
            </li>
            <li>
              <a
                href="/#precos"
                onClick={(e) => handleAnchorClick(e, "precos")}
                className="hover:text-brand-orange transition-colors duration-200"
              >
                Valores e Investimento
              </a>
            </li>
            <li>
              <a
                href="/#contato"
                onClick={(e) => handleAnchorClick(e, "contato")}
                className="hover:text-brand-orange transition-colors duration-200"
              >
                Fazer Orçamento
              </a>
            </li>
          </ul>
        </div>

        {/* Company Docs & Support */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
            Manual & Dúvidas
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link
                href="/manual#faq"
                className="flex items-center gap-1 hover:text-brand-orange transition-colors duration-200 group"
              >
                Perguntas Frequentes (FAQ)
                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            </li>
            <li>
              <Link
                href="/manual"
                className="flex items-center gap-1 hover:text-brand-orange transition-colors duration-200 group"
              >
                Manual do Cliente
                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            </li>
            <li>
              <a
                href="https://www.ianeuroflow.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-brand-orange transition-colors duration-200 group"
              >
                Conheça a NeuroFlow
                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </li>
            <li className="flex items-start gap-2 pt-2 text-xs text-gray-500 border-t border-brand-border/40">
              <MapPin className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
              <span>
                R. Uganda, 190 - Nações<br />
                Balneário Camboriú - SC, 88338-160, Brasil
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-brand-border/40 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4 relative z-10">
        <span>
          &copy; {new Date().getFullYear()} NeuroWeb / NeuroFlow. Todos os direitos reservados.
        </span>
        <div className="flex items-center gap-6">
          <Link href="/manual" className="hover:text-white transition-colors duration-200">
            Termos de Uso
          </Link>
          <Link href="/manual" className="hover:text-white transition-colors duration-200">
            Políticas de Privacidade
          </Link>
        </div>
      </div>

      {/* Giant Background Text inspired by Podium */}
      <div className="w-full overflow-hidden select-none pointer-events-none -mb-8 mt-4 relative z-0">
        <h1 className="font-sans font-black text-[22vw] leading-none text-white/[0.012] sm:text-white/[0.02] text-center tracking-tighter uppercase translate-y-[32%] sm:translate-y-[28%] lg:translate-y-[20%]">
          NEUROWEB
        </h1>
      </div>
    </footer>
  );
}
