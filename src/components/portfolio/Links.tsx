import Lottie from "lottie-react";
import { linkedinIcon, githubIcon } from "@/components/lottie";
import { useDarkMode } from "@/context/DarkModeContext";

export const Links = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 h-full">
      <a
        aria-label={`My Github Profile`}
        href="https://github.com/morriskehbel"
        target="_blank"
        rel="noopener noreferrer"
        className="flex super:flex-col items-center justify-center gap-2 rounded-xl bg-secondary/20 p-4 text-text text-sm font-medium transition-colors duration-200 hover:bg-neutral hover:text-primary dark:hover:text-text select-none"
      >
        <Lottie
          animationData={githubIcon}
          loop={true}
          autoplay={true}
          style={{
            width: 40,
            height: 40,
            filter: darkMode ? "invert(10%)" : "invert(90%)",
          }}
        />
        <p>Github</p>
      </a>
      <a
        aria-label={`My LinkedIn Profile`}
        href="https://www.linkedin.com/in/morriskehbel/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex super:flex-col items-center justify-center gap-2 rounded-xl bg-secondary/20 p-4 text-text text-sm font-medium transition-colors duration-200 hover:bg-neutral hover:text-primary dark:hover:text-text select-none"
      >
        <Lottie
          animationData={linkedinIcon}
          loop={true}
          autoplay={true}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <p>LinkedIn</p>
      </a>
    </div>
  );
};
