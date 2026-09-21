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
          <h1 className="mb-6 text-2xl font-bold">King Drogo</h1>
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