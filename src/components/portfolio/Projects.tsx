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

  const PROJECTS: Project[] = PROJECTS_DATA.map((p) => ({
    ...p,
    ...(messages.projects[p.key] as {
      title: string;
      description: string;
      details: string;
    }),
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      const moodsyncIndex = PROJECTS.findIndex((p) => p.key === "moodsync");
      if (moodsyncIndex !== -1) {
        setOpenIndex(moodsyncIndex);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scroll = (key: string, direction: "left" | "right") => {
    const container = containerRefs.current[key];
    if (container) {
      const scrollAmount = 200;
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
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
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
        className="mt-2 text-4xl text-text font-serif text-center"
      >
        {messages.projectTitle}
      </AnimatedText>
      <AnimatedText
        id={language}
        className="text-sm text-text opacity-70 pb-6 text-center"
      >
        {messages.projectSubTitle}
      </AnimatedText>

      <div className="space-y-6">
        {PROJECTS.map((p, i) => {
          const isOpen = i === openIndex;
          const isLast = i === PROJECTS.length - 1;

          return (
            <div
              key={p.key}
              className={`pb-4 ${!isLast ? "border-b border-text/40" : ""}`}
            >
              {/* Header */}
              <div
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex flex-col">
                  <AnimatedText
                    id={`${language}-${p.key}-title`}
                    className="text-xl text-text font-serif"
                  >
                    {p.title}
                  </AnimatedText>
                  <AnimatedText
                    id={`${language}-${p.key}-desc`}
                    className="mt-1 mb-4 text-sm text-text/70"
                  >
                    {p.description}
                  </AnimatedText>
                </div>

                <div className="flex items-center gap-6">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-text hover:text-gray-700 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="h-5 w-5 invisible" />
                  )}

                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-text hover:text-gray-700 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  ) : (
                    <span className="h-5 w-5 invisible" />
                  )}

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4 text-text opacity-60" />
                  </motion.div>
                </div>
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {isOpen && !forceCloseDropdown && (
                  <motion.div
                    key={`${p.key}-dropdown-${language}`}
                    className="cursor-pointer overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
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
                          className="p-2 rounded shadow bg-secondary/20 text-text mr-2 transition-colors duration-200 hover:bg-secondary/40 hover:shadow-md dark:hover:bg-neutral select-none cursor-pointer"
                        >
                          <ChevronLeft />
                        </button>

                        <div
                          className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide"
                          onWheel={(e) => {
                            e.currentTarget.scrollLeft += e.deltaY;
                          }}
                          ref={(el) => {
                            containerRefs.current[p.key] = el;
                          }}
                        >
                          {p.images.map((src, idx) => (
                            <div
                              className="relative w-[200px] h-[128px] flex-shrink-0 rounded-lg overflow-hidden"
                              key={idx}
                            >
                              <motion.div
                                whileHover={{ scale: 1.25 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
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
                                  className="object-cover"
                                />
                              </motion.div>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scroll(p.key, "right");
                          }}
                          className="p-2 rounded shadow bg-secondary/20 text-text ml-2 transition-colors duration-200 hover:bg-secondary/40 hover:shadow-md dark:hover:bg-neutral select-none cursor-pointer"
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
