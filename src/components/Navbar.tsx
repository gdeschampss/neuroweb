"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import InteractiveHoverButton from "./ui/InteractiveHoverButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      const navbarHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          <div className="h-9 w-9 rounded-lg bg-brand-orange flex items-center justify-center font-bold text-[#111111] text-xl transition-transform duration-300 group-hover:scale-105 shadow-[0_0_10px_rgba(226,103,25,0.4)]">
            GD
          </div>
          <span className="font-sans font-black text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-brand-orange">
            DESCHAMPS<span className="text-brand-orange">.</span>
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
        className={`md:hidden fixed inset-x-0 top-[73px] bg-[#111111]/95 backdrop-blur-lg border-b border-brand-border transition-all duration-300 ease-in-out overflow-hidden ${
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
  );
}
