"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Stars } from "lucide-react";
import InteractiveHoverButton from "./ui/InteractiveHoverButton";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Show banner only if it was not closed in this session
    const isClosed = sessionStorage.getItem("neuroweb-banner-closed");
    if (!isClosed) {
      setShowBanner(true);
    }
  }, []);

  const closeBanner = () => {
    sessionStorage.setItem("neuroweb-banner-closed", "true");
    setShowBanner(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setIsOpen(false);
    if (pathname !== "/") {
      // Let standard navigation to "/#id" happen
      return;
    }
    
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = (showBanner && isDesktop) ? 116 : 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Top promotional banner */}
      {showBanner && (
        <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 h-9 bg-gradient-to-r from-[#141414] via-[#2db5af]/30 to-[#141414] border-b border-[#2db5af]/20 text-white text-[11px] md:text-xs px-4 flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 font-sans shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
          <span className="font-medium tracking-wide text-gray-200">
            🚀 Seu site atual não vende? Criamos páginas de alta performance e conversão com design padrão internacional.
          </span>
          <a
            href="/#contato"
            onClick={(e) => {
              const target = document.getElementById("contato");
              if (target) {
                e.preventDefault();
                const navbarHeight = (showBanner && isDesktop) ? 116 : 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center bg-[#2db5af] hover:bg-[#3dded7] text-[#111111] px-2 py-0.5 rounded-full text-[10px] font-extrabold transition-all duration-200 uppercase tracking-wider shrink-0 cursor-pointer shadow-sm hover:scale-105"
          >
            Quero Vender Mais
          </a>
          <button
            onClick={closeBanner}
            className="absolute right-4 hover:text-[#2db5af] transition-colors p-1"
            aria-label="Fechar aviso"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          showBanner ? "top-0 md:top-9" : "top-0"
        } ${
          scrolled
            ? "bg-[#111111]/80 backdrop-blur-md border-b border-brand-border py-4 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              src="/fonts-design/logoNeuroWeb.png"
              alt="NeuroWeb Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-sans font-black text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-brand-orange uppercase">
              NEUROWEB<span className="text-brand-orange">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#processos"
              onClick={(e) => handleAnchorClick(e, "processos")}
              className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors duration-200"
            >
              Processos
            </a>
            <a
              href="/#projetos"
              onClick={(e) => handleAnchorClick(e, "projetos")}
              className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors duration-200"
            >
              Projetos
            </a>
            <a
              href="/#precos"
              onClick={(e) => handleAnchorClick(e, "precos")}
              className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors duration-200"
            >
              Preços
            </a>
            <a
              href="/#contato"
              onClick={(e) => handleAnchorClick(e, "contato")}
              className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors duration-200"
            >
              Contato
            </a>
            <Link
              href="/manual"
              className="text-sm font-medium text-gray-300 hover:text-brand-orange transition-colors duration-200 border-l border-brand-border pl-6"
            >
              Documentos
            </Link>
            <Link
              href="/por-que-site"
              className="text-sm font-bold border-l border-brand-border pl-6 transition-all duration-200 hover:opacity-90 shrink-0 flex items-center gap-1"
            >
              <span className="shimmer-text font-black">Por que ter um Site?</span>
              <Stars className="h-4 w-4 text-[#2db5af]" />
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <InteractiveHoverButton
              text="Solicitar Website"
              onClick={() => {
                if (pathname !== "/") {
                  window.location.href = "/#contato";
                } else {
                  const contatoSection = document.getElementById("contato");
                  if (contatoSection) {
                    const targetPosition = contatoSection.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: targetPosition, behavior: "smooth" });
                  }
                }
              }}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-brand-orange transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          style={{ top: showBanner ? "109px" : "73px" }}
          className={`md:hidden fixed inset-x-0 bg-[#111111]/95 backdrop-blur-lg border-b border-brand-border transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[380px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col gap-6 px-8 items-start">
            <a
              href="/#processos"
              onClick={(e) => handleAnchorClick(e, "processos")}
              className="text-base font-semibold text-gray-300 hover:text-brand-orange transition-colors duration-200 w-full py-1"
            >
              Processos
            </a>
            <a
              href="/#projetos"
              onClick={(e) => handleAnchorClick(e, "projetos")}
              className="text-base font-semibold text-gray-300 hover:text-brand-orange transition-colors duration-200 w-full py-1"
            >
              Projetos
            </a>
            <a
              href="/#precos"
              onClick={(e) => handleAnchorClick(e, "precos")}
              className="text-base font-semibold text-gray-300 hover:text-brand-orange transition-colors duration-200 w-full py-1"
            >
              Preços
            </a>
            <a
              href="/#contato"
              onClick={(e) => handleAnchorClick(e, "contato")}
              className="text-base font-semibold text-gray-300 hover:text-brand-orange transition-colors duration-200 w-full py-1"
            >
              Contato
            </a>
            <Link
              href="/manual"
              className="text-base font-semibold text-gray-300 hover:text-brand-orange transition-colors duration-200 w-full py-1 border-t border-brand-border pt-4"
            >
              Documentos (Manual do Cliente)
            </Link>
            <Link
              href="/por-que-site"
              className="text-base font-bold w-full py-1 flex items-center gap-1"
            >
              <span className="shimmer-text font-black">Por que ter um Site?</span>
              <Stars className="h-4 w-4 text-[#2db5af]" />
            </Link>
            <div className="w-full pt-2">
              <InteractiveHoverButton
                text="Solicitar Website"
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  if (pathname !== "/") {
                    window.location.href = "/#contato";
                  } else {
                    const contatoSection = document.getElementById("contato");
                    if (contatoSection) {
                      const targetPosition = contatoSection.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: targetPosition, behavior: "smooth" });
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
