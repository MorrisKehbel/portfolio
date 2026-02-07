import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const Headliner = () => {
  const { messages, language } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      setHeight(el.offsetHeight);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid w-full grid-cols-[1fr_auto] items-end gap-4">
      <motion.div
        animate={{ height }}
        initial={false}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="grid pb-1">
          <AnimatedText
            id={language}
            ariaLabelledBy="headline"
            as="h1"
            className="text-3xl text-text leading-[1.05] font-serif text-center xl:text-left lg:text-5xl 2xl:text-[clamp(2.7rem,2.2vw,3.2rem)] my-2 xl:my-0"
          >
            {messages.headline()}
          </AnimatedText>
        </div>
      </motion.div>
    </div>
  );
};
