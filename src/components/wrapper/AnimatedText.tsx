"use client";

import { motion, AnimatePresence, MotionProps } from "framer-motion";
import React from "react";

type AnimatedTextProps = {
  id: string;
  as?: "p" | "h1" | "h2" | "h3" | "span";
  className?: string;
  children: React.ReactNode;
  ariaLabelledBy?: string;
} & MotionProps;

export const AnimatedText = ({
  id,
  as = "p",
  className,
  children,
  ariaLabelledBy,
  ...motionProps
}: AnimatedTextProps) => {
  const ComponentMap = {
    p: motion.p,
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    span: motion.span,
  } as const;

  const Component = ComponentMap[as];

  return (
    <AnimatePresence mode="wait">
      <Component
        key={id}
        id={ariaLabelledBy}
        className={className}
        initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -5, filter: "blur(2px)" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        {...motionProps}
      >
        {children}
      </Component>
    </AnimatePresence>
  );
};
