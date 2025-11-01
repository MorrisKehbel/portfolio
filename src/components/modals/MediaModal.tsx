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

  // prevent background scroll
  useEffect(() => {
    if (selectedMediaIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
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
          prev === null ? null : prev === 0 ? currentMedia.length - 1 : prev - 1
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedMediaIndex((prev) =>
          prev === null ? null : prev === currentMedia.length - 1 ? 0 : prev + 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedMediaIndex, currentMedia.length, setSelectedMediaIndex]);

  if (selectedMediaIndex === null || !currentMedia[selectedMediaIndex])
    return null;

  const current = currentMedia[selectedMediaIndex];

  return (
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
            initial={{ scale: 0.7, opacity: 0 }}
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
                priority
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
