"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
import { useProjectTech } from "@/context/ProjectTechContext";
import { AnimatedText } from "@/components/wrapper/AnimatedText";
import { MediaModal } from "@/components/modals/MediaModal";
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
  techStack?: string[];
}

type Media = { src: string; type: "image" | "video" };
type MediaItem = {
  src: string;
  type: "image" | "video";
};

export const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(
    null,
  );
  const [currentMedia, setCurrentMedia] = useState<Media[]>([]);
  const { messages, language } = useLanguage();
  const {
    selectedProjectKey,
    setSelectedProjectKey,
    hoveredTech,
    setHoveredTech,
    selectedTech,
  } = useProjectTech();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const savedScrollTop = useRef<number | null>(null);
  const wheelHandlers = useRef<Record<string, (e: WheelEvent) => void>>({});

  const smoothScrollTo = useCallback(
    (container: HTMLElement, targetTop: number, duration = 250) => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }

      const startTop = container.scrollTop;
      const distance = targetTop - startTop;
      if (Math.abs(distance) < 1) return;

      const startTime = performance.now();
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        container.scrollTop = startTop + distance * easeInOutCubic(progress);

        if (progress < 1) {
          scrollAnimationRef.current = requestAnimationFrame(step);
        } else {
          scrollAnimationRef.current = null;
        }
      };

      scrollAnimationRef.current = requestAnimationFrame(step);
    },
    [],
  );

  const stabilizeScrollOnClose = useCallback((projectKey: string) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemEl = container.querySelector(
      `[data-project-key="${projectKey}"]`,
    ) as HTMLElement | null;
    if (!itemEl) return;

    const dropdownEl = itemEl.querySelector(
      ".overflow-hidden",
    ) as HTMLElement | null;
    if (!dropdownEl) return;

    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (dropdownHeight <= 0) return;

    // Only needed if closing would cause scroll clamping
    const futureMaxScroll =
      container.scrollHeight - dropdownHeight - container.clientHeight;
    if (container.scrollTop <= futureMaxScroll + 1) return;

    // Add bottom padding to keep scrollable area stable during exit animation
    container.style.transition = "none";
    container.style.paddingBottom = `${dropdownHeight}px`;
    // Force reflow so padding applies before transition
    void container.offsetHeight;

    // After exit animation, smoothly transition padding out
    setTimeout(() => {
      container.style.transition = "padding-bottom 200ms ease-out";
      container.style.paddingBottom = "0px";

      setTimeout(() => {
        container.style.transition = "";
        container.style.paddingBottom = "";
      }, 210);
    }, 250);
  }, []);

  const PROJECTS: Project[] = PROJECTS_DATA.map((p) => ({
    ...p,
    ...(messages.projects[p.key] as {
      title: string;
      description: string;
      details: string;
    }),
  }));

  const handleOpen = (i: number, projectKey: string) => {
    const isClosing = openIndex === i;
    if (isClosing) {
      stabilizeScrollOnClose(projectKey);
      // Restore scroll position after close animation
      const restoreTarget = savedScrollTop.current;
      if (restoreTarget !== null) {
        setTimeout(() => {
          const container = scrollContainerRef.current;
          if (container) smoothScrollTo(container, restoreTarget);
          savedScrollTop.current = null;
        }, 300);
      }
    } else {
      // Save scroll position before opening
      savedScrollTop.current = scrollContainerRef.current?.scrollTop ?? null;
      // Scroll into view mid-animation instead of waiting for it to finish
      setTimeout(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const itemEl = container.querySelector(
          `[data-project-key="${projectKey}"]`,
        ) as HTMLElement | null;
        if (!itemEl) return;
        const containerRect = container.getBoundingClientRect();
        const itemRect = itemEl.getBoundingClientRect();

        if (itemRect.bottom > containerRect.bottom) {
          const scrollToShowBottom =
            container.scrollTop + (itemRect.bottom - containerRect.bottom) + 16;
          // Don't scroll past the point where the title leaves the viewport
          const maxScroll =
            container.scrollTop + (itemRect.top - containerRect.top) + 16;
          smoothScrollTo(container, Math.min(scrollToShowBottom, maxScroll));
        } else if (itemRect.top < containerRect.top) {
          smoothScrollTo(
            container,
            container.scrollTop - (containerRect.top - itemRect.top) - 16,
          );
        }
      }, 250);
    }
    setOpenIndex(isClosing ? null : i);
    setSelectedProjectKey(isClosing ? null : projectKey);
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
    if (!selectedProjectKey && openIndex !== null) {
      const closingKey = PROJECTS[openIndex]?.key;
      if (closingKey) stabilizeScrollOnClose(closingKey);
      // Restore scroll position after close animation
      const restoreTarget = savedScrollTop.current;
      if (restoreTarget !== null) {
        setTimeout(() => {
          const container = scrollContainerRef.current;
          if (container) smoothScrollTo(container, restoreTarget);
          savedScrollTop.current = null;
        }, 300);
      }
      setOpenIndex(null);
    }
  }, [selectedProjectKey]);

  useEffect(() => {
    if (openIndex !== null) {
      const savedScroll = scrollContainerRef.current?.scrollTop ?? 0;
      // close dropdown on language change
      setForceCloseDropdown(true);
      const timer = setTimeout(() => {
        setForceCloseDropdown(false);
      }, 600);
      // restore scroll position after dropdown reopens
      const scrollTimer = setTimeout(() => {
        const container = scrollContainerRef.current;
        if (!container) return;
        smoothScrollTo(container, savedScroll);
      }, 750);
      return () => {
        clearTimeout(timer);
        clearTimeout(scrollTimer);
      };
    }
  }, [language]);

  return (
    <>
      <MediaModal
        selectedMediaIndex={selectedMediaIndex}
        setSelectedMediaIndex={setSelectedMediaIndex}
        currentMedia={currentMedia}
      />
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
        }}
        className="xl:min-h-210 xl:max-h-[66vh] super:min-h-92.5 super:max-h-[41vh] ultra:min-h-147.5 ultra:max-h-[44vh] overflow-auto super:overscroll-contain scrollbar-custom pl-2"
        onMouseEnter={() => setHoveredTech(null)}
      >
        {PROJECTS.map((p, i) => {
          const isOpen = i === openIndex;
          const isLast = i === PROJECTS.length - 1;
          const projectTechs = p.techStack || [];
          const isHighlighted =
            !selectedProjectKey &&
            (selectedTech
              ? projectTechs.includes(selectedTech)
              : hoveredTech && projectTechs.includes(hoveredTech));

          return (
            <div
              data-project-key={p.key}
              key={p.key}
              className={`py-2 lg:py-6 super:py-3 ultra:py-5 relative rounded ${
                !isLast ? "border-b border-text/40 " : ""
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 dark:via-white/6 to-white/20 dark:to-white/8 pointer-events-none rounded"
                animate={{ opacity: isHighlighted ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              {/* Header */}
              <div
                onClick={() => handleOpen(i, p.key)}
                role="button"
                aria-expanded={isOpen}
                aria-controls={`project-${i}-content dropdown`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpen(i, p.key);
                  }
                }}
                className="flex justify-between items-center cursor-pointer"
              >
                <div className="flex justify-center items-center">
                  <motion.span
                    className="relative shrink-0 flex items-center justify-center"
                    animate={{
                      width: isHighlighted ? 8 : 0,
                      height: isHighlighted ? 8 : 0,
                      marginRight: isHighlighted ? 12 : 0,
                      opacity: isHighlighted ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {/* Pulsing outer ring */}
                    <motion.span
                      className="absolute inset-0 rounded-full border border-teal-400/80 dark:border-teal-400/60"
                      animate={
                        isHighlighted
                          ? {
                              scale: [1, 1.5, 1],
                              opacity: [0.6, 0.1, 0.6],
                            }
                          : { scale: 1, opacity: 0 }
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    {/* Inner glowing dot */}
                    <motion.span
                      className="size-1.5 rounded-full bg-radial-[at_50%_75%]  from-sky-400 via-teal-500 dark:via-teal-400 to-blue-500 dark:to-blue-400 to-90% shadow-[0_0_6px_2px_rgba(36,191,251,0.5)]"
                      animate={
                        isHighlighted
                          ? {
                              scale: [1, 1.2, 1],
                            }
                          : { scale: 0 }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.span>
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
                </div>

                <div className="flex flex-col lg:flex-row items-center mx-4 gap-0.5 md:gap-2">
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
                    onClick={() => {
                      if (isOpen) stabilizeScrollOnClose(p.key);
                      setOpenIndex(isOpen ? null : i);
                      setSelectedProjectKey(isOpen ? null : p.key);
                    }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="flex flex-col bg-text/5 rounded-2xl p-4 mt-2 gap-4">
                      {p.details && (
                        <AnimatedText
                          id={`${language}-${p.key}-details`}
                          className="text-sm text-text/70"
                        >
                          {p.details}
                        </AnimatedText>
                      )}

                      {p.images && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="relative flex items-center cursor-default bg-secondary/20 rounded-2xl"
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scroll(p.key, "left");
                            }}
                            className="p-2 rounded-br rounded-tr bg-secondary/20 text-text transition-colors duration-200 hover:bg-neutral hover:text-primary dark:hover:text-text select-none cursor-pointer"
                          >
                            <ChevronLeft />
                          </button>

                          <div
                            className="flex-1 min-w-0 flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-custom p-4"
                            ref={setContainerRef(p.key)}
                          >
                            {(p.videos?.length ?? 0) > 0 &&
                              p.videos!.map((src, idx) => (
                                <motion.button
                                  key={`video-${idx}`}
                                  aria-label={`View video ${idx + 1}`}
                                  className="relative shrink-0 w-37.5 h-24 rounded-lg cursor-pointer overflow-hidden focus:outline-auto focus:outline-offset-2"
                                  transition={{ duration: 0.3 }}
                                  whileHover={{ scale: 1.1 }}
                                  whileFocus={{ scale: 1.05 }}
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
                                    preload="metadata"
                                    className="object-cover w-full h-full rounded-lg select-none"
                                  />
                                </motion.button>
                              ))}
                            {p.images.map((src, idx) => (
                              <motion.button
                                aria-label={`View image ${idx + 1}`}
                                className="relative shrink-0 w-37.5 h-24 rounded-lg cursor-pointer overflow-hidden focus:outline-auto focus:outline-offset-2"
                                transition={{ duration: 0.3 }}
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                whileFocus={{ scale: 1.05 }}
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
                            className="p-2 rounded-tl rounded-bl bg-secondary/20 text-text ml-4 transition-colors duration-200 hover:bg-neutral hover:text-primary dark:hover:text-text select-none cursor-pointer"
                          >
                            <ChevronRight />
                          </button>
                        </div>
                      )}
                    </div>
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
