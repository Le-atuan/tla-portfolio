"use client";

import { useEffect } from "react";
import { getPaletteOption, getPaletteVars, useThemeStore } from "@/lib/theme-store";

export function ThemeApplier() {
  const paletteId = useThemeStore((state) => state.paletteId);

  useEffect(() => {
    const vars = getPaletteVars(getPaletteOption(paletteId));
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [paletteId]);

  return null;
}
