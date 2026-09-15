import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
};

export default function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <article
      className="relative min-h-[500px] overflow-hidden bg-[#050505] text-white sm:min-h-[560px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.72)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-sm text-base text-white/80 sm:text-lg">{description}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm text-white/60">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-[#1683e8] px-5 py-2.5 font-medium transition-colors hover:bg-[#0b6fc9]"
          >
            View project
          </Link>
          <Link
            href="/consulting"
            className="rounded-full border border-[#1683e8] px-5 py-2.5 font-medium text-[#55aaf5] transition-colors hover:bg-[#1683e8] hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}