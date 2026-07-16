"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function InteractiveHoverButton({
  text = "Enviar",
  className,
  onClick,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center cursor-pointer overflow-hidden rounded-full border border-brand-orange/30 bg-transparent px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-brand-orange hover:shadow-[0_0_20px_rgba(45, 181, 175, 0.35)] outline-none select-none min-w-[160px] ${className || ""}`}
      {...props}
    >
      {/* Button Text */}
      <span className="relative z-20 inline-block transition-colors duration-300 group-hover:text-[#111111] font-sans">
        {text}
      </span>

      {/* Expanding Orange Background (No Icon) */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-brand-orange transition-all duration-300 ease-out group-hover:h-[calc(100%-8px)] group-hover:w-[calc(100%-8px)] group-hover:right-1 group-hover:rounded-full z-10">
      </div>
    </button>
  );
}
