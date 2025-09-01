import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Next.js, TypeScript, Tailwind with Framer motion animated sections.",
    href: "#",
  },
  {
    title: "MoodSync Web App",
    description: "React, Express, MongoDB, and OpenAI API integration.",
    href: "#",
  },
];

export const Projects = () => {
  return (
    <>
      {PROJECTS.map((p) => (
        <a
          key={p.title}
          href={p.href}
          className="flex justify-between mt-4 pb-4 border-b"
        >
          <div>
            <div className="text-xl font-serif">{p.title}</div>
            <p className="mt-1 text-sm opacity-70">{p.description}</p>
          </div>
          <ExternalLink className="h-5 w-5 opacity-70" />
        </a>
      ))}
    </>
  );
};
