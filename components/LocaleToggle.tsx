"use client";

import { useLocale } from "@/lib/locale";
import type { Locale } from "@/lib/content";

const OPTIONS: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
];

export function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`glass flex items-center gap-1 rounded-full p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map((option) => {
        const active = option.code === locale;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLocale(option.code)}
            aria-pressed={active}
            className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200 ease-out ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
