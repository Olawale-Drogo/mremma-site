type ServiceCardProps = {
  name: string;
  description: string;
  price?: string;
};

export default function ServiceCard({ name, description, price }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      {price && <p className="mt-3 font-semibold">{price}</p>}
    </div>
  );
}