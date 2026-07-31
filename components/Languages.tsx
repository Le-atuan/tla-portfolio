"use client";

import { Languages as LanguagesIcon } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";
import { Glass } from "./Glass";

export function Languages() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {t.sections.languages}
      </h2>
      <Reveal>
        <Glass className="flex flex-col gap-3 rounded-2xl p-6 sm:p-8">
          {t.languages.map((lang) => (
            <div
              key={lang.name}
              className="flex flex-wrap items-center gap-3 rounded-xl border border-border px-4 py-3.5 transition-colors duration-200 ease-out hover:border-primary/40"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: "var(--accent)" }}
              >
                <LanguagesIcon size={16} style={{ color: "var(--primary-glow)" }} aria-hidden />
              </span>
              <span className="text-sm font-semibold text-foreground">{lang.name}</span>
              <span className="ml-auto flex items-center gap-2">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-foreground">
                  {lang.level}
                </span>
                {lang.note && (
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                  >
                    {lang.note}
                  </span>
                )}
              </span>
            </div>
          ))}
        </Glass>
      </Reveal>
    </section>
  );
}
