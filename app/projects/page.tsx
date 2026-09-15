import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="bg-[#f5f5f7] p-3 sm:p-6">
      <div className="mx-auto max-w-[1080px]">
        <header className="px-3 py-8 text-center sm:py-12">
          <h1 className="text-4xl font-semibold tracking-tight text-[#171717] sm:text-5xl">Selected projects</h1>
          <p className="mx-auto mt-3 max-w-xl text-[#6e6e73]">A closer look at the systems, analysis, and decisions behind my work.</p>
        </header>
        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.title} className={index === projects.length - 1 ? "md:col-span-2" : ""}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}