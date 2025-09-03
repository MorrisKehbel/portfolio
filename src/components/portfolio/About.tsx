"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute top-4 right-4 w-12 h-12 text-pink-500 origin-center cursor-pointer z-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        whileHover={{
          rotate: 360 * 10,
          transition: { duration: 10, ease: "linear", repeat: Infinity },
        }}
        style={{ willChange: "transform" }}
        aria-hidden
      >
        <g
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l-6-6 6-6" />
          <path d="M15 6l6 6-6 6" />
        </g>
      </motion.svg>

      <div className="relative z-10 rounded-2xl border border-black/10 bg-white/10 dark:bg-black/30 p-6 backdrop-blur-md shadow-lg max-w-xl">
        <div className="text-xl text-text rounded-xl border border-black/10 p-4">
          <p className="mb-3">
            I’m <strong>Morris Kehbel</strong>, a web developer specializing in
            scalable, modern apps. I blend clean code, performance, and
            thoughtful design to build user-first products.
          </p>
          <p>
            Currently focused on the{" "}
            <span className="font-medium">Next.js App Router</span>, server
            actions, and accessible UI systems.
          </p>
        </div>

        <div className="my-3 space-y-2">
          <div className="h-3 w-2/3 rounded bg-blue-500/30" />
          <div className="h-3 w-1/2 rounded bg-blue-500/20" />
        </div>
      </div>
    </div>
  );
};
