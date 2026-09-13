import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";


export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">King Drogo</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  );
}