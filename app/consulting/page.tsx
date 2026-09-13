import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Consulting() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Consulting</h1>
      <div className="grid gap-4">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </main>
  );
}