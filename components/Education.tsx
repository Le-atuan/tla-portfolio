"use client";

import { GraduationCap } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";
import { Glass } from "./Glass";

export function Education() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {t.sections.education}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.education.map((entry, i) => (
          <Reveal key={entry.institution} delayMs={i * 60}>
            <Glass className="flex h-full items-start gap-4 rounded-2xl p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-white/20">
              <GraduationCap size={20} style={{ color: "var(--primary)" }} className="mt-0.5 shrink-0" aria-hidden />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{entry.institution}</h3>
                <p className="text-sm text-muted-foreground">{entry.degree}</p>
                <p className="mt-1 text-xs text-muted-foreground">{entry.dates}</p>
                {entry.note && <p className="mt-2 text-xs text-muted-foreground">{entry.note}</p>}
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
