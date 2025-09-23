"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/context/LanguageContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

interface Project {
  key: string;
  title: string;
  description: string;
  details: string;
  href?: string;
  github?: string;
  images?: string[];
}

export const PROJECTS_DATA = [
  {
    key: "portfolio",
    github: "https://github.com/MorrisKehbel/portfolio",
  },
  {
    key: "moodsync",
    href: "https://moodsync-w23y.onrender.com/",
    github: "https://github.com/MorrisKehbel/MoodSync",
    images: [
      "/projects/moodsync/moodsync-1.png",
      "/projects/moodsync/moodsync-2.png",
      "/projects/moodsync/moodsync-3.png",
      "/projects/moodsync/moodsync-4.png",
      "/projects/moodsync/moodsync-5.png",
      "/projects/moodsync/moodsync-6.png",
      "/projects/moodsync/moodsync-7.png",
      "/projects/moodsync/moodsync-8.png",
      "/projects/moodsync/moodsync-9.png",
      "/projects/moodsync/moodsync-10.png",
    ],
  },
  {
    key: "pokemon",
    href: "https://pokemon-battlegame-frontend.onrender.com/",
    github: "https://github.com/MorrisKehbel/pokemon_battlegame_frontend",
    images: [
      "/projects/pokemon/pokemon-1.png",
      "/projects/pokemon/pokemon-2.png",
      "/projects/pokemon/pokemon-3.png",
      "/projects/pokemon/pokemon-4.png",
      "/projects/pokemon/pokemon-5.png",
      "/projects/pokemon/pokemon-6.png",
      "/projects/pokemon/pokemon-7.png",
    ],
  },
];

export const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const { messages, language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const wheelHandlers = useRef<Record<string, (e: WheelEvent) => void>>({});
  const [userOpened, setUserOpened] = useState(false);

  const PROJECTS: Project[] = PROJECTS_DATA.map((p) => ({
    ...p,
    ...(messages.projects[p.key] as {
      title: string;
      description: string;
      details: string;
    }),
  }));

  const handleOpen = (i: number) => {
    setUserOpened(true);
    setOpenIndex(openIndex === i ? null : i);
  };

  const setContainerRef = (key: string) => (el: HTMLDivElement | null) => {
    // cleanup previous if exists
    const prev = containerRefs.current[key];
    if (prev && wheelHandlers.current[key]) {
      prev.removeEventListener("wheel", wheelHandlers.current[key]);
      prev.style.overscrollBehavior = "";
      delete wheelHandlers.current[key];
    }

    if (el) {
      containerRefs.current[key] = el;

      const handler = (e: WheelEvent) => {
        // only act if there's horizontal overflow
        const isScrollable = el.scrollWidth > el.clientWidth;
        if (!isScrollable) return;

        // prefer deltaX (trackpad horizontal), otherwise use vertical deltaY to scroll horizontally
        const delta =
          Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (delta === 0) return;

        // prevent page from scrolling
        e.preventDefault();
        e.stopPropagation();

        // horizontal scroll
        el.scrollLeft += delta;
      };

      wheelHandlers.current[key] = handler;
      el.addEventListener("wheel", handler, { passive: false });

      // prevent scroll chaining to parent/page (fallback)
      el.style.overscrollBehavior = "contain";
    } else {
      delete containerRefs.current[key];
    }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const moodsyncIndex = PROJECTS.findIndex((p) => p.key === "moodsync");
  //     if (moodsyncIndex !== -1) {
  //       setOpenIndex(moodsyncIndex);
  //     }
  //   }, 600);

  //   return () => clearTimeout(timer);
  // }, []);

  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  // img overflow scroll
  const scroll = (key: string, direction: "left" | "right") => {
    const container = containerRefs.current[key];
    if (container) {
      const scrollAmount = 162; // img width + gap
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const [forceCloseDropdown, setForceCloseDropdown] = useState(false);

  useEffect(() => {
    if (openIndex !== null) {
      // close dropdown on language change
      setForceCloseDropdown(true);
      const timer = setTimeout(() => {
        setForceCloseDropdown(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [language]);

  // escape key to close image modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      // Modal prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  return (
    <>
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setSelectedImageIndex(null);
              }
            }}
          >
            {/* close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer"
            >
              <X className="h-12 w-12" />
            </button>

            {/* left button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) =>
                  prev === 0 ? currentImages.length - 1 : prev! - 1
                );
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer z-50"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            {/* right button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex((prev) =>
                  prev === currentImages.length - 1 ? 0 : prev! + 1
                );
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer z-50"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <motion.img
              key={currentImages[selectedImageIndex!]}
              src={currentImages[selectedImageIndex!]}
              alt={`Image ${selectedImageIndex}`}
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg select-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatedText
        id={language}
        ariaLabelledBy="projects-portfolio"
        as="h2"
        className="mt-2 text-3xl md:text-4xl text-text font-serif text-center"
      >
        {messages.projectTitle()}
      </AnimatedText>
      <AnimatedText
        id={language}
        className="mt-1 text-sm text-text opacity-70 m-2 text-center"
      >
        {messages.projectSubTitle}
      </AnimatedText>

      <div
        ref={scrollContainerRef}
        style={{ overflowAnchor: "none" }}
        className="super:max-h-[41vh] overflow-auto scrollbar-custom mt-4 px-2"
      >
        {PROJECTS.map((p, i) => {
          const isOpen = i === openIndex;
          const isLast = i === PROJECTS.length - 1;

          return (
            <div
              data-project-key={p.key}
              key={p.key}
              className={`py-4 ${!isLast ? "border-b border-text/40 " : ""}`}
            >
              {/* Header */}
              <div
                onClick={() => handleOpen(i)}
                role="button"
                aria-expanded={isOpen}
                aria-controls={`project-${i}-content dropdown`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpen(i);
                  }
                }}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col">
                  <AnimatedText
                    id={`${language}-${p.key}-title`}
                    as="h3"
                    className="text-xl text-text font-serif"
                  >
                    {p.title}
                  </AnimatedText>
                  <AnimatedText
                    id={`${language}-${p.key}-desc`}
                    className="mt-1 text-sm text-text/70"
                  >
                    {p.description}
                  </AnimatedText>
                </div>

                <div className="flex flex-col lg:flex-row items-center mx-4 gap-2">
                  {p.href ? (
                    <a
                      aria-label="Project Website Link"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-10 h-10 rounded text-text/70 hover:text-text transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="h-5 w-5 invisible" />
                  )}
                  {p.github ? (
                    <a
                      aria-label="Project GitHub Link"
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-10 h-10 rounded text-text/70 hover:text-text transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="h-5 w-5 invisible" />
                  )}
                  <motion.button
                    aria-label="Toggle Project Details"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded text-text/70 hover:text-text transition-colors cursor-pointer"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {isOpen && !forceCloseDropdown && (
                  <motion.div
                    key={`${p.key}-dropdown-${language}`}
                    aria-expanded={isOpen}
                    className="cursor-pointer overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onAnimationComplete={() => {
                      if (!userOpened) return;

                      if (scrollContainerRef.current && openIndex === i) {
                        const itemEl = scrollContainerRef.current.querySelector(
                          `[data-project-key="${p.key}"]`
                        ) as HTMLElement | null;
                        if (itemEl) {
                          itemEl.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                        }
                      }

                      setUserOpened(false);
                    }}
                  >
                    {p.details && (
                      <AnimatedText
                        id={`${language}-${p.key}-details`}
                        className="text-sm text-text mb-3"
                      >
                        {p.details}
                      </AnimatedText>
                    )}
                    {p.images && (
                      <div className="relative flex items-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scroll(p.key, "left");
                          }}
                          className="p-2 rounded shadow bg-secondary/20 text-text mx-2 transition-colors duration-200 hover:bg-secondary/40 hover:shadow-md dark:hover:bg-neutral select-none cursor-pointer"
                        >
                          <ChevronLeft />
                        </button>

                        <div
                          className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-custom"
                          ref={setContainerRef(p.key)}
                        >
                          {p.images.map((src, idx) => (
                            <div
                              className="relative w-[150px] h-[96px] flex-shrink-0 rounded-lg overflow-hidden mb-1"
                              key={idx}
                            >
                              <motion.button
                                aria-label={`View image ${idx + 1}`}
                                whileHover={{ scale: 1.15 }}
                                whileFocus={{ scale: 1.15 }}
                                transition={{ duration: 0.3 }}
                                className="group relative w-full h-full cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImages(p.images!);
                                  setSelectedImageIndex(idx);
                                }}
                              >
                                <Image
                                  src={src}
                                  alt={`Image ${idx}`}
                                  fill
                                  sizes="(max-width: 640px) 150px, 200px"
                                  className="object-cover select-none"
                                />
                              </motion.button>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scroll(p.key, "right");
                          }}
                          className="p-2 rounded shadow bg-secondary/20 text-text mx-2 transition-colors duration-200 hover:bg-secondary/40 hover:shadow-md dark:hover:bg-neutral select-none cursor-pointer"
                        >
                          <ChevronRight />
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
};
