"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  HelpCircle, 
  Plus, 
  Minus, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Settings, 
  Calendar, 
  MessageSquare, 
  DollarSign, 
  Sparkles,
  Info,
  Layers,
  Wrench,
  AlertTriangle,
  Stars
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: "filosofia", title: "Nossa Filosofia" },
  { id: "como-funciona", title: "Como Funciona" },
  { id: "incluso", title: "O que está Incluso" },
  { id: "nao-incluso", title: "O que NÃO está Incluso" },
  { id: "ferramentas", title: "Ferramentas & Tecnologias" },
  { id: "comunicacao", title: "Comunicação & Prazos" },
  { id: "pagamento", title: "Pagamento & Garantias" },
  { id: "faq", title: "Dúvidas Frequentes (FAQ)" },
];

const faqs = [
  {
    question: "Quanto tempo demora para meu site ficar pronto?",
    answer: "Para Landing Pages, o prazo de entrega é de 24h a 72h (1 a 3 dias úteis). Para Websites Institucionais com até 5 páginas, o prazo médio é de 3 a 5 dias úteis. Projetos personalizados variam conforme o escopo acordado.",
  },
  {
    question: "Preciso já ter um domínio registrado?",
    answer: "Não é obrigatório possuir antes, mas ter um domínio personalizado melhora a aparência e profissionalismo do site. Se você ainda não tem, realizamos o registro e colocamos tudo em produção para você, indicando as melhores opções e valores.",
  },
  {
    question: "Posso atualizar o site depois de pronto?",
    answer: "Sim! Alterações futuras podem ser solicitadas e serão cobradas como acréscimo proporcional de desenvolvimento, ou conforme acordo mútuo de manutenção.",
  },
  {
    question: "O site vai aparecer nas buscas do Google?",
    answer: "Sim! Desenvolvemos o site com otimização completa de SEO básico (Tags, velocidade de carregamento, indexação) e damos suporte para indexar as suas páginas corretamente no Google Search Console.",
  },
  {
    question: "Posso pedir alterações no design ou nas informações?",
    answer: "Sim. Oferecemos um prazo de até 45 dias pós-entrega para alteração e ajuste de informações textuais, e até 25 dias para alterações de design sem qualquer acréscimo no custo.",
  },
  {
    question: "O site funciona perfeitamente no celular?",
    answer: "Sim, 100%. Todos os nossos sites são projetados sob o conceito 'Mobile First' e são totalmente responsivos, garantindo uma navegação premium em computadores, tablets e celulares de qualquer formato.",
  },
  {
    question: "Vocês fazem manutenção técnica do site?",
    answer: "Sim, a manutenção corretiva inicial está inclusa na garantia. Após 90 dias, caso necessite de suporte técnico permanente ou atualizações estruturais periódicas, cobramos um valor mensal opcional ou orçamentos sob demanda.",
  },
  {
    question: "Como funciona a hospedagem do site?",
    answer: "Temos um sistema próprio de hospedagem de altíssima velocidade e estabilidade que custa zero para o contratante. Se você preferir usar uma hospedagem própria ou específica, realizamos a migração, mas não cobrimos as taxas mensais cobradas por provedores terceiros.",
  },
  {
    question: "Vocês registram o domínio e colocam no ar?",
    answer: "Sim, fazemos todo o processo técnico: registro do domínio, configuração do apontamento DNS e colocamos o site no ar pronto para o público.",
  },
  {
    question: "Posso contratar mais páginas depois do site pronto?",
    answer: "Sim. Se estiver dentro do limite de 5 páginas do plano contratado, podemos adicionar sem problemas. Caso exceda o limite, haverá uma pequena taxa adicional por página. Pedidos adicionais podem levar um tempo de entrega a mais.",
  },
  {
    question: "O site será rápido e performático?",
    answer: "Sim. Nossos projetos são codificados do zero utilizando Next.js e React. Isso resulta em carregamentos instantâneos, essenciais para converter visitas em clientes e pontuar bem no Google PageSpeed.",
  },
  {
    question: "O site e o código serão meus?",
    answer: "Com certeza. Todo o código fonte, arquivos de design, domínio e conteúdo pertencem 100% a você após a quitação do projeto. Nós apenas fabricamos a solução, a propriedade intelectual é sua.",
  },
];

export default function ManualPage() {
  const [activeSection, setActiveSection] = useState("filosofia");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 160;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    isScrollingRef.current = true;

    const el = document.getElementById(id);
    if (el) {
      const offsetPosition = el.offsetTop - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Allow scroll listener to resume updates after smooth scroll finishes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleScrollToContact = () => {
    window.location.href = "/#contato";
  };

  return (
    <>
      <FloatingWhatsApp />
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-[#111111] overflow-hidden min-h-screen relative">
        {/* Decorative Glow */}
        <div className="absolute top-[20%] right-[-100px] w-[600px] h-[600px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[30%] left-[-150px] w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-orange transition-colors duration-200 mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Voltar para a Página Principal
            </Link>
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 block">
              Confiança & Processos
            </span>
            <h1 className="font-sans font-[900] text-4xl sm:text-6xl text-white tracking-tight leading-tight uppercase">
              MANUAL DO CLIENTE
            </h1>
            <p className="text-gray-400 text-base sm:text-xl mt-4 leading-relaxed max-w-3xl">
              Nossa documentação detalhada foi criada para garantir total transparência em todas as etapas do projeto, alinhando cronogramas, ferramentas, responsabilidades e removendo qualquer dúvida antes mesmo do início dos trabalhos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            {/* Sticky Navigation Sidebar */}
            <aside className="hidden lg:block lg:col-span-1 sticky top-28 bg-[#181818] border border-brand-border p-6 rounded-2xl">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">
                Tópicos do Manual
              </div>
              <nav className="space-y-1 mb-6">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => handleScrollToSection(e, section.id)}
                    className={cn(
                      "block text-xs font-bold transition-all duration-300 py-2 border-l-2 pl-4 uppercase tracking-wider",
                      activeSection === section.id
                        ? "border-brand-orange text-brand-orange font-extrabold"
                        : "border-brand-border text-gray-400 hover:text-white hover:border-gray-500"
                    )}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              {/* Glowing CTA Button */}
              <div className="pt-4 border-t border-brand-border/40">
                <Link
                  href="/por-que-site"
                  className="group flex flex-col items-center justify-center gap-1.5 p-4 rounded-xl bg-brand-orange/5 border border-brand-orange/20 hover:border-brand-orange/50 transition-all duration-300 text-center shadow-[0_0_15px_rgba(45,181,175,0.05)] hover:shadow-[0_0_20px_rgba(45,181,175,0.15)] cursor-pointer"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2db5af] group-hover:text-[#3dded7] transition-colors">
                    Funil & Vendas
                  </span>
                  <span className="text-xs font-black text-white group-hover:shimmer-text transition-all duration-300 flex items-center gap-1">
                    Por que ter um Site? <Stars className="h-3.5 w-3.5 text-[#2db5af]" />
                  </span>
                </Link>
              </div>
            </aside>

            {/* Document Content */}
            <div className="lg:col-span-3 space-y-16">
              
              {/* Section 1: Nossa Filosofia */}
              <section id="filosofia" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    1. Nossa Filosofia de Trabalho
                  </h2>
                </div>
                <div className="bg-[#181818] border border-brand-border p-8 rounded-3xl space-y-6">
                  <h3 className="text-lg font-bold text-white">Desenvolvemos websites focados em resultados estratégicos.</h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Nosso objetivo principal não é apenas entregar um layout bonito, mas sim criar um canal de conversão premium. Cada página, botão e fluxo é planejado nos mínimos detalhes para transmitir máximo profissionalismo, reter a atenção do usuário, facilitar o contato e fortalecer a presença digital do seu negócio.
                  </p>
                  
                  {/* Exclusive Working Method Alert Box */}
                  <div className="border-l-4 border-brand-orange bg-brand-orange/5 p-5 rounded-r-2xl space-y-2">
                    <div className="flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-wide">
                      <Info className="h-4 w-4" />
                      Atenção ao Limite de Projetos
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Não trabalhamos com dezenas de projetos simultâneos. Preferimos atender um número limitado de clientes para manter o mais alto padrão técnico, uma comunicação direta e sem intermediários, além de prazos de entrega extremamente rápidos.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Como Funciona */}
              <section id="como-funciona" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    2. Como Funciona um Projeto
                  </h2>
                </div>
                <div className="bg-[#181818] border border-brand-border p-8 rounded-3xl space-y-8">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Para garantir organização e pontualidade, dividimos o desenvolvimento em etapas lógicas e bem estruturadas:
                  </p>
                  
                  {/* Workflow Stepper */}
                  <div className="relative border-l border-brand-border pl-6 ml-2 space-y-8">
                    {[
                      { title: "1. Contato & Reunião", desc: "Alinhamento das necessidades de negócio, objetivos do site e levantamento de requisitos." },
                      { title: "2. Pesquisa de Mercado", desc: "Análise profunda da empresa, público-alvo, concorrentes diretos e definição de referências de design." },
                      { title: "3. Planejamento Estrutural", desc: "Definição do mapa de páginas, arquitetura de informações, wireframes e preparação do SEO inicial." },
                      { title: "4. UI Design Exclusivo", desc: "Desenho da interface personalizada de alto padrão no Figma para aprovação de cores, tipografia e layout." },
                      { title: "5. Desenvolvimento Premium", desc: "Criação do código utilizando tecnologias de ponta (Next.js/TypeScript) focado em SEO e performance extrema." },
                      { title: "6. Revisão Rigorosa", desc: "Testes automatizados e manuais de links, responsividade mobile, velocidade no PageSpeed, ortografia e formulários." },
                      { title: "7. Publicação & Entrega", desc: "Configuração de DNS, hospedagem, e entrega oficial dos acessos junto com um vídeo explicativo de navegação." },
                      { title: "8. Suporte Pós-Lançamento", desc: "Garantia ativa contra bugs e acompanhamento pós-entrega." }
                    ].map((step, idx) => (
                      <div key={idx} className="relative">
                        <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-brand-orange border-4 border-[#181818] ring-1 ring-brand-orange/50" />
                        <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3: O que está Incluso */}
              <section id="incluso" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    3. O que está Incluso nos Projetos
                  </h2>
                </div>
                <div className="bg-[#181818] border border-brand-border p-8 rounded-3xl space-y-6">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Nossa entrega é completa e pronta para gerar resultados, sem surpresas ocultas:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Design 100% personalizado e desenhado no Figma",
                      "Otimização extrema para velocidade (Core Web Vitals)",
                      "Desenvolvimento 100% responsivo para celulares e tablets",
                      "Estrutura otimizada para conversões (Copywriting estratégico)",
                      "Meta tags, Open Graph e SEO inicial para busca do Google",
                      "Formulários de contato dinâmicos e integrações de e-mail",
                      "Botão flutuante para contato direto via WhatsApp",
                      "Hospedagem própria configurada com custo de manutenção zero",
                      "Página de links (estilo Linktree) personalizada com sua marca",
                      "Vídeo instrutivo mostrando o funcionamento e navegação do site"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start text-xs sm:text-sm text-gray-300">
                        <Check className="h-4 w-4 text-brand-orange shrink-0 mr-2.5 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 4: O que NÃO está Incluso */}
              <section id="nao-incluso" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    4. O que NÃO está Incluso nos Projetos
                  </h2>
                </div>
                <div className="bg-[#181818] border border-brand-border p-8 rounded-3xl space-y-6">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Para transparência legal e operacional, as seguintes responsabilidades cabem ao contratante, embora ofereçamos assessoria ou contratação sob demanda adicional:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Custo de registro de domínio (ex: anuidade do Registro.br)",
                      "Produção de textos e redação institucional complexa",
                      "Serviço profissional de fotografia ou compra de imagens pagas",
                      "Tradução de textos para outros idiomas",
                      "Sistema complexo de login e banco de dados avançado",
                      "Plataforma completa de E-Commerce (venda direta)",
                      "Integração profunda com ERPs ou CRMs de terceiros",
                      "Serviço de tráfego pago ou criação de anúncios"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start text-xs sm:text-sm text-gray-300">
                        <div className="h-2 w-2 bg-brand-orange/40 rounded-full shrink-0 mr-3 mt-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 5: Ferramentas & Tecnologias */}
              <section id="ferramentas" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    5. Ferramentas & Tecnologias
                  </h2>
                </div>
                <div className="bg-[#181818] border border-brand-border p-8 rounded-3xl space-y-6">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    Garantimos durabilidade e performance utilizando a stack de tecnologia mais valorizada do mercado:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      { cat: "Desenvolvimento", tools: ["Next.js (React)", "Tailwind CSS", "TypeScript"] },
                      { cat: "Hospedagem & DNS", tools: ["Vercel", "Cloudflare", "Hostinger"] },
                      { cat: "Métricas & SEO", tools: ["Google Analytics", "Google Search Console", "PageSpeed Insights"] },
                      { cat: "Comunicação", tools: ["WhatsApp", "Google Meet", "Discord"] },
                      { cat: "Organização", tools: ["Notion", "GitHub"] }
                    ].map((group, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-brand-dark/50 border border-brand-border/40">
                        <h4 className="text-xs font-black text-brand-orange uppercase tracking-widest mb-3">{group.cat}</h4>
                        <ul className="space-y-1.5 text-sm text-gray-300">
                          {group.tools.map((t, tIdx) => <li key={tIdx}>{t}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 6: Comunicação & Prazos */}
              <section id="comunicacao" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    6. Comunicação & Prazos
                  </h2>
                </div>
                <div className="bg-[#181818] border border-brand-border p-8 rounded-3xl space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-brand-orange" />
                      Comunicação Transparente
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Cada cliente possui um canal direto conosco via WhatsApp. Durante todo o desenvolvimento do projeto, enviamos atualizações contínuas do status de entrega. Você acompanha cada etapa, garantindo que não haja 'sumiços' ou falta de alinhamento.
                    </p>
                  </div>
                  
                  <hr className="border-brand-border" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-brand-orange" />
                      Prazos Estimados
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-brand-dark border border-brand-border/40 rounded-2xl">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Landing Page</span>
                        <span className="text-xl font-black text-brand-orange">24h a 72h</span>
                        <span className="text-[10px] text-gray-500 block mt-1">1 a 3 dias úteis</span>
                      </div>
                      <div className="p-4 bg-brand-dark border border-brand-border/40 rounded-2xl">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Website Completo</span>
                        <span className="text-xl font-black text-brand-orange">3 a 5 Dias</span>
                        <span className="text-[10px] text-gray-500 block mt-1">Layout com até 5 páginas</span>
                      </div>
                      <div className="p-4 bg-brand-dark border border-brand-border/40 rounded-2xl">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Personalizado</span>
                        <span className="text-xl font-black text-brand-orange">Conforme Escopo</span>
                        <span className="text-[10px] text-gray-500 block mt-1">Conforme complexidade</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Pagamento & Garantias */}
              <section id="pagamento" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    7. Pagamento, Garantias & Suporte
                  </h2>
                </div>
                <div className="bg-[#181818] border border-brand-border p-8 rounded-3xl space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Métodos de Pagamento</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Trabalhamos com pagamentos facilitados via **Pix** ou **Cartão de Crédito parcelado em até 12x** (ou em até 4x sem juros conforme o volume do contrato). O projeto se inicia após o pagamento da entrada ou aprovação da transação do cartão.
                    </p>
                  </div>

                  <hr className="border-brand-border" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Garantia Ativa de Código</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Oferecemos garantia técnica após a entrega. Caso seja identificado qualquer bug de layout, link quebrado ou mau funcionamento decorrente do código original desenvolvida por nós, realizamos a correção de forma 100% gratuita dentro do prazo de garantia contratual.
                    </p>
                  </div>

                  <hr className="border-brand-border" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Suporte Pós-Lançamento</h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Nosso suporte padrão cobre dúvidas operacionais de navegação, orientações de hospedagem e pequenas atualizações de textos. O prazo de suporte gratuito incluso varia de 15 a 45 dias, dependendo do plano contratado. Possuímos um SLA (tempo máximo de resposta) de **24h a 48h** úteis para o atendimento de chamados via WhatsApp.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 8: FAQ */}
              <section id="faq" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    8. Dúvidas Frequentes (FAQ)
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-[#181818] border border-brand-border hover:border-brand-border-orange/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-md"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left p-6 flex items-center justify-between gap-4 text-white hover:text-brand-orange transition-colors duration-200 focus:outline-none"
                        >
                          <span className="font-bold text-sm sm:text-base font-sans">
                            {faq.question}
                          </span>
                          <div className="h-7 w-7 rounded-lg bg-[#222222] border border-brand-border flex items-center justify-center text-brand-orange shrink-0 transition-transform duration-300">
                            {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </div>
                        </button>

                        <div
                          className={cn(
                            "transition-all duration-300 ease-in-out overflow-hidden",
                            isOpen ? "max-h-[300px] border-t border-brand-border/40" : "max-h-0"
                          )}
                        >
                          <div className="p-6 text-xs sm:text-sm text-gray-400 leading-relaxed bg-[#1d1d1d]/40">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Bottom CTA Step */}
              <div className="bg-[#1d1b1a] border border-brand-orange/20 rounded-3xl p-8 sm:p-12 text-center space-y-6">
                <span className="text-brand-orange text-xs font-black uppercase tracking-widest block">
                  Vamos dar o primeiro passo?
                </span>
                <h3 className="text-2xl sm:text-4xl font-[900] text-white tracking-tight uppercase leading-tight">
                  PRONTO PARA ALAVANCAR O SEU NEGÓCIO?
                </h3>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  Agora que você conhece nosso processo transparente e profissional de trabalho, vamos construir um site de alto nível para a sua marca.
                </p>
                <HoverBorderGradient
                  clockwise={true}
                  duration={1.5}
                  onClick={handleScrollToContact}
                  containerClassName="inline-flex cursor-pointer shadow-lg shadow-brand-orange/10 transition-all duration-300 hover:scale-105"
                  className="bg-[#1d1b1a] hover:bg-[#252221] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full flex items-center gap-2 transition duration-300"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4 text-brand-orange" />
                </HoverBorderGradient>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
