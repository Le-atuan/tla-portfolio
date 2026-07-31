"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OklchValue {
  l: number;
  c: number;
  h: number;
}

export interface PaletteOption {
  id: string;
  name: string;
  description: string;
  primary: OklchValue;
  glow: OklchValue;
  accent: OklchValue;
}

function oklch({ l, c, h }: OklchValue) {
  return `oklch(${l} ${c} ${h})`;
}

// Alternatives intentionally use lower lightness/chroma than the current
// amber so they read as muted/professional rather than neon-bright.
const MUTED_PRIMARY = { l: 0.74, c: 0.12 };
const MUTED_GLOW = { l: 0.83, c: 0.1 };
const MUTED_ACCENT = { l: 0.3, c: 0.06 };

function mutedOption(id: string, name: string, hue: number, description: string): PaletteOption {
  return {
    id,
    name,
    description,
    primary: { ...MUTED_PRIMARY, h: hue },
    glow: { ...MUTED_GLOW, h: hue },
    accent: { ...MUTED_ACCENT, h: hue },
  };
}

export const PALETTE_OPTIONS: PaletteOption[] = [
  {
    id: "amber",
    name: "Amber (hiện tại)",
    description: "Màu accent hiện tại của site.",
    primary: { l: 0.78, c: 0.16, h: 70 },
    glow: { l: 0.87, c: 0.13, h: 85 },
    accent: { l: 0.32, c: 0.07, h: 70 },
  },
  mutedOption("cyan", "Midnight Cyan", 200, "Mát, kỹ thuật — dịu hơn so với cyan neon."),
  mutedOption("sapphire", "Midnight Sapphire", 250, "Xanh dương trầm, sang trọng."),
  mutedOption("violet", "Midnight Violet", 300, "Tím trầm, hài hoà với hue nền."),
  mutedOption("rose", "Midnight Rose", 20, "Ấm, trầm hơn — khác hẳn cam/amber."),
  mutedOption("emerald", "Midnight Emerald", 150, "Xanh lá trầm, không quá rực."),
  mutedOption("gold", "Midnight Gold", 95, "Vàng gold trầm, khác tông cam hiện tại."),
];

export function getPaletteVars(option: PaletteOption) {
  return {
    "--primary": oklch(option.primary),
    "--primary-glow": oklch(option.glow),
    "--accent": oklch(option.accent),
  };
}

interface ThemeState {
  paletteId: string;
  setPalette: (id: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      paletteId: "amber",
      setPalette: (id) => set({ paletteId: id }),
    }),
    { name: "tla-portfolio-theme" }
  )
);

export function getPaletteOption(paletteId: string): PaletteOption {
  return PALETTE_OPTIONS.find((option) => option.id === paletteId) ?? PALETTE_OPTIONS[0];
}
