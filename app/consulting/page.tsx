import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Consulting() {
  return (
    <main className="py-8 sm:py-12">
      <div className="page-shell">
        <header className="section-header">
          <p className="eyebrow">Consulting</p>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">Strategy and execution support</h1>
        </header>
        <div className="grid gap-4">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </main>
  );
}