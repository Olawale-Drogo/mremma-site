type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex gap-2 mt-3">
        {tags.map((tag) => (
          <span key={tag} className="text-sm bg-gray-100 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}