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

interface ProjectText {
  title: string;
  description: string;
  details: string;
}

interface Projects {
  [key: string]: ProjectText;
}
interface Messages {
  headline: () => React.ReactNode;
  aboutHi: string;
  aboutText: () => React.ReactNode;
  aboutSubText: string;
  contact: string;
  contact2: () => React.ReactNode;
  contactName: string;
  contactName2: string;
  contactMail: string;
  contactCompany: string;
  contactMsg: string;
  contactError: string;
  contactError2: string;
  contactErrorEmail: string;
  contactErrorMsg: string;
  contactSnd: string;
  contactLoading: string;
  contactSuccess: string;
  technologies: () => React.ReactNode;
  techNew: string;
  projectSubTitle: string;
  projectTitle: () => React.ReactNode;
  footerImprint: string;
  footerPrivacy: string;
  imprintNotice: () => React.ReactNode;
  imprintText1: string;
  imprintText2: string;
  imprintText3: string;
  imprintContact: string;
  privacyText: () => React.ReactNode;
  projects: Projects;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<Language>("de");
  const messages = language === "en" ? enMessages : deMessages;

  useEffect(() => {
    let initialLang: Language = "de";

    // 1. Url Hash check
    const hashLang = window.location.hash.replace("#", "");
    if (hashLang === "de" || hashLang === "en") {
      initialLang = hashLang;
    } else {
      // 2. LocalStorage check
      const storedLang = localStorage.getItem("lang");
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
        window.location.pathname + window.location.search,
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
