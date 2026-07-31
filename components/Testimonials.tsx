"use client";

import { Quote } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";
import { Glass } from "./Glass";

export function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {t.sections.testimonials}
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {t.testimonials.map((item, i) => (
          <Reveal key={item.name} delayMs={i * 60}>
            <Glass className="flex h-full flex-col gap-4 rounded-2xl p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-white/20">
              <Quote size={20} style={{ color: "var(--primary)" }} aria-hidden />
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-auto pt-2">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.role} · {item.company}
                </p>
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
