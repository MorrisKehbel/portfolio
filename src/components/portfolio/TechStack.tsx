"use client";

import { motion, Variants } from "framer-motion";
import StackIcon from "tech-stack-icons";

import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

const tech = [
  { name: "html5", label: "HTML5" },
  { name: "css3", label: "CSS3" },
  { name: "js", label: "JavaScript" },
  { name: "typescript", label: "TypeScript", new: true },
  { name: "json", label: "JSON" },

  { name: "react", label: "React.js" },
  { name: "nextjs", label: "Next.js", new: true },
  { name: "tailwindcss", label: "Tailwind" },
  { name: "expressjs", label: "Express.js" },
  { name: "vitejs", label: "Vite.js" },
  { name: "zod", label: "Zod" },

  { name: "nodejs", label: "Node.js" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "mongodb", label: "MongoDB" },
  { name: "cloudinary", label: "Cloudinary" },

  { name: "git", label: "Git" },
  { name: "github", label: "GitHub" },
  { name: "npm", label: "NPM" },
  { name: "vercel", label: "Vercel" },
  { name: "render", label: "Render" },
  { name: "postman", label: "Postman" },
  { name: "vscode", label: "VSCode" },
  { name: "bash", label: "Bash" },
  { name: "slack", label: "Slack" },

  { name: "openai", label: "OpenAI" },
  { name: "gemini", label: "Gemini" },
  { name: "figma", label: "Figma" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export const TechStack = () => {
  const { messages, language } = useLanguage();

  return (
    <div className="h-full flex flex-col gap-6">
      <AnimatedText
        id={language}
        className="text-4xl text-text font-serif mt-4 text-center"
      >
        {messages.technologies()}
      </AnimatedText>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {tech.map((itemData) => (
          <motion.div
            key={itemData.name}
            className="group relative flex flex-col items-center justify-center rounded-2xl p-4 bg-black/5 dark:bg-white/5 hover:bg-black/4 dark:hover:bg-white/6 shadow-md cursor-default"
            variants={item}
            whileHover={{ scale: 1.1 }}
          >
            {itemData.new && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 dark:bg-blue-700 px-2 py-0.5 text-xs font-bold text-white shadow-md select-none">
                {messages.techNew}
              </span>
            )}
            <StackIcon
              name={itemData.name}
              className="h-12 w-12 grayscale-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
              variant="light"
            />
            <p className="mt-3 text-sm text-text/50 font-medium group-hover:text-text/100 transition-colors duration-400">
              {itemData.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
