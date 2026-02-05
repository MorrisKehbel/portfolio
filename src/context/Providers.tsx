"use client";

import { DarkModeProvider } from "./DarkModeContext";
import { LanguageProvider } from "./LanguageContext";
import { ProjectTechProvider } from "./ProjectTechContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <ProjectTechProvider>{children}</ProjectTechProvider>
      </LanguageProvider>
    </DarkModeProvider>
  );
};
