import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

export const Headliner = () => {
  const { messages, language } = useLanguage();

  return (
    <div className="grid w-full grid-cols-[1fr_auto] items-end gap-4">
      <AnimatedText
        id={language}
        ariaLabelledBy="headline"
        as="h1"
        className="text-3xl text-text leading-[1.05] font-serif lg:text-5xl 2xl:text-[clamp(2.7rem,2.2vw,3.2rem)]"
      >
        {messages.headline()}
      </AnimatedText>
    </div>
  );
};
