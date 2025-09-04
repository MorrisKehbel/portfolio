"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

export const About = () => {
  const { messages, language } = useLanguage();

  return (
    <div className="w-full h-full flex flex-col justify-between items-center p-2 rounded-2xl border border-text/40">
      <AnimatedText
        id={language}
        className="text-5xl xl:text-6xl text-text/40 font-mono select-none self-start"
      >
        {`<${messages.aboutHi}>`}
      </AnimatedText>

      <div className="text-left xl:text-center text-text p-2">
        <AnimatedText id={language} className="my-4 text-lg">
          {messages.aboutText()}
        </AnimatedText>
        <AnimatedText
          id={language}
          className="italic text-md font-semibold text-gray-500 dark:text-gray-300"
        >
          {messages.aboutSubText}
        </AnimatedText>
      </div>

      <motion.div
        className="mx-auto my-4 w-30 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </div>
  );
};
