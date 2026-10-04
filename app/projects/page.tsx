"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectSections } from "../data/projects";

const INITIAL_VISIBLE_PROJECTS = 2;
const PROJECTS_PER_CLICK = 2;

export default function Projects() {
  const [visibleProjectCountBySection, setVisibleProjectCountBySection] = useState<Record<string, number>>({});

  const showMoreProjects = (title: string, totalProjects: number) => {
    setVisibleProjectCountBySection((current) => {
      const currentCount = current[title] ?? INITIAL_VISIBLE_PROJECTS;
      const nextCount = Math.min(currentCount + PROJECTS_PER_CLICK, totalProjects);

      return {
        ...current,
        [title]: nextCount,
      };
    });
  };

  const showLessProjects = (title: string) => {
    setVisibleProjectCountBySection((current) => ({
      ...current,
      [title]: INITIAL_VISIBLE_PROJECTS,
    }));
  };

  return (
    <main className="py-8 sm:py-12">
      <div className="page-shell">
        <header className="section-header px-3 text-center sm:py-4">
          <p className="eyebrow">Selected work</p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">Projects</h1>
          <p className="mx-auto mt-3 max-w-xl text-[var(--muted)]">A closer look at the systems, analysis, and decisions behind my work.</p>
        </header>

        <div className="space-y-12">
          {projectSections.map((section) => {
            const visibleCount = Math.min(visibleProjectCountBySection[section.title] ?? INITIAL_VISIBLE_PROJECTS, section.projects.length);
            const visibleProjects = section.projects.slice(0, visibleCount);
            const hasMoreProjects = section.projects.length > visibleCount;
            const hasHiddenProjects = section.projects.length > INITIAL_VISIBLE_PROJECTS;
            const isExpanded = visibleCount > INITIAL_VISIBLE_PROJECTS;

            return (
              <section key={section.title}>
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="eyebrow">Focus area</p>
                    <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)] sm:text-3xl">{section.title}</h2>
                  </div>
                  <p className="max-w-2xl text-sm text-[var(--muted)] md:text-right">{section.description}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {visibleProjects.map((project, index) => (
                    <div key={project.title} className={index === visibleProjects.length - 1 && visibleProjects.length % 2 !== 0 ? "md:col-span-2" : ""}>
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>

                {hasHiddenProjects && (
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        if (hasMoreProjects) {
                          showMoreProjects(section.title, section.projects.length);
                          return;
                        }

                        showLessProjects(section.title);
                      }}
                      className="rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
                    >
                      {isExpanded ? "Show less" : "Show more"}
                    </button>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}