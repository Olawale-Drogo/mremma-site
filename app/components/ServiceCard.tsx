type ServiceCardProps = {
  name: string;
  description: string;
  price?: string;
};

export default function ServiceCard({ name, description, price }: ServiceCardProps) {
  return (
    <div className="card-surface rounded-[24px] p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">{name}</h2>
          <p className="mt-2 text-[var(--ink-soft)]">{description}</p>
        </div>
        {price && (
          <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--accent-strong)]">
            {price}
          </span>
        )}
      </div>
    </div>
  );
}