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
    <div className="h-full grid grid-cols-2 super:grid-cols-1 gap-3">
      {/* DarkMode */}
      <motion.button
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={darkMode}
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => iconControls.start({ rotate: 45 })}
        onHoverEnd={() => iconControls.start({ rotate: 0 })}
        className="w-full flex items-center justify-center bg-secondary/20 cursor-pointer rounded-xl active:outline-none"
      >
        <motion.div
          animate={{ rotate: 380 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex items-center justify-center py-2"
        >
          <motion.div
            animate={iconControls}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            {darkMode ? (
              <Moon className="text-text transition duration-200 h-8 w-8 ultra:h-10 ultra:w-10" />
            ) : (
              <Sun className="text-text transition duration-200 h-8 w-8 ultra:h-10 ultra:w-10" />
            )}
          </motion.div>
        </motion.div>
      </motion.button>

      {/* Language Switch */}
      <div
        aria-label="Language selector"
        className="flex flex-col rounded-xl bg-neutral/20 dark:bg-neutral/70 p-1 overflow-hidden shadow-inner border border-white/10"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            aria-pressed={language === lang.code}
            className={`group relative flex-1 flex items-center py-2 justify-center transition-all duration-200 select-none ${
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
              className={`font-bold text-sm lg:text-base relative z-10 transition-all duration-200 ${
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
