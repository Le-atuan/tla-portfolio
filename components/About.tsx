"use client";

import { MapPin, Target, Radio } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Reveal } from "./Reveal";
import { Glass } from "./Glass";

export function About() {
  const { t } = useLocale();
  const { profile, aboutLabels } = t;

  const facts = [
    { icon: MapPin, label: aboutLabels.location, value: profile.location, live: false },
    { icon: Target, label: aboutLabels.focus, value: profile.focus, live: false },
    { icon: Radio, label: aboutLabels.currently, value: profile.currently, live: true },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {t.sections.about}
      </h2>
      <div className="grid gap-8 sm:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <Glass className="h-full rounded-2xl p-8 sm:p-10">
            <p className="text-base leading-relaxed text-foreground sm:text-lg">{profile.bio}</p>
          </Glass>
        </Reveal>

        <div className="relative flex flex-col gap-5 pl-7">
          <div
            aria-hidden
            className="absolute bottom-2 left-[0.6rem] top-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--primary), var(--border) 70%, transparent)",
            }}
          />
          {facts.map(({ icon: Icon, label, value, live }, i) => (
            <Reveal key={label} delayMs={i * 100} className="reveal-right">
              <div className="relative">
                <span
                  className={`absolute left-[-1.9rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full ${
                    live ? "animate-pulse-dot" : ""
                  }`}
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 0 0 4px var(--background), 0 0 10px 2px var(--primary)",
                  }}
                />
                <div className="glass group flex min-h-18 items-center gap-3 rounded-xl p-4 transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-white/20">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:scale-110"
                    style={{ background: "var(--accent)" }}
                  >
                    <Icon size={16} style={{ color: "var(--primary-glow)" }} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
