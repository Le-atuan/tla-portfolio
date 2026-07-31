"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
}

export function Reveal({ children, className = "", delayMs = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement | HTMLLIElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Component = as;

  return (
    <Component
      ref={ref as never}
      data-revealed={revealed}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Component>
  );
}
