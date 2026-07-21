"use client";

import React, { useState } from "react";
import InteractiveHoverButton from "./ui/InteractiveHoverButton";
import { MessageSquare, Mail, Phone, User, CheckCircle2 } from "lucide-react";

export default function ContatoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (formData.telefone.replace(/\D/g, "").length < 10) {
      newErrors.telefone = "Telefone inválido";
    }

    if (!formData.mensagem.trim()) newErrors.mensagem = "Mensagem é obrigatória";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const formatWhatsAppMessage = () => {
    const baseText = `Olá Gabriel. Eu respondi o formulário da neuroweb e gostaria de solicitar um orçamento.\n\n`;
    const details = `*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n*Detalhes do Projeto:* ${formData.mensagem}`;
    return encodeURIComponent(baseText + details);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate frontend submission success
      setSubmitted(true);

      // Redirect to whatsapp with pre-filled details to seal the conversion
      const waUrl = `https://wa.me/5547999619049?text=${formatWhatsAppMessage()}`;
      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 1000);
    }
  };

  return (
    <section id="contato" className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-[-100px] left-10 w-[450px] h-[450px] bg-[#2db5af]/5 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[10%] right-[-120px] w-[400px] h-[400px] bg-[#2db5af]/4 blur-[110px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase mb-3 inline-block">
              Fale Conosco
            </span>
            <h2 className="font-sans font-[900] text-3xl sm:text-5xl text-white tracking-tight mb-6 leading-tight">
              VAMOS TIRAR A SUA IDEIA DO PAPEL?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed">
              Preencha o formulário para enviar os detalhes do seu projeto. Você será direcionado para o WhatsApp para darmos início ao seu orçamento de forma rápida e direta.
            </p>

            {/* Contact Details List */}
            <div className="space-y-6">
              <a
                href="https://wa.me/5547999619049"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 rounded-xl bg-[#181818] border border-brand-border hover:border-brand-border-orange transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-[#111111] transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase font-bold">WhatsApp Direct</span>
                  <span className="text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors duration-200">
                    +55 (47) 99961-9049
                  </span>
                </div>
              </a>

              <a
                href="mailto:contato@neuroweb.com.br" // Placeholder for professional email
                className="flex items-center gap-4 group p-4 rounded-xl bg-[#181818] border border-brand-border hover:border-brand-border-orange transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-[#111111] transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block uppercase font-bold">E-mail Corporativo</span>
                  <span className="text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors duration-200">
                    contato@neuroweb.com.br
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#181818] border border-brand-border p-8 sm:p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-brand-orange mb-6 animate-bounce" />
                <h3 className="font-sans font-bold text-2xl text-white mb-3">
                  Mensagem Validada!
                </h3>
                <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-6">
                  Estamos redirecionando você para o WhatsApp da NeuroWeb para finalizar o orçamento do seu site.
                </p>
                <span className="inline-block h-1 w-24 bg-brand-orange/20 rounded-full overflow-hidden relative">
                  <span className="absolute top-0 left-0 bottom-0 bg-brand-orange w-1/2 animate-shimmer rounded-full" />
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome Input */}
                <div>
                  <label htmlFor="nome" className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      className={`w-full bg-brand-dark border ${errors.nome ? "border-red-500" : "border-brand-border focus:border-brand-orange"
                        } rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-gray-600 outline-none transition-colors duration-300`}
                    />
                  </div>
                  {errors.nome && <span className="text-xs text-red-500 mt-1 block">{errors.nome}</span>}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    E-mail de Contato
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: joao@empresa.com"
                      className={`w-full bg-brand-dark border ${errors.email ? "border-red-500" : "border-brand-border focus:border-brand-orange"
                        } rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-gray-600 outline-none transition-colors duration-300`}
                    />
                  </div>
                  {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                </div>

                {/* Telefone Input */}
                <div>
                  <label htmlFor="telefone" className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    WhatsApp / Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="Ex: (47) 99999-9999"
                      className={`w-full bg-brand-dark border ${errors.telefone ? "border-red-500" : "border-brand-border focus:border-brand-orange"
                        } rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-gray-600 outline-none transition-colors duration-300`}
                    />
                  </div>
                  {errors.telefone && <span className="text-xs text-red-500 mt-1 block">{errors.telefone}</span>}
                </div>

                {/* Mensagem TextArea */}
                <div>
                  <label htmlFor="mensagem" className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Sobre o Projeto
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-gray-500" />
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva brevemente o seu projeto (ex: Landing Page de vendas para produto de estética...)"
                      className={`w-full bg-brand-dark border ${errors.mensagem ? "border-red-500" : "border-brand-border focus:border-brand-orange"
                        } rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-600 outline-none transition-colors duration-300 resize-none`}
                    />
                  </div>
                  {errors.mensagem && <span className="text-xs text-red-500 mt-1 block">{errors.mensagem}</span>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <InteractiveHoverButton
                    text="Solicitar Orçamento"
                    type="submit"
                    className="w-full text-center"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
