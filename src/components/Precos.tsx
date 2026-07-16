"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  yearlyPeriod?: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "590",
    yearlyPrice: "59",
    period: "único",
    yearlyPeriod: "por mês (12x)",
    features: [
      "Landing Page de alto impacto",
      "Otimização de SEO Básico",
      "Formulário incluso (opcional)",
      "24 horas para entrega",
      "Design responsivo (Mobile/Desktop)",
      "Integração com WhatsApp",
    ],
    description: "Perfeito para lançamentos rápidos e validação de produtos.",
    buttonText: "Escolher Starter",
    href: "#contato",
    isPopular: false,
  },
  {
    name: "Business",
    price: "1099",
    yearlyPrice: "110",
    period: "único",
    yearlyPeriod: "por mês (12x)",
    features: [
      "Website completo estruturado",
      "SEO Avançado para buscas no Google",
      "Formulários de contato dinâmicos",
      "Até 5 páginas integradas",
      "Design 100% exclusivo no Figma",
      "Layout fluido e transições premium",
    ],
    description: "A solução ideal para empresas que buscam autoridade e resultados.",
    buttonText: "Escolher Business",
    href: "#contato",
    isPopular: true,
  },
  {
    name: "Premium",
    price: "Sob consulta",
    yearlyPrice: "Sob consulta",
    period: "",
    yearlyPeriod: "",
    features: [
      "Projeto 100% personalizado do zero",
      "Funcionalidades e lógicas sob medida",
      "Integrações complexas (APIs, CRM, ERP)",
      "Área de membros ou E-commerce próprio",
      "Máxima otimização Core Web Vitals",
      "Suporte técnico dedicado pós-lançamento",
    ],
    description: "Ideal para plataformas, portais ou sistemas web robustos.",
    buttonText: "Falar com a NeuroWeb",
    href: "#contato",
    isPopular: false,
  },
];

export default function Precos() {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 70,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "#e26719",
          "#f97d2e",
          "#ffffff",
          "#444444",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  const handleSelectPlan = (planName: string) => {
    const contatoSection = document.getElementById("contato");
    if (contatoSection) {
      const targetPosition = contatoSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="precos" className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[40%] right-[-100px] w-[500px] h-[500px] bg-brand-orange/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 inline-block">
            Nossos Planos
          </span>
          <h2 className="font-sans font-[900] text-3xl sm:text-5xl text-white tracking-tight mb-6 uppercase">
            INVESTIMENTO TRANSPARENTE E SEM SURPRESAS
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Escolha o modelo ideal para o momento do seu negócio. Todos os projetos acompanham contrato, código moderno e alta performance.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className={cn(
            "font-sans font-semibold text-sm transition-colors duration-300", 
            isMonthly ? "text-white" : "text-gray-500"
          )}>
            Pagamento único (À vista)
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <span className="sr-only">Toggle de precificação</span>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </label>
          <span className={cn(
            "font-sans font-semibold text-sm transition-colors duration-300 flex items-center gap-1.5", 
            !isMonthly ? "text-white" : "text-gray-500"
          )}>
            Parcelar em até 12x <span className="text-brand-orange text-xs font-semibold bg-brand-orange/10 px-2 py-0.5 rounded-full border border-brand-orange/20">Suave</span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const priceValue = isMonthly ? plan.price : plan.yearlyPrice;
            const isNumericPrice = !isNaN(Number(priceValue));

            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 1 }}
                whileInView={
                  isDesktop
                    ? {
                        y: plan.isPopular ? -20 : 0,
                        opacity: 1,
                        x: index === 2 ? -20 : index === 0 ? 20 : 0,
                        scale: index === 0 || index === 2 ? 0.96 : 1.0,
                      }
                    : {}
                }
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: 0.1,
                  opacity: { duration: 0.5 },
                }}
                className={cn(
                  `rounded-3xl border-[1px] p-8 bg-[#181818] text-center relative flex flex-col justify-between transition-all duration-300`,
                  plan.isPopular 
                    ? "border-brand-orange border-2 shadow-[0_15px_40px_rgba(226,103,25,0.12)] z-10" 
                    : "border-brand-border hover:border-brand-border-orange z-0",
                  !plan.isPopular && "mt-0 md:mt-4",
                  index === 0 && "origin-right",
                  index === 2 && "origin-left"
                )}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-orange text-[#111111] text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg flex items-center">
                    <Star className="h-3 w-3 fill-current mr-1" />
                    <span>Mais Escolhido</span>
                  </div>
                )}
                
                <div className="flex-1 flex flex-col">
                  {/* Plan Header */}
                  <p className="text-sm font-extrabold tracking-widest text-brand-orange uppercase">
                    {plan.name}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-gray-400 min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Pricing Details */}
                  <div className="mt-6 flex items-baseline justify-center gap-x-1 min-h-[70px]">
                    {isNumericPrice ? (
                      <>
                        {isMonthly && (
                          <span className="text-sm font-semibold text-gray-400 mr-1">
                            A partir de
                          </span>
                        )}
                        <span className="text-4xl sm:text-5xl font-[900] tracking-tight text-white font-sans">
                          <NumberFlow
                            value={Number(priceValue)}
                            format={{
                              style: "currency",
                              currency: "BRL",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }}
                            transformTiming={{
                              duration: 500,
                              easing: "ease-out",
                            }}
                            willChange
                            className="font-variant-numeric: tabular-nums text-white"
                          />
                        </span>
                        {plan.period !== "" && (
                          <span className="text-xs font-semibold leading-6 tracking-wide text-gray-400 ml-1">
                            / {isMonthly ? plan.period : plan.yearlyPeriod}
                          </span>
                        )}
                      </>
                    ) : (
                      <div className="w-full flex items-center justify-center py-2">
                        <span className="text-3xl sm:text-4xl font-[900] tracking-tight text-white uppercase">
                          {priceValue}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="mt-1 text-[10px] leading-5 text-gray-500 uppercase tracking-wider font-semibold">
                    {isNumericPrice ? (isMonthly ? "pagamento único em Pix/Cartão" : "parcelamento facilitado") : "projeto sob medida"}
                  </p>

                  {/* Features List */}
                  <ul className="mt-8 space-y-4 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <div className="h-5 w-5 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange mr-3 shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-left font-sans">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <hr className="w-full my-6 border-brand-border" />

                  {/* Action Button */}
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                      }),
                      "group relative w-full gap-2 overflow-hidden text-base font-bold tracking-tight py-6 rounded-full cursor-pointer",
                      "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-brand-orange hover:ring-offset-2 hover:bg-brand-orange hover:text-[#111111]",
                      plan.isPopular
                        ? "bg-brand-orange text-[#111111] border-brand-orange"
                        : "bg-transparent text-white border-brand-border hover:border-brand-orange"
                    )}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
