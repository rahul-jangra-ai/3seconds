"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check for hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], [data-cursor], .interactive-hover");
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute("data-cursor") || "";
        setCursorText(customText);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth lerp loop for the outer ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center 8px solid dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-hook-orange shadow-[0_0_12px_rgba(255,87,34,0.8)] pointer-events-none transition-opacity duration-200"
        style={{ willChange: "transform" }}
      />

      {/* Trailing expanding ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full border border-hook-orange/60 pointer-events-none transition-all duration-300 flex items-center justify-center backdrop-blur-[1px] ${
          isHovered
            ? "w-16 h-16 -ml-8 -mt-8 bg-hook-orange/20 border-hook-orange scale-110 shadow-[0_0_24px_rgba(255,87,34,0.35)]"
            : "w-10 h-10 -ml-5 -mt-5 bg-transparent opacity-60"
        }`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-hook-orange drop-shadow-sm select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
