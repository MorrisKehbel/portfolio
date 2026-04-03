"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

export const About = () => {
  const { messages, language } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col justify-between items-center p-2 rounded-xl ultra:rounded-2xl border border-text/20 gap-4 md:gap-2 lg:gap-0">
      <AnimatedText
        id={language}
        as="span"
        className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl ultra:text-5xl text-text/40 font-mono select-none self-start"
      >
        {`<${messages.aboutHi}>`}
      </AnimatedText>

      <AnimatedText
        id={language}
        className="text-base lg:text-xl xl:text-base text-text ultra:text-lg text-left lg:text-center super:text-justify ultra:text-center px-2"
      >
        {messages.aboutText()}
      </AnimatedText>

      <div className="mt-2">
        <AnimatedText
          id={language}
          className="italic text-xs lg:text-sm ultra:text-base text-center font-semibold text-gray-600 dark:text-gray-300"
        >
          {messages.aboutSubText}
        </AnimatedText>
        <motion.div
          className="mx-auto mb-2 mt-3 w-30 h-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </div>
    </div>
  );
};
