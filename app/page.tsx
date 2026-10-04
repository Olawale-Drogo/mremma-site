import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-[#f5f5f7] p-4 sm:p-8">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-8 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6b7280]">Data strategy & digital growth</p>
            <h1 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">Mremma</h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={project.title} className={index === projects.length - 1 ? "md:col-span-2" : ""}>
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