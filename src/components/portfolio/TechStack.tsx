const STACK_LEFT = ["Next.js", "React", "TypeScript", "Node.js"];
const STACK_RIGHT = ["Tailwind CSS", "Vite/TSUP", "PostgreSQL", "MongoDB"];

export const TechStack = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-2 md:grid-cols-2">
      <div>
        <h3 className="mb-2 text-xl font-serif">Tech Stack</h3>
        <ul className="space-y-1 opacity-90">
          {STACK_LEFT.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </div>
      <div className="self-end">
        <ul className="mt-7 space-y-1 opacity-90 md:mt-8">
          {STACK_RIGHT.map((s) => (
            <li key={s}>• {s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
