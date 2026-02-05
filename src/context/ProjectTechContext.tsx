"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useCallback,
} from "react";

interface ProjectTechContextType {
  selectedProjectKey: string | null;
  setSelectedProjectKey: (key: string | null) => void;
  hoveredTech: string | null;
  setHoveredTech: (tech: string | null) => void;
}

const ProjectTechContext = createContext<ProjectTechContextType | undefined>(
  undefined
);

export const ProjectTechProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProjectKey, setSelectedProjectKey] = useState<string | null>(
    null
  );
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setHoveredTechWithTimeout = useCallback((tech: string | null) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (tech === null) {
      // Add a small delay before clearing to prevent flickering
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredTech(null);
      }, 50);
    } else {
      // Set immediately when hovering
      setHoveredTech(tech);
    }
  }, []);

  return (
    <ProjectTechContext.Provider
      value={{
        selectedProjectKey,
        setSelectedProjectKey,
        hoveredTech,
        setHoveredTech: setHoveredTechWithTimeout,
      }}
    >
      {children}
    </ProjectTechContext.Provider>
  );
};

export const useProjectTech = () => {
  const context = useContext(ProjectTechContext);
  if (context === undefined) {
    throw new Error("useProjectTech must be used within a ProjectTechProvider");
  }
  return context;
};
