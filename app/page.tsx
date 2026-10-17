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
            <div className="grid place-items-center gap-3">
              <p className="eyebrow">Data strategy & digital growth</p>
              <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">Mremma</h1>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className={index === featuredProjects.length - 1 ? "md:col-span-2" : ""}>
                <ProjectCard {...project} />
              </div>
            ))}

            <div className=" md:col-span-2 flex justify-center">
              
              <button className="inline-block rounded-full bg-[var(--accent)] px-6 py-3 text-white hover:bg-[var(--accent-strong)]">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}