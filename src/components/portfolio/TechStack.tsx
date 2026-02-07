"use client";

import { motion, Variants } from "framer-motion";
import StackIcon from "tech-stack-icons";

import { useLanguage } from "@/context/LanguageContext";
import { useDarkMode } from "@/context/DarkModeContext";
import { useProjectTech } from "@/context/ProjectTechContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";
import { PROJECTS_DATA } from "@/data/projects";

const tech = [
  // --- Languages ---
  { name: "html5", label: "HTML5" },
  { name: "css3", label: "CSS3" },
  { name: "js", label: "JavaScript" },
  { name: "typescript", label: "TypeScript" },
  { name: "python", label: "Python" },
  { name: "ruby", label: "Ruby" },
  { name: "json", label: "JSON" },

  // --- Frameworks & Libraries (Frontend & Styling) ---
  { name: "react", label: "React.js" },
  { name: "nextjs", label: "Next.js" },
  { name: "tailwindcss", label: "Tailwind" },
  { name: "bootstrap5", label: "Bootstrap" },
  { name: "vitejs", label: "Vite.js" },

  // --- Backend, Runtime & Auth/Validation ---
  { name: "nodejs", label: "Node.js" },
  { name: "expressjs", label: "Express.js" },
  { name: "rails", label: "Rails" },
  { name: "zod", label: "Zod" },

  // --- Database & Storage ---
  { name: "postgresql", label: "PostgreSQL" },
  { name: "mongodb", label: "MongoDB" },
  { name: "cloudinary", label: "Cloudinary" },

  // --- Tools & Environment ---
  { name: "vscode", label: "VSCode" },
  { name: "cursor", label: "Cursor" },

  // --- DevOps, Deployment & Workflow ---
  { name: "git", label: "Git" },
  { name: "github", label: "GitHub" },
  { name: "npm", label: "NPM" },
  { name: "docker", label: "Docker", new: true },
  { name: "vercel", label: "Vercel" },
  { name: "render", label: "Render" },
  { name: "make", label: "Make", new: true },
  { name: "n8n", label: "n8n", new: true },
  { name: "bash", label: "Bash" },

  // --- AI & Design ---
  { name: "openai", label: "OpenAI" },
  { name: "claude", label: "Claude" },
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
  const { darkMode } = useDarkMode();
  const {
    selectedProjectKey,
    setSelectedProjectKey,
    setHoveredTech,
    selectedTech,
    setSelectedTech,
  } = useProjectTech();

  return (
    <div
      className="h-full flex flex-col justify-evenly gap-2 ultra:gap-4"
      onMouseLeave={() => {
        if (!selectedTech) setHoveredTech(null);
      }}
    >
      <AnimatedText
        id={language}
        ariaLabelledBy="techstack"
        as="h2"
        className="text-2xl sm:text-3xl md:text-4xl text-text font-serif text-center mt-1 sm:mt-2 mb-2 sm:mb-3 md:mb-4"
      >
        {messages.technologies()}
      </AnimatedText>

      <motion.div
        className="grid grid-cols-[repeat(auto-fit,minmax(70px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(75px,1fr))] ultra:grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-1 sm:gap-2 ultra:gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {tech.map((itemData) => {
          const selectedProject = selectedProjectKey
            ? PROJECTS_DATA.find((p) => p.key === selectedProjectKey)
            : null;
          const projectTechs = selectedProject?.techStack || [];
          const isHighlightedByProject =
            selectedProjectKey && projectTechs.includes(itemData.name);
          const isActive = selectedTech === itemData.name;
          const isHighlighted = selectedProjectKey
            ? isHighlightedByProject
            : isActive;

          return (
            <motion.button
              key={itemData.name}
              className={`group relative flex flex-col items-center justify-center rounded-sm sm:rounded-md md:rounded-lg lg:rounded-xl p-2 md:p-2 ultra:p-4 cursor-pointer transition-all duration-300 ease-out bg-linear-to-br from-white/42 via-white/24 to-white/2 dark:from-white/16 dark:via-white/6 dark:to-white/2 select-none border border-white/10 dark:border-white/5 focus-visible:ring ring-blue-500/20 dark:ring-blue-700/40 active:scale-[0.97] active:ring active:md:ring-2 active:shadow-[0_15px_30px_-28px_rgba(0,0,0,0.8)]
            ${
              isHighlighted
                ? "ring md:ring-2 shadow-[0_15px_30px_-28px_rgba(0,0,0,0.8)]"
                : "shadow-[0_12px_40px_-28px_rgba(0,0,0,0.4)]"
            }`}
              variants={item}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => {
                if (!selectedTech) setHoveredTech(itemData.name);
              }}
              onMouseLeave={() => {
                if (!selectedTech) setHoveredTech(null);
              }}
              onFocus={() => {
                if (!selectedTech) setHoveredTech(itemData.name);
              }}
              onClick={() => {
                if (isActive) {
                  setSelectedTech(null);
                  setHoveredTech(null);
                } else {
                  setSelectedTech(itemData.name);
                  setHoveredTech(itemData.name);
                  setSelectedProjectKey(null);
                }
              }}
            >
              {itemData.new && (
                <span className="hidden md:block absolute sm:-top-2 md:-top-1 ultra:-top-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 dark:bg-blue-400 px-1 sm:px-1.5 md:px-2 py-0.4 ultra:py-0.5 text-[8px] sm:text-[10px] ultra:text-xs font-bold text-white shadow-md select-none">
                  {messages.techNew}
                </span>
              )}
              <StackIcon
                name={itemData.name}
                className={`h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 ultra:h-8 ultra:w-8 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 group-focus-visible:grayscale-0 group-focus-visible:scale-105 group-active:grayscale-0 group-active:scale-105 ${isHighlighted ? "grayscale-0 scale-105" : "grayscale-60 scale-100"}`}
                variant={darkMode ? "dark" : "light"}
              />
              <p
                className={`mt-1 sm:mt-2 md:mt-3 text-[10px] sm:text-xs ultra:text-sm font-medium group-hover:text-text transition-colors duration-400 text-center group-focus-visible:text-blue-500 dark:group-focus-visible:text-blue-400 group-active:text-blue-500 dark:group-active:text-blue-400 ${
                  isHighlighted
                    ? "dark:text-blue-400 text-blue-500"
                    : "text-text/40"
                }`}
              >
                {itemData.label}
              </p>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};
