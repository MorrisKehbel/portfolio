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
import { PROJECTS_DATA } from "@/data/projects";
interface Project {
  key: string;
  title: string;
  description: string;
  details: string;
  href?: string;
  github?: string;
  images?: string[];
  videos?: string[];
}

type Media = { src: string; type: "image" | "video" };
type MediaItem = {
  src: string;
  type: "image" | "video";
};

export const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(
    null
  );
  const [currentMedia, setCurrentMedia] = useState<Media[]>([]);
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
  //     // const moodsyncIndex = PROJECTS.findIndex((p) => p.key === "moodsync");
  //     // if (moodsyncIndex !== -1) {
  //     //   setOpenIndex(moodsyncIndex);
  //     // }
  //     setOpenIndex(0);
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

  useEffect(() => {
    if (selectedMediaIndex !== null) {
      // Modal prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMediaIndex]);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedMediaIndex !== null && modalRef.current) {
      const focusableElements = modalRef.current?.querySelectorAll<
        | HTMLButtonElement
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
        | HTMLAnchorElement
      >(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      firstElement?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedMediaIndex(null);
        }

        if (e.key === "Tab") {
          if (!focusableElements) return;

          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedMediaIndex]);

  return (
    <>
      <AnimatePresence>
        {selectedMediaIndex !== null && currentMedia[selectedMediaIndex] && (
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMediaIndex(null)}
          >
            {/* close button */}
            <button
              onClick={() => setSelectedMediaIndex(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer z-50 p-6"
            >
              <X className="h-12 w-12 bg-black/40 rounded-xl" />
            </button>

            {/* left button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMediaIndex((prev) =>
                  prev === 0 ? currentMedia.length - 1 : prev! - 1
                );
              }}
              disabled={selectedMediaIndex === null}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer z-50 p-6"
            >
              <ChevronLeft className="h-10 w-10 bg-black/40 rounded-xl" />
            </button>

            {/* right button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMediaIndex((prev) =>
                  prev === currentMedia.length - 1 ? 0 : prev! + 1
                );
              }}
              disabled={selectedMediaIndex === null}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer z-50 p-6"
            >
              <ChevronRight className="h-10 w-10 bg-black/40 rounded-xl" />
            </button>

            <motion.div
              key={currentMedia[selectedMediaIndex].src}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center"
            >
              {currentMedia[selectedMediaIndex].type === "video" ? (
                <video
                  src={currentMedia[selectedMediaIndex].src}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-w-[85vw] max-h-[90vh] rounded-xl shadow-lg"
                />
              ) : (
                <Image
                  src={currentMedia[selectedMediaIndex].src}
                  alt={`Media ${selectedMediaIndex}`}
                  width={2560}
                  height={1080}
                  className="object-contain max-w-[85vw] max-h-[90vh] w-auto h-auto rounded-xl select-none"
                  priority
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-4">
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
      </div>
      <div
        ref={scrollContainerRef}
        style={{
          overflowAnchor: "none",
          scrollbarGutter: "stable",
        }} // 46
        className="super:min-h-[450px] super:max-h-[41vh] ultra:min-h-[590px] ultra:max-h-[46vh] overflow-auto scrollbar-custom px-2"
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
                      aria-label={`Project External Link to ${p.title}`}
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
                      aria-label={`Project GitHub Link to ${p.title}`}
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
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative flex items-center cursor-default"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scroll(p.key, "left");
                          }}
                          className="p-2 rounded shadow bg-secondary/20 text-text mx-2 transition-colors duration-200 hover:bg-secondary/40 dark:hover:bg-neutral select-none cursor-pointer"
                        >
                          <ChevronLeft />
                        </button>

                        <div
                          className="flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-custom p-2"
                          ref={setContainerRef(p.key)}
                        >
                          {(p.videos?.length ?? 0) > 0 &&
                            p.videos!.map((src, idx) => (
                              <motion.button
                                key={`video-${idx}`}
                                aria-label={`View video ${idx + 1}`}
                                className="relative flex-shrink-0 w-[150px] h-[96px] rounded-lg mb-1 cursor-pointer overflow-hidden focus:outline-auto focus:outline-offset-2"
                                whileHover={{ scale: 1.15 }}
                                whileFocus={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const mediaArray: MediaItem[] = [
                                    ...(p.videos?.map((v) => ({
                                      src: v,
                                      type: "video" as const,
                                    })) ?? []),
                                    ...(p.images?.map((img) => ({
                                      src: img,
                                      type: "image" as const,
                                    })) ?? []),
                                  ];

                                  setCurrentMedia(mediaArray);
                                  setSelectedMediaIndex(idx);
                                }}
                              >
                                <video
                                  src={src}
                                  loop
                                  muted
                                  autoPlay
                                  playsInline
                                  className="object-cover w-full h-full rounded-lg select-none"
                                />
                              </motion.button>
                            ))}
                          {p.images.map((src, idx) => (
                            <motion.button
                              aria-label={`View image ${idx + 1}`}
                              className="relative flex-shrink-0 w-[150px] h-[96px] rounded-lg mb-1 cursor-pointer overflow-hidden focus:outline-auto focus:outline-offset-2"
                              whileHover={{ scale: 1.15 }}
                              whileFocus={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                const videoCount = p.videos?.length ?? 0;
                                const mediaArray: MediaItem[] = [
                                  ...(p.videos?.map((v) => ({
                                    src: v,
                                    type: "video" as const,
                                  })) ?? []),
                                  ...(p.images?.map((img) => ({
                                    src: img,
                                    type: "image" as const,
                                  })) ?? []),
                                ];
                                setCurrentMedia(mediaArray);
                                setSelectedMediaIndex(videoCount + idx);
                              }}
                            >
                              <Image
                                src={src}
                                alt={`Image ${idx}`}
                                fill
                                sizes="(max-width: 640px) 150px, 200px"
                                className="object-cover select-none rounded-lg"
                              />
                            </motion.button>
                          ))}
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scroll(p.key, "right");
                          }}
                          className="p-2 rounded shadow bg-secondary/20 text-text mx-2 transition-colors duration-200 hover:bg-secondary/40 dark:hover:bg-neutral select-none cursor-pointer"
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
