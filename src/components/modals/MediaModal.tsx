"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Media = {
  src: string;
  type: "image" | "video";
};

interface MediaModalProps {
  selectedMediaIndex: number | null;
  setSelectedMediaIndex: React.Dispatch<React.SetStateAction<number | null>>;
  currentMedia: Media[];
}

export const MediaModal = ({
  selectedMediaIndex,
  setSelectedMediaIndex,
  currentMedia,
}: MediaModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // prevent background scroll + compensate scrollbar width
  useEffect(() => {
    if (selectedMediaIndex !== null) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [selectedMediaIndex]);

  // keyboard navigation + focus trap
  useEffect(() => {
    if (selectedMediaIndex === null || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll<
      HTMLButtonElement | HTMLAnchorElement | HTMLInputElement
    >('a[href], button, [tabindex]:not([tabindex="-1"])');

    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    firstEl?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMediaIndex(null);
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            (lastEl as HTMLElement)?.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            (firstEl as HTMLElement)?.focus();
          }
        }
      }
      if (e.key === "ArrowLeft") {
        setSelectedMediaIndex((prev) =>
          prev === null
            ? null
            : prev === 0
              ? currentMedia.length - 1
              : prev - 1,
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedMediaIndex((prev) =>
          prev === null
            ? null
            : prev === currentMedia.length - 1
              ? 0
              : prev + 1,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedMediaIndex, currentMedia.length, setSelectedMediaIndex]);

  const isOpen =
    selectedMediaIndex !== null && !!currentMedia[selectedMediaIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          tabIndex={-1}
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMediaIndex(null)}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          />

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
                prev === 0 ? currentMedia.length - 1 : prev! - 1,
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
                prev === currentMedia.length - 1 ? 0 : prev! + 1,
              );
            }}
            disabled={selectedMediaIndex === null}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer z-50 p-6"
          >
            <ChevronRight className="h-10 w-10 bg-black/40 rounded-xl" />
          </button>

          <motion.div
            key={currentMedia[selectedMediaIndex].src}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex items-center justify-center"
          >
            {currentMedia[selectedMediaIndex].type === "video" ? (
              <video
                src={currentMedia[selectedMediaIndex].src}
                controls
                autoPlay
                playsInline
                className="object-contain max-w-[85vw] max-h-[90vh] w-auto h-auto rounded-xl select-none"
              />
            ) : (
              <Image
                src={currentMedia[selectedMediaIndex].src}
                alt={`Media ${selectedMediaIndex}`}
                width={2560}
                height={1080}
                className="object-contain max-w-[85vw] max-h-[90vh] w-auto h-auto rounded-xl select-none"
                unoptimized
                priority
              />
            )}
          </motion.div>

          {/* preload adjacent images */}
          {currentMedia.length > 1 &&
            [
              selectedMediaIndex === 0
                ? currentMedia.length - 1
                : selectedMediaIndex - 1,
              selectedMediaIndex === currentMedia.length - 1
                ? 0
                : selectedMediaIndex + 1,
            ]
              .filter(
                (i) =>
                  i !== selectedMediaIndex && currentMedia[i]?.type === "image",
              )
              .map((i) => (
                <Image
                  key={`preload-${i}`}
                  src={currentMedia[i].src}
                  alt=""
                  width={1920}
                  height={1080}
                  unoptimized
                  priority
                  className="absolute w-0 h-0 opacity-0 pointer-events-none"
                />
              ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
