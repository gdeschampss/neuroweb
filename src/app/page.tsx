"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase3D from "@/components/Showcase3D";
import Processos from "@/components/Processos";
import Projetos from "@/components/Projetos";
import Precos from "@/components/Precos";
import ContatoForm from "@/components/ContatoForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Floating Widget */}
      <FloatingWhatsApp />

      {/* Navigation Header */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        {/* Hero Banner (Laptop Video Mockup) */}
        <Hero />

        {/* 3D Interactive Device Showcase */}
        <Showcase3D />

        {/* Workflow Steps Section */}
        <Processos />

        {/* Projects Showcase */}
        <Projetos />

        {/* Pricing Tables Section */}
        <Precos />

        {/* Validation Contact Form */}
        <ContatoForm />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}
