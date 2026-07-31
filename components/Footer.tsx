"use client";

import { useLocale } from "@/lib/locale";

export function Footer() {
  const { t } = useLocale();
  const { profile } = t;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © {year} {profile.name}. {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
