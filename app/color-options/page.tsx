"use client";

import { Sparkles, Download, ArrowDown } from "lucide-react";
import { Glass } from "@/components/Glass";
import { PALETTE_OPTIONS, useThemeStore } from "@/lib/theme-store";

function oklchString({ l, c, h }: { l: number; c: number; h: number }) {
  return `oklch(${l} ${c} ${h})`;
}

export default function ColorOptionsPage() {
  const paletteId = useThemeStore((state) => state.paletteId);
  const setPalette = useThemeStore((state) => state.setPalette);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>
        Color Palette Options
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Chọn một phương án bên dưới — nó sẽ áp dụng ngay cho toàn bộ site (kể cả trang chủ), lưu lại
        cho lần sau. Chỉ các token màu accent (<code>--primary</code>, <code>--primary-glow</code>,{" "}
        <code>--accent</code>) thay đổi — nền, glass, typography giữ nguyên.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PALETTE_OPTIONS.map((option) => {
          const active = option.id === paletteId;
          const primaryColor = oklchString(option.primary);
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setPalette(option.id)}
              className="glass flex cursor-pointer flex-col gap-3 rounded-2xl p-5 text-left transition-transform duration-200 ease-out hover:-translate-y-1"
              style={active ? { borderColor: primaryColor, borderWidth: 2 } : undefined}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-foreground">{option.name}</span>
                {active && (
                  <span className="text-xs font-medium" style={{ color: primaryColor }}>
                    Đang chọn
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <span className="h-9 w-9 rounded-lg" style={{ background: primaryColor }} aria-hidden />
                <span
                  className="h-9 w-9 rounded-lg"
                  style={{ background: oklchString(option.glow) }}
                  aria-hidden
                />
                <span
                  className="h-9 w-9 rounded-lg"
                  style={{ background: oklchString(option.accent) }}
                  aria-hidden
                />
              </div>
              <p className="text-xs text-muted-foreground">{option.description}</p>
            </button>
          );
        })}
      </div>

      <section className="mt-14">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Preview nhanh
        </h2>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border p-10 text-center">
          <span className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles size={14} style={{ color: "var(--primary)" }} aria-hidden />
            Open to work
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:border-primary hover:text-primary"
            >
              <Download size={16} aria-hidden />
              Download CV
            </button>
            <button
              type="button"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 ease-out hover:brightness-110 active:scale-[0.98]"
            >
              Projects
              <ArrowDown
                size={16}
                className="transition-transform duration-200 ease-out group-hover:translate-y-0.5"
                aria-hidden
              />
            </button>
          </div>

          <Glass className="w-full max-w-sm rounded-2xl p-6 text-left">
            <p className="text-sm font-semibold text-foreground">Sample card</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Hover vào card này để xem border highlight đổi theo màu đã chọn.
            </p>
          </Glass>
        </div>
      </section>
    </main>
  );
}
