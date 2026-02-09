"use client";

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const LegalModal = ({
  isOpen,
  onClose,
  title,
  children,
}: LegalModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let el = document.getElementById("legal-modal-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "legal-modal-root";
      document.body.appendChild(el);
    }
    setPortalRoot(el);
  }, []);

  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* backdrop */}
          <motion.div
            className="legal-modal-backdrop absolute inset-0 bg-black/60"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          />

          {/* modal content */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="legal-modal-panel relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl ultra:rounded-2xl bg-linear-to-tr from-primary to-[#e4ddd7] dark:to-[#2a2a2e] p-6 ultra:p-8 outline outline-gray-700/10 shadow-lg shadow-black/30 scrollbar-custom border border-text/10"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* close button */}
            <button
              onClick={onClose}
              className="legal-modal-close absolute top-4 right-4 text-text/60 hover:text-text transition cursor-pointer"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* title */}
            <h2 className="text-xl ultra:text-2xl font-semibold text-text mb-4 pr-8">
              {title}
            </h2>

            {/* divider */}
            <div className="w-full h-0.5 bg-linear-to-r from-text/20 to-transparent rounded-full mb-4" />

            {/* body */}
            <div className="text-sm ultra:text-base text-text/80 leading-relaxed space-y-3">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!portalRoot) return null;
  return createPortal(modal, portalRoot);
};
