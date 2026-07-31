"use client";

import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";

export function Metrics() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {t.metrics.map((metric, i) => (
          <Reveal key={metric.label} as="li" delayMs={i * 50}>
            <div className="glass flex h-full flex-col items-center gap-1 rounded-2xl px-4 py-6 text-center transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-white/20">
              <span
                className="text-3xl font-extrabold tracking-tight sm:text-4xl"
                style={{ color: "var(--primary)", letterSpacing: "-0.02em" }}
              >
                {metric.value}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">{metric.label}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
