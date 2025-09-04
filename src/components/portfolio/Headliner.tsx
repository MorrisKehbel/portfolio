import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

interface HeadlinerProps {
  gridShift: boolean;
  setGridShift: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Headliner: React.FC<HeadlinerProps> = ({
  gridShift,
  setGridShift,
}) => {
  const { messages, language } = useLanguage();

  return (
    <div className="grid w-full grid-cols-[1fr_auto] items-end gap-4">
      <AnimatedText
        id={language}
        className="text-4xl text-text leading-[1.05] font-serif md:text-5xl lg:text-6xl"
      >
        {messages.headline()}
      </AnimatedText>

      <button
        onClick={() => setGridShift((prev) => !prev)}
        className="hidden 2xl:flex h-20 w-20 items-center justify-center rounded-full border border-black/10 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
          <path
            d="M8 7l-5 5 5 5M16 7l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button>
    </div>
  );
};
