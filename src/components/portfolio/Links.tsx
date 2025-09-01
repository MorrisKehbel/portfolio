import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/morriskehbel",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/morriskehbel/",
    icon: Linkedin,
  },
];

export const Links = () => {
  return (
    <div className="grid grid-cols-1 gap-3 h-full">
      {socialLinks.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-secondary/10 p-4 text-sm font-medium transition hover:bg-neutral hover:text-primary"
          >
            <link.icon className="h-4 w-4" />
            <p>{link.name}</p>
          </a>
        );
      })}
    </div>
  );
};
