"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { enMessages } from "@/locales/en";
import { deMessages } from "@/locales/de";

type Language = "en" | "de";

type LanguageContextProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  messages: Messages;
};

type Messages = {
  [key: string]: string | (() => React.ReactNode);
};

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>("en");
  const messages = language === "en" ? enMessages : deMessages;

  useEffect(() => {
    let initialLang: Language = "en";

    // 1. Url Hash check
    const hashLang = window.location.hash.replace("#", "") as Language;
    if (hashLang === "de" || hashLang === "en") {
      initialLang = hashLang;
    } else {
      // 2. LocalStorage check
      const storedLang = localStorage.getItem("lang") as Language | null;
      if (storedLang === "de" || storedLang === "en") {
        initialLang = storedLang;
      }
    }

    setLanguageState(initialLang);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);

    // remove hash from url
    if (window.location.hash === "#en" || window.location.hash === "#de") {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, messages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within an LanguageProvider");
  }
  return context;
};
