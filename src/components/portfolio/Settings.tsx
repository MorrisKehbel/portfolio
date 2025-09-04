"use client";

import { motion, useAnimation } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/context/DarkModeContext";
import { useLanguage } from "@/context/LanguageContext";

export const Settings = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, setLanguage } = useLanguage();

  const iconControls = useAnimation();

  const languages: { code: typeof language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    <div className="h-full grid grid-cols-2 xl:grid-cols-1 gap-6">
      {/* DarkMode */}
      <motion.button
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => iconControls.start({ rotate: 45 })}
        onHoverEnd={() => iconControls.start({ rotate: 0 })}
        className="w-full flex items-center justify-center bg-secondary/20 cursor-pointer rounded-xl"
      >
        <motion.div
          animate={{ rotate: 380 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={iconControls}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {darkMode ? (
              <Moon className="text-text transition duration-200" size={42} />
            ) : (
              <Sun className="text-text transition duration-200" size={42} />
            )}
          </motion.div>
        </motion.div>
      </motion.button>

      {/* Language Switch */}
      <div className="flex-1 w-full flex flex-col rounded-xl bg-neutral/20 dark:bg-neutral/70 p-1 overflow-hidden shadow-inner border border-white/10">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`group relative flex-1 min-h-12 flex items-center justify-center transition-all duration-200 select-none ${
              language !== lang.code && "cursor-pointer"
            }`}
          >
            {language === lang.code && (
              <motion.div
                layoutId="language-slider"
                className="absolute inset-0 bg-primary rounded-lg shadow-md z-0"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span
              className={`font-bold text-lg relative z-10 transition-all duration-200 ${
                language === lang.code
                  ? "text-text"
                  : "text-text/50 group-hover:text-text/70 group-hover:scale-105"
              }`}
            >
              {lang.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
