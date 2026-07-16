"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  date?: string;
  iconBg?: string;
}

interface DisplayCardsProps {
  cards: CardItem[];
  className?: string;
}

export default function DisplayCards({ cards, className }: DisplayCardsProps) {
  // Variants to spread cards vertically and rotate them slightly on hover
  const cardVariants = [
    {
      initial: { y: -30, rotate: -5, scale: 0.94, zIndex: 10 },
      hover: { y: -90, rotate: -8, scale: 0.98, zIndex: 10 },
    },
    {
      initial: { y: 0, rotate: 0, scale: 0.98, zIndex: 20 },
      hover: { y: 0, rotate: -1, scale: 1.02, zIndex: 20 },
    },
    {
      initial: { y: 30, rotate: 5, scale: 0.94, zIndex: 5 },
      hover: { y: 90, rotate: 7, scale: 0.98, zIndex: 30 },
    },
  ];

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "relative flex flex-col items-center justify-center h-[380px] w-full max-w-[400px] mx-auto select-none cursor-pointer",
        className
      )}
    >
      {cards.slice(0, 3).map((card, idx) => {
        const variants = cardVariants[idx] || cardVariants[1];
        return (
          <motion.div
            key={idx}
            variants={variants}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="absolute w-full border border-brand-border bg-[#161616]/95 backdrop-blur-md p-6 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between h-[150px] transition-colors duration-300 hover:border-[#2db5af]/30 group"
          >
            {/* Card Content Header */}
            <div className="flex items-start gap-4">
              <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center text-[#2db5af] shrink-0 shadow-sm border border-[#2db5af]/10", card.iconBg || "bg-[#2db5af]/5")}>
                {card.icon}
              </div>
              <div className="flex-grow">
                <h3 className="font-sans font-[800] text-sm text-white group-hover:text-[#2db5af] transition-colors duration-200 uppercase tracking-wider">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Optional Card Date */}
            {card.date && (
              <div className="flex justify-end text-[9px] text-[#2db5af]/50 font-bold uppercase tracking-widest">
                {card.date}
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
