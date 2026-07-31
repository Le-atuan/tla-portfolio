"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X, Download } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { LocaleToggle } from "./LocaleToggle";

const SECTION_IDS = ["about", "projects", "skills", "experience", "contact"] as const;
const NAV_OFFSET = 96;

export function Nav() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  // While a nav click is smooth-scrolling toward its target, sections that
  // pass through the scrollspy band along the way (e.g. Projects, between
  // About and Skills) would otherwise fire the observer and steal `active`
  // mid-flight. This ref suppresses the observer until that scroll settles.
  const suppressObserverRef = useRef(false);
  const settleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      if (suppressObserverRef.current) {
        if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
        settleTimeoutRef.current = setTimeout(() => {
          suppressObserverRef.current = false;
        }, 120);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    // Scrollspy band anchored just below the sticky nav rather than centered,
    // so short sections (Skills, Experience) still trigger correctly instead
    // of being skipped by a narrow mid-viewport band.
    const observer = new IntersectionObserver(
      (entries) => {
        if (suppressObserverRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`, threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    suppressObserverRef.current = true;
    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    // Fallback in case the target is already in view and no scroll events
    // fire to trigger the settle timer above.
    settleTimeoutRef.current = setTimeout(() => {
      suppressObserverRef.current = false;
    }, 800);
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET + 1;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  const links = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <header
      data-scrolled={scrolled}
      className="glass-bar sticky top-0 z-50 w-full"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-foreground"
          style={{ letterSpacing: "-0.02em" }}
        >
          T<span style={{ color: "var(--primary)" }}>L</span>A
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick(link.id)}
              className={`cursor-pointer text-sm font-medium transition-colors duration-200 ease-out ${
                active === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleToggle />
          <a
            href={t.profile.resumeUrl}
            download
            className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform duration-200 ease-out hover:brightness-110 active:scale-[0.98]"
          >
            <Download size={16} aria-hidden />
            {t.nav.resume}
          </a>
        </div>

        <button
          type="button"
          className="cursor-pointer text-foreground md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="glass mx-4 mb-4 flex flex-col gap-4 rounded-2xl p-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick(link.id)}
              className={`cursor-pointer text-base font-medium ${
                active === link.id ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <LocaleToggle />
            <a
              href={t.profile.resumeUrl}
              download
              className="flex cursor-pointer items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Download size={16} aria-hidden />
              {t.nav.resume}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
