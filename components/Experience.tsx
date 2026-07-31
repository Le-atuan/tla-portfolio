"use client";

import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";
import { Glass } from "./Glass";

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {t.sections.experience}
      </h2>
      <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
        {t.experience.map((role, i) => (
          <Reveal key={`${role.company}-${role.role}`} as="li" delayMs={i * 60} className="relative">
            <span
              className="absolute left-[-2.35rem] top-1.5 h-3 w-3 rounded-full transition-shadow duration-200 ease-out"
              style={{
                background: "var(--primary)",
                boxShadow: "0 0 0 4px var(--background), 0 0 12px 2px var(--primary)",
              }}
              aria-hidden
            />
            <Glass className="rounded-2xl p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-white/20">
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">
                  {role.role} · <span style={{ color: "var(--primary)" }}>{role.company}</span>
                </h3>
                <span className="text-xs font-medium text-muted-foreground">{role.dates}</span>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-muted-foreground">
                    {bullet}
                  </li>
                ))}
              </ul>
            </Glass>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
