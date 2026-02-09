"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LegalModal } from "@/components/modals/LegalModal";
import { AnimatedText } from "@/components/wrapper/AnimatedText";

type ModalType = "imprint" | "privacy" | null;

const VALID_MODALS: ModalType[] = ["imprint", "privacy"];

function getModalFromURL(): ModalType {
  const param = new URLSearchParams(window.location.search).get("modal");
  return VALID_MODALS.includes(param as ModalType)
    ? (param as ModalType)
    : null;
}

export const Footer = () => {
  const { messages, language } = useLanguage();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // On mount, open the modal if the URL already contains ?modal=…
  useEffect(() => {
    setActiveModal(getModalFromURL());
  }, []);

  // Keep URL in sync whenever the modal state changes
  const openModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
    const url = new URL(window.location.href);
    if (modal) {
      url.searchParams.set("modal", modal);
    } else {
      url.searchParams.delete("modal");
    }
    window.history.replaceState({}, "", url.toString());
  }, []);

  // Also react to browser back / forward navigation
  useEffect(() => {
    const onPopState = () => setActiveModal(getModalFromURL());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <>
      <footer className="flex items-center justify-center gap-2 py-3 text-xs ultra:text-sm text-white/80 dark:text-white/40 select-none">
        <span>&copy; {new Date().getFullYear()} Morris Kehbel</span>
        <span>·</span>
        <button
          onClick={() => openModal("imprint")}
          className="hover:text-white/40 dark:hover:text-white/80 transition cursor-pointer"
        >
          <AnimatedText id={language}>{messages.footerImprint}</AnimatedText>
        </button>
        <span>·</span>
        <button
          onClick={() => openModal("privacy")}
          className="hover:text-white/40 dark:hover:text-white/80 transition cursor-pointer"
        >
          <AnimatedText id={language}>{messages.footerPrivacy}</AnimatedText>
        </button>
      </footer>

      <LegalModal
        isOpen={activeModal === "imprint"}
        onClose={() => openModal(null)}
        title={messages.footerImprint}
      >
        <section className="space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="mb-2 font-medium">{messages.imprintText3}</h2>
            <p data-nosnippet>
              Morris Kehbel
              <br />
              06268 Querfurt
              <br />
              Sachsen-Anhalt
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-medium">{messages.imprintContact}</h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:contact@morriskehbel.de"
                className="underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-400"
              >
                contact@morriskehbel.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-medium">{messages.imprintText1}</h2>
            <p>
              Morris Kehbel
              <br />
              {messages.imprintText2}
            </p>
          </div>

          <div className="pt-4 border-t border-text/10">
            {messages.imprintNotice()}
          </div>
        </section>
      </LegalModal>

      <LegalModal
        isOpen={activeModal === "privacy"}
        onClose={() => openModal(null)}
        title={messages.footerPrivacy}
      >
        <div>{messages.privacyText()}</div>
      </LegalModal>
    </>
  );
};
