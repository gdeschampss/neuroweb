"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1.5,
  clockwise = true,
  ...props
}: React.PropsWithChildren<{
  as?: any;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
}> & React.HTMLAttributes<HTMLElement>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = useCallback((currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  }, [clockwise]);

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #e26719 0%, rgba(226, 103, 25, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #e26719 0%, rgba(226, 103, 25, 0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, #e26719 0%, rgba(226, 103, 25, 0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, #e26719 0%, rgba(226, 103, 25, 0) 100%)",
  };

  const highlight = "radial-gradient(75% 181.159% at 50% 50%, #e26719 0%, rgba(226, 103, 25, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration, rotateDirection]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center bg-white/10 items-center justify-center p-[1.5px] overflow-hidden transition-all duration-300",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full text-white bg-black rounded-[inherit] z-10",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "absolute inset-0 z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1.5 }}
      />
      <div className="bg-[#111111] absolute inset-[1.5px] rounded-[inherit] z-0" />
    </Tag>
  );
}
