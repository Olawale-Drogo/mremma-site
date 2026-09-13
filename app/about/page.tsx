export default function About() {
  return (
    <main className="p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="text-gray-700 mb-4">
        I'm King Drogo, a data analyst focused on turning raw data into decisions,
        with a growing consulting practice helping businesses build dashboards
        and data strategy.
      </p>
      <div className="flex gap-4 mt-6">
        <a href="mailto:your-email@example.com" className="underline">Email</a>
        <a href="https://linkedin.com/in/your-profile" className="underline">LinkedIn</a>
        <a href="https://github.com/your-username" className="underline">GitHub</a>
      </div>
    </main>
  );
}