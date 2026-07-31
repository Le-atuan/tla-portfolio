"use client";

import { Code2, Palette, Wrench } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";
import { Glass } from "./Glass";

export function Skills() {
  const { t } = useLocale();

  const groups = [
    { icon: Code2, label: t.skills.engineering, key: "engineering" },
    { icon: Palette, label: t.skills.design, key: "design" },
    { icon: Wrench, label: t.skills.tooling, key: "tooling" },
  ] as const;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {t.sections.skills}
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {groups.map(({ icon: Icon, label: items, key }, i) => (
          <Reveal key={key} delayMs={i * 60}>
            <Glass className="flex h-full flex-col gap-4 rounded-2xl p-6 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-white/20">
              <div className="flex items-center gap-2">
                <Icon size={18} style={{ color: "var(--primary)" }} aria-hidden />
                <h3 className="text-sm font-semibold capitalize text-foreground">{key}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-200 ease-out hover:border-primary hover:bg-accent hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Glass>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
