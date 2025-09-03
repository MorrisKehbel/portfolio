"use client";

import { DarkModeProvider } from "./DarkModeContext";
import { LanguageProvider } from "./LanguageContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <DarkModeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </DarkModeProvider>
  );
};
