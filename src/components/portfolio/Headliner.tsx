import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

interface HeadlinerProps {
  setGridShift: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Headliner = ({ setGridShift }: HeadlinerProps) => {
  const { messages, language } = useLanguage();

  return (
    <div className="grid w-full grid-cols-[1fr_auto] items-end gap-4">
      <AnimatedText
        id={language}
        className="text-3xl text-text leading-[1.05] font-serif md:text-4xl lg:text-5xl 2xl:text-[clamp(2.7rem,2.2vw,3.2rem)]"
      >
        {messages.headline()}
      </AnimatedText>

      {/* <button
        onClick={() => setGridShift((prev) => !prev)}
        className="hidden super:flex h-14 w-14 items-center justify-center rounded-full border border-text/20 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-text" aria-hidden>
          <path
            d="M8 7l-5 5 5 5M16 7l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button> */}
    </div>
  );
};
