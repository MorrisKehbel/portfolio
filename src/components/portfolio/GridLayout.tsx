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
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-12 2xl:grid-rows-12 mx-auto p-2"
        variants={containerVariants}
        initial="hidden"
        animate={showAll ? "visible" : "hidden"}
      >
        <motion.section
          aria-labelledby="settings"
          className="2xl:col-span-1 2xl:row-span-3 md:col-span-2 md:order-2 xl:order-2 xl:col-span-1"
          variants={cardVariants}
        >
          <Card>
            <Settings />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="headline"
          className="2xl:col-span-6 2xl:row-span-3 md:col-span-2 md:order-1 xl:order-1 xl:col-span-3"
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
          className="2xl:col-span-2 2xl:row-span-4 md:col-span-1 md:order-4 xl:order-5 xl:col-span-1 2xl:order-5"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <Card className="relative aspect-[1/1]">
            <Image
              src="/me.png"
              alt="My Portrait"
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 50vw, 16vw"
              priority
              className="object-cover filter grayscale-20 scale-110 hover:scale-115 translate-y-[-5%] transition-transform duration-1300 delay-300 select-none dark:opacity-85"
            />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="about-me"
          className="2xl:col-span-5 2xl:row-span-4 md:col-span-1 md:order-3 xl:order-4 xl:col-span-2"
          variants={cardVariants}
        >
          <Card>
            <About />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="projects-portfolio"
          className="2xl:col-span-5 2xl:row-span-7 md:order-5 md:col-span-2 xl:col-span-2 2xl:order-3"
          variants={cardVariants}
        >
          <Card>
            <Projects />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="techstack"
          className="2xl:col-span-6 2xl:row-span-5 md:order-6 md:col-span-2 xl:col-span-2 2xl:order-8"
          variants={cardVariants}
        >
          <Card>
            <TechStack />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="social-links"
          className="2xl:col-span-1 2xl:row-span-5 md:order-7 md:col-span-2 xl:col-span-1 xl:order-3 2xl:order-6"
          variants={cardVariants}
        >
          <Card>
            <Links />
          </Card>
        </motion.section>

        <motion.section
          aria-labelledby="contact-me"
          className="2xl:col-span-5 2xl:row-span-5 md:order-8 md:col-span-2 xl:col-span-4 2xl:order-7"
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
