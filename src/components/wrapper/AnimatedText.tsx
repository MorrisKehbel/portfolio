"use client";

import { motion, AnimatePresence } from "framer-motion";

type AnimatedTextProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export const AnimatedText = ({
  children,
  id,
  className,
}: AnimatedTextProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={id}
        className={className}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.p>
    </AnimatePresence>
  );
};
