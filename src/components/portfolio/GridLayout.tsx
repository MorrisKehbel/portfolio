"use client";

import Image from "next/image";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { ToastContainer, Slide } from "react-toastify";

import {
  Card,
  Headliner,
  Projects,
  About,
  Links,
  Contact,
  TechStack,
  Settings,
} from "@/components/portfolio";

export const GridLayout = () => {
  const [startScale, setStartScale] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStartScale(true), 500);
    const timer2 = setTimeout(() => setShowAll(true), 400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 mx-auto p-6 h-full"
        variants={containerVariants}
        initial="hidden"
        animate={showAll ? "visible" : "hidden"}
      >
        <motion.section
          aria-labelledby="settings"
          className="lg:col-span-1 lg:row-span-3 lg:order-2"
          variants={cardVariants}
        >
          <Card>
            <Settings />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="headline"
          className="lg:col-span-6 lg:row-span-3 lg:order-1"
          variants={cardVariants}
        >
          <Card className="flex items-end">
            <Headliner />
          </Card>
        </motion.section>

        <motion.section
          layout
          initial={{ scale: 1.25 }}
          animate={{ scale: startScale ? 1 : 1.25 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="lg:col-span-2 lg:row-span-4 lg:order-5"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <Card className="relative aspect-[1/1]">
            <Image
              src="/me.png"
              alt="My Portrait"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              priority
              className="object-cover filter grayscale-20 scale-110 hover:scale-115 translate-y-[-5%] transition-transform duration-1300 delay-300 select-none dark:opacity-75"
            />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="about-me"
          className="lg:col-span-5 lg:row-span-4 lg:order-4"
          variants={cardVariants}
        >
          <Card>
            <About />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="projects-portfolio"
          className="lg:col-span-5 lg:row-span-7 lg:order-3"
          variants={cardVariants}
        >
          <Card>
            <Projects />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="techstack"
          className="lg:col-span-6 lg:row-span-5 lg:order-8"
          variants={cardVariants}
        >
          <Card>
            <TechStack />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="social-links"
          className="lg:col-span-1 lg:row-span-5 lg:order-6"
          variants={cardVariants}
        >
          <Card>
            <Links />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="contact-me"
          className="lg:col-span-5 lg:row-span-5 lg:order-7"
          variants={cardVariants}
        >
          <Card>
            <Contact />
          </Card>
        </motion.section>
      </motion.div>
    </>
  );
};
