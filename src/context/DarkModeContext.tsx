"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { flushSync } from "react-dom";

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

type VT = { finished: Promise<void> };

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setDarkMode(theme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    localStorage.setItem("darkMode", darkMode.toString());
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleDarkMode = () => {
    const next = darkMode === null ? true : !darkMode;

    if (!("startViewTransition" in document)) {
      setDarkMode(next);
      return;
    }

    (document as Document & { startViewTransition: (cb: () => void) => VT }).startViewTransition(() => {
      flushSync(() => setDarkMode(next));
    });
  };

  if (darkMode === null) {
    return null;
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context)
    throw new Error("useDarkMode must be used within an DarkModeProvider");
  return context;
};
