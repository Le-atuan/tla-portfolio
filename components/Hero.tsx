"use client";

import { Sparkles, ArrowDown, Mail, Download } from "lucide-react";
import { useLocale } from "@/lib/locale";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  const { t } = useLocale();
  const { profile } = t;

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <Reveal className="flex flex-col items-center gap-8 text-center">
        <span className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Sparkles size={14} style={{ color: "var(--primary)" }} aria-hidden />
          {t.nav.availability}
        </span>

        <Avatar name={profile.name} avatarUrl={profile.avatarUrl} size={112} priority />

        <div className="flex flex-col gap-3">
          <h1
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            {profile.name}
          </h1>
          <p className="text-lg font-medium sm:text-xl" style={{ color: "var(--primary)" }}>
            {profile.role}
          </p>
        </div>

        <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          {profile.pitch}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href={profile.resumeUrl}
            download
            className="flex cursor-pointer items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 ease-out hover:border-primary hover:text-primary active:scale-[0.98]"
          >
            <Download size={16} aria-hidden />
            {t.nav.resume}
          </a>

          <span className="h-4 w-0.5 bg-border" aria-hidden />

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="cursor-pointer text-muted-foreground transition-colors duration-200 ease-out hover:text-primary"
            >
              <Mail size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="cursor-pointer text-muted-foreground transition-colors duration-200 ease-out hover:text-primary"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="cursor-pointer text-muted-foreground transition-colors duration-200 ease-out hover:text-primary"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <a
          href="#projects"
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 ease-out hover:brightness-110 active:scale-[0.98]"
        >
          {t.nav.projects}
          <ArrowDown
            size={16}
            className="transition-transform duration-200 ease-out group-hover:translate-y-0.5"
            aria-hidden
          />
        </a>
      </Reveal>
    </section>
  );
}
