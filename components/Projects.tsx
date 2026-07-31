"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/lib/locale";
import type { Project } from "@/lib/content";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./icons";

function ProjectCard({ project, delayMs }: { project: Project; delayMs: number }) {
  return (
    <Reveal delayMs={delayMs}>
      <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-white/20">
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 rounded-b-2xl bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="text-sm text-muted-foreground">{project.summary}</p>
          <ul className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tag) => (
              <li
                key={tag}
                className="rounded-full border-2 border-border px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center gap-4 pt-4 text-sm font-medium">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-1.5 text-foreground transition-colors duration-200 ease-out hover:text-primary"
            >
              <ExternalLink size={16} aria-hidden />
              Live
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-1.5 text-muted-foreground transition-colors duration-200 ease-out hover:text-primary"
            >
              <GithubIcon size={16} aria-hidden />
              Repo
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLocale();

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {t.sections.projects}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {t.projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delayMs={i * 60} />
        ))}
      </div>
    </section>
  );
}
