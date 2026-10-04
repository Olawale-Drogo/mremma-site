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
      className="group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/10 bg-[var(--surface-strong)] text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 sm:min-h-[560px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.72)), url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />
      <div className="relative z-10 flex min-h-[500px] flex-col items-center justify-center px-6 text-center sm:min-h-[560px] sm:px-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-sm text-base text-white/80 sm:text-lg">{description}</p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm text-white/70">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-strong)]"
          >
            View project
          </Link>
          <Link
            href="/consulting"
            className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}