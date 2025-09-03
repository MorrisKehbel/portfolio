import { motion, useAnimation } from "framer-motion";
import { Sun, Moon } from "lucide-react";

import { useDarkMode } from "@/context/DarkModeContext";
import { useLanguage } from "@/context/LanguageContext";

export const Settings = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, setLanguage } = useLanguage();

  const iconControls = useAnimation();

  return (
    <div className="h-full flex flex-col gap-6 rounded-3xl">
      {/* DarkMode */}
      <div className="flex-1">
        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => iconControls.start({ rotate: 45 })}
          onHoverEnd={() => iconControls.start({ rotate: 0 })}
          className="w-full h-28 flex items-center justify-center bg-secondary/20 cursor-pointer rounded-xl"
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
      </div>

      {/* Language Switch */}
      <div className="relative w-full h-28 rounded-xl bg-neutral/20 dark:bg-neutral/70 p-1 flex flex-col items-center justify-between overflow-hidden shadow-inner border border-white/60 dark:border-white/10">
        {/* Animated Background */}
        <motion.div
          className="absolute left-1 right-1 rounded-lg bg-primary shadow-md"
          layout
          layoutId="language-bg"
          initial={false}
          animate={{ top: language === "en" ? 4 : 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ height: "calc(50% - 4px)" }}
        />

        {/* EN Button */}
        <motion.button
          onClick={() => setLanguage("en")}
          className={`relative flex-1 flex items-center justify-center w-full font-bold z-10 text-lg ${
            language === "en"
              ? "text-text"
              : "text-text/50 cursor-pointer transition duration-200 hover:scale-105 hover:text-text/70"
          }`}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          English
        </motion.button>

        {/* DE Button */}
        <motion.button
          onClick={() => setLanguage("de")}
          className={`relative flex-1 flex items-center justify-center w-full font-bold z-10 text-lg ${
            language === "de"
              ? "text-text"
              : "text-text/50 cursor-pointer transition duration-200 hover:scale-105 hover:text-text/70"
          }`}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Deutsch
        </motion.button>
      </div>
    </div>
  );
};
