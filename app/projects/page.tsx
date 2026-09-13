import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p className="text-gray-700 mb-4">
        Here are some of the projects I've worked on:
      </p>
      <div className="grid gap-4">
        <ProjectCard title={""} description={""} tags={[]} />
      </div>
    </main>
  );
}