"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { content, type ContentShape, type Locale } from "./content";

const STORAGE_KEY = "tla-portfolio-locale";
const listeners = new Set<() => void>();

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "vi";
}

function getSnapshot(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "vi";
}

function getServerSnapshot(): Locale {
  return "vi";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function setStoredLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: ContentShape;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setLocale = useCallback((next: Locale) => setStoredLocale(next), []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: content[locale] }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
