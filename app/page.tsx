import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

const featuredProjects = [...projects].sort(() => 0.5 - Math.random()).slice(0, 3);

export default function Home() {
  return (
    <>
      <Hero />
      <main className="py-8 sm:py-12">
        <div className="page-shell">
          <header className="section-header space-y-3">
            <p className="eyebrow">Data strategy & digital growth</p>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">Mremma</h1>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className={index === featuredProjects.length - 1 ? "md:col-span-2" : ""}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}